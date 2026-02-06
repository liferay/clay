/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import esbuild from 'esbuild';
import fs from 'fs';
import os from 'os';
import path from 'path';
import zlib from 'zlib';

import {generateTable} from './generateTable.mjs';

const CLI_ARGS = process.argv.slice(2);

const TOTAL_THRESHHOLD_PERCENT = 5;

const WORKSPACE_PACKAGES_WHITELIST = [
	'browserslist-config-clay',
	'demos',
	'generator-clay-component',
	'clay-css',
	'tsconfig.json',
];

const TEMP_DIR = os.tmpdir();

const getGzipSize = (relPath) =>
	zlib.gzipSync(fs.readFileSync(path.join(import.meta.dirname, relPath)))
		.length;

async function main() {
	const packages = fs.readdirSync('packages', {withFileTypes: true});

	const entryFiles = packages
		.filter(({name}) => !WORKSPACE_PACKAGES_WHITELIST.includes(name))
		.map(({name}) => {
			return [
				path.join(
					import.meta.dirname,
					'../../packages/',
					name,
					'lib/cjs/index.js'
				),
				path.join(
					import.meta.dirname,
					'../../packages/',
					name,
					'lib/esm/index.js'
				),
			];
		});

	const bundles = await esbuild.build({
		bundle: true,
		entryPoints: entryFiles.flat(),
		external: [
			'@clayui/*',
			'classnames',
			'domain',
			'prop-types',
			'react-dnd-html5-backend',
			'react-dnd',
			'react-dom',
			'react-transition-group',
			'react',
			'warning',
		],
		format: 'esm',
		metafile: true,
		minify: true,
		outdir: '.esbuild-ci-builds',
	});

	const packageStats = Object.keys(bundles.metafile.outputs).reduce(
		(acc, key) => {
			const item = bundles.metafile.outputs[key];

			const name = item.entryPoint.replace('packages/', '');

			acc[name.replace('lib/', '').replace('/index.js', '')] =
				getGzipSize(`../../.esbuild-ci-builds/${name}`);

			return acc;
		},
		{
			'@clayui/css:atlas': getGzipSize(
				'../../packages/clay-css/lib/css/atlas.css'
			),
			'@clayui/css:base': getGzipSize(
				'../../packages/clay-css/lib/css/base.css'
			),
		}
	);

	if (CLI_ARGS.includes('--compare')) {
		const prevStats = fs.readFileSync(
			path.join(TEMP_DIR, '/.esbuild-ci-build.json'),
			'utf8'
		);

		const [table, totalDiff] = generateTable(
			JSON.parse(prevStats),
			packageStats
		);

		// eslint-disable-next-line
		console.log(table);

		if (Math.abs(totalDiff) > TOTAL_THRESHHOLD_PERCENT) {
			console.warn(
				`WARNING: Total size change was greater than +/- ${TOTAL_THRESHHOLD_PERCENT}%`
			);

			process.exit(1);
		}
	}
	else {
		fs.writeFileSync(
			path.join(TEMP_DIR, '/.esbuild-ci-build.json'),
			JSON.stringify(packageStats)
		);
	}
}

main();
