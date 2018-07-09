const webpackCommonConfig = require('clay-config').webpackCommonConfig;

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/all/alert.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-alert.js',
	}),
});
