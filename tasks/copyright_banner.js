module.exports = {
	metadata: {
		version: require('../package.json').version,
		year: (new Date()).getFullYear()
	},
	tpl: [
		'/**',
		'* Lexicon <%= version %>',
		'*',
		'* Copyright <%= year %>, Liferay, Inc.',
		'* All rights reserved.',
		'* MIT license',
		'*/',
		''
	].join('\n')
};