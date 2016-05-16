var path = require('path');

var setRootPath = function(file) {
	var fullPath = file.path;
	var rootPath = '.';

	if (fullPath) {
		rootPath = path.posix.relative(fullPath, '.');
	}

	file.rootPath = rootPath;

	return file;
};

var replacePathContents = function(file) {
	var contents = file.contents.toString();

	contents = contents.replace(/\{\{rootPath\}\}/g, file.rootPath);
	contents = contents.replace(/\{\{path\}\}/g, file.path);

	file.contents = new Buffer(contents);

	return file;
};

var iterateFiles = function(files, metalsmith, done) {
	for (var i in files) {
		var file = files[i];

		if (file.template) {
			setRootPath(file);
			replacePathContents(file);
		}
	}
};

module.exports = function() {
	return function(files, metalsmith, done) {
		iterateFiles(files, metalsmith, done);
		done();
	};
};