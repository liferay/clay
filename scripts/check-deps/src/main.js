/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

const print = require('./print');

process.on('unhandledRejection', (error) => {
	print.line(`\nerror: ${error.message}`);
	process.exit(1);
});

async function main(callback) {
	const status = await callback();
	if (typeof status === 'number') {
		process.exit(status);
	}
	else if (status == null) {
		process.exit(0);
	}
	else {
		process.exit(status ? 0 : 1);
	}
}

module.exports = main;
