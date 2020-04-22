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

/* eslint-enable liferay/imports-first */

const {GATSBY_CLAY_NIGHTLY} = process.env;

const slugWithBar = path => {
	return path.startsWith('/') ? path : `/${path}`;
};

const createDocs = (actions, edges, mdx, blacklist = []) => {
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
					fields: {layout, redirect, redirectFrom, sibling, slug},
				},
			}) => {
				const hasSibling = blacklist.find(
					({
						node: {
							fields: {sibling},
						},
					}) => sibling === slug
				);

				if (hasSibling) {
					return;
				}

				if (redirect) {
					const slugBar = slugWithBar(slug);
					const fromPath = slugBar.endsWith('index.html')
						? slugBar.replace('index.html', '')
						: slugBar;

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
					const blacklistSlugs = blacklist.map(
						({
							node: {
								fields: {sibling},
							},
						}) => sibling
					);

					createPage({
						component: template,
						context: {
							blacklist: blacklistSlugs,
							markdownJsx: mdx,
							sibling,
							slug,
						},
						path: slug,
					});
				}
			}
		);
};

module.exports = async ({actions, graphql}) => {
	actions.createRedirect({
		fromPath: '/index.html',
		redirectInBrowser: true,
		toPath: '/',
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
							sibling
						}
						code {
							scope
						}
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
							sibling
						}
					}
				}
			}
		}
	`).then(async ({data, errors}) => {
		if (errors) {
			return Promise.reject(errors);
		}

		const blacklist = [
			...data.allMdx.edges,
			...data.allMarkdownRemark.edges,
		].filter(
			({
				node: {
					fields: {sibling},
				},
			}) => sibling
		);

		if (data.allMdx.edges) {
			createDocs(actions, data.allMdx.edges, true, blacklist);
		}

		createDocs(actions, data.allMarkdownRemark.edges, false, blacklist);

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
		['/blog/', '/blog'].map(slug => {
			actions.createRedirect({
				fromPath: slug,
				redirectInBrowser: true,
				toPath: newestBlogNode.fields.slug,
			});
		});
	});
};
