/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const {ensureDir, exists, writeFile} = require('fs-extra');
const path = require('path');

const getMetaRedirect = require('./getMetaRedirect');

// Adapted from https://github.com/getchalk/gatsby-plugin-meta-redirect
const writeRedirectsFile = async (redirects, folder, pathPrefix) => {
	if (!redirects.length) {
		return;
	}

	// eslint-disable-next-line
	for (const redirect of redirects) {
		const {fromPath, toPath} = redirect;

		if (fromPath.endsWith('index.html')) {
			continue;
		}

		const FILE_PATH = path.join(
			folder,
			fromPath.replace(pathPrefix, ''),
			'index.html'
		);

		let fileExists;

		try {
			fileExists = await exists(FILE_PATH);
			// eslint-disable-next-line no-empty
		} catch {}

		if (!fileExists) {
			try {
				await ensureDir(path.dirname(FILE_PATH));
			} catch (error) {
				// ignore if the directory already exists;
			}

			const data = getMetaRedirect(toPath);
			await writeFile(FILE_PATH, data);
		}
	}
};

exports.onPostBuild = ({store}) => {
	const {config, program, redirects} = store.getState();

	let pathPrefix = '';
	if (program.prefixPaths) {
		pathPrefix = config.pathPrefix;
	}

	const folder = path.join(program.directory, 'public');

	return writeRedirectsFile(redirects, folder, pathPrefix);
};
