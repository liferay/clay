'use strict';

const clayCSS = require('clay-css');
const fs = require('fs');
const ncp = require('ncp');
const path = require('path');

const generateIconData = require('./utils/icons');

let clayJSPath = path.join(clayCSS.srcDir, 'js');

const excludedComponents = /.*(pagination|isomorphic)/g;
const metalComponents = ['electric-clay-components']
	.concat(fs.readdirSync('../').filter(f => f.match(/^clay-.*/) && !f.match(excludedComponents)));
const pathSrc = 'src';
const ignoreDirs = ['components', 'clay', 'layouts', 'pages', 'partials', 'styles'];
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

ncp(clayCSS.buildDir, path.join(pathSrc, 'clay'));

module.exports = {
	frontMatterHook: function(data) {
		return generateIconData(data);
	},
	codeMirrorLanguages: ['xml', 'htmlmixed', 'soy', 'javascript', 'shell', 'css'],
	metalComponents: metalComponents,
	resolveModules: ['../../node_modules'],
	sassOptions: {
		includePaths: ['node_modules', clayCSS.includePaths],
	},
	staticSrc: staticSrc,
	vendorSrc: [
		{
			src: '!**billboard.css',
		},
		{
			dest: 'dist/vendor/lexicon',
			src: path.join(clayCSS.buildDir, 'images', 'icons', '*'),
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
