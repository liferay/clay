module.exports = function(gulp, plugins, _, config) {
	gulp.task('watch', ['build:watch']);

	gulp.task(
		'build:watch',
		['build'],
		function(done) {
			gulp.watch(
				[config.SRC_GLOB, '!src/scss/bootstrap/_variables.scss', 'templates/**/*'],
				['build']
			);
		}
	);
};