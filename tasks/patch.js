module.exports = function(gulp, plugins, _, config) {
	var fs = require('fs');

	var BS4_VAR_OVERWRITES = '@import "../lexicon-base/variables/1bs4-variable-overwrites";\n\n';
	var LEXICON_IMPORT = '\n\n@import "../lexicon-base/variables";';
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

	gulp.task('build:patch-bootstrap', function(cb) {
		var bootstrapVarFile = gulp.src(config.BOOTSTRAP_VAR_FILE)
			.pipe(plugins.change(patchBootstrap(LEXICON_IMPORT)))
			.pipe(plugins.change(patchBootstrap(BS4_VAR_OVERWRITES, '// Variables\n')))
			.pipe(gulp.dest(config.BOOTSTRAP_VAR_DIR));

		var bootstrapJsFile = gulp.src(config.BOOTSTRAP_JS_FILE)
			.pipe(plugins.change(patchBootstrap(TETHER_JS, '/*!\n')))
			.pipe(gulp.dest(config.BOOTSTRAP_JS_DIR));

		return plugins.mergeStream(bootstrapVarFile, bootstrapJsFile);
	});

	gulp.task('build:clean-bootstrap-patch', function(cb) {
		var bootstrapVarFile = gulp.src(config.BOOTSTRAP_VAR_FILE)
			.pipe(plugins.change(cleanBootstrapPatch(BS4_VAR_OVERWRITES)))
			.pipe(plugins.change(cleanBootstrapPatch(LEXICON_IMPORT)))
			.pipe(gulp.dest(config.BOOTSTRAP_VAR_DIR));

		var bootstrapJsFile = gulp.src(config.BOOTSTRAP_JS_FILE)
			.pipe(plugins.change(cleanBootstrapPatch(TETHER_JS)))
			.pipe(gulp.dest(config.BOOTSTRAP_JS_DIR));

		return plugins.mergeStream(bootstrapVarFile, bootstrapJsFile);
	});
};