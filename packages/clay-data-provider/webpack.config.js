const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayDataProvider.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-data-provider.js',
	}),
});