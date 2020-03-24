var fs = require('fs');
var path = require('path');

module.exports = {
	metadata: {
		version: JSON.parse(
			fs.readFileSync(path.join(__dirname, '../package.json'))
		).version,
		year: new Date().getFullYear(),
	},
	tpl: [
		'/**',
		'* Clay <%= version %>',
		'*',
		'* Copyright <%= year %>, Liferay, Inc.',
		'* All rights reserved.',
		'* MIT license',
		'*/',
		'',
	].join('\n'),
};
