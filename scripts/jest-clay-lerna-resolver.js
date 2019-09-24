/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';
const resolve = require('resolve');

module.exports = function(file, data) {
	if (file.indexOf('clay-') === 0 || file.indexOf('@clayui') === 0) {
		data.packageFilter = function(pkg) {
			return {main: pkg['ts:main']};
		};
	}

	return resolve.sync(file, data);
};
