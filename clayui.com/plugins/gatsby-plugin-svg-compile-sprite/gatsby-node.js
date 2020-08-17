// Compiles SVG icons in directory `clay-css/src/images/icons` into a spritemap

const clayCSS = require('@clayui/css');
const fs = require('fs');
const path = require('path');

const pluginOptions = {
	outputFile: 'icons.svg',
	outputDir: path.join(__dirname, '..', '..', 'static', 'images', 'icons'),
	srcDir: path.join(clayCSS.srcDir, 'images', 'icons'),
};

const generateSvgSprite = (pluginOptions) => {
	const REGEX_FILE_EXT_SVG = /(flags-|.svg$)/g;
	const REGEX_HTML_COMMENTS = /<!--(.+?)(-->\n|-->)/gs;
	const REGEX_SVG_VIEWBOX = /(\sv|v)iewBox="(.+?)"/g;
	const REGEX_SVG_TAG = /(<\/svg|<svg(.+?))>(\n|)/g;

	const filesArr = fs.readdirSync(pluginOptions.srcDir);

	let strSprite = `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`;

	filesArr.forEach((file, index) => {
		let icon = fs
			.readFileSync(path.join(pluginOptions.srcDir, file), 'utf8')
			.toString();

		const id = file.replace(REGEX_FILE_EXT_SVG, '').toLowerCase();

		const viewBox = icon.match(REGEX_SVG_VIEWBOX);

		const symbol = `<symbol id="${id}"${viewBox}>`;

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

exports.onPostBootstrap = ({reporter}) => {
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
