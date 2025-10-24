/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/* eslint-disable no-console */

'use strict';

const {exec} = require('child_process');
const fs = require('fs');
const path = require('path');

const SASS_SOURCE_DIRECTORY = path.resolve('src/scss');

let buildTimeout = null;
let isBuilding = false;

function debounce(callback, wait) {
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(buildTimeout);
			callback(...args);
		};

		clearTimeout(buildTimeout);
		buildTimeout = setTimeout(later, wait);
	};
}

function runBuild() {
	if (isBuilding) {
		console.log('Build already in progress, skipping...');
		return;
	}

	isBuilding = true;
	console.log('\n🔨 Building...');

	const startTime = Date.now();

	exec('node ./scripts/build.js', (error, stdout, stderr) => {
		const duration = Date.now() - startTime;

		if (error) {
			console.error(error.message);
			console.error(`❌ Build failed after ${duration}ms:`);
		} else {
			if (stdout) {
				console.log(stdout);
			}

			console.log(`✅ Build completed successfully in ${duration}ms`);
		}

		if (stderr) {
			console.error('stderr:', stderr);
		}

		isBuilding = false;
	});
}

const debouncedBuild = debounce(runBuild, 1000);

function onFileChanged(filename) {
	const isSCSSFile = filename && filename.endsWith('.scss');
	const isGeneratedFile = filename && filename.includes('-generated');

	if (isSCSSFile && !isGeneratedFile && !isBuilding) {
		console.log(`📝 File changed: ${filename}`);
		debouncedBuild();
	}
}

function watchDirectory(dir) {
	try {
		const watchOptions = {recursive: true};
		const watcher = fs.watch(dir, watchOptions, (eventType, filename) =>
			onFileChanged(filename)
		);

		console.log(`👀 Watching ${dir} for SCSS changes...`);

		return watcher;
	} catch (error) {
		console.error(`Failed to watch directory ${dir}:`, error.message);
		return null;
	}
}

function startWatcher() {
	console.log('🚀 Starting Clay CSS watch mode...');
	console.log('Press Ctrl+C to stop watching\n');

	const scssWatcher = watchDirectory(SASS_SOURCE_DIRECTORY);

	process.on('SIGINT', () => {
		console.log('\n\n🛑 Stopping watcher...');

		if (scssWatcher) {
			scssWatcher.close();
		}

		if (buildTimeout) {
			clearTimeout(buildTimeout);
		}

		console.log('👋 Goodbye!');
		process.exit(0);
	});

	console.log('🔨 Running initial build...');
	runBuild();
}

if (!fs.existsSync(SASS_SOURCE_DIRECTORY)) {
	console.error(
		`❌ SCSS source directory not found: ${SASS_SOURCE_DIRECTORY}`
	);
	process.exit(1);
}

startWatcher();
