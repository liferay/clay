/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
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
					test: /clay-tooltip|metal-clipboard/,
				},
			],
		};
	}

	actions.setWebpackConfig({
		module,
		resolve: {
			alias: {
				$components: path.resolve(__dirname, '../src/components'),
			},
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		},
	});
};
