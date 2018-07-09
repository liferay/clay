const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayNavigationBar.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-navigation-bar.js',
	}),
});
