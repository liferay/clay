'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'sample.js',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'metal-quartz-sample',
		soyDeps: ['node_modules/*quartz*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);
