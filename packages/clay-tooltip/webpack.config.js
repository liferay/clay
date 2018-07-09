const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayTooltip.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-tooltip.js',
	}),
});
