var path = require('path');

var setRootPath = function(file) {
	var fullPath = file.path;
	var rootPath = '.';

	if (fullPath) {
		rootPath = path.relative(fullPath, '.');
	}

	file.rootPath = rootPath;

	return file;
};
var iterateFiles = function(files, metalsmith, done) {
	for (var i in files) {
		var file = files[i];

		if (file.template) {
			setRootPath(file);
		}
	}
};
module.exports = function() {
	return function(files, metalsmith, done) {
		iterateFiles(files, metalsmith, done);
		done();
	};
};