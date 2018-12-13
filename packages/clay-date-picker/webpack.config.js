const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayDatePicker.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-date-picker.js',
	}),
});