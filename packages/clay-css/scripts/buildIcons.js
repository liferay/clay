/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

/* eslint-env node */

'use strict';

const fs = require('fs');
const {JSDOM} = require('jsdom');
const path = require('path');
const {optimize} = require('svgo');

const ICONS_DIRECTORY = path.resolve(__dirname, '..', './src/images/icons');
const SASS_SOURCE_DIRECTORY = path.resolve(__dirname, '..', 'src/scss');
const HEADER_REGEXP = /<!--(.*)-->/s;

const REGEX_FLAGS = /^flags-/;

/**
 * This method will look at all svg icons and create a new svg file containing
 * a graphical model object and so that it can be instantiated by a `<use>`
 * element.
 */
async function buildIconsSvg(filesPath) {
	const iconsContent = [];

	// Writes the file header in the stream.

	await Promise.all(
		filesPath.map(async (file) => {
			const fileName = path
				.basename(file, '.svg')
				.toLowerCase()
				.replace(REGEX_FLAGS, '');

			if (fileName === 'icons') {
				return;
			}

			const data = await fs.promises.readFile(
				`${ICONS_DIRECTORY}${path.sep}${file}`,
				'utf8'
			);

			iconsContent.push(
				data
					.replace(HEADER_REGEXP, '')
					.replace(/<svg/gm, `<symbol id="${fileName}"`)
					.replace(/\sxmlns(.+?)"(.+?)"/gm, '')
					.replace(/<\/svg/gm, '</symbol')
					.replace(/\n/gm, '')
					.replace(/\t/gm, '')
			);
		})
	);

	// Close the writable stream by adding the chunk at the end and wait for
	// the stream to terminate with error or success.

	await new Promise((resolve) => {
		const fileContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	${iconsContent.sort().join('\n')}
</svg>`;

		fs.writeFileSync(
			path.join(ICONS_DIRECTORY, 'icons.svg'),
			fileContent,
			'utf8'
		);

		resolve();
	});
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
					}
					else {
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
			}
			else {
				resolve();
			}
		})
	);
}

async function buildIcons() {
	const filesPath = await fs.promises.readdir(ICONS_DIRECTORY);

	const svgFiles = filesPath
		.filter((file) => path.extname(file) === '.svg')
		.filter((file) => !file.endsWith('icons.svg'));

	await buildIconsSvg(svgFiles);

	await buildScssIcons(svgFiles);
}

buildIcons()
	.then(() => {

		// eslint-disable-next-line no-console
		console.log('Build successful');
	})
	.catch((error) => {

		// eslint-disable-next-line no-console
		console.log('Build error:\n', error);
		process.exit(1);
	});
