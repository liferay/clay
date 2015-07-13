module.exports = function(gulp, plugins, _, config) {
	var bower = require('bower');
	var path = require('path');

	var REGEX_BOOTSTRAP_IMPORT = /@import "bootstrap\//g;

	var STR_FONT_PATH = path.join('fonts', 'bootstrap');

	gulp.task(
		'update:bootstrap',
		function(done) {
			bower.commands.list({paths: true}).on(
				'end',
				function(paths) {
					if (!paths['bootstrap-sass']) {
						console.log('Please run `bower install` first.')
					}
					else {
						var filter = plugins.filter(['**/bootstrap.scss']);

						gulp.src(['./bower_components/bootstrap-sass/assets/**/*',
							'!./bower_components/bootstrap-sass/assets/javascripts/**/*',
							'!./bower_components/bootstrap-sass/assets/stylesheets/_bootstrap-*.scss'])
						.pipe(
							plugins.rename(
								function(path) {
									var dirname = path.dirname;

									dirname = dirname.replace('stylesheets', 'scss');
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
						.pipe(plugins.debug())
						.pipe(gulp.dest('./src/'));
					}

					done();
				}
			);
		}
	);

};