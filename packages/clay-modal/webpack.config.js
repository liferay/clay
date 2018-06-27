const webpackCommonConfig = require('clay-config').webpackCommonConfig;

module.exports = Object.assign(webpackCommonConfig, {
	entry: './src/ClayModal.js',
	output: Object.assign(webpackCommonConfig.output, {
		filename: './build/globals/clay-modal.js',
	}),
});
