var path = require('path');
var pkg = require(path.join(__dirname, 'package.json'));

var name = pkg.name;

if (name === 'lexicon') {
	module.exports = {
		src: require('lexicon-src'),
		release: require('lexicon-release')
	}
}
else {
	module.exports = __dirname;
}