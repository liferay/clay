/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

const dateObj = new Date();

const month = dateObj.getMonth() + 1;
const day = dateObj.getDate();
const year = dateObj.getFullYear();

const releaseDateString = `${year}-${month}-${day}`;

const globalChangeLog = path.join(__dirname, '../CHANGELOG.md');

const VERSION_HEADING = /^#+ \[\d/;

const VERSION_LINK = /^#+ (\[\d+\.\d+\.\d+\]\(\S+\))/;

function getChanges(file, packageName) {
	let latestVersionHeader;
	const changes = [];

	const lines = fs.readFileSync(file, 'utf8').split('\n');

	for (const line of lines) {
		if (VERSION_HEADING.test(line)) {
			if (latestVersionHeader) {
				// Making it into this block indicates that we are now looking at the
				// second to last release, one that should already be in the CHANGELOG.
				// This means we already have the content we need.
				break;
			}

			latestVersionHeader = line;
		}

		// The second condition makes sure we don't add the header to our changes.
		if (latestVersionHeader && line !== latestVersionHeader) {
			/**
			 * Be sure to properly nest headers in proper order.
			 * This order of markdown is:
			 * # CHANGELOG
			 * ## {Release date}
			 * ### {Package name}
			 * #### {Fix type (feat, bug, etc.)}
			 * - Commit message and reference
			 */
			let modifiedLine = line.replace(/^(#+)/gm, '$1#');

			// Remove references to the package name since we already have a header
			modifiedLine = modifiedLine.replace(`**${packageName}:**`, '');

			changes.push(modifiedLine);
		}
	}

	// Grabs the markdown link to the specific package version
	const versionLinkMatch = latestVersionHeader.match(VERSION_LINK);

	return {
		changes: changes.join('\n'),
		versionLink: versionLinkMatch ? versionLinkMatch[1] : null,
	};
}

function logError(message) {
	console.error(`Global CHANGELOG: Unable to generate, ${message}`);
}

function main() {
	const diffOutput = execSync(
		'git diff HEAD^ -z --name-only -- "packages/clay-*/CHANGELOG.md"'
	).toString();

	if (!diffOutput) {
		logError(`no diff exists for CHANGELOGS in packages.`);

		return;
	}

	const changelogContents = fs.readFileSync(globalChangeLog, 'utf8');

	if (changelogContents.includes(`## ${releaseDateString}`)) {
		logError(
			`CHANGELOG has already been generated for the ${releaseDateString} release.`
		);

		return;
	}

	const files = diffOutput.split('\0').filter(Boolean);

	let output = `# CHANGELOG\n## ${releaseDateString}\n`;

	for (const file of files) {
		try {
			const packageName = file
				.replace('packages/', '')
				.replace('/CHANGELOG.md', '')
				.replace('clay-', '@clayui/');

			const {changes, versionLink} = getChanges(file, packageName);

			const pkgJson = file.replace('CHANGELOG.md', 'package.json');

			const {version} = JSON.parse(fs.readFileSync(pkgJson));

			output += `\n### ${packageName} (${
				versionLink ? versionLink : version
			})\n`;

			output += `${changes}`;
		} catch (e) {
			logError(
				`unexpected error when trying to generate CHANGELOG for ${file}.`
			);

			return;
		}
	}

	fs.writeFileSync(
		globalChangeLog,
		changelogContents
			? changelogContents.replace(/^# CHANGELOG/, output)
			: output
	);
}

main();
