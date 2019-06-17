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
	return `<li class="list-api-item">
		<p class="list-api-item-title">
			<code class="list-api-item-name" id="api-${key}">${key}</code>
			${
				item.tsType && item.tsType.name
					? `<code class="list-api-item-type">{"${
							item.tsType.name
					  }"}</code>`
					: ''
			}
			<code class="list-api-item-default">{' = '}{${
				item.defaultValue === undefined
					? `"undefined"`
					: JSON.stringify(item.defaultValue.value)
			}}</code>
			${
				item.required
					? `<code class="list-api-item-required">{"required"}</code>`
					: ''
			}
		</p>
		<div class="list-api-item-desc">${item.description}</div>
		<code class="list-api-item-code">{${item.tsType &&
			item.tsType.raw &&
			JSON.stringify(item.tsType.raw)}}</code>
	</li>`;
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

					try {
						const content = fs.readFileSync(pathFile, 'utf8');
						const AST = await reactDocs.parse(content, null, null, {
							filename: pathFile,
						});
						const propsKeys = Object.keys(AST.props);

						node.value = `<ul class="list-api">${propsKeys
							.map(key => generateTr(AST.props[key], key))
							.join('')}</ul>`;
					} catch (error) {
						node.value = `<ul class="list-api">
							<li class="list-api-item">
							<code class="list-api-item-type">{'${error.message}'}</code>
							</li>
						</ul>`;
						// eslint-disable-next-line no-console
						console.error(error.message);
					}

					resolve(node);
				})
		)
	);
};
