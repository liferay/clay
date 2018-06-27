const webpackCommonConfig = require('clay-config').webpackCommonConfig;

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/all/dropdown.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-dropdown.js',
	}),
});
