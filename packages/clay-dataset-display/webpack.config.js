const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/ClayDatasetDisplay.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						compact: false,
						presets: ['babel-preset-env'],
						plugins: ['babel-plugin-transform-node-env-inline'],
					},
				},
			},
		],
	},
	output: {
		library: 'metal',
		libraryTarget: 'this',
		filename: './build/globals/clay-dataset-display.js',
	},
	plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
	resolve: {
		mainFields: ['esnext:main', 'main'],
	},
};
