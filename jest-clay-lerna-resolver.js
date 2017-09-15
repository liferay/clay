var resolve = require('resolve');

module.exports = function(file, data) {
	if (file.indexOf('clay-') === 0) {
		data.packageFilter = function(package) {
			return { main: package['jsnext:main'] };
		};
	}

	return resolve.sync(file, data);
};
