/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

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
					class: `clay-h${node.depth}`,
					id: node.children[0].value
						.toLowerCase()
						.split(' ')
						.join('-'),
				},
			};
		}
	});

	visit(markdownAST, 'paragraph', node => {
		node.data = {
			hProperties: {
				class: 'clay-p',
			},
		};
	});
};
