const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayCollapse.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-collapse.js',
	}),
});
