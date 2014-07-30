var fs = require('fs-extra');
var gracefulFs = require('graceful-fs');
var path = require('path');
var Y = require('yui').YUI();

var Metalsmith = require('metalsmith');

var collections = require('metalsmith-collections');
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

var CDN_PATH = 'http://cdn.alloyui.com/2.5.0/aui';

var auisrc = CDN_PATH + '/aui-min.js';

var YUI_config;

if (argv.dev) {
	auisrc = CDN_PATH + '/aui.js';

	YUI_config = {
		filter: 'raw',
		combine: false
	};
}
// var walker = require('walker');

// var collOpts = {

// };

// var rootDir = 'src';

// var Walker = walker('src').filterDir(function(dir, stat) {
// 	return dir == 'src' || dir.indexOf('src/content') === 0;
// }).on(
// 	'dir',
// 	function(dir, stat) {
// 		var collName = path.basename(dir);

// 		if (collName != 'src' && collName != 'content') {
// 			collOpts[collName] = '*.html';
// 		}
// 	}
// );

// Walker.on(
// 	'end',
// 	function(event) {

// 	}
// );

var metadata = Y.merge(
	argv,
	{
		YUI_config: YUI_config,
		Y: Y,
		// title: '',
		subHeading: '',
		getAUIPath: function(rootPath) {
			var auiPath = auisrc;

			if (argv.offline) {
				auiPath = path.join(rootPath, '/js/aui/aui/aui-min.js');
			}

			return auiPath;
		}
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
	// .use(
	// 	collections(
	// 		collOpts
	// 	)
	// )
	.use(
		sass(
			{
				outputDir: 'css/',
				outputStyle: 'expanded'
			}
		)
	)
	.use(templates('ejs'));

if (argv.watch) {
	var watch = require('metalsmith-watch');

	ms.use(
		watch(
			{
				pattern : '**/*',
			}
		)
	);
}

ms.destination('./build');
ms.build(
	function(err, files) {
		if (err) {
			console.log(err);
			return err;
		}

		if (argv.offline) {
			var buildJS = path.resolve(ms.destination(), 'js', 'aui');
			var srcAUI = path.resolve(__dirname, 'third_party', 'aui');

			fs.ensureDir(
				buildJS,
				function(err) {
					if (err) {
						console.log(err);
						return;
					}

					return fs.copy(
						srcAUI,
						buildJS,
						function(err) {
							if (err) {
								console.log(err);
							}
						}
					);
				}
			);
		}
	}
);