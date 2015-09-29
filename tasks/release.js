module.exports = function(gulp, plugins, _, config) {
	var REGEX_SCSS = /^scss(\/|$)/;

	var license = require('./copyright_banner');

	gulp.task(
		'release:clean',
		function() {
			return gulp.src('./release')
			// .pipe(plugins.debug())
			.pipe(plugins.clean({read: false}));
		}
	);

	gulp.task(
		'release:svg',
		require('../lib/svgstore')(gulp, plugins, _, {dest: './release/images/icons'})
	);

	gulp.task(
		'release:build',
		function() {
			var REGEX_ALLOW = /\.((s)?css|js)/;
			var REGEX_DISALLOW = /\/bootstrap\//;

			var assetFilter = plugins.filter(
				function(file) {
					var filePath = file.path;

					return REGEX_ALLOW.test(filePath) && !(REGEX_DISALLOW.test(filePath));
				}
			);

			return gulp.src([
				// 'src/fonts/**/*',
				'src/scss/+(atlas-theme|bootstrap|lexicon-base)/**/*',
				'src/scss/+(atlas|atlas-variables|bootstrap|lexicon-base|lexicon-base-variables).scss',
				'src/js/*.js'
				], {base: './src'})
			.pipe(assetFilter)
			.pipe(plugins.header(license.tpl, license.metadata))
			// .pipe(plugins.debug())
			.pipe(assetFilter.restore())
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