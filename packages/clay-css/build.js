const fs = require('fs');
const path = require('path');
const process = require('process');
const util = require('util');

const sass = require('sass');

const OUTPUT_DIRECTORY = path.resolve('./lib');

const HEADER_REGEXP = /<!--(.*)-->/s;
const CSS_OUTPUT_DIRECTORY = path.join(OUTPUT_DIRECTORY, 'css');
const ICONS_DIRECTORY = path.resolve('./src/images/icons');
const ICONS_OUTPUT_FILEPATH = path.join(
	OUTPUT_DIRECTORY,
	'images/icons/icons.svg'
);
const SASS_SOURCE_DIRECTORY = path.resolve('src/scss');

function copyRecursiveSync(src, dest) {
	const exists = fs.existsSync(src);
	const stats = exists && fs.statSync(src);
	const isDirectory = exists && stats.isDirectory();
	if (isDirectory) {
		if (!fs.existsSync(dest) || !fs.statSync(dest).isDirectory()) {
			fs.mkdirSync(dest, {recursive: true});
		}
		fs.readdirSync(src).forEach((childItemName) => {
			copyRecursiveSync(
				path.join(src, childItemName),
				path.join(dest, childItemName)
			);
		});
	} else {
		fs.copyFileSync(src, dest);
	}
}

function ensureDirectory(directoryPath) {
	return new Promise((resolve, reject) => {
		fs.stat(directoryPath, (error, stats) => {
			if (error) {
				if (error.code === 'ENOENT') {
					fs.mkdir(directoryPath, {recursive: true}, (error) => {
						if (error) {
							reject(error);
						} else {
							resolve(directoryPath);
						}
					});
				} else {
					reject(error);
				}
			}
			resolve(directoryPath);
		});
	});
}

function readFile(url) {
	return new Promise((resolve, reject) => {
		let buffer = Buffer.from('');
		fs.createReadStream(url)
			.on('data', (chunk, enc) => {
				buffer = Buffer.concat([buffer, chunk]);
			})
			.on('close', () => resolve(buffer))
			.on('error', (error) => reject(error));
	});
}

function removeDirectorySync(directoryPath) {
	if (fs.existsSync(directoryPath)) {
		fs.readdirSync(directoryPath).forEach((file) => {
			const filePath = path.join(directoryPath, file);
			if (fs.lstatSync(filePath).isDirectory()) {
				removeDirectorySync(filePath);
			} else {
				fs.unlinkSync(filePath);
			}
		});
		fs.rmdirSync(directoryPath);
	}
}

async function build() {
	await ensureDirectory(OUTPUT_DIRECTORY);

	// Copy source files to "lib" directory
	copyRecursiveSync(
		path.resolve('./src/js'),
		path.join(OUTPUT_DIRECTORY, 'js')
	);
	copyRecursiveSync(
		path.resolve('./src/images/icons'),
		path.join(OUTPUT_DIRECTORY, 'images/icons')
	);
	copyRecursiveSync(path.resolve('./src/scss'), CSS_OUTPUT_DIRECTORY);
	copyRecursiveSync(
		path.join('..', '..', 'LICENSES'),
		path.resolve('./LICENSES')
	);

	// TODO: build:svg:scss-icons
	// Generates _lx-icons-generated.scss.

	// Compile sass
	const fileNames = ['atlas.scss', 'bootstrap.scss', 'base.scss'];

	fileNames.forEach((fileName) => {
		const destinationName = `${path.basename(fileName, '.scss')}.css`;
		const destinationPath = path.join(
			CSS_OUTPUT_DIRECTORY,
			destinationName
		);

		const results = sass.renderSync({
			file: path.join(CSS_OUTPUT_DIRECTORY, fileName),
			outFile: `./${destinationName}`,
			sourceMap: true,
			sourceMapContents: true,
			sourceMapRoot: '../../',
		});

		fs.writeFileSync(destinationPath, results.css);
		fs.writeFileSync(`${destinationPath}.map`, results.map);
	});

	removeDirectorySync(path.join(CSS_OUTPUT_DIRECTORY, 'atlas'));
	removeDirectorySync(path.join(CSS_OUTPUT_DIRECTORY, 'bootstrap'));
	removeDirectorySync(path.join(CSS_OUTPUT_DIRECTORY, 'cadmin'));
	removeDirectorySync(path.join(CSS_OUTPUT_DIRECTORY, 'components'));
	removeDirectorySync(path.join(CSS_OUTPUT_DIRECTORY, 'functions'));
	removeDirectorySync(path.join(CSS_OUTPUT_DIRECTORY, 'mixins'));
	removeDirectorySync(path.join(CSS_OUTPUT_DIRECTORY, 'mixins'));
	removeDirectorySync(path.join(CSS_OUTPUT_DIRECTORY, 'site'));
	removeDirectorySync(path.join(CSS_OUTPUT_DIRECTORY, 'variables'));

	// Remove *.scss files from lib/css
	fs.readdirSync(CSS_OUTPUT_DIRECTORY).forEach((file) => {
		const filePath = path.join(CSS_OUTPUT_DIRECTORY, file);
		if (
			!fs.lstatSync(filePath).isDirectory() &&
			path.extname(file) === '.scss'
		) {
			fs.unlinkSync(filePath);
		}
	});

	// Build icons.svg file
	await buildIconsSvg();
}

function transformSvgFiles(files) {
	return new Promise(async function (resolve, reject) {
		const outputFileContents = [
			'<?xml version="1.0" encoding="UTF-8"?>',
			'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">',
			'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">',
		];

		for (let i = 0; i < files.length; i++) {
			const file = files[i];

			if (path.extname(file) !== '.svg') {
				continue;
			}

			const fileName = path.basename(file, '.svg');

			const data = await readFile(`${ICONS_DIRECTORY}${path.sep}${file}`);

			const fileOutput = data
				.toString()
				.replace(HEADER_REGEXP, '')
				.replace(/<svg/gm, '<symbol')
				.replace(
					/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/gm,
					`id="${fileName}"`
				)
				.replace(/<\/svg/gm, '</symbol')
				.replace(/\n/gm, '')
				.replace(/\t/gm, '');

			outputFileContents.push(fileOutput);
		}

		outputFileContents.push('</svg>');

		resolve(outputFileContents.join('').replace(/\n/gm, ''));
	});
}

function buildIconsSvg() {
	return new Promise((resolve, reject) => {
		fs.readdir(ICONS_DIRECTORY, (error, files) => {
			if (error) {
				reject(error);
			}

			return ensureDirectory(path.dirname(ICONS_OUTPUT_FILEPATH))
				.then((directoryPath) => {
					transformSvgFiles(files).then((data) => {
						fs.writeFile(ICONS_OUTPUT_FILEPATH, data, (error) => {
							if (error) {
								reject(error);
							}
							resolve(ICONS_OUTPUT_FILEPATH);
						});
					});
				})
				.catch((error) => {
					reject(error);
				});
		});
	});
}

function usage() {
	console.log('usage: build.js COMMAND');
	console.log('COMMAND can have one of the following values:');
	console.log('all:           build everything');
	console.log('svg:           generate icon svg file');
}

function main() {
	const task = process.argv.length < 3 ? 'all' : process.argv[2];

	switch (task) {
		case 'all':
			build()
				.then(() => {
					console.log('Build successful');
				})
				.catch((error) => {
					console.log('Build error:\n', error);
				});
			break;
		case 'svg':
			buildIconsSvg()
				.then((result) => {
					console.log('Icons SVG file generated');
				})
				.catch((error) => {
					console.log('Build error:\n', error);
				});
			break;
		default:
			usage();
			break;
	}
}

main();
