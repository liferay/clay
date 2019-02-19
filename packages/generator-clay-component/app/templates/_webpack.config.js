/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, './demo/App.tsx'),
	module: {
		rules: [
			{loader: 'awesome-typescript-loader', test: /\.tsx?$/,},
			{enforce: 'pre', loader: 'source-map-loader', test: /\.js$/,},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader',],
			},
		],
	},
	plugins: [new HWP({template: path.join(__dirname, './demo/index.html'),}),],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json',],
	},
};