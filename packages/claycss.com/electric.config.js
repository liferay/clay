'use strict';

const path = require('path');
const clay = require('clay');

var clayJSPath = path.join(clay.srcDir, 'js');

module.exports = {
	metalComponents: ['electric-quartz-components'],
	sassOptions: {
		includePaths: ['node_modules', clay.includePaths]
	},
	vendorSrc: [
		{
			dest: 'dist/vendor/source-sans-pro',
			src: 'node_modules/source-sans-pro/**'
		},
		{
			dest: 'dist/vendor/clay',
			src: path.join(clay.buildDir, 'images', 'icons', '*')
		},
		{
			src: [
				path.join(clayJSPath, 'popper.js'),
				path.join(clayJSPath, 'svg4everybody.js'),
				path.join(clayJSPath, 'bootstrap.js')
			]
		},
		{
			dest: 'dist/vendor/jquery',
			src: 'node_modules/jquery/dist/jquery.min.js'
		},
		{
			src: path.join(clayJSPath, 'svg4everybody.js')
		}
	]
};