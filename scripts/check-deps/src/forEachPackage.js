/* eslint no-for-of-loops/no-for-of-loops: 0 */

/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs');
const {promisify} = require('util');
const getPackageConfig = require('./getPackageConfig');

const readdirAsync = promisify(fs.readdir);

/**
 * Execute `callback` in the context of each package in the monorepo.
 *
 * `callback` will be invoked with the package name and its config (as read from
 * the "package.json" file).
 */
async function forEachPackage(callback, whitelistSet = new Set([])) {
	const packages = await readdirAsync('packages', {withFileTypes: true});
	for (const pkg of packages) {
		const name = pkg.name.toString();
		if (pkg.isDirectory() && !whitelistSet.has(name)) {
			const config = getPackageConfig(name);
			await callback(name, config);
		}
	}
}

module.exports = forEachPackage;
