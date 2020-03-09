/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs');
const Bundler = require('parcel-bundler');
const path = require('path');
const zlib = require('zlib');

const processMarkdownTable = require('./processMarkdownTable');

const CLI_ARGS = process.argv.slice(2);

const WORKSPACE_PACKAGES_WHITELIST = [
	'browserslist-config-clay',
	'demos',
	'generator-clay-component',
];

function main() {
	const packages = fs.readdirSync('packages', {withFileTypes: true});

	const entryFiles = packages
		.filter(({name}) => !WORKSPACE_PACKAGES_WHITELIST.includes(name))
		.map(({name}) => {
			return path.join(
				__dirname,
				'../../packages/',
				name,
				'lib/(index.js)'
			);
		});

	const bundler = new Bundler(entryFiles, {
		cacheDir: '.parcel-cache',
		outDir: '.parcel-ci-builds',
		sourceMaps: false,
		watch: false,
	});

	bundler.on('bundled', () => {
		const bundles = fs.readdirSync('.parcel-ci-builds', {
			withFileTypes: true,
		});

		const bundleData = {};

		bundles.map(({name}) => {
			bundleData[name] = zlib.gzipSync(
				fs.readFileSync(
					path.join(
						__dirname,
						'../../.parcel-ci-builds/',
						name,
						'lib/index.js'
					)
				)
			).length;
		});

		if (CLI_ARGS.includes('--compare')) {
			// eslint-disable-next-line liferay/no-dynamic-require
			const prevStats = require(path.join(
				__dirname,
				// Path comes from GH action artifact download
				'../../base-stats/.parcel-ci-build.json'
			));

			const newStats = bundleData;

			fs.writeFileSync(
				path.join(__dirname, '../../.parcel-ci-build.json'),
				JSON.stringify({
					body: processMarkdownTable(prevStats, newStats),
				})
			);
		} else {
			fs.writeFileSync(
				path.join(__dirname, '../../.parcel-ci-build.json'),
				JSON.stringify(bundleData)
			);
		}
	});

	bundler.bundle();
}

main();
