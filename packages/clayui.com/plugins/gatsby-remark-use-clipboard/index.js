const visit = require('unist-util-visit');

module.exports = ({markdownAST}) => {
    visit(markdownAST, 'html', node => {
        if (typeof node.lang === 'undefined') {
            return;
        }

        node.value = `<div class="code-container">
            <button class="btn btn-sm btn-copy"><svg class="lexicon-icon"><use xlink:href="/images/icons/icons.svg#paste"></use></svg></button>
            ${node.value}
        </div>`;
    });
};