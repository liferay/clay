module.exports = function(gulp, plugins, _, config) {
	var bower = require('bower');
	var path = require('path');

	var REGEX_BOOTSTRAP_IMPORT = /@import "bootstrap\//g;

	var STR_FONT_PATH = path.join('fonts', 'bootstrap');

	gulp.task(
		'update:bower',
		function(done) {
			bower.commands.list({paths: true}).on(
				'end',
				function(paths) {
					if (!paths['bootstrap-sass'] || !paths['svg4everybody']) {
						console.log('Please run `bower install` first.')
					}
					else {
						var filter = plugins.filter(['**/bootstrap.scss']);

						var bootstrapFilter = plugins.filter(
							function(file) {
								return file.base.endsWith('/bootstrap-sass/assets/');
							}
						);

						var svg4everybodyFilter = plugins.filter(['**/svg4everybody.js'])

						gulp.src(['./bower_components/bootstrap-sass/assets/**/*',
							'!./bower_components/bootstrap-sass/assets/javascripts/bootstrap-sprockets.js',
							'!./bower_components/bootstrap-sass/assets/stylesheets/_bootstrap-*.scss',
							'./bower_components/svg4everybody/dist/svg4everybody.js'
							])
						.pipe(bootstrapFilter)
						.pipe(
							plugins.rename(
								function(path) {
									var dirname = path.dirname;

									dirname = dirname.replace('stylesheets', 'scss');
									dirname = dirname.replace('javascripts', 'js');
									// console.log(dirname.indexOf(STR_FONT_PATH), dirname);
									dirname = dirname.replace(STR_FONT_PATH, 'fonts');

									path.dirname = dirname;

									if (path.basename === '_bootstrap') {
										path.dirname = 'scss/bootstrap';
										path.basename = 'bootstrap';
									}
								}
							)
						)
						.pipe(bootstrapFilter.restore())
						.pipe(filter)
						.pipe(
							plugins.change(
								function(content) {
									content = content.replace(REGEX_BOOTSTRAP_IMPORT, '@import "');
									return content;
								}
							)
						)
						.pipe(filter.restore())
						.pipe(svg4everybodyFilter)
						.pipe(plugins.rename({
							dirname: 'js'
						}))
						.pipe(svg4everybodyFilter.restore())
						// .pipe(plugins.debug())
						.pipe(gulp.dest('./src/'));
					}

					done();
				}
			);
		}
	);

};