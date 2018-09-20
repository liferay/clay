const {createFilePath} = require(`gatsby-source-filesystem`);

module.exports = exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
	const {createNodeField} = boundActionCreators;

	if (node.internal.type === 'MarkdownRemark') {
		const {
			layout,
			path,
			redirect,
			title,
			weight
		} = node.frontmatter;
		const {relativePath} = getNode(node.parent);

		let slug = path;

		if (!slug) {
			if (relativePath.includes('docs')) {
				slug = relativePath.replace('.md', '.html');
			}
		}

		createNodeField({
			node,
			name: 'slug',
			value: slug,
		});

		createNodeField({
			node,
			name: 'title',
			value: title,
		});

		createNodeField({
			node,
			name: 'weight',
			value: weight || 0,
		});

		createNodeField({
			node,
			name: 'redirect',
			value: redirect,
		});

		createNodeField({
			node,
			name: 'layout',
			value: layout,
		});
	}
};
