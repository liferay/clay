const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayMultiSelect.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-multi-select.js',
	}),
});
