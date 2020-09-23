/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';
const YELLOW = '\x1b[33m';
const line = Object.assign(
	(output) => {
		if (output != null) {
			print(`${output}\n`);
		} else {
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
