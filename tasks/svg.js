var _s = require('underscore.string');

module.exports = function(gulp, plugins, _, config) {
	var svgstore = require('../lib/svgstore');
	gulp.task('svgstore', svgstore(gulp, plugins, _, {}));
	gulp.task('svgstore-orig', svgstore(gulp, plugins, _, {src: 'src/images/icons_original/*.svg', dest: './build/images/icons_original/'}));

	var timestamp = Math.round(Date.now()/1000);

	gulp.task('svg:font', function() {
		return gulp
				.src('src/images/icons/*.svg')
				// .pipe(plugins.rename(
				// 	function(file) {
				// 		file.basename = _s.slugify(file.basename);
				// 	}
				// ))
				// .pipe(plugins.debug())
				.pipe(plugins.iconfont({
					fontName: 'l-ex-icon',
					// appendUnicode: true,
					timestamp: timestamp
				}))
				.on('glyphs', function(glyphs, options) {
					// CSS templating, e.g.
					// console.log(glyphs, options);
					glyphs = _.map(glyphs, function(item, index) {
						item.name = _s.slugify(item.name);
						return item;
					});
					gulp.src('templates/lexicon_font_tpl.css')
					.pipe(plugins.consolidate('lodash', {
						glyphs: glyphs,
						fontName: 'l-ex-icon',
						fontPath: '../fonts/l-ex-icon/',
						className: 'l-ex-icon'
					}))
					.pipe(plugins.rename('_lexicon-icons.scss'))
					.pipe(gulp.dest('src/scss/lexicon-base'));
				})
				.pipe(gulp.dest('src/fonts/l-ex-icon'));
	});
	gulp.task('svg:fontorig', function() {
		return gulp
				.src('src/images/icons_original/*.svg')
				// .pipe(plugins.rename(
				// 	function(file) {
				// 		file.basename = _s.slugify(file.basename);
				// 	}
				// ))
				// .pipe(plugins.debug())
				.pipe(plugins.iconfont({
					fontName: 'lexicon-orig',
					// appendUnicode: true,
					timestamp: timestamp
				}))
				.on('glyphs', function(glyphs, options) {
					// CSS templating, e.g.
					// console.log(glyphs, options);
					glyphs = _.map(glyphs, function(item, index) {
						item.name = _s.slugify(item.name);
						return item;
					});
					gulp.src('templates/lexicon_font_tpl.css')
					.pipe(plugins.consolidate('lodash', {
						glyphs: glyphs,
						fontName: 'lexicon-orig',
						fontPath: '../fonts/lexicon/',
						className: 'l-icon-lexicon'
					}))
					.pipe(plugins.rename('_lexicon-icons-orig.scss'))
					.pipe(gulp.dest('src/scss/lexicon-base'));
				})
				.pipe(gulp.dest('src/fonts/lexicon-orig'));
	});
};