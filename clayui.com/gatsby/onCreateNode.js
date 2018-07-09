const { createFilePath } = require(`gatsby-source-filesystem`);

module.exports = exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const {createNodeField} = boundActionCreators;

    if (node.internal.type === 'MarkdownRemark') {
        const {path} = node.frontmatter;
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
    }
};