/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

module.exports = {
	collectCoverage: true,
	coverageReporters: ['json', 'lcov'],
	globals: {
		'ts-jest': {
			extends: './babel.config.js',
		},
	},
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	modulePathIgnorePatterns: ['lib'],
	resolver: './scripts/jest-clay-lerna-resolver',
	setupFiles: ['./scripts/setupTests.js'],
	testMatch: ['**/__tests__/*.+(ts|tsx|js)'],
	testPathIgnorePatterns: [
		'browserslist-config-clay',
		'fixtures',
		'<rootDir>/examples',
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*clay.*).*$'],
};
