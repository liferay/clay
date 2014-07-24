var fs = require('fs-extra');
var path = require('path');
var Y = require('yui').YUI();

var toTitleCase = Y.cached(
	function(str) {
		str = String(str);

		return str.split(/[-_]/).join(' ').replace(
			/\w\S*/g,
			function(txt){
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}
		);
	}
);

var TOKEN_DOT = '\u2024';

var setRootPath = function(file) {
	var fullPath = file.path;
	var rootPath = '.';

	if (fullPath) {
		rootPath = path.relative(fullPath, '.');
	}

	file.rootPath = rootPath;

	return file;
};

var getNavItem = function(filePath, file) {
	var title = file.title || toTitleCase(path.basename(filePath, '.html'));

	return {
		toTitleCase: toTitleCase,
		title: title
	};
};

var iterateFiles = function(files, metalsmith, done) {
	var nav = {};
	var navData = {};

	metalsmith.metadata().nav = nav;

	// for (var i in files) {files[i].rootPath = '';}return;

	metalsmith.metadata().navData = navData;

	for (var i in files) {
		var file = files[i];
		if (file.template) {
			var title = file.title || toTitleCase(path.basename(i, '.html'));

			var parent = nav;
			var navTitle = title;

			var fullPath = file.path;
			var rootPath = '.';

			if (fullPath) {
				rootPath = path.relative(fullPath, '.');
				// path.replace(/[^\/]+/g, '..')
			}

			file.rootPath = rootPath;
// console.log(file.path);
			var section = path.dirname(i).replace('content/', '');

			var formattedSections = section.split('/');

			if (formattedSections.length > 1) {
				navTitle = toTitleCase(formattedSections.pop());

				formattedSections = formattedSections.map(
					function(item, index) {
						return toTitleCase(item.replace(/\./g, TOKEN_DOT));
					}
				).join('.');

				parent = Y.namespace.call(nav, formattedSections);
			}

			parent[navTitle] = i;

			navData[i] = file;
		}
	}
};

module.exports = function() {
	return function(files, metalsmith, done) {
		iterateFiles(files, metalsmith, done);
		done();
	};
};