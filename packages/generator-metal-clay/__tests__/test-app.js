'use strict';

let path = require('path');
let assert = require('yeoman-generator').assert;
let helpers = require('yeoman-generator').test;

describe('metal-clay-generator:app', function() {
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
			'demos/a11y.html',
			'demos/index.html',
			'src/MyComponent.js',
			'src/MyComponent.soy',
			'src/__tests__/MyComponent.js',
			'webpack.config.js',
			'package.json',
			'README.md',
		]);
	});

	it('content of MyComponent.js', function() {
		assert.fileContent(
			'src/MyComponent.js',
			/class MyComponent extends ClayComponent/
		);
		assert.fileContent(
			'src/MyComponent.js',
			/Soy\.register\(MyComponent, templates\)/
		);
		assert.fileContent(
			'src/MyComponent.js',
			/export default MyComponent/
		);
	});

	it('content of MyComponent.soy', function() {
		assert.fileContent(
			'src/MyComponent.soy',
			/\{namespace MyComponent\}/
		);
		assert.fileContent(
			'src/MyComponent.soy',
			/<div \{\$attributes\}>Hello World<\/div>/
		);
	});
});
