'use strict';

const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope');
const path = require('path');

const createDocs = (actions, edges) => {
	const {createPage, createRedirect} = actions;

	edges.forEach(({node}) => {
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
