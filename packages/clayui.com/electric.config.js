'use strict';

const clay = require('clay');
const fs = require('fs');
const gulp = require('gulp');
const path = require('path');

require('gulp-storage')(gulp);

gulp.storage.create('claycss', 'claycss.json');

const generateIconData = require('./utils/icons');

let clayJSPath = path.join(clay.srcDir, 'js');

const clayPath = gulp.storage.get('clayPath');
let clayIncludePaths = clay.includePaths;

if (clayPath) {
	clayIncludePaths = path.join(
		path.join(process.cwd(), clayPath, 'src/scss')
	);

	console.log(
		'Warning! using ' +
			clayIncludePaths +
			' to compile sass.\nDelete claycss.json to reset.'
	);
}

const excludedComponents = /.*(pagination|isomorphic)/g;
const metalComponents = ['electric-clay-components']
	.concat(fs.readdirSync('../').filter(f => f.match(/^clay-.*/) && !f.match(excludedComponents)));
const pathSrc = 'src';
const ignoreDirs = ['components', 'layouts', 'pages', 'partials', 'styles'];
const ignoreGlob = path.join(
	'!' + pathSrc,
	'+(' + ignoreDirs.join('|') + ')/'
);
const staticSrc = [
	path.join(pathSrc, '**/*'),
	path.join('!' + pathSrc, 'site.json'),
	ignoreGlob,
	path.join(ignoreGlob, '**/*'),
];

module.exports = {
	frontMatterHook: function(data) {
		return generateIconData(data);
	},
	codeMirrorLanguages: ['xml', 'htmlmixed', 'soy'],
	metalComponents: metalComponents,
	apiConfig: {
		layout: 'main',
		project: {
			docsConfig: {
				inferPrivate: '^_',
				shallow: true,
			},
			refs: ['v2.0.0-rc.10', 'v2.0.0-rc.9'],
			repo: 'clay',
			soyAPIEntitiesPath: '../../../partials/ElectricAPIEntities.soy.js',
			src: [
				'packages/clay-*!(isomorphic)/src/Clay*.js',
				'packages/clay-charts/src/*.js',
			],
			srcPath: 'packages',
			user: 'liferay',
		},
	},
	resolveModules: ['../../node_modules'],
	sassOptions: {
		includePaths: ['node_modules', clayIncludePaths],
	},
	entryPoints: {
		electricAPI: path.join(__dirname, 'src/partials/ElectricAPIBundle.js'),
	},
	staticSrc: staticSrc,
	vendorSrc: [
		{
			src: '!**billboard.css',
		},
		{
			dest: 'dist/vendor/lexicon',
			src: path.join(clay.buildDir, 'images', 'icons', '*'),
		},
		{
			src: [
				path.join(clayJSPath, 'svg4everybody.js'),
				path.join(clayJSPath, 'bootstrap.js'),
			],
		},
		{
			src: path.join(clayJSPath, 'svg4everybody.js'),
		},
		{
			src: path.join('../clay-charts/build/clay-charts.css'),
		},
	],
};
