/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const {readFileSync} = require('fs');
const {join, resolve} = require('path');

function getPackageConfig(name) {
	const internalPackagePrefix = '@clayui/';
	if (name && name.startsWith(internalPackagePrefix)) {
		const suffix = name.slice(internalPackagePrefix.length);
		return readFileSync(
			resolve(join('..', 'packages', `clay-${suffix}`, 'package.json')),
			{
				encoding: 'utf-8',
			}
		);
	}
}

module.exports = getPackageConfig;
