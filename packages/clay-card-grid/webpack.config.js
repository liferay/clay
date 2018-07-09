const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayCardGrid.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-card-grid.js',
	}),
});
