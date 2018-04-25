const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/clay.js',
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
		library: 'clay',
		libraryTarget: 'this',
		filename: './lib/js/clay.js',
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new UglifyJSPlugin(),
	],
	resolve: {
		mainFields: ['esnext:main', 'main'],
	},
};
