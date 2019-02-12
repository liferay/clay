/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, './demo/App.tsx'),
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
	},
	module: {
		rules: [
			{test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
			{enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [new HWP({template: path.join(__dirname, './demo/index.html')})],
};
