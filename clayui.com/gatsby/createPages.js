'use strict';

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const path = require('path');

const {GATSBY_CLAY_NIGHTLY} = process.env;

const createDocs = (actions, edges) => {
	const {createPage, createRedirect} = actions;

	edges
		.filter(({node: {fields: {nightly}}}) => GATSBY_CLAY_NIGHTLY === 'true' ? true : !nightly)
		.forEach(({node}) => {
			const {slug, redirect, layout} = node.fields;

			if (redirect) {
				const slugWithBar = slug.startsWith('/') ? slug : `/${slug}`;
				const fromPath = slugWithBar.endsWith('index.html') ? slugWithBar.replace('index.html', '') : slugWithBar;

				createRedirect({
					fromPath,
					isPermanent: true,
					redirectInBrowser: true,
					toPath: redirect,
				});
			}

			if (slug.includes('docs/') && layout !== 'redirect') {
				createPage({
					path: slug,
					component: componentWithMDXScope(
						path.resolve(__dirname, '../src/templates/docs.js'),
						node.code.scope,
						__dirname,
					),
					context: {
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
							slug
							title
							weight
						}
						code {
							scope
						}
					}
				}
			}
		}
	`).then(({data, errors}) => {
		if (errors) {
			return Promise.reject(errors);
		}

		const {edges} = data.allMdx;

		createDocs(actions, edges);
	});
};
