/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs');
const os = require('os');
const Bundler = require('parcel-bundler');
const path = require('path');
const zlib = require('zlib');

const generateTable = require('./generateTable');

const CLI_ARGS = process.argv.slice(2);

const TOTAL_THRESHHOLD_PERCENT = 5;

const WORKSPACE_PACKAGES_WHITELIST = [
	'browserslist-config-clay',
	'demos',
	'generator-clay-component',
];

const TEMP_DIR = os.tmpdir();

const getGzipSize = (relPath) =>
	zlib.gzipSync(fs.readFileSync(path.join(__dirname, relPath))).length;

function main() {
	const packages = fs.readdirSync('packages', {withFileTypes: true});

	const entryFiles = packages
		.filter(({name}) => !WORKSPACE_PACKAGES_WHITELIST.includes(name))
		.map(({name}) => {
			return path.join(
				__dirname,
				'../../packages/',
				name,
				'lib/index.js'
			);
		});

	const bundler = new Bundler(entryFiles, {
		cacheDir: '.parcel-cache',
		outDir: '.parcel-ci-builds',
		sourceMaps: false,
		watch: false,
	});

	bundler.on('bundled', () => {
		const jsBundles = fs.readdirSync('.parcel-ci-builds', {
			withFileTypes: true,
		});

		const cssData = {
			'@clayui/css:atlas': getGzipSize(
				'../../packages/clay-css/lib/css/atlas.css'
			),
			'@clayui/css:base': getGzipSize(
				'../../packages/clay-css/lib/css/base.css'
			),
		};

		const packageStats = jsBundles.reduce((acc, {name}) => {
			acc[name] = getGzipSize(
				`../../.parcel-ci-builds/${name}/lib/index.js`
			);

			return acc;
		}, cssData);

		if (CLI_ARGS.includes('--compare')) {
			// eslint-disable-next-line @liferay/no-dynamic-require
			const prevStats = require(path.join(
				TEMP_DIR,
				'/.parcel-ci-build.json'
			));

			const [table, totalDiff] = generateTable(prevStats, packageStats);

			// eslint-disable-next-line
			console.log(table);

			if (Math.abs(totalDiff) > TOTAL_THRESHHOLD_PERCENT) {
				console.warn(
					`WARNING: Total size change was greater than +/- ${TOTAL_THRESHHOLD_PERCENT}%`
				);

				process.exit(1);
			}
		} else {
			fs.writeFileSync(
				path.join(TEMP_DIR, '/.parcel-ci-build.json'),
				JSON.stringify(packageStats)
			);
		}
	});

	bundler.bundle();
}

main();
