const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayLabelsInputField.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-labels-input-field.js',
	}),
});
