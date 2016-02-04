'use strict';

var gulp = require('gulp');
var maven = require('gulp-maven-deploy');
var runSequence = require('run-sequence');

// Maven -----------------------------------------------------------------------

gulp.task('prepare-maven-snapshot', function() {
	return gulp.src(['release/*'])
		.pipe(gulp.dest('maven-dist/META-INF/resources/webjars/lexicon/0.2.1-SNAPSHOT/release'));
});

gulp.task('install-maven-snapshot', function() {
	return gulp.src('.')
		.pipe(maven.install({
			'config': {
				'artifactId': 'lexicon',
				'buildDir': 'maven-dist',
				'finalName': '{name}-{version}',
				'groupId': 'com.liferay.webjars',
				'type': 'jar'
			}
		}));
});

gulp.task('prepare-maven-artifact', function() {
	return gulp.src(['release/*'])
		.pipe(gulp.dest('maven-dist/META-INF/resources/webjars/lexicon/0.2.1/release'));
});

gulp.task('publish-maven-artifact', function() {
	return gulp.src('.')
		.pipe(maven.deploy({
			'config': {
				'artifactId': 'lexicon',
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