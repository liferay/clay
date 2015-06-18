var chalk = require('chalk');

console.log(
	chalk.red(
		'We are now using gulp to handle the building/processing of the files.\n' +
		'You can run with build just by typing "gulp", or you can trigger\n' +
		'the watch command with "gulp watch" or "gulp build:watch"\n' +
		'or you can just type "gulp help" to see what tasks are available.'
	)
);