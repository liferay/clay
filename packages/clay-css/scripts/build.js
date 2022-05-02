/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

const fs = require('fs');
const {JSDOM} = require('jsdom');
const path = require('path');
const sass = require('sass');
const {optimize} = require('svgo');

const OUTPUT_DIRECTORY = path.resolve('./lib');

const HEADER_REGEXP = /<!--(.*)-->/s;
const CSS_OUTPUT_DIRECTORY = path.join(OUTPUT_DIRECTORY, 'css');
const ICONS_DIRECTORY = path.resolve('./src/images/icons');
const ICONS_OUTPUT_FILEPATH = path.join(
	OUTPUT_DIRECTORY,
	'images/icons/icons.svg'
);
const SASS_SOURCE_DIRECTORY = path.resolve('src/scss');

const REGEX_FLAGS = /^flags-/;

function copyRecursiveSync(sourcePath, destinationPath) {
	const exists = fs.existsSync(sourcePath);
	const stats = exists && fs.statSync(sourcePath);
	const isDirectory = exists && stats.isDirectory();

	if (isDirectory) {
		if (
			!fs.existsSync(destinationPath) ||
			!fs.statSync(destinationPath).isDirectory()
		) {
			fs.mkdirSync(destinationPath, {recursive: true});
		}

		fs.readdirSync(sourcePath).forEach((childItemName) => {
			copyRecursiveSync(
				path.join(sourcePath, childItemName),
				path.join(destinationPath, childItemName)
			);
		});
	} else {
		fs.copyFileSync(sourcePath, destinationPath);
	}
}

function ensureDirectory(directoryPath) {
	return new Promise((resolve, reject) => {
		fs.stat(directoryPath, (error) => {
			if (error) {
				if (error.code === 'ENOENT') {
					fs.mkdir(directoryPath, {recursive: true}, (error) => {
						if (error) {
							reject(error);
						} else {
							resolve(directoryPath);
						}
					});
				} else {
					reject(error);
				}
			}

			resolve(directoryPath);
		});
	});
}

/**
 * This method will look at all svg icons and create a new svg file containing
 * a graphical model object and so that it can be instantiated by a `<use>`
 * element.
 */
async function buildIconsSvg(filesPath) {
	await ensureDirectory(path.dirname(ICONS_OUTPUT_FILEPATH));

	const fileWritable = fs.createWriteStream(ICONS_OUTPUT_FILEPATH);

	// Writes the file header in the stream.
	fileWritable.write(
		'<?xml version="1.0" encoding="UTF-8"?>' +
			'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">' +
			'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
	);

	await Promise.all(
		filesPath.map(async (file) => {
			const fileName = path
				.basename(file, '.svg')
				.toLowerCase()
				.replace(REGEX_FLAGS, '');

			const data = await fs.promises.readFile(
				`${ICONS_DIRECTORY}${path.sep}${file}`,
				'utf8'
			);

			fileWritable.write(
				data
					.replace(HEADER_REGEXP, '')
					.replace(/<svg/gm, '<symbol')
					.replace(
						/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/gm,
						`id="${fileName}"`
					)
					.replace(/<\/svg/gm, '</symbol')
					.replace(/\n/gm, '')
					.replace(/\t/gm, '')
			);
		})
	);

	// Close the writable stream by adding the chunk at the end and wait for
	// the stream to terminate with error or success.
	await new Promise((resolve, reject) =>
		fileWritable.end('</svg>', (error) => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		})
	);
}

/**
 * This method will map all icons to a sass variable.
 */
async function buildScssIcons(filesPath) {
	const iconsScss = path.join(
		SASS_SOURCE_DIRECTORY,
		'functions/_lx-icons-generated.scss'
	);

	const sourceIconsScss = await fs.promises.readFile(iconsScss, 'utf8');

	const fileWritable = fs.createWriteStream(iconsScss);

	const startTag = sourceIconsScss.indexOf('$lx-icons: (');
	const endTag = sourceIconsScss.indexOf(');');

	// Writes the source file header to the stream.
	fileWritable.write(`${sourceIconsScss.slice(0, startTag)}$lx-icons: (\n\n`);

	filesPath.sort();

	for (const file of filesPath) {
		const data = await fs.promises.readFile(
			`${ICONS_DIRECTORY}${path.sep}${file}`,
			'utf8'
		);

		const dom = new JSDOM(data, {
			contentType: 'image/svg+xml',
		});

		if (!REGEX_FLAGS.test(file)) {
			dom.window.document
				.querySelectorAll('[fill]:not([fill=none])')
				.forEach((node) => {
					node.removeAttribute('fill');
				});

			dom.window.document
				.querySelectorAll('[stroke]:not([stroke=none])')
				.forEach((node) => {
					node.removeAttribute('stroke');
				});

			dom.window.document
				.querySelectorAll('.lexicon-icon-outline')
				.forEach((node) => {
					node.setAttribute('fill', '#{$color}');
				});

			dom.window.document.querySelectorAll('[stroke]').forEach((node) => {
				node.setAttribute('stroke', '#{$color}');
			});
		}

		const filePath = file.replace(REGEX_FLAGS, '');

		const svgMinified = optimize(dom.serialize(), {
			path: filePath,
			plugins: [
				{
					name: 'preset-default',
					params: {
						overrides: {
							moveElemsAttrsToGroup: false,
						},
					},
				},
			],
		});

		const index = filesPath.findIndex((filePath) => filePath === file);

		await new Promise((resolve, reject) =>
			fileWritable.write(
				`	'${path.basename(filePath, '.svg').toLowerCase()}': '${
					svgMinified.data
				}'${index === filesPath.length - 1 ? '' : ','}\n\n`,
				(error) => {
					if (error) {
						reject(error);
					} else {
						resolve();
					}
				}
			)
		);
	}

	// Close the writable stream by adding the final chunk of the source file
	// and wait for the stream to finish.
	await new Promise((resolve, reject) =>
		fileWritable.end(`	${sourceIconsScss.slice(endTag)}`, (error) => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		})
	);
}

async function build() {
	const licenseText = path.join('.', 'src', 'scss', '_license-text.scss');

	fs.readFile(licenseText, 'utf8', (error, data) => {
		if (error) {
			return console.error(error);
		}

		var result = data.replace(
			/\*\s+Clay\s(.+)\n/g,
			`* Clay ${
				JSON.parse(fs.readFileSync(path.join('.', 'package.json')))
					.version
			}\n`
		);

		fs.writeFile(licenseText, result, 'utf8', (error) => {
			if (error) {
				return console.error(error);
			}
		});
	});

	await ensureDirectory(OUTPUT_DIRECTORY);

	copyRecursiveSync(
		path.resolve('./src/js'),
		path.join(OUTPUT_DIRECTORY, 'js')
	);
	copyRecursiveSync(
		path.resolve('./src/images/icons'),
		path.join(OUTPUT_DIRECTORY, 'images/icons')
	);
	copyRecursiveSync(
		path.join('..', '..', 'LICENSES'),
		path.resolve('./LICENSES')
	);

	const filesPath = await fs.promises.readdir(ICONS_DIRECTORY);

	const svgFiles = filesPath.filter((file) => path.extname(file) === '.svg');

	await buildIconsSvg(svgFiles);
	await buildScssIcons(svgFiles);

	const fileNames = [
		'atlas.scss',
		'bootstrap.scss',
		'base.scss',
		'cadmin.scss',
	];

	await ensureDirectory(CSS_OUTPUT_DIRECTORY);

	fileNames.forEach((fileName) => {
		const destinationName = `${path.basename(fileName, '.scss')}.css`;
		const destinationPath = path.join(
			CSS_OUTPUT_DIRECTORY,
			destinationName
		);

		const results = sass.renderSync({
			file: path.join(SASS_SOURCE_DIRECTORY, fileName),
			outFile: `./${destinationName}`,
			sourceMap: true,
			sourceMapContents: true,
			sourceMapRoot: '../../',
		});

		fs.writeFileSync(destinationPath, results.css);
		fs.writeFileSync(`${destinationPath}.map`, results.map);
	});
}

build()
	.then(() => {
		// eslint-disable-next-line no-console
		console.log('Build successful');
	})
	.catch((error) => {
		// eslint-disable-next-line no-console
		console.log('Build error:\n', error);
		process.exit(1);
	});
