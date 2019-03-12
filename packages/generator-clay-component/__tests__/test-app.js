/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

const path = require('path');
const assert = require('yeoman-generator').assert;
const helpers = require('yeoman-generator').test;

describe('clay-component-generator:app', () => {
	beforeAll(done => {
		helpers
			.run(path.join(__dirname, '../app'))
			.withOptions({skipInstall: true})
			.withPrompts({
				componentName: 'MyComponent',
				repoDescription: 'My awesome Clay component',
			})
			.on('end', done);
	});

	it('creates files', () => {
		assert.file([
			'demo/App.tsx',
			'demo/index.html',
			'src/MyComponent.tsx',
			'src/__tests__/MyComponent.tsx',
			'webpack.config.js',
			'package.json',
			'tsconfig.json',
			'tsconfig.declarations.json',
			'README.md',
		]);
	});

	it('produces MyComponent.tsx with templated content', () => {
		assert.fileContent(
			'src/MyComponent.tsx',
			/const MyComponent: React.FunctionComponent<Props> = \(\{/
		);
		assert.fileContent('src/MyComponent.tsx', /export default MyComponent/);
	});
});
