var gulp = require('gulp-help')(require('gulp'));
var plugins = require('gulp-load-plugins')();
var gulpsmith = require('gulpsmith');
var gulp_front_matter = require('gulp-front-matter');
var runSequence = require('run-sequence');

var path = require('path');

var bourbon = require('node-bourbon');

var define = require('metalsmith-define');
var encodeHTML = require('metalsmith-encode-html');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var sass = require('metalsmith-sass');
var templates = require('metalsmith-templates');

var _ = require('./lib/lodash_utils');

var handleNav = require('./lib/handle_nav');
var handlePath = require('./lib/handle_path');
var handlePermalink = require('./lib/handle_permalink');
var handleTemplate = require('./lib/handle_template');

var metadata = {
	_: _,
	heading: '',
	subHeading: ''
};

var REGEX_SCSS = /^scss\//;

var SRC_GLOB = 'src/**/*';

var BOOTSTRAP_VAR_FILE = path.join('src','scss', 'bootstrap', '_variables.scss');

var BOOTSTRAP_VAR_DIR = path.dirname(BOOTSTRAP_VAR_FILE);

gulp.task('default', ['build']);

gulp.task('build', function(cb) {
	runSequence(
		'build:patch-bootstrap',
		'build:metalsmith',
		'build:clean-bootstrap-patch',
		cb
	);
});

var LEXICON_IMPORT = '\n\n@import "../lexicon/variables";';

var patchBootstrap = function(content) {
	content += LEXICON_IMPORT;

	return content;
};

var cleanBootstrapPatch = function(content) {
	return content.replace(LEXICON_IMPORT, '');
};

gulp.task('build:patch-bootstrap', function(cb) {
	return gulp.src(BOOTSTRAP_VAR_FILE)
	.pipe(plugins.change(patchBootstrap))
	.pipe(gulp.dest(BOOTSTRAP_VAR_DIR));
});

gulp.task('build:metalsmith', function(cb) {
	var filter = plugins.filter(['**/*.md', '**/*.html']);

	var REGEX_VAR_FILEPATH = new RegExp(BOOTSTRAP_VAR_FILE + '$');

	return gulp.src(SRC_GLOB)
			.pipe(filter)
			.pipe(gulp_front_matter()).on('data', function(file) {
				_.assign(file, file.frontMatter);
				delete file.frontMatter;
			})
			.pipe(filter.restore())
			.pipe(
				gulpsmith()
					.use(define(metadata))
					.use(handleTemplate())
					.use(encodeHTML())
					.use(
						markdown(
							{
								smartypants: true,
								gfm: true,
								tables: true
							}
						)
					)
					.use(handlePermalink())
					.use(
						permalinks(
							{
								relative: false
							}
						)
					)
					.use(handleNav())
					.use(handlePath())
					.use(
						sass(
							{
								includePaths: bourbon.includePaths,
								outputDir: function(dir) {
									return dir.replace(/^scss(\/|$)/, 'css$1');
								},
								outputStyle: 'expanded',
								sourceMap: true
							}
						)
					)
					.use(templates('ejs'))
			)
			.pipe(gulp.dest('./build'));

});

gulp.task('build:clean-bootstrap-patch', function(cb) {
	return gulp.src(BOOTSTRAP_VAR_FILE)
	.pipe(plugins.change(cleanBootstrapPatch))
	.pipe(gulp.dest(BOOTSTRAP_VAR_DIR));
});

gulp.task('watch', ['build:watch']);

gulp.task(
	'build:watch',
	function(done) {
		gulp.watch(
			[SRC_GLOB, '!src/scss/bootstrap/_variables.scss'],
			['build']
		);
	}
);

gulp.task(
	'release',
	function(cb) {
		runSequence(
			'build:patch-bootstrap',
			'release:clean',
			'release:build',
			'release:zip',
			'build:clean-bootstrap-patch',
			cb
		);
	}
);

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
			'src/scss/**/*',
			'!src/scss/highlightjs/{,**}',
			'!src/scss/*'], {base: './src'})
		// .pipe(plugins.debug())
		.pipe(
			plugins.rename(
				function(path) {
					path.dirname = path.dirname.replace(REGEX_SCSS, '');
				}
			)
		)
		.pipe(gulp.dest('./release'));
	}
);

gulp.task(
	'release:zip',
	function() {
		var pkg = require('package.json');

		return gulp.src('release/**/*')
		.pipe(plugins.zip(pkg.name + '-' + pkg.version + '.zip'))
		.pipe(gulp.dest('.'));
	}
);