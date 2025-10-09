/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

var path = require('path');

var srcDir = path.join(__dirname, 'src');

module.exports = {
	buildDir: path.join(__dirname, 'lib'),
	includePaths: [path.join(srcDir, 'scss')],
	libDir: path.join(__dirname, 'lib'),
	srcDir,
};
