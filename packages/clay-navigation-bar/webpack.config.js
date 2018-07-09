const webpackCommonConfig = require('clay-config').webpackCommonConfig;

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayNavigationBar.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-navigation-bar.js',
	}),
});
