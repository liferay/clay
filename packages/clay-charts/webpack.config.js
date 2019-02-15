/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, './demo/App.js'),
	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				test: /\.js$/,
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [new HWP({template: path.join(__dirname, './demo/index.html')})],
};
