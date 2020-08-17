/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

// Compiles SVG icons in directory `clay-css/src/images/icons` into a spritemap

const fs = require('fs');
const path = require('path');

const generateSvgSprite = (pluginOptions) => {
	const REGEX_FILE_EXT_SVG = /(?:flags-|\.svg$)/g;
	const REGEX_HTML_COMMENTS = /<!--(?:.+?)-->\n?/gs;
	const REGEX_SVG_VIEWBOX = /\bviewBox="[^"]+"/g;
	const REGEX_SVG_TAG = /(?:<\/svg|<svg[^>]+)>(?:\n|)/g;

	const filesArr = fs.readdirSync(pluginOptions.srcDir);

	let strSprite = `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`;

	filesArr.forEach((file) => {
		let icon = fs
			.readFileSync(path.join(pluginOptions.srcDir, file), 'utf8')
			.toString();

		const id = file.replace(REGEX_FILE_EXT_SVG, '').toLowerCase();

		const viewBox = icon.match(REGEX_SVG_VIEWBOX);

		try {
			if (!viewBox) {
				throw `Viewbox attribute not found for icon: ${id}`;
			}
		} catch (err) {
			console.warn(err);
		}

		const symbol = `<symbol id="${id}" ${viewBox}>`;

		icon = icon.replace(REGEX_HTML_COMMENTS, '');
		icon = icon.replace(REGEX_SVG_TAG, '');

		strSprite += `${symbol}${icon}</symbol>`;
	});

	strSprite += '</svg>';

	fs.writeFileSync(
		path.join(pluginOptions.outputDir, pluginOptions.outputFile),
		strSprite
	);
};

exports.onPostBootstrap = ({reporter}, pluginOptions) => {
	generateSvgSprite(pluginOptions);

	reporter.info(`Compiling icons.svg finished`);

	if (process.env.NODE_ENV === 'development') {
		const watcher = require('chokidar').watch(pluginOptions.srcDir);

		watcher.on(`change`, () => {
			generateSvgSprite(pluginOptions);

			reporter.info(`Compiling icons.svg finished: Refresh the page!`);
		});
	}
};
