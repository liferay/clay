/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const path = require('path');

module.exports = {
	env: {
		browser: true,
		jest: true,
		node: true,
	},
	extends: 'liferay/react',
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/array-type': ['error', {default: 'generic'}],
		'@typescript-eslint/interface-name-prefix': ['error', 'always'],
		'@typescript-eslint/no-unused-vars': 'error',
		'no-unused-vars': 'off',
		'notice/notice': [
			'error',
			{
				templateFile: path.join(__dirname, 'copyright.js'),
			},
		],
		'prefer-template': 'error',
		'react/jsx-boolean-value': 'error',
		'react/jsx-no-bind': [
			'error',
			{
				allowArrowFunctions: true,
			},
		],
		'react/jsx-no-literals': 'error',
		'react-hooks/exhaustive-deps': 'off',
		'sort-vars': 'error',
	},
};
