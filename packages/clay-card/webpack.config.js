const webpackCommonConfig = require('clay-config').webpackCommonConfig;

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/all/card.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-card.js',
	}),
});
