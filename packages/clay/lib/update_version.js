var fs = require('fs');

module.exports = function(version) {
	var pkg = require('../package.json');

	pkg.version = version;

	fs.writeFileSync('package.json', JSON.stringify(pkg, null, '  ') + '\n', 'utf8');
};