/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const {join, resolve} = require('path');

function getPackageConfig(name) {
	return require(resolve(join('packages', name, 'package.json')));
}

module.exports = getPackageConfig;
