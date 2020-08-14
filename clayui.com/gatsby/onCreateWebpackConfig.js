/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const path = require('path');
const webpack = require('webpack');

module.exports = ({actions, stage}) => {
	let module = {
		rules: [
			{
				loader: 'strip-loader?strip[]=debug',
				// strip `debug()` calls
				test: /\.js$/,
			},
		],
	};

	if (stage === 'build-html') {
		module = {
			rules: [
				...module.rules,
				{
					loader: 'null-loader',
					test: /@clayui\/tooltip|clipboard/,
				},
			],
		};
	}

	actions.setWebpackConfig({
		module,
		plugins: [
			// replace require('debug')() with an noop function
			new webpack.NormalModuleReplacementPlugin(
				/debug/,
				`${process.cwd()}/gatsby/noop.js`
			),
		],
		resolve: {
			alias: {
				'$clayui.com': path.resolve(__dirname, '..'),
				$components: path.resolve(__dirname, '../src/components'),
				$packages: path.resolve(__dirname, '../../packages'),
			},
			mainFields: ['ts:main', 'module', 'main'],
		},
	});
};
