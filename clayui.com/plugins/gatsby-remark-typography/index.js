const visit = require('unist-util-visit');

module.exports = ({markdownAST}) => {
    visit(markdownAST, 'heading', node => {
        if (
            node.depth === 1 ||
            node.depth === 2 ||
            node.depth === 3 ||
            node.depth === 4
        ) {
            node.data = {
                hProperties: {
                    class: 'clay-h' + node.depth
                }
            }
        }
    });

    visit(markdownAST, 'paragraph', node => {
        node.data = {
            hProperties: {
                class: 'clay-p'
            }
        }
    });
};