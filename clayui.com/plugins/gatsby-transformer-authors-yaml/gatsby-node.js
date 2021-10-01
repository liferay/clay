/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const {resolve} = require('path');

// This is a inspired by https://github.com/reactjs/reactjs.org/tree/master/plugins/gatsby-transformer-authors-yaml
exports.sourceNodes = ({actions}) => {
	const {createNode} = actions;

	// eslint-disable-next-line @liferay/no-dynamic-require
	const authors = require(resolve(__dirname, '../../content/authors.json'));

	Object.keys(authors).forEach((username) => {
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
