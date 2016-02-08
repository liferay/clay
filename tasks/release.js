var argv = require('minimist')(process.argv.slice(2));
var cmdPromise = require('../lib/cmd_promise');
var semver = require('semver');
var updateVersion = require('../lib/update_version');

module.exports = function(gulp, plugins, _, config) {
	var REGEX_SCSS = /^scss(\/|$)/;

	var license = require('./copyright_banner');

	var GIT_REMOTE;

	var getGitRemote = function() {
		if (!GIT_REMOTE) {
			GIT_REMOTE = cmdPromise.resolve()
			.git('remote', '-v').then(function(response) {
				var remotes = response.stdout;

				var remote = 'origin';

				if ((/^upstream(?:\s+)/m).test(remotes)) {
					remote = 'upstream';
				}

				return remote;
			});
		}

		return GIT_REMOTE;
	};

	gulp.task(
		'release:clean',
		function() {
			return gulp.src('./release')
			// .pipe(plugins.debug())
			.pipe(plugins.clean({read: false}));
		}
	);

	gulp.task(
		'release:svg',
		require('../lib/svgstore')(gulp, plugins, _, {dest: './release/images/icons'})
	);

	gulp.task(
		'release:build',
		function() {
			var REGEX_ALLOW = /\.((s)?css|js)/;
			var REGEX_DISALLOW = /\/bootstrap\//;

			var assetFilter = plugins.filter(
				function(file) {
					var filePath = file.path;

					return REGEX_ALLOW.test(filePath) && !(REGEX_DISALLOW.test(filePath));
				}
			);

			return gulp.src([
				'src/fonts/**/*',
				'src/scss/+(atlas-theme|bootstrap|lexicon-base)/**/*',
				'src/scss/+(atlas|atlas-variables|bootstrap|lexicon-base|lexicon-base-variables).scss',
				'src/js/{,bootstrap/}*.js'
				], {base: './src'})
			.pipe(assetFilter)
			.pipe(plugins.header(license.tpl, license.metadata))
			// .pipe(plugins.debug())
			.pipe(assetFilter.restore())
			.pipe(gulp.dest('./release'));
		}
	);

	gulp.task(
		'release:zip',
		function() {
			var pkg = require('../package.json');

			return gulp.src('release/**/*')
			.pipe(plugins.zip(pkg.name + '-' + pkg.version + '.zip'))
			.pipe(gulp.dest('.'));
		}
	);

	gulp.task(
		'release:git',
		function(done) {
			var branchName = 'bower-staging-' + Math.random().toString(16).replace(/[^0-9a-fA-F]/g, '');

			var currentVersion = require('../package.json').version;

			var types = ['major', 'minor', 'patch'];

			var type = _.find(
				types,
				function(item, index) {
					return argv[item];
				}
			);

			if (!type) {
				type = 'patch';
			}

			var bumpedVersion = semver.inc(currentVersion, type);

			var browserCommitMessage = 'Browser files for v' + bumpedVersion;
			var mergeCommitMessage = 'Merging master@v' + bumpedVersion + ' into develop';
			var rebuildCommitMessage = 'Rebuild v' + bumpedVersion;
			var releaseCommitMessage = 'Release v' + bumpedVersion;
			var tagMessage = 'Version ' + bumpedVersion;
			var previousTagName = 'v' + currentVersion;
			var tagName = 'v' + bumpedVersion;

			cmdPromise.resolve()
				.git('checkout', 'master')
				.git('status', '--porcelain').then(function(status) {
					if (!!status.stdout) {
						throw new Error('working directory not clean, aborting');
					}
				})
				.then(getGitRemote)
				.then(function(remote) {
					return cmdPromise.resolve().git('fetch', remote, '--quiet');
				})
				.git('tag', '--list', tagName).then(function(tag) {
					if (!!tag.stdout) {
						throw new Error('The tag ' + tagName + ' already exists. Type git tag -d ' + tagName + ' to remove it');
					}
				})
				.git('rev-list', '--count', '--left-only', '@{u}...master').then(function(revCount) {
					if (revCount.stdout !== '0') {
						throw new Error('branch is not up to date, aborting');
					}

					updateVersion(bumpedVersion);

					return bumpedVersion;
				})
				.git('log', previousTagName + '...HEAD', '-n', '1', '--', 'CHANGELOG.md').then(function(log) {
					if (!log.stdout && !argv.f) {
						throw new Error('There are no commits for the CHANGELOG. If this is intentional, re-run this command with -f');
					}

					return log.stdout;
				})
				.git('add', 'package.json')
				.git('commit', '-a', '-m', releaseCommitMessage)
				.cmd('gulp', 'build')
				.git('add', '.')
				.git('commit', '-m', rebuildCommitMessage)
				.git('checkout', '-b', branchName)
				.git('add', '--force', 'release')
				.git('commit', '-a', '-m', browserCommitMessage)
				.git('tag', '-a', tagName, '-m', tagMessage)
				.git('checkout', 'master')
				.git('branch', '-D', branchName)
				.git('checkout', tagName, '--', 'release')
				.git('reset')
				.git('checkout', 'develop')
				.git('merge', 'master', '-m', mergeCommitMessage)
				.then(function() {
					done();
				});
		}
	);

	gulp.task(
		'release:publish',
		function(done) {
			cmdPromise.resolve()
				.then(getGitRemote)
				.then(function(remote){
					return cmdPromise.resolve().git('push', remote, '--tags', 'master', 'develop');
				})
				.cmd('npm', 'run', 'deploy')
				.then(function() {
					done();
				});
		}
	);
};