module.exports = function(gulp, plugins, _, config) {
	var runSequence = require('run-sequence');

	var version = require('../package.json').version;

	gulp.task('prepare-maven-snapshot', function() {
		return gulp.src(['release/**/*'])
			.pipe(gulp.dest('maven-dist/META-INF/resources/webjars/lexicon/' + version + '/release'));
	});

	gulp.task('install-maven-snapshot', function() {
		return gulp.src('.')
			.pipe(plugins.mavenDeploy.install({
				'config': {
					'artifactId': 'com.liferay.webjars.lexicon',
					'buildDir': 'maven-dist',
					'finalName': '{name}-{version}',
					'groupId': 'com.liferay.webjars',
					'type': 'jar'
				}
			}));
	});

	gulp.task('prepare-maven-artifact', function() {
		return gulp.src(['release/**/*'])
			.pipe(gulp.dest('maven-dist/META-INF/resources/webjars/lexicon/' + version + '/release'));
	});

	gulp.task('publish-maven-artifact', function() {
		return gulp.src('.')
			.pipe(plugins.mavenDeploy.deploy({
				snapshot: false,
				'config': {
					'artifactId': 'com.liferay.webjars.lexicon',
					'buildDir': 'maven-dist',
					'finalName': '{name}-{version}',
					'groupId': 'com.liferay.webjars',
					'type': 'jar',
					'repositories': [
						{
							'id': 'liferay-nexus-ce',
							'url': 'https://repository.liferay.com/nexus/content/repositories/liferay-releases-ce/'
						}
					]
				}
			}));
	});

	gulp.task('maven-install', function(done) {
		runSequence('prepare-maven-snapshot', 'install-maven-snapshot', done);
	});

	gulp.task('maven-publish', function(done) {
		runSequence('prepare-maven-artifact', 'publish-maven-artifact', done);
	});
};