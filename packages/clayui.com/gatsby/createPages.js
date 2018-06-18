'use strict';

const path = require("path");

module.exports = async ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;

	const docsPostTemplate = path.resolve(__dirname, '../src/templates/docs.js');

	return graphql(`
		{
			allMarkdownRemark(limit: 1000) {
				edges {
					node {
						frontmatter {
							path
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
			createPage({
				path: node.frontmatter.path,
				component: docsPostTemplate,
				context: {},
			});
		});
	});
};