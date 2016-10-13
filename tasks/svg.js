var path = require('path');
var _s = require('underscore.string');
var sub = require('string-sub');
var basename = require('basename');

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

	gulp.task('build:svg:scss-icons', function() {
		var svgFiles = gulp.src(['src/images/icons/*.svg'])
						.pipe(plugins.cheerio(svgstore.cheerio({
							run: function($, file) {
								if (!svgstore.REGEX_FLAGS.test(file.relative)) {
									$('.lexicon-icon-outline').each(function() {
										$(this).attr('fill', '#{$color}');
									});

									$('[stroke]').filter('[stroke]').attr('stroke', '#{$color}');
								}
							}
						})))
						.pipe(plugins.rename(svgstore.rename))
						.pipe(plugins.svgmin(svgstore.svgmin));

		return gulp.src(['src/scss/lexicon-base/mixins/_global-functions.scss'])
				// .pipe(plugins.debug())
				.pipe(plugins.inject(svgFiles, {
					starttag: '$lx-icons: (',
					endtag: ');',
					transform: function(filepath, file, index, length, targetFile) {
						var contents = file.contents.toString('utf8');

						return sub('\'{0}\': \'{1}\'{2}', basename(filepath), contents, index + 1 < length ? ',' : '');

						return `'${basename}': '${contents}'${index + 1 < length ? ',' : ''}\n`;
					}
				}))
				.pipe(gulp.dest('src/scss/lexicon-base/mixins/'));
	});
};