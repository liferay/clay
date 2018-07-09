const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayCheckbox.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-checkbox.js',
	}),
});
