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
	var navList = {};

	metalsmith.metadata().nav = nav;
	metalsmith.metadata().toTitleCase = toTitleCase;

	metalsmith.metadata().navData = navData;
	metalsmith.metadata().navList = navList;

	for (var i in files) {
		var file = files[i];

		if (file.template) {
			file.subNav = null;
			var basename = path.basename(i, '.html');
			// console.log('src/' + i.replace(/\.html$/, ''), basename, );
			var title = file.title || toTitleCase(basename);

			var parent = nav;
			var navTitle = title;

// console.log(file.path);
			var basePath = i.replace('content/', '');
			var section = path.dirname(basePath);
			var re = new RegExp('([^' + path.sep + ']+)' + path.sep + 'index\.html$');
			var origPath = basePath.replace(re, '$1.html');
			var srcPath = 'src/content/' + origPath;

			if (origPath.indexOf(path.sep) > -1) {
				var dirPath = path.join(path.dirname(srcPath), path.basename(origPath, '.html'));

				if (fs.existsSync(dirPath)) {
					// subnav
					// console.log('path', srcPath);
				}
			}
			else {
				// console.log(origPath);
			}

			var formattedSections = section.split('/');

			var heading = file.heading;
			var parentObj = navList;

			// if (heading) {
			// 	var sectionObj = navList[heading];

			// 	if (!sectionObj) {
			// 		sectionObj = {};
			// 		navList[heading] = sectionObj;
			// 	}

			// 	parentObj = sectionObj;
			// }

			parentObj[basePath] = file;
			// if (heading) {
			// 	formattedSections.splice(formattedSections.length - 1, 0, '__' + heading);
			// }

			var navValue = {
				_path: i,
				_file: file
			};

// console.log(formattedSections, section);
			navTitle = formattedSections.pop();
			if (formattedSections.length) {
				// console.log('not root', formattedSections);

				var o = nav;

				formattedSections = formattedSections.forEach(
					function(item, index) {
						// var obj = o[item];
						// if (!obj) {
						// 	obj = {children: {}};
						// 	o[item] = obj;
						// }

						// o = obj;
						o[item] = o[item] || {};
						o = o[item];
						// return toTitleCase(item.replace(/\./g, TOKEN_DOT));
					}
				);

				// parent = Y.namespace.call(nav, formattedSections);

				parent = o;

// 				if (origPath.indexOf(path.sep) > -1) {
// 					var dirPath = path.join(path.dirname(srcPath), path.basename(origPath, '.html'));
// console.log(origPath, formattedSections);
// 					if (fs.existsSync(dirPath)) {
// 						// subnav
// 						console.log('path', srcPath);
// 					}
// 				}
			}

			parent[navTitle] = navValue;
			navData[basePath] = navValue;
		}
	}
};

module.exports = function() {
	return function(files, metalsmith, done) {
		iterateFiles(files, metalsmith, done);
		// console.log(Object.keys(files));
		// console.log();
		var nav = metalsmith.metadata().nav;
		var navs = [];
		metalsmith.metadata().navs = navs;

		var recurse = function(item, index, parentItem, parentIndex) {
			if (index.indexOf('_') === 0) {
				return;
			}

			var hasFile = !!(parentItem && parentItem._file);

			if (Y.Lang.isObject(item)) {
				Y.Object.each(item, function(subItem, subIndex) {
					recurse(subItem, subIndex, item, index);
				});
			}

			// console.log('---', index, hasFile);

			if (hasFile) {
				// console.log('has file', item._path, parentItem._path, index);
				// Link with subnav
				parentItem._file.subNav = parentItem._file.subNav || {};
				parentItem._file.subNav[index] = item;
				item._file.subNav = parentItem._file.subNav;
				item._parent = parentItem;
				delete parentItem[index];
			}
			else if (parentItem) {
				parentItem._sections = parentItem._sections || {};
				parentItem._sections[index] = item;
				item._parent = parentItem;
				delete parentItem[index];
				// console.log('has parent, but no file object', parentIndex + '/' + index);
			}
			else {
				// console.log('has neither file nor parent', item._path);
				// section heading
			}

			if (item._file) {
				// if (item._parent) {
				// 	console.log(item._parent._path, item._path, index);
				// }
				// if (item._parent._sections) {
				// 	console.log('has subNav', item._path, parentItem._path);
				// }
			}
		};
		Y.Object.each(
			nav,
			function(item, index, collection) {
				recurse(item, index, null, null);
			}
		);

		// console.log(nav);
		// var keys = Object.keys(metalsmith.metadata().navList);
		// var obj = {};
		// keys.forEach(
		// 	function(item, index) {
		// 		var sections = item.split(path.sep);

		// 		var fileName = sections.pop();

		// 		console.log(fileName, sections);

		// 		if (sections.length > 1) {

		// 		}
		// 	}
		// );
		done();
	};
};