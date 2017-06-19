'use strict';

const lexicon = require('lexicon-ux');
const path = require('path');

var lexiconJSPath = path.join(lexicon.srcDir, 'js');

module.exports = {
	metalComponents: ['electric-quartz-components'],
	sassOptions: {
		includePaths: ['node_modules', lexicon.includePaths]
	},
	vendorSrc: [
		{
			dest: 'dist/vendor/source-sans-pro',
			src: 'node_modules/source-sans-pro/**'
		},
		{
			dest: 'dist/vendor/lexicon',
			src: path.join(lexicon.buildDir, 'images', 'icons', '*')
		},
		{
			src: [
				path.join(lexiconJSPath, 'svg4everybody.js'),
				path.join(lexiconJSPath, 'bootstrap.js')
			]
		},
		{
			src: path.join(lexiconJSPath, 'svg4everybody.js')
		}
	]
};