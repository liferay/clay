'use strict';

const path = require("path");
const fixHtmlAst = require("../src/utils/fixHtmlAst");

module.exports = async ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;

	const docsPostTemplate = path.resolve(__dirname, '../src/templates/docs.js');

	return graphql(`
		{
			allMarkdownRemark(limit: 1000) {
				edges {
					node {
						htmlAst
						fields {
							slug
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors);
		}

		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			const { slug } = node.fields;

			// This is a hook to fix `xlink:href` for xlinkHref, even if we 
			// switch the docs to xlinkHref the AST passes in small letters. 
			// We are correcting until we have a solution in the package.
			const htmlASTTreated = fixHtmlAst(node.htmlAst);

			if (slug.includes('docs/')) {
				createPage({
					path: slug,
					component: docsPostTemplate,
					context: {
						slug,
						htmlASTTreated: JSON.stringify(htmlASTTreated),
					},
				});
			}
		});
	});
};