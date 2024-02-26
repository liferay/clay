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

const getFileName = (path) => {
	const uri = path.split('/');

	return uri[uri.length - 1].replace('.html', '');
};

const slugWithBar = (path) => {
	return path.startsWith('/') ? path : `/${path}`;
};

const getTabs = (permalink, pathGroup) => {
	const sortTabs = (a) => (a.name === 'API' ? 1 : -1);
	const fileSlug = getFileName(permalink);

	const tabs = pathGroup.filter(
		({
			node: {
				fields: {mainTabURL, slug, type},
			},
		}) => {
			if (type === 'LiferayDocument') {
				return slug.substring(1) === fileSlug;
			}

			return mainTabURL === permalink;
		}
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
						fields: {slug, type},
					},
				}) => {
					if (type === 'LiferayDocument') {
						return {
							href: `${permalink.replace(
								'.html',
								''
							)}/design.html`,
							name: 'Design',
						};
					}

					return {
						href: slug,
						name: TAB_MAP_NAME[path.basename(slug, '.html')],
					};
				}
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
					const tabs = getTabs(mainTabURL || slug, pathGroup);
					const fileSlug = getFileName(mainTabURL || slug);

					const pagePathGroup = pathGroup
						.filter(
							({
								node: {
									fields: {type},
								},
							}) => type !== 'LiferayDocument'
						)
						.map(
							({
								node: {
									fields: {slug},
								},
							}) => slug
						);

					const designPageData = pathGroup.find(
						(item) =>
							item.node.fields.slug.substring(1) === fileSlug
					);
					const designPage = tabs.find(
						(item) => item.name === 'Design'
					);

					if (designPage) {
						createPage({
							component: template,
							context: {
								mainTabURL,
								pageRemote: {
									html: designPageData.node.fields.html,
									title: designPageData.node.fields.title,
								},
								pathGroup: pagePathGroup,
								slug: designPage.href,
								tabs,
							},
							path: designPage.href,
						});
					}

					createPage({
						component: template,
						context: {
							mainTabURL,
							pageRemote: {},
							pathGroup: pagePathGroup,
							slug,
							tabs,
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
			allLiferayDocument {
				edges {
					node {
						type
						id
						title
						html
						slug
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

		const allDocuments = data.allLiferayDocument.edges.map(({node}) => ({
			node: {fields: node},
		}));

		if (data.allMdx.edges) {
			createDocs(actions, data.allMdx.edges, true, [
				...pathGroup,
				...allDocuments,
			]);
		}

		createDocs(actions, data.allMarkdownRemark.edges, false, [
			...pathGroup,
			...allDocuments,
		]);

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
