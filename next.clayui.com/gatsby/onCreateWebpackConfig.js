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
					test: /clay-tooltip|metal-clipboard/,
					loader: 'null-loader',
				},
			],
		};
	}

	actions.setWebpackConfig({
		module,
		resolve: {
			modules: [path.resolve(__dirname, 'src'), 'node_modules'],
			alias: {
				$components: path.resolve(__dirname, '../src/components'),
			},
		},
	});
};
