'use strict';

let path = require('path');
let assert = require('yeoman-generator').assert;
let helpers = require('yeoman-generator').test;

describe.skip('metal-clay-generator:app', function() {
	beforeAll(function(done) {
		helpers
			.run(path.join(__dirname, '../app'))
			.withOptions({skipInstall: true})
			.withPrompts({
				componentName: 'ClayComponent',
				repoDescription: 'My awesome Clay component',
			})
			.on('end', done);
	});

	it('creates files', function() {
		assert.file([
			'demos/index.html',
			'src/ClayComponent.js',
			'src/ClayComponent.soy',
			'src/__tests__/ClayComponent.js',
			'webpack.config.js',
			'package.json',
			'README.md',
		]);
	});

	it('content of ClayComponent.js', function() {
		assert.fileContent(
			'src/ClayComponent.js',
			/class ClayComponent extends Component/
		);
		assert.fileContent(
			'src/ClayComponent.js',
			/Soy\.register\(ClayComponent, templates\)/
		);
		assert.fileContent('src/ClayComponent.js', /export {ClayComponent}/);
		assert.fileContent(
			'src/ClayComponent.js',
			/export default ClayComponent/
		);
	});

	it('content of ClayComponent.soy', function() {
		assert.fileContent(
			'src/ClayComponent.soy',
			/{namespace ClayComponent}/
		);
		assert.fileContent(
			'src/ClayComponent.soy',
			/<div {\$attributes}>Hello World<\/div>/
		);
	});
});
