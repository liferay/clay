/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs');
const path = require('path');
const reactDocs = require('react-docgen');
const visit = require('unist-util-visit');

const generateTr = (item, key) => `<tr>
	<td>
		<div class="table-title">
			${key}
		</div>
	</td>
	<td>{${item.tsType &&
		JSON.stringify(
			item.tsType.raw ? item.tsType.raw : item.tsType.name
		)}}</td>
	<td>${item.required ? 'true' : ''}</td>
	<td>{${item.defaultValue && JSON.stringify(item.defaultValue.value)}}</td>
	<td>{${JSON.stringify(item.description)}}</td>
	</tr>`;

module.exports = ({markdownAST}) => {
	const markdownHtmlNodes = [];

	visit(markdownAST, 'jsx', node => {
		if (node.value.includes('[APITable')) {
			markdownHtmlNodes.push(node);
		}
	});

	return Promise.all(
		markdownHtmlNodes.map(
			node =>
				// eslint-disable-next-line no-async-promise-executor
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

						const propsKeys = Object.keys(AST.props || {});

						// eslint-disable-next-line require-atomic-updates
						node.value = propsKeys.length
							? `
						<table class="table table-bordered table-striped">
						<thead>
							<tr>
								<th>Property</th>
								<th>Type</th>
								<th>Required</th>
								<th>Default</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
						${propsKeys.map(key => generateTr(AST.props[key], key)).join('')}
						</tbody>
						</table>`
							: 'None.';
					} catch (error) {
						// eslint-disable-next-line require-atomic-updates
						node.value = `<ul class="list-api">
							<li class="list-api-item">
							<code class="list-api-item-type">{'${error.message}'}</code>
							</li>
						</ul>`;
						// eslint-disable-next-line no-console
						console.error(pathFile);
					}

					resolve(node);
				})
		)
	);
};
