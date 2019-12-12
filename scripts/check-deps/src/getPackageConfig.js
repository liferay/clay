/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const {readFile} = require('fs');
const {join, resolve} = require('path');
const {promisify} = require('util');

const readFileAsync = promisify(readFile);

function getPackageConfig(name) {
	return readFileAsync(resolve(join('packages', name, 'package.json')), {
		encoding: 'utf-8',
	});
}

module.exports = getPackageConfig;
