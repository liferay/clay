'use strict';

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const path = require('path');

const {GATSBY_CLAY_NIGHTLY} = process.env;

const slugWithBar = (path) => {
	return path.startsWith('/') ? path : `/${path}`;
};

const createDocs = (actions, edges, mdx) => {
	const {createPage, createRedirect} = actions;
	const docsTemplate = path.resolve(__dirname, '../src/templates/docs.js');

	edges
		.filter(({node: {fields: {nightly}}}) => GATSBY_CLAY_NIGHTLY === 'true' ? true : !nightly)
		.forEach((
			{
				node: {
					fields: {
						layout,
						redirect,
						redirectFrom,
						slug,
					},
					code,
				},
			}
		) => {
			if (redirect) {
				const slugBar = slugWithBar(slug);
				const fromPath = slugBar.endsWith('index.html') ? slugBar.replace('index.html', '') : slugBar;

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
			}

			const component =
				mdx ?
					componentWithMDXScope(
						docsTemplate,
						code.scope,
						__dirname,
					) :
					docsTemplate;

			if (slug.includes('docs/') && layout !== 'redirect') {
				createPage({
					path: slug,
					component,
					context: {
						markdownJsx: mdx,
						slug,
					},
				});
			}
		});
};

module.exports = async ({actions, graphql}) => {
	actions.createRedirect({
		fromPath: '/index.html',
		redirectInBrowser: true,
		toPath: '/',
	});

	return graphql(`
		query {
			allMdx {
				edges {
					node {
						fields {
							layout
							nightly
							redirect
							redirectFrom
							slug
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
						}
					}
				}
			}
		}
	`).then(({data, errors}) => {
		if (errors) {
			return Promise.reject(errors);
		}

		createDocs(actions, data.allMdx.edges, true);
		createDocs(actions, data.allMarkdownRemark.edges, false);
	});
};
