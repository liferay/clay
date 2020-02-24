/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
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
	<td class="table-cell-expand table-cell-minw-150">{${item.tsType &&
		JSON.stringify(
			item.tsType.raw ? item.tsType.raw : item.tsType.name
		)}}</td>
	<td>${item.required ? 'true' : ''}</td>
	<td class="table-cell-expand table-cell-minw-150">{${item.defaultValue &&
		JSON.stringify(item.defaultValue.value)}}</td>
	<td class="table-cell-expand table-cell-minw-250">{${JSON.stringify(
		item.description
	)}}</td>
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
					/**
					 * `.split()` is used to extract the file path from
					 * a string like `[APITable "clay-form/src/Form.tsx#Text"]`
					 */
					const APITablePath = node.value.split('"')[1];

					/**
					 * `.split()` is used remove the named component specified
					 * and the filepath..
					 */
					const [fileName, componentName] = APITablePath.split('#');

					const filePath = path.resolve('../packages/', fileName);

					if (!fs.existsSync(filePath)) {
						resolve(node);

						return;
					}

					try {
						const content = fs.readFileSync(filePath, 'utf8');
						const AST = await reactDocs.parse(
							content,
							componentName
								? reactDocs.resolver.findAllComponentDefinitions
								: null,
							null,
							{
								filename: filePath,
							}
						);

						const component = componentName
							? AST.find(
									comp => comp.displayName === componentName
							  )
							: AST;

						const propsKeys = Object.keys(component.props || {});

						// eslint-disable-next-line require-atomic-updates
						node.value = propsKeys.length
							? `
						<div class="table-responsive">
						<table class="table table-autofit table-bordered table-striped">
						<thead>
							<tr>
								<th>Property</th>
								<th class="table-cell-expand table-cell-minw-150">Type</th>
								<th>Required</th>
								<th class="table-cell-expand table-cell-minw-150">Default</th>
								<th class="table-cell-expand table-cell-minw-250">Description</th>
							</tr>
						</thead>
						<tbody>
						${propsKeys.map(key => generateTr(component.props[key], key)).join('')}
						</tbody>
						</table>
						</div>`
							: 'None.';
					} catch (error) {
						// eslint-disable-next-line require-atomic-updates
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
