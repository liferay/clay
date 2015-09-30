var path = require('path');

var gulp = require('gulp-help')(require('gulp'));
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var chalk = require('chalk');

var _ = require('./lib/lodash_utils');

var BOOTSTRAP_VAR_FILE = path.join('src','scss', 'bootstrap', '_variables.scss');

var BOOTSTRAP_VAR_DIR = path.dirname(BOOTSTRAP_VAR_FILE);

var config = {
	BOOTSTRAP_VAR_FILE: BOOTSTRAP_VAR_FILE,
	BOOTSTRAP_VAR_DIR: BOOTSTRAP_VAR_DIR,
	SRC_GLOB: 'src/**/*'
};

var tasks = require('require-dir')('./tasks');

_.invoke(tasks, 'call', tasks, gulp, plugins, _, config);

gulp.task('default', ['build']);

gulp.task('build', function(cb) {
	runSequence(
		'build:patch-bootstrap',
		'build:svg',
		'build:metalsmith',
		'build:clean-bootstrap-patch',
		cb
	);
});

gulp.task(
	'release',
	function(cb) {
		runSequence(
			'build:patch-bootstrap',
			'release:clean',
			'release:build',
			'release:svg',
			'release:zip',
			'build:clean-bootstrap-patch',
			function() {
				setTimeout(
					function() {
						var center = require('center-align');
						var windowSize = require('window-size');

						var line = '+' + (new Array(windowSize.width - 2).join('-')) + '+';
						var footer = [
							'',
							'',
							line,
							'Remember to run "npm run deploy"!',
							line,
							''
						].join('\n');

						function centerAlign(len, longest, line, lines) {
							return Math.floor((longest - len) / 2);
						}

						console.log(center(chalk.red(footer)));
					},
					0
				);

				cb();
			}
		);
	}
);