'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'button.js',
		bundleCssFileName: 'button.css',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'metal-clay-button',
		soyDeps: ['node_modules/*clay*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);
