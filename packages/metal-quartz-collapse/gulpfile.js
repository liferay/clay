'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'metal-quartz-collapse.js',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'metal-quartz-collapse',
		soyDeps: ['node_modules/*quartz*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);
