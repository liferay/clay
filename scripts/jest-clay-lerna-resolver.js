/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

'use strict';

const resolve = require('resolve');

module.exports = function (file, data) {
	if (file.indexOf('clay-') === 0 || file.indexOf('@clayui') === 0) {
		data.packageFilter = function (pkg) {
			return {main: pkg['ts:main']};
		};
	}

	return resolve.sync(file, data);
};
