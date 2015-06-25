module.exports = function(gulp, plugins, _, config) {
	gulp.task('watch', ['build:watch']);

	gulp.task(
		'build:watch',
		function(done) {
			gulp.watch(
				[config.SRC_GLOB, '!src/scss/bootstrap/_variables.scss'],
				['build']
			);
		}
	);
};