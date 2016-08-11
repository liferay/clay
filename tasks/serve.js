var browserSync = require('browser-sync');

module.exports = function(gulp) {
	gulp.task('serve:start', function() {
		browserSync({
			notify: true,
			open: false,
			server: {
				baseDir: 'build'
			}
		});

		gulp.on('build:finished', browserSync.reload);
	});
};