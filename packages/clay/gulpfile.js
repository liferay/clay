var inquirer = require('inquirer');
var path = require('path');

var gulp = require('gulp-help')(require('gulp'));
// var liferayGulpTasks = require('liferay-gulp-tasks');
var plugins = require('gulp-load-plugins')({pattern: ['autoprefixer', 'gulp-*', 'gulp.*', 'merge-stream', 'postcss-*']});
var runSequence = require('run-sequence');

var chalk = require('chalk');

var _ = require('./lib/lodash_utils');

var BOOTSTRAP_JS_FILE = path.join('src', 'js', 'bootstrap.js');

var BOOTSTRAP_JS_DIR = path.dirname(BOOTSTRAP_JS_FILE);

var BOOTSTRAP_VAR_FILE = path.join('src','scss', 'bootstrap', '_variables.scss');

var BOOTSTRAP_VAR_DIR = path.dirname(BOOTSTRAP_VAR_FILE);

var POPPER_JS_FILE = path.join('src', 'js', 'popper.js');

var config = {
	AUTOPREFIXER: {
		cascade: false,
		browsers: ['last 2 versions'],
		remove: false
	},
	BOOTSTRAP_JS_FILE: BOOTSTRAP_JS_FILE,
	BOOTSTRAP_JS_DIR: BOOTSTRAP_JS_DIR,
	BOOTSTRAP_VAR_FILE: BOOTSTRAP_VAR_FILE,
	BOOTSTRAP_VAR_DIR: BOOTSTRAP_VAR_DIR,
	SRC_GLOB: 'src/**/*',
	POPPER_JS_FILE: POPPER_JS_FILE
};

var tasks = require('require-dir')('./tasks');

// liferayGulpTasks(gulp, {
// 	artifactSrc: ['**/release/**/*', '!node_modules/', '!node_modules/**'],
// 	artifactName: 'clay'
// });

_.invoke(tasks, 'call', tasks, gulp, plugins, _, config);

gulp.task('default', ['build']);

gulp.task('build', function(cb) {
	runSequence(
		'build:patch-bootstrap',
		'build:svg',
		'build:svg:scss-icons',
		'build:metalsmith',
		'build:rtl',
		'build:clean-bootstrap-patch',
		function(err) {
			gulp.emit('build:finished', err);

			cb(err);
		}
	);
});

gulp.task('serve', ['serve:start', 'watch']);

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
	'release:npm',
	function(cb) {
		runSequence(
			'build:patch-bootstrap',
			'release:npm-clean',
			'release:npm-build-files',
			'release:npm-src-files',
			'release:npm-index',
			'release:npm-package',
			'release:npm-publish',
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
			},
			{
				default: false,
				// message: 'Do you want to push to the Maven repo and publish to npm?',
				message: 'Do you want to publish to npm?',
				name: 'packageManagers',
				type: 'confirm',
				when: function(answers) {
					return answers.publish;
				}
			}
		];

		runSequence(
			'release:files',
			function() {
				inquirer.prompt(
					questions,
					function(answers) {
						if (answers.publish) {
							var args = [
								'release:git',
								'release:publish',
								cb
							];

							if (answers.packageManagers) {
								// args.splice(2, 0, 'maven-publish');
								// args.splice(3, 0, 'release:npm');
								args.splice(2, 0, 'release:npm');
							}

							runSequence.apply(null, args);
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

// New compile tasks

var filter = require('gulp-filter');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var license = require('./tasks/copyright_banner');

gulp.task(
	'compile',
	function(cb) {
		runSequence(
			'compile:clean',
			'compile:files',
			'compile:prep-scss',
			'compile:css',
			'compile:svg',
			'compile:clean-temp',
			function(err) {
				cb(err);
			}
		);
	}
);

gulp.task(
	'compile:files',
	function(cb) {
		var assetFilter = filter(['*.js', '!bootstrap'], {
			restore: true
		});

		var src = [
			'src/fonts/**/*',
			'src/images/icons/*',
			'src/js/{,bootstrap/}*.js'
		];

		return gulp.src(src, {
				base: './src'
			})
			.pipe(assetFilter)
			.pipe(plugins.header(license.tpl, license.metadata))
			.pipe(assetFilter.restore)
			.pipe(gulp.dest('./build'));
	}
);

gulp.task(
	'compile:css',
	function() {
		return gulp.src('temp/+(atlas|bootstrap|base).scss')
			.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('./build/css'));
	}
);

gulp.task(
	'compile:clean',
	function() {
		return gulp.src('./build')
			.pipe(plugins.clean({
				read: false
			}));
	}
);

gulp.task(
	'compile:clean-temp',
	function() {
		return gulp.src('./temp')
			.pipe(plugins.clean({
				read: false
			}));
	}
);

gulp.task(
	'compile:prep-scss',
	function() {
		var entryFilter = filter(['bootstrap.scss'], {
			restore: true
		});

		return gulp.src('src/scss/**/*')
			.pipe(entryFilter)
			.pipe(plugins.header(license.tpl, license.metadata))
			.pipe(entryFilter.restore)
			.pipe(gulp.dest('./temp'));
	}
);

gulp.task(
	'compile:svg',
	require('./lib/svgstore')(gulp, plugins, _, {
		dest: './build/images/icons',
	})
);
