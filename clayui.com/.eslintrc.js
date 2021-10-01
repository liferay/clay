/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const config = require('../.eslintrc');

module.exports = {
	...config,
	rules: {
		...config.rules,
		'react/display-name': 'off',
	},
};
