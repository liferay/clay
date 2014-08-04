var fs = require('fs-extra');
var path = require('path');
var Y = require('yui').YUI();

var toTitleCase = Y.cached(
	function(str) {
		str = String(str);

		return str.split(/[-_]/).join(' ').replace(
			/\w\S*/g,
			function(txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			}
		);
	}
);

var iterateFiles = function(files, metalsmith, done) {
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

					arr = sectionObj.children;
				}

				arr.push(file);
			}

			return prev;
		},
		[]
	);

	var titleSort = function(a, b) {
		var indexA = a.title;
		var indexB = b.title;

		return indexA > indexB ? 1 : indexA < indexB ? -1 : 0;
	};

	var sortByTitle = function(array) {
		array = array.sort(titleSort);

		return array;
	};

	var move = function (array, fromIndex, toIndex) {
		array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);

		return array;
	};

	var sortBySection = function(array) {
		var clone = array.slice();

		var sectionArray = [];

		for (var i = 0; i < array.length; i++) {
			var item = array[i];

			if (item.children) {
				sectionArray.push(array.splice(i--, 1)[0]);
			}
		};

		sectionArray.sort(titleSort);

		array = sectionArray.concat(array);

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
		array = sortByTitle(array);
		array = sortBySection(array);
		array = sortByIndex(array);

		array.forEach(
			function(item, index, collection) {
				var children = item.children;

				if (children) {
					item.children = recursiveSort(children);
				}
			}
		);

		return array;
	};

	filePaths = recursiveSort(filePaths);

	var metadata = metalsmith.metadata();

	metadata.toTitleCase = toTitleCase;
	metadata.nav = filePaths;
};

module.exports = function() {
	return function(files, metalsmith, done) {
		iterateFiles(files, metalsmith, done);

		done();
	};
};