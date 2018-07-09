const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayPortal.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-portal.js',
	}),
});
