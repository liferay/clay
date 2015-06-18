var gulp = require('gulp-help')(require('gulp'));
var plugins = require('gulp-load-plugins')();
var gulpsmith = require('gulpsmith');
var gulp_front_matter = require('gulp-front-matter');
var _ = require('lodash');

var path = require('path');
var Y = require('yui').YUI();

var bourbon = require('node-bourbon');

var define = require('metalsmith-define');
var encodeHTML = require('metalsmith-encode-html');
var markdown = require('metalsmith-markdown');
var permalinks = require('metalsmith-permalinks');
var sass = require('metalsmith-sass');
var templates = require('metalsmith-templates');

var handleNav = require('./lib/handle_nav');
var handlePath = require('./lib/handle_path');
var handlePermalink = require('./lib/handle_permalink');
var handleTemplate = require('./lib/handle_template');

var metadata = {
	Y: Y,
	heading: '',
	subHeading: ''
};

// var Metalsmith = require('metalsmith');

// var ms = Metalsmith(__dirname);

// ms.use(define(metadata))
// 	.use(handleTemplate())
// 	.use(encodeHTML())
// 	.use(
// 		markdown(
// 			{
// 				smartypants: true,
// 				gfm: true,
// 				tables: true
// 			}
// 		)
// 	)
// 	.use(handlePermalink())
// 	.use(
// 		permalinks(
// 			{
// 				relative: false
// 			}
// 		)
// 	)
// 	.use(handleNav())
// 	.use(handlePath())
// 	.use(
// 		sass(
// 			{
// 				includePaths: bourbon.includePaths,
// 				outputDir: 'css/',
// 				outputStyle: 'expanded',
// 				sourceMap: true
// 			}
// 		)
// 	)
// 	.use(templates('ejs'));

// function build(err, files) {
// 	if (err) {
// 		console.log(err);
// 		return err;
// 	}
// }

// if (argv.watch) {
// 	var watch = require('metalsmith-simplewatch');

// 	ms.use(
// 		watch(
// 			{
// 				buildFn: function(){
// 					ms.build(build);
// 				},
// 				buildPath: path.resolve(__dirname, './build/'),
// 				srcPath: path.resolve(__dirname, './src/'),
// 				pattern: '**/*',
// 			}
// 		)
// 	);
// }

// ms.destination('./build');
// ms.build(build);

var SRC_GLOB = 'src/**/*';

gulp.task('default', ['build']);

gulp.task('build', function() {
	var filter = plugins.filter(['**/*.md', '**/*.html']);

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
								outputDir: 'css/',
								outputStyle: 'expanded',
								sourceMap: true
							}
						)
					)
					.use(templates('ejs'))
			)
			.pipe(gulp.dest('./build'));
});

gulp.task(
	'build:watch',
	function(done) {
		gulp.watch(
			SRC_GLOB,
			['build']
		);
	}
);