/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

module.exports = api => {
	api.cache(true);

	return {
		env: {
			production: {
				plugins: [
					[
						'react-remove-properties',
						{
							properties: ['data-testid'],
						},
					],
				],
			},
		},
		ignore: ['node_modules', '**/__snapshots__/**', '**/__tests__/**'],
		plugins: [
			'babel-plugin-dev-expression',
			'transform-inline-environment-variables',
		],
		presets: [
			'@babel/env',
			'@babel/preset-react',
			'@babel/preset-typescript',
		],
		sourceMaps: true,
	};
};
