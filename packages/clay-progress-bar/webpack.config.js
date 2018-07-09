const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayProgressBar.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-progress-bar.js',
	}),
});
