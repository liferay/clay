module.exports = function(gulp, plugins, _, config) {
	gulp.task('watch', ['build:watch']);

	gulp.task(
		'build:watch',
		['build'],
		function(done) {
			gulp.watch(
				['./CHANGELOG.md', config.SRC_GLOB, '!src/scss/bootstrap/_variables.scss', '!src/js/bootstrap.js', 'templates/**/*'],
				['build']
			);
		}
	);
};