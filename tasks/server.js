var browserSync = require('browser-sync');

module.exports = function(gulp) {
	gulp.task('server', ['browser-sync:start', 'watch']);

	gulp.task('browser-sync:start', function() {
		browserSync({
			notify: true,
			open: true,
			server: {
				baseDir: 'build'
			}
		});

		gulp.on('build:finished', browserSync.reload);
	});
};