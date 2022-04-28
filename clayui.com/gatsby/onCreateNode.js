/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const path = require('path');

const getPackageConfig = require('../src/utils/getPackageConfig');

// eslint-disable-next-line no-useless-escape
const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/;

const generateTabSlug = (slug, groupLink) => {
	const tabName = path.basename(slug).split('-')[0];

	return groupLink.replace('.html', `/${tabName}.html`);
};

module.exports = exports.onCreateNode = ({actions, getNode, node}) => {
	const {createNodeField} = actions;

	if (
		node.internal.type === 'Mdx' ||
		node.internal.type === 'MarkdownRemark'
	) {
		const {
			alwaysActive,
			description,
			disableTOC,
			draft,
			indexVisible,
			layout,
			lexiconDefinition = '',
			mainTabURL,
			navigationParent,
			nightly,
			order,
			packageNpm,
			packageStatus,
			packageVersion,
			path: permalink,
			redirect,
			redirectFrom,
			storybookPath,
			title,
			version,
		} = node.frontmatter;

		const {relativePath, sourceInstanceName} = getNode(node.parent);

		let slug = permalink;

		let pkgConfig = null;

		if (packageNpm) {
			pkgConfig = getPackageConfig(packageNpm, '@clayui/');
			if (pkgConfig) {
				pkgConfig = JSON.parse(pkgConfig);
			}
		}

		const pkgVersion = pkgConfig ? pkgConfig.version : packageVersion;

		let pkgStatus = packageStatus;

		if (pkgVersion && packageNpm) {
			const isBeta = ['beta', 'alpha', 'milestone'].some((subs) =>
				pkgVersion.includes(subs)
			);

			pkgStatus = pkgStatus ? pkgStatus : isBeta ? 'Beta' : 'Stable';
		}

		if (!slug) {
			// Create a slug for files that are in component packages, README
			// files or files inside the docs folder.
			if (sourceInstanceName === 'packages' && title) {
				const fileName = path.basename(relativePath).split('.')[0];

				if (relativePath.includes('README')) {
					slug = `docs/components/${packageNpm.replace(
						'@clayui/',
						''
					)}.html`;
				} else if (!mainTabURL) {
					slug = `docs/components/${fileName
						.replace('_', '-')
						.toLowerCase()}.html`;
				}
			}

			// Create the slug for files are inside the content folder that
			// belong to clayui.com package.
			if (
				sourceInstanceName === 'content' &&
				relativePath.includes('docs')
			) {
				if (relativePath.endsWith('.md')) {
					slug = relativePath.replace('.md', '.html');
				} else {
					slug = relativePath.replace('.mdx', '.html');
				}
			}

			// Create the slug for any file that contains `docs` as part of
			// the path, it may be inside the clayui.com package or in the
			// component packages.
			if (mainTabURL && relativePath.includes('docs')) {
				slug = generateTabSlug(relativePath, mainTabURL);
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
			name: 'lexiconDefinition',
			node,
			value: lexiconDefinition,
		});

		createNodeField({
			name: 'draft',
			node,
			value: draft || false,
		});

		createNodeField({
			name: 'packageStatus',
			node,
			value: pkgStatus || '',
		});

		createNodeField({
			name: 'packageVersion',
			node,
			value: pkgVersion || '',
		});

		createNodeField({
			name: 'description',
			node,
			value: description || '',
		});

		createNodeField({
			name: 'disableTOC',
			node,
			value: disableTOC || false,
		});

		createNodeField({
			name: 'packageNpm',
			node,
			value: packageNpm || '',
		});

		createNodeField({
			name: 'storybookPath',
			node,
			value: storybookPath || '',
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
			value: slug || '',
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
			name: 'mainTabURL',
			node,
			value: mainTabURL || '',
		});

		createNodeField({
			name: 'navigationParent',
			node,
			value: navigationParent || '',
		});

		createNodeField({
			name: 'layout',
			node,
			value: layout || '',
		});
	}
};
