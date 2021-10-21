/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

const path = require('path');

const redirects = require('../redirects.json');

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const {GATSBY_CLAY_NIGHTLY} = process.env;

const TAB_MAP_NAME = {
	api: 'API',
	markup: 'Markup',
};

const slugWithBar = (path) => {
	return path.startsWith('/') ? path : `/${path}`;
};

const getTabs = (permalink, pathGroup) => {
	const sortTabs = (a) => (a.name === 'API' ? 1 : -1);

	const tabs = pathGroup.filter(
		({
			node: {
				fields: {mainTabURL},
			},
		}) => mainTabURL === permalink
	);

	if (tabs.length === 0) {
		return [];
	}

	return [
		{
			href: permalink,
			name: 'Examples',
		},
		...tabs
			.map(
				({
					node: {
						fields: {slug},
					},
				}) => ({
					href: slug,
					name: TAB_MAP_NAME[path.basename(slug, '.html')],
				})
			)
			.sort(sortTabs),
	];
};

const createDocs = (actions, edges, mdx, pathGroup) => {
	const {createPage, createRedirect} = actions;
	const docsTemplate = path.resolve(__dirname, '../src/templates/docs.js');
	const blogTemplate = path.resolve(__dirname, '../src/templates/blog.js');

	edges
		.filter(
			({
				node: {
					fields: {nightly},
				},
			}) => (GATSBY_CLAY_NIGHTLY === 'true' ? true : !nightly)
		)
		.forEach(
			({
				node: {
					fields: {layout, mainTabURL, redirect, redirectFrom, slug},
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
							mainTabURL,
							pathGroup: pathGroup.map(
								({
									node: {
										fields: {slug},
									},
								}) => slug
							),
							slug,
							tabs: getTabs(mainTabURL || slug, pathGroup),
						},
						path: slug,
					});
				}
			}
		);
};

module.exports = async ({actions, graphql}) => {
	Object.keys(redirects).forEach((fromPath) => {
		const toPath = redirects[fromPath];

		actions.createRedirect({
			fromPath,
			isPermanent: true,
			redirectInBrowser: true,
			toPath,
		});
	});

	return graphql(`
		{
			allMdx {
				edges {
					node {
						fields {
							layout
							navigationParent
							nightly
							redirect
							redirectFrom
							slug
							mainTabURL
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
							mainTabURL
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
					fields: {mainTabURL},
				},
			}) => mainTabURL
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
