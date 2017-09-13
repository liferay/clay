var path = require('path');
var process = require('process');
var resolve = require('resolve');

module.exports = function(file, data) {
	const relativeDir = path.relative(
		path.resolve(process.cwd(), 'packages'),
		data.basedir,
	);

	if (
		file === 'metal-soy-bundle' ||
		file === 'metal-incremental-dom' ||
		file === 'incremental-dom'
	) {
		data.basedir = path.resolve(
			process.cwd(),
			'packages',
			relativeDir.split(path.sep)[0],
			'node_modules',
			'metal-soy',
		);
	}

	if (file.indexOf('clay-') === 0) {
		let splittedPath = relativeDir.split(path.sep);
		splittedPath.pop();
		splittedPath = splittedPath.join(path.sep);

		data.basedir = path.resolve(process.cwd(), 'packages/', splittedPath);

		const moduleDirectoryPath = `node_modules/${file}/node_modules`;

		if (data.moduleDirectory.indexOf(moduleDirectoryPath) === -1) {
			data.moduleDirectory.push(moduleDirectoryPath);
		}

		data.packageFilter = function(package) {
			return { main: package['jsnext:main'] };
		};
	}

	return resolve.sync(file, data);
};
