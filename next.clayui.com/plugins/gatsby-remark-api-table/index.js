/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs');
const path = require('path');
const reactDocs = require('react-docgen');
const visit = require('unist-util-visit');

const generateTr = (item, key) => {
	return `<tr>
        <td><div class="table-title">${key}</div></td>
        <td>${item.description}</td>
        <td>{${
			item.tsType.raw
				? JSON.stringify(item.tsType.raw)
				: `"${item.tsType.name}"`
		}}</td>
        <td>{${
			item.defaultValue === undefined
				? item.defaultValue
				: JSON.stringify(item.defaultValue.value)
		}}</td>
    </tr>`;
};

module.exports = ({markdownAST}) => {
	const markdownHtmlNodes = [];

	visit(markdownAST, 'html', node => {
		if (node.value.includes('[APITable')) {
			markdownHtmlNodes.push(node);
		}
	});

	return Promise.all(
		markdownHtmlNodes.map(
			node =>
				new Promise(async resolve => {
					const pathFile = path.resolve(
						'../packages/',
						node.value.split('"')[1]
					);

					if (!fs.existsSync(pathFile)) {
						resolve(node);
						return;
					}

					const content = fs.readFileSync(pathFile);
					const AST = await reactDocs.parse(content, null, null, {
						filename: pathFile,
					});
					const propsKeys = Object.keys(AST.props);

					node.value = `<div class="table-responsive">
						<table class="table table-autofit table-striped">
							<thead>
								<tr>
									<th>Property</th>
									<th>Description</th>
									<th>Type</th>
									<th>Default</th>
								</tr>
							</thead>
							<tbody>
								${propsKeys.map(key => generateTr(AST.props[key], key)).join('')}
							</tbody>
						</table>
					</div>`;

					resolve(node);
				})
		)
	);
};
