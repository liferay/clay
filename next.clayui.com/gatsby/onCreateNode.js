/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const path = require('path');

// eslint-disable-next-line no-useless-escape
const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

module.exports = exports.onCreateNode = ({actions, getNode, node}) => {
	const {createNodeField} = actions;

	if (
		node.internal.type === 'Mdx' ||
		node.internal.type === 'MarkdownRemark'
	) {
		const {
			alwaysActive,
			description,
			draft,
			indexVisible,
			layout,
			nightly,
			order,
			packageNpm,
			packageStatus,
			packageVersion,
			path: permalink,
			redirect,
			redirectFrom,
			sibling,
			title,
			version,
		} = node.frontmatter;
		const {relativePath, sourceInstanceName} = getNode(node.parent);

		let slug = permalink;

		if (!slug) {
			if (relativePath.includes('docs')) {
				if (relativePath.endsWith('.md')) {
					slug = relativePath.replace('.md', '.html');
				} else {
					slug = relativePath.replace('.mdx', '.html');
				}
			}

			if (relativePath.includes('blog')) {
				const match = BLOG_POST_FILENAME_REGEX.exec(relativePath);
				const year = match[1];
				const month = match[2];
				const day = match[3];
				const filename = match[4];

				slug = `/blog/${year}/${month}/${day}/${filename}.html`;

				const date = new Date(year, month - 1, day);

				createNodeField({
					name: 'date',
					node,
					value: date.toJSON(),
				});
			}
		}

		createNodeField({
			name: 'indexVisible',
			node,
			value: indexVisible || false,
		});

		createNodeField({
			name: 'path',
			node,
			value: path.join(sourceInstanceName, relativePath),
		});

		createNodeField({
			name: 'alwaysActive',
			node,
			value: alwaysActive || false,
		});

		createNodeField({
			name: 'draft',
			node,
			value: draft || false,
		});

		createNodeField({
			name: 'packageStatus',
			node,
			value: packageStatus || '',
		});

		createNodeField({
			name: 'packageVersion',
			node,
			value: packageVersion || '',
		});

		createNodeField({
			name: 'description',
			node,
			value: description || '',
		});

		createNodeField({
			name: 'packageNpm',
			node,
			value: packageNpm || '',
		});

		createNodeField({
			name: 'version',
			node,
			value: version || '',
		});

		createNodeField({
			name: 'nightly',
			node,
			value: nightly ? true : false,
		});

		createNodeField({
			name: 'title',
			node,
			value: node.frontmatter.title,
		});

		createNodeField({
			name: 'slug',
			node,
			value: slug,
		});

		createNodeField({
			name: 'title',
			node,
			value: title,
		});

		createNodeField({
			name: 'order',
			node,
			value: order || 0,
		});

		createNodeField({
			name: 'redirect',
			node,
			value: redirect || '',
		});

		createNodeField({
			name: 'redirectFrom',
			node,
			value: redirectFrom || '',
		});

		createNodeField({
			name: 'sibling',
			node,
			value: sibling || '',
		});

		createNodeField({
			name: 'layout',
			node,
			value: layout || '',
		});
	}
};
