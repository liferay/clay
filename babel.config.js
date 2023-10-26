/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

module.exports = (api) => {
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
			[
				'@babel/preset-env',
				{
					exclude: ['transform-regenerator'],
					targets: [
						'last 2 Chrome versions',
						'last 1 Edge versions',
						'last 2 Firefox versions',
						'last 1 Opera versions',
						'last 2 Safari versions',
						'last 1 ChromeAndroid versions',
						'last 2 iOS versions',
						'Firefox 52',
						'IE 11',
					],
				},
			],
			'@babel/preset-react',
			'@babel/preset-typescript',
		],
		sourceMaps: true,
	};
};
