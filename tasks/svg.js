module.exports = function(gulp, plugins, _, config) {
	gulp.task('svgstore', require('../lib/svgstore')(gulp, plugins, _, {}));
};