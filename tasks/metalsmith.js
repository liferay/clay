var path = require('path');
var gulpsmith = require('gulpsmith');
var gulpFrontMatter = require('gulp-front-matter');
var basename = require('basename');

var define = require('metalsmith-define');
var encodeHTML = require('metalsmith-encode-html');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var sass = require('metalsmith-sass');
var templates = require('metalsmith-templates');
var headingsId = require('metalsmith-headings-identifier');

var handleNav = require('../lib/handle_nav');
var handlePath = require('../lib/handle_path');
var handlePermalink = require('../lib/handle_permalink');
var handleTemplate = require('../lib/handle_template');
var svgstore = require('../lib/svgstore');
var wrapChangelog = require('../lib/wrap_changelog');

var _s = require('underscore.string');

module.exports = function(gulp, plugins, _, config) {
	var license = require('./copyright_banner');
	var flagData = require('../lib/flag_data.json');

	var metadata = {
		_: _,
		heading: '',
		subHeading: '',
		version: license.metadata.version
	};

	var TPL_SVG = '<svg class="lexicon-icon lexicon-icon-{0}"><use xlink:href="{{rootPath}}/images/icons/icons.svg#{0}" /></svg>';

	var TPL_SVG_LI = '<li>' + TPL_SVG + ' <span>{0}</span></li>';
	var TPL_FLAGS_SVG = '<li>' + TPL_SVG + ' <span>{1} ({0})</span></li>';

	gulp.task('build:metalsmith', function(cb) {
		var filter = plugins.filter(['**/*.md', '**/*.html']);
		var assetFilter = plugins.filter(['**/*.*css', '**/*.js', '!**/js/bootstrap{*,/*}.js']);
		var svgFilter = plugins.filter(['content/icons-lexicon.html']);
		var changelogFilter = plugins.filter(['./CHANGELOG.md']);

		var REGEX_VAR_FILEPATH = new RegExp(config.BOOTSTRAP_VAR_FILE + '$');

		var svgFiles = gulp.src(['src/images/icons/*.svg', '!src/images/icons/flags-*.svg'], {read: false})
						.pipe(plugins.rename(function(file) {
							file.basename = _s.slugify(file.basename);
						}));

		var svgFlags = gulp.src(['src/images/icons/flags-*.svg'], {read: false})
						.pipe(plugins.rename(function(file) {
							file.basename = _s.slugify(file.basename.replace(svgstore.REGEX_FLAGS, ''));
						}));

		return gulp.src(['./CHANGELOG.md', config.SRC_GLOB])
				.pipe(filter)
				.pipe(gulpFrontMatter())
				.on(
					'data',
					function(file) {
						var metadata = file.frontMatter;

						if (_.isEmpty(metadata)) {
							metadata = {
								title: basename(file.relative)
							};
						}

						_.assign(file, metadata);

						delete file.frontMatter;
					}
				)
				.pipe(filter.restore())
				.pipe(assetFilter)
				.pipe(plugins.header(license.tpl, license.metadata))
				.pipe(assetFilter.restore())
				.pipe(plugins.plumber())
				.pipe(svgFilter)
				.pipe(plugins.inject(svgFlags, {
					starttag: '<!-- inject:flags:{{ext}} -->',
					transform: function(filepath, file, index, length, targetFile) {
						var basename = path.basename(filepath, '.svg');

						var flagName = flagData[basename] || 'UNKNOWN';

						return _.sub(TPL_FLAGS_SVG, basename, flagName);
					}
				}))
				.pipe(plugins.inject(svgFiles, {
					transform: function(filepath, file, index, length, targetFile) {
						var basename = path.basename(filepath, '.svg');

						return _.sub(TPL_SVG_LI, basename);
					}
				}))
				.pipe(svgFilter.restore())
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
						.use(wrapChangelog())
						.use(headingsId(
							{
								linkTemplate: '<a class="heading-anchor" href="#%s">' + _.sub(TPL_SVG, 'link') + '</a>',
								selector: '.col-md-12 > h3'
							}
						))
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
									outputDir: function(dir) {
										return dir.replace(/^scss(\/|$)/, 'css$1');
									},
									outputStyle: 'expanded',
									precision: 8,
									sourceMap: true,
									sourceMapContents: true
								}
							)
						)
						.use(templates('ejs'))
				)
				.pipe(plugins.plumber.stop())
				.pipe(gulp.dest('./build'));

	});
};