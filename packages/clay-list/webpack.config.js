const webpackCommonConfig = require('clay-config').webpackCommonConfig;

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayList.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-list.js',
	}),
});
