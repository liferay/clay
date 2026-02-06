/**
 * SPDX-FileCopyrightText: (c) 2025 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

/* eslint-env node */

const path = require('path');

const srcDir = path.join(__dirname, 'src');

module.exports = {
	buildDir: path.join(__dirname, 'lib'),
	includePaths: [path.join(srcDir, 'scss')],
	libDir: path.join(__dirname, 'lib'),
	srcDir,
};
