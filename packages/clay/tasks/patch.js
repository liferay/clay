module.exports = function(gulp, plugins, _, config) {
	var LEXICON_IMPORT = '\n\n@import "../lexicon/variables";';

	var patchBootstrap = function(content) {
		if (content.indexOf(LEXICON_IMPORT) === -1) {
			content += LEXICON_IMPORT;
		}

		return content;
	};

	var cleanBootstrapPatch = function(content) {
		return content.replace(LEXICON_IMPORT, '');
	};

	gulp.task('build:patch-bootstrap', function(cb) {
		return gulp.src(config.BOOTSTRAP_VAR_FILE)
			.pipe(plugins.change(patchBootstrap))
			.pipe(gulp.dest(config.BOOTSTRAP_VAR_DIR));
	});

	gulp.task('build:clean-bootstrap-patch', function(cb) {
		return gulp.src(config.BOOTSTRAP_VAR_FILE)
			.pipe(plugins.change(cleanBootstrapPatch))
			.pipe(gulp.dest(config.BOOTSTRAP_VAR_DIR));
	});
};