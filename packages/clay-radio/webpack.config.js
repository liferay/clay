const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayRadio.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-radio.js',
	}),
});
