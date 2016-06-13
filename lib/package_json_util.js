var _ = require('lodash');
var fs = require('fs');
var path = require('path');

var pkg = require('../package.json');

var currentVersion;

var BASE_PACKAGE = _.pick(
	pkg,
	[
		'author',
		'bugs',
		'contributors',
		'description',
		'homepage',
		'license',
		'main',
		'name',
		'repository'
	]
);

var generate = function(name, version, description, custom) {
	var pkg = _.merge(
		{},
		BASE_PACKAGE,
		{
			description: description,
			name: name,
			version: version
		},
		custom
	);

	return JSON.stringify(pkg, null, '\t');
};

exports.generate = generate;

var getVersion = function() {
	if (!currentVersion) {
		currentVersion = require('../package.json').version;
	}

	return currentVersion;
};

exports.getVersion = getVersion;