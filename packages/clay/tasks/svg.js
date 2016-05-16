var path = require('path');
var _s = require('underscore.string');

module.exports = function(gulp, plugins, _, config) {
	config = config || {};

	if (!config.src) {
		var args = process.argv.slice(2).reduce(
			function(prev, item, index) {
				if (_.startsWith(item, '--svg-src')) {
					prev.push(_.trimLeft(item, '-'));
				}

				return prev;
			},
			[]
		);

		var newSrc = _.find(
			args,
			function(item, index) {
				return _.startsWith(item, 'svg-src');
			}
		);

		var src;

		if (newSrc) {
			newSrc = newSrc.replace(/^svg-src=/, '');

			if (/^(\.{1,})?\//.test(newSrc)) {
				src = path.join(newSrc, '*.svg');
			}
			else {
				src = path.join('src/images/icons/' + newSrc, '*.svg');
			}
		}

		if (src) {
			config.src = src;
		}
	}

	var svgstore = require('../lib/svgstore');

	gulp.task('build:svg', function() {
		return svgstore(gulp, plugins, _, config);
	});
};