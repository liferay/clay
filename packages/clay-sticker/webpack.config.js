const webpackCommonConfig = require('clay-config').webpackCommonConfig;

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClaySticker.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-sticker.js',
	}),
});
