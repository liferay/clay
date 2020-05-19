/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const clay = require('@clayui/css');
const path = require('path');

module.exports = {
	mapping: {
		'MarkdownRemark.frontmatter.author': 'AuthorYaml',
	},
	plugins: [
		'gatsby-plugin-typescript',
		'gatsby-transformer-authors-yaml',
		'gatsby-plugin-meta-redirect',
		{
			options: {
				includePaths: clay.includePaths.concat(
					path.join(clay.includePaths[0], 'node_modules')
				),
				precision: 8,
			},
			resolve: 'gatsby-plugin-sass',
		},
		{
			options: {
				name: 'packages',
				path: `${__dirname}/content`,
			},
			resolve: 'gatsby-source-filesystem',
		},
		{
			options: {
				extensions: ['.mdx'],
				gatsbyRemarkPlugins: [
					{
						resolve: path.resolve(
							__dirname,
							'./plugins/gatsby-remark-foreach-icons'
						),
					},
					{
						options: {
							classPrefix: 'gatsby-code-',
						},
						resolve: 'gatsby-remark-prismjs',
					},
					{
						resolve: path.resolve(
							__dirname,
							'./plugins/gatsby-remark-use-clipboard'
						),
					},
					{
						resolve: path.resolve(
							__dirname,
							'./plugins/gatsby-remark-api-table'
						),
					},
				],
			},
			resolve: 'gatsby-mdx',
		},
		{
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-foreach-icons',
					},
					{
						options: {
							classPrefix: 'gatsby-code-',
						},
						resolve: 'gatsby-remark-prismjs',
					},
					{
						resolve: 'gatsby-remark-use-clipboard',
					},
					{
						resolve: 'gatsby-remark-typography',
					},
				],
			},
			resolve: 'gatsby-transformer-remark',
		},
		{
			options: {
				trackingId: 'UA-37033501-10',
			},
			resolve: 'gatsby-plugin-google-analytics',
		},
		'gatsby-plugin-react-helmet',
	],
};
