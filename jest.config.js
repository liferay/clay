/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

module.exports = {
	collectCoverage: true,
	coverageReporters: ['json', 'lcov'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
	resolver: `${__dirname}/scripts/jest-clay-lerna-resolver`,
	setupFiles: [`${__dirname}/scripts/setupTests.ts`, 'raf/polyfill'],
	testMatch: [
		`${process.cwd()}/**/__tests__/**/*.[jt]s?(x)`,
		`${process.cwd()}/**/?(*.)+(spec|test).[jt]s?(x)`,
	],
	testPathIgnorePatterns: [
		'browserslist-config-clay',
		'fixtures',
		'lib',
		'next.clayui.com',
	],
	transform: {
		'.(ts|tsx)': 'ts-jest',
	},
	transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*clay.*).*$'],
};
