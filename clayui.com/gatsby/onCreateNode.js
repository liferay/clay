module.exports = exports.onCreateNode = ({node, actions, getNode}) => {
	const {createNodeField} = actions;

	if (node.internal.type === 'Mdx') {
		const {
			layout,
			nightly,
			path,
			redirect,
			title,
			weight,
		} = node.frontmatter;
		const {relativePath} = getNode(node.parent);

		let slug = path;

		if (!slug) {
			if (relativePath.includes('docs')) {
				slug = relativePath.replace('.md', '.html');
			}
		}

		createNodeField({
			name: 'nightly',
			node,
			value: nightly ? true : false,
		});

		createNodeField({
			name: 'title',
			node,
			value: node.frontmatter.title,
		});

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
