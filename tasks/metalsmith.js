var gulpsmith = require('gulpsmith');
var gulpFrontMatter = require('gulp-front-matter');

var bourbon = require('node-bourbon');

var define = require('metalsmith-define');
var encodeHTML = require('metalsmith-encode-html');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var sass = require('metalsmith-sass');
var templates = require('metalsmith-templates');

var handleNav = require('../lib/handle_nav');
var handlePath = require('../lib/handle_path');
var handlePermalink = require('../lib/handle_permalink');
var handleTemplate = require('../lib/handle_template');

module.exports = function(gulp, plugins, _, config) {
	var license = require('./copyright_banner');

	var metadata = {
		_: _,
		heading: '',
		subHeading: '',
		version: license.metadata.version
	};

	gulp.task('build:metalsmith', function(cb) {
		var filter = plugins.filter(['**/*.md', '**/*.html']);
		var assetFilter = plugins.filter(['**/*.*css', '**/*.js']);

		var REGEX_VAR_FILEPATH = new RegExp(config.BOOTSTRAP_VAR_FILE + '$');

		return gulp.src(config.SRC_GLOB)
				.pipe(filter)
				.pipe(gulpFrontMatter())
				.on(
					'data',
					function(file) {
						_.assign(file, file.frontMatter);

						delete file.frontMatter;
					}
				)
				.pipe(filter.restore())
				.pipe(assetFilter)
				.pipe(plugins.header(license.tpl, license.metadata))
				.pipe(assetFilter.restore())
				.pipe(plugins.plumber())
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
				.pipe(plugins.plumber.stop())
				.pipe(gulp.dest('./build'));

	});
};