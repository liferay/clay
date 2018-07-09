const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/all/card.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-card.js',
	}),
});
