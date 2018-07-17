const webpackCommonConfig = require('webpack-config-clay');

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/<%= componentName %>.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/<%= repoName %>.js',
	}),
});