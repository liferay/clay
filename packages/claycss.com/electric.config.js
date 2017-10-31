'use strict';

const clay = require('clay');
const gulp = require('gulp');
const path = require('path');

require('gulp-storage')(gulp);

gulp.storage.create('claycss', 'claycss.json');

const generateIconData = require('./lib/icons');

var clayJSPath = path.join(clay.srcDir, 'js');

const clayPath = gulp.storage.get('clayPath');
let clayIncludePaths = clay.includePaths;

if (clayPath) {
	clayIncludePaths = path.join(path.join(process.cwd(), clayPath, 'src/scss'));

	console.log('Warning! using ' + clayIncludePaths + ' to compile sass.\nDelete claycss.json to reset.');
}

module.exports = {
	frontMatterHook: function(data) {
		return generateIconData(data);
	},
	codeMirrorLanguages: ['xml', 'htmlmixed', 'soy'],
	deployOptions: {
		branch: 'gh-pages'
	},
	metalComponents: ['electric-quartz-components'],
	sassOptions: {
		includePaths: ['node_modules', clayIncludePaths]
	},
	vendorSrc: [
		{
			dest: 'dist/vendor/lexicon',
			src: path.join(clay.buildDir, 'images', 'icons', '*')
		},
		{
			src: [
				path.join(clayJSPath, 'svg4everybody.js'),
				path.join(clayJSPath, 'bootstrap.js')
			]
		},
		{
			src: path.join(clayJSPath, 'svg4everybody.js')
		}
	]
};
