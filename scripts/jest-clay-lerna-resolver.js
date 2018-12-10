'use strict';

const resolve = require('resolve');

module.exports = function(file, data) {
	if (file.indexOf('clay-') === 0) {
		data.packageFilter = function(pkg) {
			return {main: pkg['jsnext:main']};
		};
	}

	return resolve.sync(file, data);
};
