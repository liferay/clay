/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs');
const Bundler = require('parcel-bundler');
const path = require('path');
const zlib = require('zlib');

const processMarkdownTable = require('./processMarkdownTable');

const WORKSPACE_PACKAGES_WHITELIST = [
	'browserslist-config-clay',
	'demos',
	'generator-clay-component',
];

const convertBytes = function(bytes) {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

	if (bytes == 0) {
		return 'n/a';
	}

	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);

	if (i == 0) {
		return `${bytes} ${sizes[i]}`;
	}

	return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
};

const getTotalSize = function(filePath) {
	return convertBytes(zlib.gzipSync(fs.readFileSync(filePath)).length);
};

function run() {
	const packages = fs.readdirSync('packages', {withFileTypes: true});

	const entryFiles = packages
		.filter(({name}) => !WORKSPACE_PACKAGES_WHITELIST.includes(name))
		.map(({name}) => {
			return path.join(__dirname, '../packages/', name, 'lib/index.js');
		});

	const bundler = new Bundler(entryFiles, {
		cacheDir: '.parcel-cache',
		outDir: '.parcel-ci-builds',
		sourceMaps: false,
		watch: false,
	});

	bundler.on('bundled', () => {
		const bundles = fs.readdirSync('.parcel-ci-builds', {
			withFileTypes: true,
		});

		const bundleData = {};

		bundles.map(({name}) => {
			bundleData[name] = getTotalSize(
				path.join(
					__dirname,
					'../.parcel-ci-builds/',
					name,
					'lib/index.js'
				)
			);
		});

		fs.writeFileSync(
			path.join(__dirname, '../.parcel-ci-build.txt'),
			processMarkdownTable(bundleData)
		);
	});

	bundler.bundle();
}

run();
