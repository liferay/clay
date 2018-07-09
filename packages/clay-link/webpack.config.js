const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayLink.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-link.js',
	}),
});
