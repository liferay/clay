/**
 * SPDX-FileCopyrightText: (c) 2019 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

module.exports = (api) => {
	api.cache(true);

	return {
		env: {
			esm: {
				plugins: [
					[
						'react-remove-properties',
						{
							properties: ['data-testid'],
						},
					],
					'babel-plugin-fully-specified',
				],
				presets: [
					[
						'@babel/preset-env',
						{
							exclude: ['transform-regenerator'],
							modules: false,
							targets: ['defaults'],
						},
					],
				],
			},
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
					targets: ['defaults'],
				},
			],
			'@babel/preset-react',
			'@babel/preset-typescript',
		],
		sourceMaps: true,
	};
};
