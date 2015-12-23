var fs = require('fs-extra');
var path = require('path');

var _ = require('./lodash_utils');

var format = _.cached(
	function(str) {
		str = String(str);

		return str.replace(
			/_/g, '-'
		);
	}
);

var iterateFiles = function(files, metalsmith, done) {
	var nav = {};

	for (var i in files) {
		var file = files[i];

		if (i.indexOf('CHANGELOG') === 0) {
			var contents = file.contents.toString();

			contents = '<div class="col-md-12">' + contents + '</div>';

			file.contents = new Buffer(contents);
		}

	}
};

module.exports = function() {
	return function(files, metalsmith, done) {
		iterateFiles(files, metalsmith, done);
		done();
	};
};