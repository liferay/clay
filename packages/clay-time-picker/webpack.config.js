const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './demos/App.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
					compact: false,
					presets: [
						'babel-preset-env',
						'babel-preset-react',
					],
				},
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	devtool: 'cheap-module-source-map',
	devServer: {
		contentBase: [path.resolve('../../')],
	},
	resolve: {
		mainFields: ['browser', 'esnext:main', 'main'],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: './globals/clay-time-picker.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, './demos/index.html'),
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
