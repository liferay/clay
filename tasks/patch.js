module.exports = function(gulp, plugins, _, config) {
	var BS4_VAR_OVERWRITES = '@import "../lexicon-base/variables/1bs4-variable-overwrites";\n\n';
	var LEXICON_IMPORT = '\n\n@import "../lexicon-base/variables";';

	var patchBootstrap = function(content) {
		if (content.indexOf(LEXICON_IMPORT) === -1) {
			content += LEXICON_IMPORT;
		}

		if (content.indexOf(BS4_VAR_OVERWRITES) === -1) {
			return content.replace('// Variables\n', BS4_VAR_OVERWRITES + '// Variables\n');
		}

		return content;
	};

	var cleanBootstrapPatch = function(a, b) {
		return function (content) {
			return content.replace(a, b);
		};
	};

	gulp.task('build:patch-bootstrap', function(cb) {
		return gulp.src(config.BOOTSTRAP_VAR_FILE)
			.pipe(plugins.change(patchBootstrap))
			.pipe(gulp.dest(config.BOOTSTRAP_VAR_DIR));
	});

	gulp.task('build:clean-bootstrap-patch', function(cb) {
		return gulp.src(config.BOOTSTRAP_VAR_FILE)
			.pipe(plugins.change(cleanBootstrapPatch(BS4_VAR_OVERWRITES, '')))
			.pipe(plugins.change(cleanBootstrapPatch(LEXICON_IMPORT, '')))
			.pipe(gulp.dest(config.BOOTSTRAP_VAR_DIR));
	});
};