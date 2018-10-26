module.exports = exports.onCreateNode = ({node, actions, getNode}) => {
	const {createNodeField} = actions;

	if (
		node.internal.type === 'Mdx' ||
		node.internal.type === 'MarkdownRemark'
	) {
		const {
			layout,
			nightly,
			path,
			redirect,
			redirectFrom,
			title,
			weight,
		} = node.frontmatter;
		const {relativePath} = getNode(node.parent);

		let slug = path;

		if (!slug) {
			if (relativePath.includes('docs')) {
				if (relativePath.endsWith('.md')) {
					slug = relativePath.replace('.md', '.html');
				} else {
					slug = relativePath.replace('.mdx', '.html');
				}
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
			value: redirect || '',
		});

		createNodeField({
			node,
			name: 'redirectFrom',
			value: redirectFrom || '',
		});

		createNodeField({
			node,
			name: 'layout',
			value: layout || '',
		});
	}
};
