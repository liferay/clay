/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
const readFileSync = require('fs').readFileSync;
const resolve = require('path').resolve;
const safeLoad = require('js-yaml').safeLoad;

// This is a copy of https://github.com/reactjs/reactjs.org/tree/master/plugins/gatsby-transformer-authors-yaml
exports.sourceNodes = ({actions}) => {
	const {createNode} = actions;

	const path = resolve(__dirname, '../../content/authors.yml');
	const file = readFileSync(path, 'utf8');
	const authors = safeLoad(file);

	// authors.yml structure is {[username: string]: {name: string, url: string}}
	Object.keys(authors).forEach(username => {
		const author = authors[username];

		createNode({
			children: [],
			frontmatter: author,
			id: username,
			internal: {
				contentDigest: JSON.stringify(author),
				type: 'AuthorYaml',
			},
			parent: 'AUTHORS',
		});
	});
};
