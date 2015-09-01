module.exports = function(gulp, plugins, _, config) {
	gulp.task('toc', function(done) {
		gulp.src('./README.md')
		.pipe(
			plugins.doctoc(
				{
					title: '### Jump to Section',
					depth: 3
				}
			)
		)
		.pipe(gulp.dest('./'));
	});
};