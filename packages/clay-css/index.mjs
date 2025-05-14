/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

var srcDir = join(__dirname, 'src');

export default {
	buildDir: join(__dirname, 'lib'),
	includePaths: [join(srcDir, 'scss')],
	libDir: join(__dirname, 'lib'),
	srcDir,
};
