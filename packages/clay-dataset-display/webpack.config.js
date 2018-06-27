const webpackCommonConfig = require('clay-config').webpackCommonConfig;

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayDatasetDisplay.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-dataset-display.js',
	}),
});
