/* eslint no-for-of-loops/no-for-of-loops: 0 */

/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * Checks built packages prior to publishing to make sure their dependencies are
 * correctly declared in their package.json files.
 * Reference: https://github.com/wincent/js
 */

const {readFile, readdir} = require('fs');
const {basename, extname, join} = require('path');
const {promisify} = require('util');
const {parse} = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const semver = require('semver');
const forEachPackage = require('./src/forEachPackage');
const main = require('./src/main');
const print = require('./src/print');

const readdirAsync = promisify(readdir);
const readFileAsync = promisify(readFile);

async function* walk(directory, predicate = () => true) {
	const entries = await readdirAsync(directory, {withFileTypes: true});
	for (const entry of entries) {
		if (entry.isDirectory()) {
			for await (const nested of walk(
				join(directory, entry.name.toString()),
				predicate
			)) {
				yield nested;
			}
		} else if (predicate(entry)) {
			yield join(directory, entry.name.toString());
		}
	}
}

function isSourceFile(entry) {
	return ['.js', '.mjs'].includes(extname(entry.name.toString()));
}

async function forEachSourceFile(name, callback) {
	const directory = join('packages', name, 'lib');
	await walk(directory, isSourceFile, callback);
}

/**
 * Extracts a dependency name from a require target such as:
 *
 *   @babel/runtime-corejs2/core-js/set
 *   ^^^^^^^^^^^^^^^^^^^^^^
 *
 * or:
 *
 *   react-dom/server
 *   ^^^^^^^^^
 *
 * but not:
 *
 *   ./foo
 *
 * or:
 *
 *   ../bar
 *
 */
function extractDependencyName(moduleName) {
	const match = moduleName.match(/^(@[^/]+\/[^/]+|[^.][^/]*)/);
	return match ? match[0] : null;
}

/**
 * Dependencies that don't need to be explicited recorded because they are
 * implicit. Basically, that means NodeJS built-in modules.
 */
const BUILT_IN_DEPENDENCY_WHITELIST = new Set(['child_process', 'fs', 'path']);

function recordDependency(moduleName, modules) {
	const dependency = extractDependencyName(moduleName);
	if (dependency && !BUILT_IN_DEPENDENCY_WHITELIST.has(dependency)) {
		modules.add(dependency);
	}
}

function getDependencies(config) {
	return [
		...Object.entries(config.dependencies || {}),
		...Object.entries(config.devDependencies || {}),
		...Object.entries(config.peerDependencies || {}),
	];
}

const WORKSPACE_PACKAGES_WHITELIST = new Set([
	'browserslist-config-clay',
	'clay-css',
	'demos',
	'generator-clay-component',
]);

/**
 * Make sure built code explcitly declares its dependencies.
 */
async function checkForMissingDependencies() {
	print.line.yellow('Checking for undeclared package dependencies:\n');
	const missing = {};

	await forEachPackage(async (name, config) => {
		const modules = new Set();

		print(basename(`  ${name}: `));

		await forEachSourceFile(name, async source => {
			const contents = await readFileAsync(source);
			const ast = parse(contents.toString(), {
				plugins: ['flow'],
				sourceType: 'unambiguous',
			});
			traverse(ast, {
				CallExpression(path) {
					const callee = path.get('callee');
					if (callee.isIdentifier({name: 'require'})) {
						const args = path.get('arguments');
						if (args.length && args[0].isStringLiteral()) {
							recordDependency(args[0].node.value, modules);
						}
					}
				},
				ImportDeclaration(path) {
					// `importKind` may be "value" or "type".
					if (path.get('importKind').node === 'value') {
						const source = path.get('source');
						if (source.isStringLiteral()) {
							recordDependency(source.node.value, modules);
						}
					}
				},
			});
		});

		const dependencies = new Set([
			...Object.keys(config.dependencies || {}),
			...Object.keys(config.peerDependencies || {}),
		]);
		for (const moduleName of modules) {
			if (!dependencies.has(moduleName)) {
				if (!missing[name]) {
					missing[name] = [];
				}
				missing[name].push(moduleName);
			}
		}

		if (missing[name] && missing[name].length) {
			print.line.red('MISSING');
			missing[name].forEach(dependency =>
				print.line(`    ${dependency}`)
			);
		} else {
			print.line.green('OK');
		}
	}, WORKSPACE_PACKAGES_WHITELIST);

	print();
	const success = Object.keys(missing).length === 0;
	if (!success) {
		print.line.red('Add missing dependencies with:\n');
		Object.entries(missing).forEach(([name, dependencies]) => {
			print.line.red(
				`(cd packages/${name} && yarn add ${dependencies.join(' ')})`
			);
		});
		print();
	}
	return success;
}

/**
 * Make sure packages require identical versions of common dependencies.
 */
async function checkForMismatchedDependencyVersions() {
	print.line.yellow('Checking for mismatched dependency versions:\n');
	const registry = {};

	let success = true;
	await forEachPackage((name, config) => {
		const dependencies = getDependencies(config);
		dependencies.forEach(([dependency, version]) => {
			if (!registry[dependency]) {
				registry[dependency] = {};
			}
			if (!registry[dependency][version]) {
				registry[dependency][version] = new Set();
			}
			recordDependency(name, registry[dependency][version]);
		});
	}, WORKSPACE_PACKAGES_WHITELIST);

	for (const [dependency, versions] of Object.entries(registry)) {
		print(`  ${dependency}:  `);
		if (Object.keys(versions).length === 1) {
			print.line.green('OK');
		} else {
			success = false;
			print.line.red('BAD');
			for (const [version, dependees] of Object.entries(versions)) {
				for (const dependee of dependees) {
					print.line.red(`    ${dependee} -> ${version}`);
				}
			}
		}
	}

	print();
	return success;
}

/**
 * List of DevDependencies to be ignored when checking for devDepenencies on each package.
 */
const DEV_DEPENDENCY_WHITELIST = new Set([]);

/**
 * Make sure devDependencies are only declared at the repository root.
 */
async function checkForDevelopmentDependencies() {
	print.line.yellow(
		'Checking for development dependencies in individual packages:\n'
	);
	let success = true;
	await forEachPackage((name, config) => {
		print(`  ${name}: `);
		const devDependencies = Object.keys(
			config.devDependencies || {}
		).filter(dependency => !DEV_DEPENDENCY_WHITELIST.has(dependency));
		if (devDependencies.length) {
			success = false;
			print.line.red('BAD');
			devDependencies.forEach(dependency => {
				print.line(`    ${dependency}`);
			});
		} else {
			print.line.green('OK');
		}
	}, WORKSPACE_PACKAGES_WHITELIST);

	print();
	if (!success) {
		print.line.red(
			'These dependencies should be migrated to the root-level package.json'
		);
		print();
	}

	return success;
}

/**
 * Make sure internal dependencies always use the current (latest) versions.
 */
async function checkForNonCurrentInternalDependencies() {
	print.line.yellow('Checking for non-current internal dependencies:\n');
	const packages = {};
	await forEachPackage((name, config) => {
		const dependencies = getDependencies(config);
		packages[name] = {
			dependencies,
			version: config.version,
		};
	}, WORKSPACE_PACKAGES_WHITELIST);

	const internalPackagePrefix = '@clayui/';
	let success = true;

	Object.entries(packages).forEach(([name, {dependencies}]) => {
		print(`  ${name}: `);
		const outdated = [];
		dependencies.forEach(([dependency, version]) => {
			const name = extractDependencyName(dependency);
			if (name && name.startsWith(internalPackagePrefix)) {
				let suffix = name.slice(internalPackagePrefix.length);
				if (!packages.hasOwnProperty(suffix)) {
					suffix = `clay-${suffix}`;
				}
				if (
					packages.hasOwnProperty(suffix) &&
					!semver.satisfies(packages[suffix].version, version)
				) {
					outdated.push([suffix, version, packages[suffix].version]);
				}
			}
		});
		if (outdated.length) {
			success = false;
			print.line.red('BAD');
			for (const [dependency, actual, desired] of outdated) {
				print.line.red(`    ${dependency}: ${actual} != ${desired}`);
			}
		} else {
			print.line.green('OK');
		}
	});

	print();
	return success;
}

main(async () => {
	let success = await checkForMissingDependencies();
	success &= await checkForMismatchedDependencyVersions();
	success &= await checkForDevelopmentDependencies();
	success &= await checkForNonCurrentInternalDependencies();
	return !!success;
});
