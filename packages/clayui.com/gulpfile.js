const fs = require('fs');
const gulp = require('gulp');
const inquirer = require('inquirer');
const path = require('path');
const sass = require('gulp-sass');

require('gulp-storage')(gulp);

const storage = gulp.storage;

storage.create('claycss', 'claycss.json');

const CLAY_PATH = 'clayPath';

gulp.task('config', function(cb) {
	inquirer.prompt({
		default: storage.get(CLAY_PATH) || '../clay',
		message: 'Please provide the path to your clay repo.',
		validate: function(value) {
			let valid = true;

			if (!fs.existsSync(path.join(process.cwd(), value))) {
				valid = value + ' is not a valid file path.';
			}

			return valid;
		},
		name: 'clayPath'
	}).then(function(answers) {
		storage.set(CLAY_PATH, answers.clayPath);

		cb();
	});
});

gulp.task('styles', function() {
	const clayPath = storage.get(CLAY_PATH);

	gulp.src('src/styles/*.scss')
		.pipe(sass({
			includePaths: ['node_modules', path.join(clayPath, 'src/scss')]
		}).on('error', handleError))
		.pipe(gulp.dest('dist/styles'))
});

gulp.task('watch', function() {
	const clayPath = storage.get(CLAY_PATH);

	if (!clayPath) {
		console.log('Please run "npm run config" to configure the watch task.');
	}
	else {
		gulp.watch(path.join(clayPath, 'src/scss/**/*.scss'), ['styles']);
	}
});

function handleError(err) {
	console.log(err);
}
