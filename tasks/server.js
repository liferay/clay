var browserSync = require('browser-sync');

module.exports = function(gulp) {
	gulp.task('server', ['browser-sync:start', 'watch']);

	gulp.task('browser-sync:start', function() {
		browserSync({
			notify: false,
			open: false,
			server: {
				baseDir: 'build'
			}
		});
	});
};