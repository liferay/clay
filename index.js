var Metalsmith = require('metalsmith');
var gracefulFs = require('graceful-fs');
var fs = require('fs-extra');
var define = require('metalsmith-define');
var handleNav = require('./lib/handle_nav');
var path = require('path');
var sass = require('metalsmith-sass');

var templates = require('metalsmith-templates');
var Y = require('yui').YUI();

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

if (argv.offline) {
	auisrc = './js/aui/aui/aui-min.js';
}

var metadata = Y.merge(
	argv,
	{
		auisrc: auisrc,
		YUI_config: YUI_config,
		Y: Y,
		extendYUIConfig: function() {
			return Object.keys(YUI_config).map(
				function(item, index) {
					return 'YUI_config[' + JSON.stringify(item) + '] = ' + JSON.stringify(YUI_config[item]) + ';';
				}
			).join('\n');
		}
	}
);

var ms = Metalsmith(__dirname);

ms.use(define(metadata))
	.use(handleNav())
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

	ms.use(watch());
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