var async = require('async');
var del = require('del');
var filter = require('gulp-filter');
var fs = require('fs-extra');
var gulp = require('gulp-help')(require('gulp'));
var path = require('path');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var sass = require('node-sass');

var _ = require('./tasks/lib/lodash_utils');

var config = {
	SRC_GLOB: 'src/**/*',
};

var bootstrapPath = path.dirname(require.resolve('bootstrap/package.json'));

var license = require('./tasks/copyright_banner');
var tasks = require('require-dir')('./tasks');

_.invoke(tasks, 'call', tasks, gulp, plugins, _, config);

gulp.task('default', ['compile']);

gulp.task('build', function(cb) {
	runSequence(
		'build:svg',
		'build:svg:scss-icons',
		'build:metalsmith',
		'build:rtl',
		'build:sassdoc',
		function(err) {
			gulp.emit('build:finished', err);

			cb(err);
		}
	);
});

gulp.task('compile', function(cb) {
	runSequence(
		'compile:clean',
		'compile:files',
		'compile:bootstrap:js',
		'compile:bootstrap:scss',
		'compile:popper',
		'build:svg:scss-icons',
		'compile:prep-scss',
		'compile:css',
		'compile:clean-scss',
		'compile:svg',
		function(err) {
			cb(err);
		}
	);
});

gulp.task('compile:bootstrap:js', function() {
	var src = [
		path.join(bootstrapPath, 'dist/js/bootstrap.js'),
		path.join(bootstrapPath, 'dist/js/bootstrap.js.map'),
	];

	return gulp.src(src).pipe(gulp.dest('./src/js'));
});

gulp.task('compile:bootstrap:scss', function() {
	return gulp
		.src(path.join(bootstrapPath, 'scss/**/*'))
		.pipe(gulp.dest('./src/scss/bootstrap'));
});

gulp.task('compile:files', function(cb) {
	var assetFilter = filter(['**/*.js', '!**/bootstrap.js'], {
		restore: true,
	});

	var src = [
		'src/fonts/**/*',
		'src/images/icons/*',
		'src/js/{,bootstrap/}*.js',
		'src/js/{,bootstrap/}*.js.map',
	];

	return gulp
		.src(src, {
			base: './src',
		})
		.pipe(assetFilter)
		.pipe(plugins.header(license.tpl, license.metadata))
		.pipe(assetFilter.restore)
		.pipe(gulp.dest('./lib'));
});

gulp.task('compile:clean', function() {
	del.sync(['./lib']);
});

gulp.task('compile:clean-scss', function() {
	del.sync([
		'./lib/css/**/*.scss',
		'./lib/css/atlas/',
		'./lib/css/bootstrap/',
		'./lib/css/components/',
		'./lib/css/functions/',
		'./lib/css/mixins/',
		'./lib/css/site/',
		'./lib/css/variables/',
	]);
});

gulp.task('compile:css', function(cb) {
	fs.ensureDirSync(path.resolve('./lib/css'));

	var filesNames = ['atlas.scss', 'bootstrap.scss', 'base.scss'];

	async.each(
		filesNames,
		function(fileName, cb) {
			var fileDestName = path.basename(fileName, '.scss') + '.css';

			var destName = path.resolve('./lib/css/' + fileDestName);

			sass.render(
				{
					file: path.resolve('./lib/css/' + fileName),
					outFile: './' + fileDestName,
					sourceMap: true,
					sourceMapContents: true,
					sourceMapRoot: '../../',
				},
				function(err, results) {
					fs.writeFileSync(destName, results.css);
					fs.writeFileSync(destName + '.map', results.map);

					cb(err);
				}
			);
		},
		function(err) {
			cb(err);
		}
	);
});

gulp.task('compile:popper', function() {
	var popperPath = path.dirname(require.resolve('popper.js/package.json'));

	var src = [
		path.join(popperPath, 'dist/umd/popper.js'),
		path.join(popperPath, 'dist/umd/popper.js.map'),
	];

	return gulp.src(src).pipe(gulp.dest('./src/js'));
});

gulp.task('compile:prep-scss', function() {
	var entryFilter = filter(['bootstrap.scss'], {
		restore: true,
	});

	return gulp
		.src('src/scss/**/*')
		.pipe(entryFilter)
		.pipe(plugins.header(license.tpl, license.metadata))
		.pipe(entryFilter.restore)
		.pipe(gulp.dest('./lib/css'));
});

gulp.task(
	'compile:svg',
	require('./tasks/lib/svgstore')(gulp, plugins, _, {
		dest: './lib/images/icons',
	})
);

gulp.task('serve', ['serve:start', 'watch']);
