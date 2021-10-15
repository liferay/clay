/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

const fs = require('fs');
const path = require('path');
const sass = require('sass');

const OUTPUT_DIRECTORY = path.resolve('./lib');

const HEADER_REGEXP = /<!--(.*)-->/s;
const CSS_OUTPUT_DIRECTORY = path.join(OUTPUT_DIRECTORY, 'css');
const ICONS_DIRECTORY = path.resolve('./src/images/icons');
const ICONS_OUTPUT_FILEPATH = path.join(
	OUTPUT_DIRECTORY,
	'images/icons/icons.svg'
);
const SASS_SOURCE_DIRECTORY = path.resolve('src/scss');

function copyRecursiveSync(sourcePath, destinationPath) {
	const exists = fs.existsSync(sourcePath);
	const stats = exists && fs.statSync(sourcePath);
	const isDirectory = exists && stats.isDirectory();

	if (isDirectory) {
		if (!fs.existsSync(destinationPath) || !fs.statSync(destinationPath).isDirectory()) {
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
async function buildIconsSvg() {
	const files = await fs.promises.readdir(ICONS_DIRECTORY);

	await ensureDirectory(path.dirname(ICONS_OUTPUT_FILEPATH));

	const fileWritable = fs.createWriteStream(ICONS_OUTPUT_FILEPATH);

	// Writes the file header in the stream.
	fileWritable.write(
		'<?xml version="1.0" encoding="UTF-8"?>'
		+ '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'
		+ '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'
	);

	await Promise.all(files.map(async (file) => {
		if (path.extname(file) !== '.svg') {
			return;
		}

		const fileName = path.basename(file, '.svg');

		const data = await fs.promises.readFile(`${ICONS_DIRECTORY}${path.sep}${file}`, 'utf8');

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
	}));

	// Close the writable stream by adding the chunk at the end and wait for
	// the stream to terminate with error or success.
	await new Promise((resolve, reject) => fileWritable.end('</svg>', (error) => {
		if (error) {
			reject(error);
		} else {
			resolve();
		}
	}));
}

async function build() {
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

	const fileNames = ['atlas.scss', 'bootstrap.scss', 'base.scss'];

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

	await buildIconsSvg();
}

build()
	.then(() => {
		console.log('Build successful');
	})
	.catch((error) => {
		console.log('Build error:\n', error);
		process.exit(1);
	});
