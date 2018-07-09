const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClaySticker.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-sticker.js',
	}),
});
