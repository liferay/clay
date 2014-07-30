var path = require('path');

var REGEX_FILE_PATTERN = /\.(md|html)$/;

var setTemplate = function(file, filePath, files) {
	var ext = path.extname(filePath);

	if (REGEX_FILE_PATTERN.test(ext)) {
		if (!file.template) {
			file.template = 'index.ejs';
		}
	}

	return file;
};
var iterateFiles = function(files, metalsmith, done) {
	for (var i in files) {
		var file = files[i];

		setTemplate(file, i, files);
	}
};
module.exports = function() {
	return function(files, metalsmith, done) {
		iterateFiles(files, metalsmith, done);
		done();
	};
};