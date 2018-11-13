const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayLoadingIndicator.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-loading-indicator.js',
	}),
});
