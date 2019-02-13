/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
'use strict';

let path = require('path');
let assert = require('yeoman-generator').assert;
let helpers = require('yeoman-generator').test;

describe('clay-component-generator:app', function() {
	beforeAll(function(done) {
		helpers
			.run(path.join(__dirname, '../app'))
			.withOptions({skipInstall: true})
			.withPrompts({
				componentName: 'MyComponent',
				repoDescription: 'My awesome Clay component',
			})
			.on('end', done);
	});

	it('creates files', function() {
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

	it('content of MyComponent.tsx', function() {
		assert.fileContent(
			'src/MyComponent.tsx',
			/const MyComponent: React.FunctionComponent<Props> = \(\{/
		);
		assert.fileContent('src/MyComponent.tsx', /export default MyComponent/);
	});
});
