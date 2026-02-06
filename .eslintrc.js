/**
 * SPDX-FileCopyrightText: (c) 2019 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

const path = require('path');

module.exports = {
	env: {
		browser: true,
		jest: true,
		node: true,
	},
	extends: ['plugin:@liferay/react'],
	parser: '@typescript-eslint/parser',
	plugins: ['@liferay', '@typescript-eslint', 'react-compiler'],
	rules: {
		'@liferay/empty-line-between-elements': 'off',
		'@liferay/no-dynamic-require': 'off',
		'@typescript-eslint/array-type': ['error', {default: 'generic'}],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				format: ['PascalCase'],
				prefix: ['I'],
				selector: 'interface',
			},
		],
		'@typescript-eslint/no-unused-vars': 'error',
		'lines-around-comment': 'off',
		'no-for-of-loops/no-for-of-loops': 'off',
		'no-unused-vars': 'off',
		'notice/notice': [
			'error',
			{
				templateFile: path.join(__dirname, 'copyright.js'),
			},
		],
		'prefer-template': 'error',
		'quote-props': 'off',
		'react/display-name': 'off',
		'react/jsx-boolean-value': 'error',
		'react/jsx-no-bind': [
			'error',
			{
				allowArrowFunctions: true,
			},
		],
		'react/no-unescaped-entities': 'off',
		'react-compiler/react-compiler': 'error',
		'react-hooks/exhaustive-deps': 'off',
		'sort-vars': 'error',
	},
};
