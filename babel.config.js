/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

module.exports = api => {
	api.cache(true);

	return {
		presets: [
			'@babel/env',
			'@babel/preset-react',
			'@babel/preset-typescript',
		],
		ignore: ['node_modules', '**/__snapshots__/**', '**/__tests__/**'],
		sourceMaps: true,
	};
};
