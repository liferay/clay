/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

/* eslint-disable liferay/imports-first */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

const {GATSBY_CLAY_NIGHTLY} = process.env;

const TAB_MAP_NAME = {
	css: 'CSS / Markup',
};

const slugWithBar = (path) => {
	return path.startsWith('/') ? path : `/${path}`;
};

const getTabs = (permalink, pathGroup) => {
	const tabs = pathGroup.filter(
		({
			node: {
				fields: {mainTabLink},
			},
		}) => mainTabLink === permalink
	);

	if (tabs.length === 0) {
		return [];
	}

	return [
		{
			href: permalink,
			name: 'React Component',
		},
		...tabs.map(({node: {fields: {slug}}}) => ({
			href: slug,
			name: TAB_MAP_NAME[path.basename(slug, '.html')],
		})),
	];
};

const createDocs = (actions, edges, mdx, pathGroup) => {
	const {createPage, createRedirect} = actions;
	const docsTemplate = path.resolve(__dirname, '../src/templates/docs.js');
	const blogTemplate = path.resolve(__dirname, '../src/templates/blog.js');

	edges
		.filter(({node: {fields: {nightly}}}) =>
			GATSBY_CLAY_NIGHTLY === 'true' ? true : !nightly
		)
		.forEach(
			({
				node: {
					fields: {layout, mainTabLink, redirect, redirectFrom, slug},
				},
			}) => {
				if (redirect) {
					const slugBar = slugWithBar(slug);
					const fromPath = slugBar.endsWith('index.html')
						? slugBar.replace('index.html', '')
						: slugBar.replace('.html', '');

					createRedirect({
						fromPath,
						isPermanent: true,
						redirectInBrowser: true,
						toPath: redirect,
					});
				}

				if (redirectFrom) {
					createRedirect({
						fromPath: redirectFrom,
						isPermanent: true,
						redirectInBrowser: true,
						toPath: slugWithBar(slug),
					});

					if (!slug.endsWith('/')) {
						createRedirect({
							fromPath: `${redirectFrom}/`,
							isPermanent: true,
							redirectInBrowser: true,
							toPath: slugWithBar(slug),
						});
					}
				}

				let template;

				if (slug.includes('blog/')) {
					template = blogTemplate;
				} else if (slug.includes('docs/')) {
					template = docsTemplate;
				}

				if (
					(slug.includes('docs/') || slug.includes('blog/')) &&
					layout !== 'redirect'
				) {
					createPage({
						component: template,
						context: {
							mainTabLink,
							pathGroup: pathGroup.map(
								({
									node: {
										fields: {slug},
									},
								}) => slug
							),
							slug,
							tabs: getTabs(mainTabLink || slug, pathGroup),
						},
						path: slug,
					});
				}
			}
		);
};

module.exports = async ({actions, graphql}) => {
	actions.createRedirect({
		fromPath: '/docs/css/utilities/index.html',
		isPermanent: true,
		redirectInBrowser: true,
		toPath: '/docs/css/utilities/autofit.html',
	});
	actions.createRedirect({
		fromPath: '/docs/css/content/index.html',
		isPermanent: true,
		redirectInBrowser: true,
		toPath: '/docs/css/content/typography.html',
	});

	return graphql(`
		{
			allMdx {
				edges {
					node {
						fields {
							layout
							nightly
							redirect
							redirectFrom
							slug
							mainTabLink
						}
						body
					}
				}
			}
			allMarkdownRemark {
				edges {
					node {
						fields {
							layout
							nightly
							redirect
							redirectFrom
							slug
							mainTabLink
						}
					}
				}
			}
		}
	`).then(async ({data, errors}) => {
		if (errors) {
			return Promise.reject(errors);
		}

		const pathGroup = [
			...data.allMdx.edges,
			...data.allMarkdownRemark.edges,
		].filter(
			({
				node: {
					fields: {mainTabLink},
				},
			}) => mainTabLink
		);

		if (data.allMdx.edges) {
			createDocs(actions, data.allMdx.edges, true, pathGroup);
		}

		createDocs(actions, data.allMarkdownRemark.edges, false, pathGroup);

		const newestBlogEntry = await graphql(
			`
				{
					allMarkdownRemark(
						limit: 1
						filter: {fileAbsolutePath: {regex: "/blog/"}}
						sort: {fields: [fields___date], order: DESC}
					) {
						edges {
							node {
								fields {
									slug
								}
							}
						}
					}
				}
			`
		);

		const newestBlogNode =
			newestBlogEntry.data.allMarkdownRemark.edges[0].node;

		// Blog landing page should always show the most recent blog entry.
		['/blog/', '/blog'].map((slug) => {
			actions.createRedirect({
				fromPath: slug,
				redirectInBrowser: true,
				toPath: newestBlogNode.fields.slug,
			});
		});
	});
};
