/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const path = require('path');

module.exports = ({actions, stage}) => {
	let module = {};

	if (stage === 'build-html') {
		module = {
			rules: [
				{
					loader: 'null-loader',
					test: /@clayui\/tooltip|clipboard/,
				},
			],
		};
	}

	actions.setWebpackConfig({
		module,
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
