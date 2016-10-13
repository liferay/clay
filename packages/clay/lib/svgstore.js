var path = require('path');
var _ = require('lodash');
var _s = require('underscore.string');
var basename = require('basename');

module.exports = function(gulp, plugins, _, config) {
	var src = config.src || 'src/images/icons/*.svg';
	var dest = config.dest || './build/images/icons/';

	var defaultConfig = {
		dest: './build/images/icons/',
		src: 'src/images/icons/*.svg'
	};

	config = _.merge(defaultConfig, config);

	var exports = module.exports;

	var REGEX_FLAGS = exports.REGEX_FLAGS;

	return gulp.src(src)
			.pipe(plugins.cheerio(exports.cheerio()))
			.pipe(plugins.rename(exports.rename))
			.pipe(plugins.svgmin(exports.svgmin))
			.pipe(plugins.svgstore())
			.pipe(gulp.dest(dest));
};

_.assign(
	module.exports,
	{
		REGEX_FLAGS: /^flags-/,

		cheerio: function(config) {
			return _.merge(
				{
					run: function ($, file) {
						if (!module.exports.REGEX_FLAGS.test(file.relative)) {
							$('[fill]').not('[fill=none]').removeAttr('fill');
							$('[stroke]').not('[stroke=none]').removeAttr('stroke');
						}
					},
					parserOptions: { xmlMode: true }
				},
				config
			);
		},

		rename: function(file) {
			file.basename = _s.slugify(file.basename.replace(module.exports.REGEX_FLAGS, ''));
		},

		svgmin: function(file) {
			var prefix = basename(file.relative);

			return module.exports.svgminConfig(
				{
					plugins: [
						{
							cleanupIDs: {
								prefix: prefix + '-'
							}
						}
					]
				}
			);
		},

		svgminConfig: function(config) {
			return _.merge(
				{
					plugins: [
						{
							cleanupIDs: {
								minify: true
							}
						},
						{
							moveElemsAttrsToGroup: false
						}
					]
				},
				config
			);
		}
	}
);