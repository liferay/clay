var _s = require('underscore.string');

module.exports = function(gulp, plugins, _, config) {
	var svgstore = require('../lib/svgstore');

	gulp.task('build:svg', svgstore(gulp, plugins, _, {}));
};