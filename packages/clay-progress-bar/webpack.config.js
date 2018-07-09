const webpackCommonConfig = require('clay-config').webpackCommonConfig;

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayProgressBar.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-progress-bar.js',
	}),
});
