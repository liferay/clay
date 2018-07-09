const webpackCommonConfig = require('clay-config').webpackCommonConfig;

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClaySelect.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-select.js',
	}),
});
