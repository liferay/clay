/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import {Provider, TreeView} from '@clayui/core';
import {ClayCheckbox as Checkbox} from '@clayui/form';
import Icon from '@clayui/icon';
import React from 'react';

const exampleImports = `import {Provider, TreeView} from '@clayui/core';
import Icon from '@clayui/icon';`;

const exampleCode = `const FileExplorer = ({selectionMode}) => {
	const items = [
		{
			children: [
				{
					children: [
						{
							children: [{name: 'Research 1'}],
							name: 'Research',
						},
						{
							children: [{name: 'News 1'}],
							name: 'News',
						},
					],
					name: 'Blogs',
				},
				{
					children: [
						{
							children: [
								{
									name: 'Instructions.pdf',
									status: 'success',
									type: 'pdf',
								},
							],
							name: 'PDF',
						},
						{
							children: [
								{
									name: 'Treeview review.docx',
									status: 'success',
									type: 'document',
								},
								{
									name: 'Heuristics Evaluation.docx',
									status: 'success',
									type: 'document',
								},
							],
							name: 'Word',
						},
					],
					name: 'Documents and Media',
				},
			],
			name: 'Liferay Drive',
			type: 'cloud',
		},
		{
			children: [{name: 'Blogs'}, {name: 'Documents and Media'}],
			name: 'Repositories',
			type: 'repository',
		},
		{
			children: [{name: 'PDF'}, {name: 'Word'}],
			name: 'Documents and Media',
			status: 'warning',
		},
	];

	const TYPES_TO_SYMBOLS = {
		document: 'document-text',
		pdf: 'document-pdf',
		success: 'check-circle-full',
		warning: 'warning-full',
	};

	const TYPES_TO_COLORS = {
		document: 'text-primary',
		pdf: 'text-danger',
		success: 'text-success',
		warning: 'text-warning',
	};

	return (
		<Provider spritemap={spritemap}>
			<TreeView
				defaultItems={items}
				dragAndDrop
				nestedKey="children"
				selectionMode={selectionMode}
			>
				{(item) => (
					<TreeView.Item>
						<TreeView.ItemStack>
							<Icon symbol={item.type ? item.type : 'folder'} />
							{item.name}
							{item.status && (
								<Icon
									className={TYPES_TO_COLORS[item.status]}
									symbol={TYPES_TO_SYMBOLS[item.status]}
								/>
							)}
						</TreeView.ItemStack>
						<TreeView.Group items={item.children}>
							{({name, status, type}) => (
								<TreeView.Item>
									{type && (
										<Icon
											className={
												TYPES_TO_COLORS[type]
											}
											symbol={TYPES_TO_SYMBOLS[type]}
										/>
									)}
									{name}
									{status && (
										<Icon
											className={
												TYPES_TO_COLORS[status]
											}
											symbol={
												TYPES_TO_SYMBOLS[status]
											}
										/>
									)}
								</TreeView.Item>
							)}
						</TreeView.Group>
					</TreeView.Item>
				)}
			</TreeView>
		</Provider>
	);
};

render(<FileExplorer />)`;

const Example = () => {
	const scope = {Icon, Provider, TreeView};

	return <Editor code={exampleCode} imports={exampleImports} scope={scope} />;
};

const multipleSelectionImports = `import {Provider, TreeView} from '@clayui/core';
import {ClayCheckbox as Checkbox} from '@clayui/form';`;

const multipleSelectionCode = `const MultipleSelection = () => (
	<Provider spritemap={spritemap}>
		<TreeView selectionMode="multiple-recursive">
			<TreeView.Item>
				<TreeView.ItemStack>
					<Checkbox />
					Root
				</TreeView.ItemStack>
				<TreeView.Group>
					<TreeView.Item>
						<Checkbox />
						Item
					</TreeView.Item>
					<TreeView.Item>
						<Checkbox />
						Item 2
					</TreeView.Item>
					<TreeView.Item>
						<Checkbox />
						Item 3
					</TreeView.Item>
				</TreeView.Group>
			</TreeView.Item>
		</TreeView>
	</Provider>
);

render(<MultipleSelection />)`;

const MultipleSelection = () => {
	const scope = {Checkbox, Provider, TreeView};

	return (
		<Editor
			code={multipleSelectionCode}
			imports={multipleSelectionImports}
			scope={scope}
		/>
	);
};

export {Example, MultipleSelection};
