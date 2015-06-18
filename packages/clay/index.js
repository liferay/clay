var path = require('path');
var Y = require('yui').YUI();

var Metalsmith = require('metalsmith');

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

var argv = require('optimist').usage('Usage: $0 -qo')
			.options(
				{
					offline: {
						boolean: true,
						default: false
					},
					w: {
						alias: 'watch',
						boolean: true,
						default: false
					},
					d: {
						alias: 'dev',
						boolean: true,
						default: false
					}
				}
			).argv;

var metadata = Y.merge(
	argv,
	{
		Y: Y,
		heading: '',
		subHeading: ''
	}
);

var ms = Metalsmith(__dirname);

ms.use(define(metadata))
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
	.use(templates('ejs'));

function build(err, files) {
	if (err) {
		console.log(err);
		return err;
	}
}

if (argv.watch) {
	var watch = require('metalsmith-simplewatch');

	ms.use(
		watch(
			{
				buildFn: function(){
					ms.build(build);
				},
				buildPath: path.resolve(__dirname, './build/'),
				srcPath: path.resolve(__dirname, './src/'),
				pattern: '**/*',
			}
		)
	);
}

ms.destination('./build');
ms.build(build);