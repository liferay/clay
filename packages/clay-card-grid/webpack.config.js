const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/ClayCardGrid.js',
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
	devtool: 'cheap-module-source-map',
	output: {
		library: 'metal',
		libraryTarget: 'this',
		filename: './build/globals/clay-card-grid.js',
	},
	plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
	resolve: {
		mainFields: ['esnext:main', 'main'],
	},
};
