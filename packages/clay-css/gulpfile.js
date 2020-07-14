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
	SRC_GLOB: 'src/**/*'
};

var bootstrapPath = path.dirname(require.resolve('bootstrap/package.json'));

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
		'get:file-size',
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
			'compile:bootstrap:js',
			'compile:bootstrap:scss',
			'compile:popper',
			'build:svg:scss-icons',
			'compile:prep-scss',
			'compile:css',
			'compile:clean-scss',
			'compile:svg',
			'copy:licenses',
			function(err) {
				cb(err);
			}
		);
	}
);

gulp.task(
	'compile:bootstrap:js',
	function() {
		var src = [
			path.join(bootstrapPath, 'dist/js/bootstrap.js'),
			path.join(bootstrapPath, 'dist/js/bootstrap.js.map')
		];

		return gulp.src(src)
			.pipe(gulp.dest('./src/js'));
	}
);

gulp.task(
	'compile:bootstrap:scss',
	function() {
		return gulp.src(path.join(bootstrapPath, 'scss/**/*'))
			.pipe(gulp.dest('./src/scss/bootstrap'));
	}
);

gulp.task(
	'compile:files',
	function(cb) {
		var assetFilter = filter(['**/*.js', '!**/bootstrap.js', '!**/popper.js', '!**/svg4everybody.js'], {
			restore: true
		});

		var src = [
			'src/fonts/**/*',
			'src/images/icons/*',
			'src/js/{,bootstrap/}*.js',
			'src/js/{,bootstrap/}*.js.map'
		];

		return gulp.src(src, {
				base: './src'
			})
			.pipe(assetFilter)
			.pipe(assetFilter.restore)
			.pipe(gulp.dest('./lib'));
	}
);

gulp.task(
	'compile:clean',
	function() {
		del.sync(['./lib']);
	}
);

gulp.task(
	'compile:clean-scss',
	function() {
		del.sync([
			'./lib/css/**/*.scss',
			'./lib/css/atlas/',
			'./lib/css/bootstrap/',
			'./lib/css/components/',
			'./lib/css/functions/',
			'./lib/css/mixins/',
			'./lib/css/site/',
			'./lib/css/variables/'
		]);
	}
);

gulp.task(
	'compile:css',
	function(cb) {
		fs.ensureDirSync(path.resolve('./lib/css'));

		var filesNames = ['atlas.scss', 'bootstrap.scss', 'base.scss'];

		async.each(filesNames, function(fileName, cb) {
			var fileDestName = path.basename(fileName, '.scss') + '.css';

			var destName = path.resolve('./lib/css/' + fileDestName);

			sass.render({
				file: path.resolve('./lib/css/' + fileName),
				outFile: './' + fileDestName,
				sourceMap: true,
				sourceMapContents: true,
				sourceMapRoot: '../../'
			}, function(err, results) {
				fs.writeFileSync(destName, results.css);
				fs.writeFileSync(destName + '.map', results.map);

				cb(err);
			});
		}, function(err) {
			cb(err);
		});
	}
);

gulp.task(
	'compile:popper',
	function() {
		var popperPath = path.dirname(require.resolve('popper.js/package.json'));

		var src = [
			path.join(popperPath, 'dist/umd/popper.js'),
			path.join(popperPath, 'dist/umd/popper.js.map')
		];

		return gulp.src(src)
			.pipe(gulp.dest('./src/js'));
	}
);

gulp.task(
	'compile:prep-scss',
	function() {
		var entryFilter = filter(['atlas.scss', 'base.scss'], {
			restore: true
		});

		return gulp.src('src/scss/**/*')
			.pipe(entryFilter)
			.pipe(entryFilter.restore)
			.pipe(gulp.dest('./lib/css'));
	}
);

gulp.task(
	'compile:svg',
	function() {
		return require('./tasks/lib/svgstore')(gulp, plugins, _, {
			dest: './lib/images/icons',
		});
	}
);

gulp.task('copy:licenses', function() {
	var newLicenseDir = 'LICENSES';
	var originalLicenseDir = path.join('..', '..', 'LICENSES');

	return gulp.src([
		path.join(originalLicenseDir, 'BSD-3-Clause.txt'),
		path.join(originalLicenseDir, 'LicenseRef-MIT-Bootstrap.txt'),
		path.join(originalLicenseDir, 'MIT.txt')
	]).pipe(
		gulp.dest(newLicenseDir)
	);
});

gulp.task('version', function() {
	var VERSION = JSON.parse(
		fs.readFileSync(path.join('.', 'package.json'))
	).version;

	var scssDir = path.join('.', 'src', 'scss');

	var clayFiles = [
		path.join(scssDir, '_license-text.scss'),
	];

	function changeVersion(filePath, regex = /\*\s+Clay\s(.+)\n/g, value = `* Clay ${VERSION}\n`) {
		fs.readFile(filePath, 'utf8', function(err, data) {
			if (err) {
				return console.log(err);
			}

			var result = data.replace(regex, value);

			fs.writeFile(filePath, result, 'utf8', function(err) {
				if (err) return console.log(err);
			});
		});
	}

	fs.readdirSync(scssDir).forEach(function(file) {
		var filePath = path.join(scssDir, file);

		if (clayFiles.includes(filePath)) {
			changeVersion(filePath);
		}
	});

	var libIconsSvg = path.join('.', 'lib', 'images', 'icons', 'icons.svg');

	var regex = /<\?xml version="1.0" encoding="UTF-8"\?(.+-->|>)/gs;
	var license = `<?xml version="1.0" encoding="UTF-8"?>
<!--
* Clay ${VERSION}
*
* SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
* SPDX-FileCopyrightText: © 2020 Contributors to the project Clay <https://github.com/liferay/clay/graphs/contributor
*
* SPDX-License-Identifier: BSD-3-Clause
-->`;

	changeVersion(libIconsSvg, regex, license);


});

gulp.task('serve', ['serve:start', 'watch']);
