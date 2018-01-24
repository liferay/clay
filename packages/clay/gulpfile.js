var chalk = require('chalk');
var filter = require('gulp-filter');
var gulp = require('gulp-help')(require('gulp'));
var inquirer = require('inquirer');
var path = require('path');
var plugins = require('gulp-load-plugins')({pattern: ['autoprefixer', 'gulp-*', 'gulp.*', 'merge-stream', 'postcss-*']});
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

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

var license = require('./tasks/copyright_banner');
var tasks = require('require-dir')('./tasks');

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

gulp.task(
	'compile',
	function(cb) {
		runSequence(
			'compile:clean',
			'compile:files',
			'build:svg:scss-icons',
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

gulp.task('serve', ['serve:start', 'watch']);
