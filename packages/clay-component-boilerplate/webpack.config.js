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
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: [new HWP({template: path.join(__dirname, './demo/index.html')})],
};
