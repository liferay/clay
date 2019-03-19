/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	devServer: {
		contentBase: [path.resolve('../../')],
	},
	entry: path.join(__dirname, 'demos/App.tsx'),
	module: {
		rules: [
			{loader: 'awesome-typescript-loader', test: /\.tsx?$/},
			{enforce: 'pre', loader: 'source-map-loader', test: /\.js$/},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './demos/index.html'),
		}),
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
};
