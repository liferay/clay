'use strict';

const arrangeIntoTree = require("../src/utils/arrangeIntoTree");
const fixHtmlAst = require("../src/utils/fixHtmlAst");
const path = require("path");

module.exports = async ({ boundActionCreators, graphql }) => {
	const { createPage, createRedirect } = boundActionCreators;

	const docsPostTemplate = path.resolve(__dirname, '../src/templates/docs.js');

	createRedirect({
		fromPath: '/index.html',
		redirectInBrowser: true,
		toPath: '/',
	});

	return graphql(`
		{
			allMarkdownRemark(limit: 1000) {
				edges {
					node {
						htmlAst
						fields {
							slug
							title
							weight
							layout
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors);
		}

		const resolveNode = result.data.allMarkdownRemark.edges.map(({ node }, index) => {
			const {
				slug,
				title,
				weight,
				layout
			} = node.fields;
			const slugWithoutExtension = slug.replace('.html', '');
			const pathSplit = slugWithoutExtension.split('/');

			return {
				id: pathSplit[pathSplit.length - 1],
				layout,
				link: '/' + slugWithoutExtension,
				nightly,
				title,
				weight
			};
		});

		const tree = arrangeIntoTree(resolveNode);

		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			const { slug, redirect, layout } = node.fields;

			// This is a hook to fix `xlink:href` for xlinkHref, even if we 
			// switch the docs to xlinkHref the AST passes in small letters. 
			// We are correcting until we have a solution in the package.
			const htmlASTTreated = fixHtmlAst(node.htmlAst);

			if (redirect) {
				const toPath = slug.startsWith('/') ? slug : `/${slug}`;

				createRedirect({
					fromPath: redirect,
					redirectInBrowser: true,
					toPath,
				});
			}

			if (slug.includes('docs/') && layout !== 'redirect') {
				createPage({
					path: slug,
					component: docsPostTemplate,
					context: {
						slug,
						docsPath: JSON.stringify(tree),
						htmlASTTreated: JSON.stringify(htmlASTTreated),
					},
				});
			}
		});
	});
};