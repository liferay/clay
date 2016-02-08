var path = require('path');
var _s = require('underscore.string');

module.exports = function(gulp, plugins, _, config) {
	var src = config.src || 'src/images/icons/*.svg';
	var dest = config.dest || './build/images/icons/';

	return gulp
			.src(src)
			.pipe(plugins.rename(
				function(file) {
					file.basename = _s.slugify(file.basename);
				}
			))
			// .pipe(plugins.debug())
			.pipe(plugins.svgmin(function (file) {
				var prefix = path.basename(file.relative, path.extname(file.relative));

				return {
					plugins: [
						{
							cleanupIDs: {
								prefix: prefix + '-',
								minify: true
							}
						},
						{
							moveElemsAttrsToGroup: false
						},
						{
							removeAttrs: {
								attrs: ['fill', 'stroke']
							}
						}
					]
				}
			}))
			.pipe(plugins.svgstore())
			.pipe(gulp.dest(dest));
};