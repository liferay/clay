'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'metal-clay-collapse.js',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'metal-clay-collapse',
		soyDeps: ['node_modules/*clay*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);
