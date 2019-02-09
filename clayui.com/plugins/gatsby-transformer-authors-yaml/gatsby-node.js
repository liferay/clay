const readFileSync = require('fs').readFileSync;
const resolve = require('path').resolve;
const safeLoad = require('js-yaml').safeLoad;

// This is a copy of https://github.com/reactjs/reactjs.org/tree/master/plugins/gatsby-transformer-authors-yaml
exports.sourceNodes = ({graphql, actions}) => {
	const {createNode} = actions;

	const path = resolve(__dirname, '../../content/authors.yml');
	const file = readFileSync(path, 'utf8');
	const authors = safeLoad(file);

	// authors.yml structure is {[username: string]: {name: string, url: string}}
	Object.keys(authors).forEach(username => {
		const author = authors[username];

		createNode({
			id: username,
			children: [],
			parent: 'AUTHORS',
			internal: {
				type: 'AuthorYaml',
				contentDigest: JSON.stringify(author),
			},
			frontmatter: author,
		});
	});
};
