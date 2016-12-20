module.exports = function(gulp, plugins, _, config) {
	var BS4_VAR_OVERWRITES = '@import "../lexicon-base/variables/1bs4-variable-overwrites";\n\n';
	var LEXICON_IMPORT = '\n\n@import "../lexicon-base/variables";';

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
		return gulp.src(config.BOOTSTRAP_VAR_FILE)
			.pipe(plugins.change(patchBootstrap(LEXICON_IMPORT)))
			.pipe(plugins.change(patchBootstrap(BS4_VAR_OVERWRITES, '// Variables\n')))
			.pipe(gulp.dest(config.BOOTSTRAP_VAR_DIR));
	});

	gulp.task('build:clean-bootstrap-patch', function(cb) {
		return gulp.src(config.BOOTSTRAP_VAR_FILE)
			.pipe(plugins.change(cleanBootstrapPatch(BS4_VAR_OVERWRITES)))
			.pipe(plugins.change(cleanBootstrapPatch(LEXICON_IMPORT)))
			.pipe(gulp.dest(config.BOOTSTRAP_VAR_DIR));
	});
};