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

	var sectionMap = {};

	var filePaths = Object.keys(files).reduce(
		function(prev, item, index) {
			var file = files[item];

			var arr = prev;

			if (file.template) {
				var section = file.section;

				if (section) {
					var sectionObj = sectionMap[section];

					if (!sectionObj) {
						sectionObj = {
							title: section,
							children: []
						};

						sectionMap[section] = sectionObj;

						prev.push(sectionObj);
					}

					// sectionObj.children.push(file);

					arr = sectionObj.children;
				}

				arr.push(file);
			}

			return prev;
		},
		[]
	);



	filePaths.sort(
		function(a, b) {
			var indexA = a.title;
			var indexB = b.title;

			return indexA > indexB ? 1 : indexA < indexB ? -1 : 0;
		}
	);

	var move = function (array, fromIndex, toIndex) {
		array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);

		return array;
	};

	var sortByIndex = function(array) {
		var clone = array.slice();

		clone.forEach(
			function(item, index) {
				var navIndex = item.navIndex;

				if (!Y.Lang.isUndefined(navIndex)) {
					if (navIndex == 'last') {
						navIndex = array.length;
					}

					move(array, index, navIndex);
				}
			}
		);

		return array;
	};

	var recursiveSort = function(array) {
		array = sortByIndex(array);

		array.forEach(
			function(item, index, collection) {
				if (item.children) {
					item.children = sortByIndex(item.children);
				}
			}
		);

		return array;
	};

	recursiveSort(filePaths);

	metalsmith.metadata().nav = filePaths;
};

module.exports = function() {
	return function(files, metalsmith, done) {
		iterateFiles(files, metalsmith, done);
		// console.log(Object.keys(files));
		// console.log();
		var nav = metalsmith.metadata().nav;
		var navs = [];
		metalsmith.metadata().navs = navs;
		done();
	};
};