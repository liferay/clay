const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/all/dropdown.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-dropdown.js',
	}),
});
