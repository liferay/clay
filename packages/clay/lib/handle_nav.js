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

module.exports = function() {
	return function(files, metalsmith, done) {
		var nav = {};

		metalsmith.metadata().nav = nav;

		for (var i in files) {
			var file = files[i];

			if (file.template) {
				var title = file.title || toTitleCase(path.basename(i, '.html'));

				nav[title] = i;
			}
		}

		done();
	}
};