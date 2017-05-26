module.exports = function(gulp, plugins, _, config) {
	var fs = require('fs');

	var TETHER_JS = fs.readFileSync(config.TETHER_JS_FILE, 'utf8') + '\n\n';

	var patchBootstrap = function(text, regex) {
		return function(content) {
			if (content.indexOf(text) === -1) {
				if (typeof(regex) === 'string') {
					return content.replace(regex, text + regex);
				}
				else {
					return content += text;
				}
			}
		};
	};

	var cleanBootstrapPatch = function(text) {
		return function(content) {
			return content.replace(text, '');
		};
	};

	gulp.task('build:autoprefix-bootstrap', function() {
		var processors = [
			plugins.autoprefixer(config.AUTOPREFIXER)
		];

		var bootstrapScssFiles = gulp.src('./src/scss/bootstrap/**/*.scss')
				.pipe(plugins.postcss(processors, { syntax: plugins.postcssScss }))
				.pipe(gulp.dest('./src/scss/bootstrap'));

		return bootstrapScssFiles;
	});

	gulp.task('build:patch-bootstrap', function(cb) {
		var bootstrapJsFile = gulp.src(config.BOOTSTRAP_JS_FILE)
			.pipe(plugins.change(patchBootstrap(TETHER_JS, '/*!\n')))
			.pipe(gulp.dest(config.BOOTSTRAP_JS_DIR));

		return bootstrapJsFile;
	});

	gulp.task('build:clean-bootstrap-patch', function(cb) {
		var bootstrapJsFile = gulp.src(config.BOOTSTRAP_JS_FILE)
			.pipe(plugins.change(cleanBootstrapPatch(TETHER_JS)))
			.pipe(gulp.dest(config.BOOTSTRAP_JS_DIR));

		return bootstrapJsFile;
	});
};