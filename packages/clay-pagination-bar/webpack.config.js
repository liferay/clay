const webpackCommonConfig = require('clay-config').webpackCommonConfig;

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayPaginationBar.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-pagination-bar.js',
	}),
});
