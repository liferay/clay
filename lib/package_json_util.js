var _ = require('lodash');
var fs = require('fs');
var path = require('path');

var currentVersion;

var BASE_PACKAGE = {
	author: {
		email: 'natecavanaugh@gmail.com',
		name: 'Nate Cavanaugh',
		url: 'https://github.com/natecavanaugh'
	},
	bugs: {
		url: 'https://github.com/liferay/lexicon/issues'
	},
	description: 'Lexicon Full Package',
	homepage: 'https://github.com/liferay/lexicon#readme',
	license: 'MIT',
	main: 'index.js',
	repository: {
		type: 'git',
		url: 'git+https://github.com/liferay/lexicon.git'
	}
};

var generate = function(name, version, custom) {
	var pkg = _.assign(
		{
			name: name,
			version: version
		},
		BASE_PACKAGE,
		custom
	);

	return JSON.stringify(pkg, null, '\t');
};

module.exports.generate = generate;

var getVersion = function() {
	var version = currentVersion;

	if (!version) {
		version = JSON.parse(
			fs.readFileSync(
				path.join(__dirname, '..', 'package.json'),
				{
					encoding: 'utf8'
				}
			)
		).version;

		currentVersion = version;
	}

	return version;
};

module.exports.getVersion = getVersion;