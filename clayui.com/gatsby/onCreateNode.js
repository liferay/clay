/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const path = require('path');

const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

module.exports = exports.onCreateNode = ({node, actions, getNode}) => {
	const {createNodeField} = actions;

	if (
		node.internal.type === 'Mdx' ||
		node.internal.type === 'MarkdownRemark'
	) {
		const {
			alwaysActive,
			description,
			draft,
			layout,
			nightly,
			order,
			packageNpm,
			packageStatus,
			packageVersion,
			path: permalink,
			redirect,
			redirectFrom,
			title,
			version,
			indexVisible,
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
				  node,
				  name: 'date',
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
			node,
			name: 'path',
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
			node,
			name: 'slug',
			value: slug,
		});

		createNodeField({
			node,
			name: 'title',
			value: title,
		});

		createNodeField({
			node,
			name: 'order',
			value: order || 0,
		});

		createNodeField({
			node,
			name: 'redirect',
			value: redirect || '',
		});

		createNodeField({
			node,
			name: 'redirectFrom',
			value: redirectFrom || '',
		});

		createNodeField({
			node,
			name: 'layout',
			value: layout || '',
		});
	}
};
