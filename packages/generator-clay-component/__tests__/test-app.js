/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

'use strict';

const path = require('path');
const {assert} = require('yeoman-generator');
const {test: helpers} = require('yeoman-generator');

describe('clay-component-generator:app', () => {
	beforeAll((done) => {
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
			'stories/index.tsx',
			'src/index.tsx',
			'src/__tests__/index.tsx',
			'package.json',
			'tsconfig.json',
			'tsconfig.declarations.json',
			'README.md',
		]);
	});

	it('produces MyComponent.tsx with templated content', () => {
		assert.fileContent('src/index.tsx', /const MyComponent = \(\{/);
		assert.fileContent('src/index.tsx', /export default MyComponent/);
	});
});
