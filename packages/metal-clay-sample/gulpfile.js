'use strict';

var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'sample.js',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'metal-clay-sample',
		soyDeps: ['node_modules/*clay*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);
