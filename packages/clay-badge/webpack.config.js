const webpackCommonConfig = require('clay-config').webpackCommonConfig;

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayBadge.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-badge.js',
	}),
});
