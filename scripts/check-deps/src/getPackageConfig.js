/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
