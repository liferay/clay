var inquirer = require('inquirer');
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
	'release:files',
	function(cb) {
		runSequence(
			'build:patch-bootstrap',
			'release:clean',
			'release:build',
			'release:svg',
			'release:zip',
			'build:clean-bootstrap-patch',
			cb
		);
	}
);

gulp.task(
	'release',
	function(cb) {
		var questions = [
			{
				default: false,
				message: 'Do you want to create a git tag and push to gh-pages?',
				name: 'publish',
				type: 'confirm'
			}
		];

		runSequence(
			'release:files',
			function() {
				inquirer.prompt(
					questions,
					function(answers) {
						if (answers.publish) {
							runSequence(
								'release:git',
								'release:publish',
								cb
							);
						}
						else {
							cb();
						}
					}
				);
			}
		);
	}
);