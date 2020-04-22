/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const visit = require('unist-util-visit');

module.exports = ({markdownAST}) => {
	visit(markdownAST, 'heading', (node) => {
		if (
			node.depth === 1 ||
			node.depth === 2 ||
			node.depth === 3 ||
			node.depth === 4 ||
			node.depth === 5
		) {
			let id = node.children[0].value.toLowerCase().split(' ').join('-');

			let title = node.children[0].value;

			if (node.children[0].value.match(/\(#/)) {
				title = node.children[0].value.match(/(.*?)\(#/)[1];

				id = node.children[0].value.match(/\(#(.*?)\)$/)[1];
			}

			node.children[0].value = title;

			node.data = {
				hProperties: {
					class: `clay-h${node.depth}`,
					id,
				},
			};
		}
	});

	visit(markdownAST, 'paragraph', (node) => {
		node.data = {
			hProperties: {
				class: 'clay-p',
			},
		};
	});
};
