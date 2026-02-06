/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';
const YELLOW = '\x1b[33m';
const line = Object.assign(
	(output) => {
		if (output != null) {
			print(`${output}\n`);
		}
		else {
			print();
		}
	},
	{
		green(output) {
			line(GREEN + output + RESET);
		},
		red(output) {
			line(RED + output + RESET);
		},
		yellow(output) {
			line(YELLOW + output + RESET);
		},
	}
);

/**
 * print();
 * print('message');
 * print.red('message');
 * print.yellow('message');
 * print.line('message');
 * print.line.red('message');
 * print.line.yellow('message');
 */
const print = Object.assign(
	(output) => {
		process.stdout.write(output != null ? output : '\n');
	},
	{
		green(output) {
			print(GREEN + output + RESET);
		},
		line,
		red(output) {
			print(RED + output + RESET);
		},
		yellow(output) {
			print(YELLOW + output + RESET);
		},
	}
);

module.exports = print;
