const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayPagination.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-pagination.js',
	}),
});
