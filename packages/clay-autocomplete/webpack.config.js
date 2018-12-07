const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayAutocomplete.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-autocomplete.js',
	}),
});