/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const clay = require('@clayui/css');
const path = require('path');

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

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
				clayCssSrc: clay.srcDir,
				clayCssSrcIcons: path.join(clay.srcDir, 'images', 'icons'),
				clayuiSrc: path.join(__dirname, 'src'),
				clayuiStatic: path.join(__dirname, 'static'),
			},
			resolve: 'gatsby-plugin-clay-css-tasks',
		},
		{
			options: {
				sassOptions: {
					includePaths: [clay.includePaths[0]],
					precision: 8,
				},
			},
			resolve: 'gatsby-plugin-sass',
		},
		{
			options: {
				name: 'content',
				path: `${__dirname}/content`,
			},
			resolve: 'gatsby-source-filesystem',
		},
		{
			options: {
				ignore: [
					'**/browserslist-config-clay',
					'**/clay-css',
					'**/demos',
					'**/generator-clay-component',
				],
				name: 'packages',
				path: path.join(__dirname, '../packages'),
			},
			resolve: 'gatsby-source-filesystem',
		},
		{
			options: {
				host: process.env.LIFERAY_HOST,
				siteId: process.env.LIFERAY_SITE_ID,
			},
			resolve: 'gatsby-source-liferay',
		},
		{
			options: {
				extensions: ['.mdx'],
				gatsbyRemarkPlugins: [
					{
						options: {
							classPrefix: 'gatsby-code-',
						},
						resolve: 'gatsby-remark-prismjs',
					},
					{
						resolve: path.resolve(
							__dirname,
							'./plugins/gatsby-remark-api-table'
						),
					},
				],
			},
			resolve: 'gatsby-plugin-mdx',
		},
		{
			options: {
				plugins: [
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
				trackingIds: ['UA-790163-35'],
			},
			resolve: 'gatsby-plugin-google-gtag',
		},
		'gatsby-plugin-react-helmet',
	],
};
