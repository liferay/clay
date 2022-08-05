/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

const fs = require('fs');
const path = require('path');
const reactDocs = require('react-docgen');
const visit = require('unist-util-visit');

// eslint-disable-next-line no-useless-escape
const BACKTICK_REGEX = /\`+(.*?)\`+/g;

const generateTr = (item, key) => `<tr id="api-${key}">
	<td class="table-cell-expand">
		<code class="text-3" style="color: #B3482E;">${key}</code>
		${
			item.required
				? `<svg class="ml-1 text-danger text-1 lexicon-icon lexicon-icon-asterisk" title="required" aria-label="Required" role="presentation" viewBox="0 0 512 512">	<path class="lexicon-icon-outline" d="M323.6,190l146.7-48.8L512,263.9l-149.2,47.6l93.6,125.2l-104.9,76.3l-96.1-126.4l-93.6,126.4L56.9,435.3l92.3-123.9L0,263.8l40.4-122.6L188.4,190v-159h135.3L323.6,190L323.6,190z"></path></svg>`
				: ''
		}
		${
			item.description?.includes('@deprecated')
				? `
			<span class="ml-1 badge badge-danger badge-pill">
				<span class="badge-item badge-item-expand">Deprecated</span>
			</span>
		`
				: ''
		}
		<br />
		<code class="text-info text-2">{${
			item.tsType &&
			JSON.stringify(item.tsType.raw ? item.tsType.raw : item.tsType.name)
		}}</code>
	</td>
	<td class="table-cell-expand" style="white-space: break-spaces;">
		<span dangerouslySetInnerHTML={{__html: ${JSON.stringify(
			item.description
		)?.replace(
			BACKTICK_REGEX,
			"<code class='language-text'>$1</code>"
		)} }} />
		${
			item.defaultValue
				? `<br /><br />The default value is <b>{${JSON.stringify(
						item.defaultValue.value
				  )}}</b>`
				: ''
		}
	</td>
	</tr>`;

module.exports = ({markdownAST}) => {
	const markdownHtmlNodes = [];

	visit(markdownAST, 'jsx', (node) => {
		if (node.value.includes('[APITable')) {
			markdownHtmlNodes.push(node);
		}
	});

	return Promise.all(
		markdownHtmlNodes.map(
			(node) =>
				// eslint-disable-next-line no-async-promise-executor
				new Promise(async (resolve) => {
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
									(comp) => comp.displayName === componentName
							  )
							: AST;

						const propsKeys = Object.keys(component.props || {});

						// eslint-disable-next-line require-atomic-updates
						node.value = propsKeys.length
							? `
						<div class="table-responsive">
						<table class="table table-autofit table-hover table-list">
						<thead>
							<tr>
								<th class="table-cell-expand">Property</th>
								<th class="table-cell-expand">Description</th>
							</tr>
						</thead>
						<tbody>
						${propsKeys
							.map((key) => {
								const prop = component.props[key];

								if (prop.description?.includes('@ignore')) {
									return null;
								}

								return generateTr(prop, key);
							})
							.join('')}
						</tbody>
						</table>
						</div>`
							: 'None.';
					} catch (error) {
						// eslint-disable-next-line require-atomic-updates
						node.value = `<ul class="list-api">
							<li class="list-api-item">
							<code class="list-api-item-type">{"${error.message}"}</code>
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
