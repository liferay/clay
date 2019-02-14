/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

module.exports = {
	transform: {
		'.(ts|tsx)': 'ts-jest',
	},
	testMatch: [
		process.cwd() + '/**/__tests__/**/*.[jt]s?(x)',
		process.cwd() + '/**/?(*.)+(spec|test).[jt]s?(x)',
	],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
	setupFiles: [__dirname + '/scripts/setupTests.js'],
	collectCoverage: true,
	coverageReporters: ['json', 'lcov'],
	resolver: __dirname + '/scripts/jest-clay-lerna-resolver',
	testPathIgnorePatterns: ['browserslist-config-clay', 'fixtures', 'lib'],
	transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*clay.*).*$'],
};
