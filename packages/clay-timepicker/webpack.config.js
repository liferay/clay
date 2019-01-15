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
	devtool: 'eval-source-map',
	resolve: {
		mainFields: ['browser', 'esnext:main', 'main'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(__dirname, './demos/index.html'),
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
