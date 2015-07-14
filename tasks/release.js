module.exports = function(gulp, plugins, _, config) {
	var REGEX_SCSS = /^scss(\/|$)/;

	gulp.task(
		'release:clean',
		function() {
			return gulp.src('./release')
			// .pipe(plugins.debug())
			.pipe(plugins.clean({read: false}));
		}
	);

	gulp.task(
		'release:build',
		function() {

			return gulp.src([
				// 'src/fonts/**/*',
				'src/scss/+(atlas-theme|bootstrap|lexicon-base)/**/*',
				'src/scss/+(atlas|bootstrap|lexicon-base).scss',
				'src/js/*.js',
				], {base: './src'})
			// .pipe(plugins.debug())
			.pipe(gulp.dest('./release'));
		}
	);

	gulp.task(
		'release:zip',
		function() {
			var pkg = require('../package.json');

			return gulp.src('release/**/*')
			.pipe(plugins.zip(pkg.name + '-' + pkg.version + '.zip'))
			.pipe(gulp.dest('.'));
		}
	);
};