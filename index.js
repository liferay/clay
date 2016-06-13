var path = require('path');

var srcDir = path.join(__dirname, 'src');

module.exports = {
	includePaths: [path.join(srcDir, 'scss')],
	buildDir: path.join(__dirname, 'build'),
	srcDir: srcDir
};