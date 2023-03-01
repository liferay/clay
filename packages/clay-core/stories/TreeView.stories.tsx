/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAlert from '@clayui/alert';
import Badge from '@clayui/badge';
import Button from '@clayui/button';
import {ClayDropDownWithItems as DropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox as Checkbox, ClayInput as Input} from '@clayui/form';
import Icon from '@clayui/icon';
import Sticker from '@clayui/sticker';
import React, {useCallback, useMemo, useRef, useState} from 'react';

import {TreeView} from '../src/tree-view';
import largeData from './tree-data.mock.json';

interface IItem {
	children?: Array<IItem>;
	name: string;
	status?: string;
	type?: string;
}

const ITEMS_DRIVE = [
	{
		children: [
			{
				children: [
					{
						children: [{id: 17, name: 'Research 1'}],
						id: 3,
						name: 'Research',
					},
					{
						children: [{id: 16, name: 'News 1'}],
						id: 4,
						name: 'News',
					},
				],
				id: 2,
				name: 'Blogs',
			},
			{
				children: [
					{
						children: [
							{
								id: 18,
								name: 'Instructions.pdf',
								status: 'success',
								type: 'pdf',
							},
						],
						id: 15,
						name: 'PDF',
					},
					{
						children: [
							{
								id: 6,
								name: 'Treeview review.docx',
								status: 'success',
								type: 'document',
							},
							{
								id: 7,
								name: 'Heuristics Evaluation.docx',
								status: 'success',
								type: 'document',
							},
						],
						disabled: true,
						id: 8,
						name: 'Word',
					},
				],
				id: 5,
				name: 'Documents and Media',
			},
		],
		disabled: true,
		id: 1,
		name: 'Liferay Drive',
		type: 'cloud',
	},
	{
		children: [
			{disabled: true, id: 10, name: 'Blogs'},
			{id: 11, name: 'Documents and Media'},
		],
		id: 9,
		name: 'Repositories',
		type: 'repository',
	},
	{
		children: [
			{id: 13, name: 'PDF'},
			{id: 14, name: 'Word'},
		],
		id: 12,
		name: 'Documents and Media',
		status: 'warning',
	},
];

const cache = new Map();

// This method is just a simulation of filtering a tree but don't consider
// using it in production. This is not performative at runtime because it
// will traverse the entire tree and create a copy.
function createFilter<T extends Array<any>>(
	tree: T,
	nestedKey: string,
	key: string
) {
	function applyFilter(value: string, tree: T) {
		tree = tree
			.map((item) => {
				const immutableItem = {...item};

				if (Array.isArray(immutableItem[nestedKey])) {
					immutableItem[nestedKey] = applyFilter(
						value,
						immutableItem[nestedKey]
					);
				}

				if (immutableItem[key].includes(value.toLowerCase())) {
					return immutableItem;
				}

				return false;
			})
			.filter(Boolean) as T;

		return tree;
	}

	return {
		applyFilter: (value: string) => {
			const result = cache.get(value);

			if (result) {
				return result;
			}

			if (cache.size === 20) {
				cache.clear();
			}

			const filtered = applyFilter(value, [...tree] as T);

			cache.set(value, filtered);

			return filtered;
		},
	};
}

let nodeId = 0;

type Node = {
	children: Array<Node>;
	id: number;
	name: string;
};

const createNode = (
	lenght: number,
	depth: number,
	currentDepth: number = 0
) => {
	const node: Node = {
		children: [],
		id: nodeId,
		name: `node-${nodeId}`,
	};

	nodeId += 1;

	if (currentDepth === depth) {
		return node;
	}

	for (let i = 0; i < lenght; i++) {
		node.children.push(createNode(lenght, depth, currentDepth + 1));
	}

	return node;
};

export default {
	title: 'Design System/Components/TreeView',
};

export const ThemeLight = () => (
	<TreeView displayType="light">
		<TreeView.Item>
			<TreeView.ItemStack>
				<Icon symbol="folder" />
				Root
			</TreeView.ItemStack>
			<TreeView.Group>
				<TreeView.Item>Item</TreeView.Item>
			</TreeView.Group>
		</TreeView.Item>
	</TreeView>
);

export const ThemeDark = () => (
	<TreeView className="bg-dark" displayType="dark">
		<TreeView.Item>
			<TreeView.ItemStack>
				<Icon symbol="folder" />
				Root
			</TreeView.ItemStack>
			<TreeView.Group>
				<TreeView.Item>Item</TreeView.Item>
			</TreeView.Group>
		</TreeView.Item>
	</TreeView>
);

export const Actions = () => (
	<TreeView>
		<TreeView.Item
			actions={
				<>
					<Button aria-label="Close" displayType={null} monospaced>
						<Icon symbol="times" />
					</Button>
					<DropDownWithItems
						items={[
							{label: 'One'},
							{label: 'Two'},
							{label: 'Three'},
						]}
						trigger={
							<Button
								aria-label="More"
								displayType={null}
								monospaced
							>
								<Icon symbol="ellipsis-v" />
							</Button>
						}
					/>
				</>
			}
		>
			<TreeView.ItemStack>
				<Icon symbol="folder" />
				Folder 1
			</TreeView.ItemStack>
			<TreeView.Group>
				<TreeView.Item>Item 1</TreeView.Item>
				<TreeView.Item>Item 2</TreeView.Item>
				<TreeView.Item>Item 3</TreeView.Item>
			</TreeView.Group>
		</TreeView.Item>
		<TreeView.Item
			actions={
				<>
					<Button aria-label="Close" displayType={null} monospaced>
						<Icon symbol="times" />
					</Button>
					<DropDownWithItems
						items={[
							{label: 'Four'},
							{label: 'Five'},
							{label: 'Six'},
						]}
						trigger={
							<Button
								aria-label="More"
								displayType={null}
								monospaced
							>
								<Icon symbol="ellipsis-v" />
							</Button>
						}
					/>
				</>
			}
		>
			<TreeView.ItemStack>
				<Icon symbol="folder" />
				Folder 2
			</TreeView.ItemStack>
			<TreeView.Group>
				<TreeView.Item>Item 4</TreeView.Item>
				<TreeView.Item>Item 5</TreeView.Item>
				<TreeView.Item>Item 6</TreeView.Item>
			</TreeView.Group>
		</TreeView.Item>
	</TreeView>
);

export const Dynamic = () => (
	<TreeView
		defaultItems={[
			{
				children: [{name: 'Blogs'}, {name: 'Documents and Media'}],
				name: 'Liferay Drive',
			},
			{
				children: [{name: 'Blogs'}, {name: 'Documents and Media'}],
				name: 'Repositories',
			},
			{
				children: [
					{name: 'PDF'},
					{name: 'Word'},
					{name: 'Google Drive'},
					{name: 'Figma'},
				],
				name: 'Documents and Media',
			},
			{
				children: [],
				name: 'Empty directory',
			},
		]}
		dragAndDrop
		nestedKey="children"
		onRenameItem={(item) => {
			return new Promise((resolve) => {
				setTimeout(() => {
					item.name += `-${Date.now()}`;

					resolve(item);
				}, 500);
			});
		}}
	>
		{(item) => (
			<TreeView.Item>
				<TreeView.ItemStack>
					<Icon symbol="folder" />
					{item.name}
				</TreeView.ItemStack>
				<TreeView.Group items={item.children}>
					{(item) => <TreeView.Item>{item.name}</TreeView.Item>}
				</TreeView.Group>
			</TreeView.Item>
		)}
	</TreeView>
);

export const Styling = () => (
	<TreeView
		defaultItems={[
			{
				children: [{name: 'Blogs'}, {name: 'Documents and Media'}],
				name: 'Liferay Drive',
			},
			{
				children: [{name: 'PDF'}, {name: 'Word'}],
				name: 'Documents and Media',
			},
		]}
		expanderClassName="expander-css-class-1"
		nestedKey="children"
		showExpanderOnHover={false}
	>
		{(item) => (
			<TreeView.Item className="parent-list-item">
				<TreeView.ItemStack>
					<Icon symbol="folder" />
					{item.name}
				</TreeView.ItemStack>
				<TreeView.Group items={item.children}>
					{(item) => (
						<TreeView.Item className="nested-list-item">
							{item.name}
						</TreeView.Item>
					)}
				</TreeView.Group>
			</TreeView.Item>
		)}
	</TreeView>
);

export const Nested = () => {
	const TYPES_TO_SYMBOLS = {
		document: 'document-text',
		pdf: 'document-pdf',
		success: 'check-circle-full',
		warning: 'warning-full',
	} as Record<string, string>;

	const TYPES_TO_COLORS = {
		document: 'text-primary',
		pdf: 'text-danger',
		success: 'text-success',
		warning: 'text-warning',
	} as Record<string, string>;

	return (
		<TreeView
			defaultItems={ITEMS_DRIVE}
			dragAndDrop
			onRenameItem={(item) => {
				return new Promise((resolve) => {
					setTimeout(() => {
						item.name += `-${Date.now()}`;

						resolve(item);
					}, 500);
				});
			}}
		>
			{(item: IItem) => (
				<TreeView.Item>
					<TreeView.ItemStack>
						<Icon symbol={item.type ?? 'folder'} />
						{item.name}
						{item.status && (
							<Icon
								className={TYPES_TO_COLORS[item.status]}
								symbol={TYPES_TO_SYMBOLS[item.status]}
							/>
						)}
					</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{({name, status, type}: IItem) => (
							<TreeView.Item>
								{type && (
									<Icon
										className={TYPES_TO_COLORS[type]}
										symbol={TYPES_TO_SYMBOLS[type]}
									/>
								)}
								{name}
								{status && (
									<Icon
										className={TYPES_TO_COLORS[status]}
										symbol={TYPES_TO_SYMBOLS[status]}
									/>
								)}
							</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};

export const WithSticker = () => (
	<TreeView dragAndDrop showExpanderOnHover={false}>
		<TreeView.Item>
			<TreeView.ItemStack>
				<Sticker displayType="primary" shape="user-icon" size="sm">
					JH
				</Sticker>
				Juan Hidalgo
			</TreeView.ItemStack>
			<TreeView.Group>
				<TreeView.Item key="Victor Valle">
					<TreeView.ItemStack>
						<Sticker
							displayType="primary"
							shape="user-icon"
							size="sm"
						>
							VV
						</Sticker>
						Victor Valle
					</TreeView.ItemStack>
					<TreeView.Group>
						<TreeView.Item key="susana-vázquez">
							<Sticker
								displayType="primary"
								shape="user-icon"
								size="sm"
							>
								SV
							</Sticker>
							Susana Vázquez
						</TreeView.Item>
						<TreeView.Item key="myriam-manso">
							<Sticker
								displayType="primary"
								shape="user-icon"
								size="sm"
							>
								MM
							</Sticker>
							Myriam Manso
						</TreeView.Item>
					</TreeView.Group>
				</TreeView.Item>
				<TreeView.Item key="emily-young">
					<Sticker displayType="primary" shape="user-icon" size="sm">
						EY
					</Sticker>
					Emily Young
				</TreeView.Item>
			</TreeView.Group>
		</TreeView.Item>
	</TreeView>
);

export const PageElements = () => {
	const TYPES_TO_SYMBOLS = {
		container: 'container',
		editable: 'text',
		'fragment-image': 'picture',
		'fragment-text': 'h1',
		paragraph: 'paragraph',
		row: 'table',
	} as Record<string, string>;

	const items = [
		{
			children: [
				{
					children: [
						{
							children: [
								{
									children: [
										{
											children: [
												{
													id: 11,
													name: 'element-text',
													type: 'editable',
												},
											],
											id: 12,
											name: 'Heading',
											type: 'fragment-text',
										},
										{
											children: [
												{
													id: 10,
													name: 'element-text',
													type: 'editable',
												},
											],
											id: 13,
											name: 'Paragraph',
											type: 'paragraph',
										},
									],
									id: 5,
									name: 'Module',
								},
								{
									children: [
										{
											children: [
												{
													id: 9,
													name: 'image-squere',
													type: 'editable',
												},
											],
											id: 6,
											name: 'Image',
											type: 'fragment-image',
										},
									],
									id: 4,
									name: 'Module',
								},
							],
							id: 3,
							name: 'Grid',
							type: 'row',
						},
					],
					id: 2,
					name: 'Container',
					type: 'container',
				},
			],
			id: 1,
			name: 'Container',
			type: 'container',
		},
	];

	const [expandedKeys, setExpandedKeys] = useState<Set<React.Key>>(
		new Set([1, 2, 3, 4, 5])
	);

	return (
		<TreeView
			aria-label="Treeview page elements example"
			defaultItems={items}
			expandedKeys={expandedKeys}
			expanderIcons={{
				close: <Icon symbol="hr" />,
				open: <Icon symbol="plus" />,
			}}
			nestedKey="children"
			onExpandedChange={(keys) => setExpandedKeys(keys)}
			selectionMode={null}
			showExpanderOnHover={false}
		>
			{(item) => (
				<TreeView.Item>
					<TreeView.ItemStack>
						{item.type && (
							<Icon symbol={TYPES_TO_SYMBOLS[item.type]} />
						)}
						{item.name}
					</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{({name, type}) => (
							<TreeView.Item>
								<Icon symbol={TYPES_TO_SYMBOLS[type]} />
								{name}
							</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};

export const PreSelectedItems = (args: any) => {
	const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
		new Set([3, 15, 17, 18])
	);

	// Just to avoid TypeScript error with required props
	const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

	OptionalCheckbox.displayName = 'ClayCheckbox';

	return (
		<TreeView
			defaultItems={ITEMS_DRIVE}
			onSelectionChange={(keys) => setSelectionChange(keys)}
			selectedKeys={selectedKeys}
			selectionHydrationMode={args.selectionHydrationMode}
			selectionMode="multiple-recursive"
			showExpanderOnHover={false}
		>
			{(item) => (
				<TreeView.Item>
					<TreeView.ItemStack>
						<OptionalCheckbox />
						<Icon symbol="folder" />
						{item.name}
					</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{(item) => (
							<TreeView.Item>
								<OptionalCheckbox />
								<Icon symbol="folder" />
								{item.name}
							</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};

PreSelectedItems.argTypes = {
	selectionHydrationMode: {
		control: {type: 'select'},
		options: ['hydrate-first', 'render-first'],
	},
};

PreSelectedItems.args = {
	selectionHydrationMode: 'hydrate-first',
};

export const Disabled = () => {
	// Just to avoid TypeScript error with required props
	const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

	OptionalCheckbox.displayName = 'ClayCheckbox';

	return (
		<TreeView
			defaultItems={ITEMS_DRIVE}
			dragAndDrop
			selectionMode="multiple-recursive"
			showExpanderOnHover={false}
		>
			{(item) => (
				<TreeView.Item>
					<TreeView.ItemStack disabled={item.disabled}>
						<OptionalCheckbox />
						<Icon symbol="folder" />
						{item.name}
					</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{(item: any) => (
							<TreeView.Item disabled={item.disabled}>
								<OptionalCheckbox />
								<Icon symbol="folder" />
								{item.name}
							</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};

export const MultipleSelection = (args: any) => {
	const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
		new Set()
	);

	// Just to avoid TypeScript error with required props
	const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

	OptionalCheckbox.displayName = 'ClayCheckbox';

	return (
		<TreeView
			defaultItems={ITEMS_DRIVE}
			dragAndDrop
			nestedKey="children"
			onSelectionChange={(keys) => setSelectionChange(keys)}
			selectedKeys={selectedKeys}
			selectionMode={args.selectionMode}
			showExpanderOnHover={false}
		>
			{(item) => (
				<TreeView.Item>
					<TreeView.ItemStack>
						<OptionalCheckbox />
						<Icon symbol="folder" />
						{item.name}
					</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{(item) => (
							<TreeView.Item>
								<OptionalCheckbox />
								<Icon symbol="folder" />
								{item.name}
							</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};

MultipleSelection.argTypes = {
	selectionMode: {
		control: {type: 'select'},
		options: ['multiple', 'multiple-recursive'],
	},
};

MultipleSelection.args = {
	selectionMode: 'multiple-recursive',
};

export const MultipleSelectionWithAsyncLoad = (args: any) => {
	const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
		new Set()
	);

	// Just to avoid TypeScript error with required props
	const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

	OptionalCheckbox.displayName = 'ClayCheckbox';

	return (
		<TreeView
			defaultItems={ITEMS_DRIVE}
			nestedKey="children"
			onLoadMore={async (item) => {
				// Delay to simulate loading of new data
				await new Promise((resolve) => {
					setTimeout(() => resolve(''), 1000);
				});

				return [
					{
						id: Math.random(),
						name: `${item.name} ${Math.random()}`,
					},
					{
						id: Math.random(),
						name: `${item.name} ${Math.random()}`,
					},
					{
						id: Math.random(),
						name: `${item.name} ${Math.random()}`,
					},
				];
			}}
			onSelectionChange={(keys) => setSelectionChange(keys)}
			selectedKeys={selectedKeys}
			selectionMode={args.selectionMode}
			showExpanderOnHover={false}
		>
			{(item) => (
				<TreeView.Item>
					<TreeView.ItemStack>
						<OptionalCheckbox />
						<Icon symbol="folder" />
						{item.name}
					</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{(item) => (
							<TreeView.Item>
								<OptionalCheckbox />
								<Icon symbol="folder" />
								{item.name}
							</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};

MultipleSelectionWithAsyncLoad.argTypes = {
	selectionMode: {
		control: {type: 'select'},
		options: ['multiple', 'multiple-recursive'],
	},
};

MultipleSelectionWithAsyncLoad.args = {
	selectionMode: 'multiple-recursive',
};

export const ManuallyTriggerMultipleSelection = (args: any) => {
	const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
		new Set()
	);

	return (
		<>
			<p>Selected items: {Array.from(selectedKeys).join(', ')}</p>

			<TreeView
				defaultItems={ITEMS_DRIVE}
				nestedKey="children"
				onSelectionChange={(keys) => setSelectionChange(keys)}
				selectedKeys={selectedKeys}
				selectionMode={args.selectionMode}
				showExpanderOnHover={false}
			>
				{(item, selection) => (
					<TreeView.Item>
						<TreeView.ItemStack
							onClick={() => selection.toggle(item.id)}
						>
							<Icon symbol="folder" />
							{item.name}
							{item.id}
						</TreeView.ItemStack>
						<TreeView.Group items={item.children}>
							{(item) => (
								<TreeView.Item
									onClick={() => selection.toggle(item.id)}
								>
									<Icon symbol="folder" />
									{item.name}
									{item.id}
								</TreeView.Item>
							)}
						</TreeView.Group>
					</TreeView.Item>
				)}
			</TreeView>
		</>
	);
};

ManuallyTriggerMultipleSelection.argTypes = {
	selectionMode: {
		control: {type: 'select'},
		options: ['multiple', 'multiple-recursive'],
	},
};

ManuallyTriggerMultipleSelection.args = {
	selectionMode: 'multiple-recursive',
};

export const ExpandOnCheck = (args: any) => {
	const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
		new Set()
	);

	// Just to avoid TypeScript error with required props
	const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

	OptionalCheckbox.displayName = 'ClayCheckbox';

	return (
		<TreeView
			defaultItems={ITEMS_DRIVE}
			dragAndDrop
			expandOnCheck
			nestedKey="children"
			onSelectionChange={(keys) => setSelectionChange(keys)}
			selectedKeys={selectedKeys}
			selectionMode={args.selectionMode}
			showExpanderOnHover={false}
		>
			{(item) => (
				<TreeView.Item>
					<TreeView.ItemStack>
						<OptionalCheckbox />
						<Icon symbol="folder" />
						{item.name}
					</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{(item) => (
							<TreeView.Item>
								<OptionalCheckbox />
								<Icon symbol="folder" />
								{item.name}
							</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};

ExpandOnCheck.argTypes = {
	selectionMode: {
		control: {type: 'select'},
		options: ['multiple', 'multiple-recursive', 'single'],
	},
};

ExpandOnCheck.args = {
	selectionMode: 'multiple-recursive',
};

export const SingleSelection = () => {
	const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
		new Set()
	);

	return (
		<TreeView
			defaultItems={ITEMS_DRIVE}
			nestedKey="children"
			onSelectionChange={(keys) => setSelectionChange(keys)}
			selectedKeys={selectedKeys}
			selectionMode="single"
			showExpanderOnHover={false}
		>
			{(item) => (
				<TreeView.Item>
					<TreeView.ItemStack>
						<Icon symbol="folder" />
						{item.name}
					</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{(item) => (
							<TreeView.Item>
								<Icon symbol="folder" />
								{item.name}
							</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};

export const ManuallyTriggerSingleSelection = () => {
	const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
		new Set()
	);

	return (
		<TreeView
			defaultItems={ITEMS_DRIVE}
			nestedKey="children"
			onSelectionChange={(keys) => setSelectionChange(keys)}
			selectedKeys={selectedKeys}
			selectionMode="single"
			showExpanderOnHover={false}
		>
			{(item) => (
				<TreeView.Item>
					<TreeView.ItemStack>
						<Icon symbol="folder" />
						{item.name}
					</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{(item) => (
							<TreeView.Item>
								<Icon symbol="folder" />
								{item.name}
							</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};

export const LargeData = () => {
	const rootNode = createNode(10, 5);

	return (
		<TreeView
			defaultItems={[rootNode]}
			nestedKey="children"
			showExpanderOnHover={false}
		>
			{(item) => (
				<TreeView.Item>
					<TreeView.ItemStack>{item.name}</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{(item: typeof rootNode) => (
							<TreeView.Item>{item.name}</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};

export const AsyncLoad = () => (
	<TreeView
		defaultItems={ITEMS_DRIVE}
		nestedKey="children"
		onLoadMore={async (item) => {
			// Delay to simulate loading of new data
			await new Promise((resolve) => {
				setTimeout(() => resolve(''), 1000);
			});

			return [
				{
					id: Math.random(),
					name: `${item.name} ${Math.random()}`,
				},
				{
					id: Math.random(),
					name: `${item.name} ${Math.random()}`,
				},
				{
					id: Math.random(),
					name: `${item.name} ${Math.random()}`,
				},
			];
		}}
	>
		{(item) => (
			<TreeView.Item>
				<TreeView.ItemStack>
					<Icon symbol="folder" />
					{item.name}
				</TreeView.ItemStack>
				<TreeView.Group items={item.children}>
					{(item) => (
						<TreeView.Item expandable>
							<Icon symbol="folder" />
							{item.name}
						</TreeView.Item>
					)}
				</TreeView.Group>
			</TreeView.Item>
		)}
	</TreeView>
);

export const AsyncLoadDataPaginated = () => (
	<TreeView
		defaultExpandedKeys={new Set(['root'])}
		defaultItems={[
			{
				children: ITEMS_DRIVE,
				id: 'root',
				name: 'Root',
			},
		]}
		nestedKey="children"
		onLoadMore={async (item, cursor: number = 1) => {
			// Example conditional, I don't want to load data for an item that has
			// no children.
			if (!item.children) {
				return;
			}

			// No more data to fetch.
			if (cursor === null) {
				return;
			}

			// Delay to simulate loading of new data
			await new Promise((resolve) => {
				setTimeout(() => resolve(''), 1000);
			});

			const newCursor = cursor + 1;

			return {
				// Just for simulation
				cursor: newCursor <= 3 ? newCursor : null,
				items: [
					{
						id: Math.random(),
						name: `${item.name} ${Math.random()}`,
					},
					{
						id: Math.random(),
						name: `${item.name} ${Math.random()}`,
					},
					{
						id: Math.random(),
						name: `${item.name} ${Math.random()}`,
					},
				],
			};
		}}
	>
		{(item, selection, expand, load) => (
			<TreeView.Item>
				<TreeView.ItemStack>
					<Icon symbol="folder" />
					{item.name}
				</TreeView.ItemStack>
				<TreeView.Group items={item.children}>
					{(item) => (
						<TreeView.Item>
							<Icon symbol="folder" />
							{item.name}
						</TreeView.Item>
					)}
				</TreeView.Group>

				{expand.has(item.id) && load.get(item.id) !== null && (
					<Button
						borderless
						displayType="secondary"
						onClick={() => load.loadMore(item.id, item)}
					>
						Load more results
					</Button>
				)}
			</TreeView.Item>
		)}
	</TreeView>
);

export const AsyncLoadWithErrorHandling = () => {
	const [renderToast, setRenderToast] = useState(false);

	const onLoadMore = () => {
		return new Promise<any>((resolve, reject) => {
			setTimeout(() => {
				reject(new Error('Could not load more items'));
			}, 1000);
		}).catch(() => {
			setRenderToast(true);
		});
	};

	return (
		<>
			<TreeView
				defaultItems={ITEMS_DRIVE}
				nestedKey="children"
				onLoadMore={onLoadMore}
			>
				{(item) => (
					<TreeView.Item>
						<TreeView.ItemStack>
							<Icon symbol="folder" />
							{item.name}
						</TreeView.ItemStack>
						<TreeView.Group items={item.children}>
							{(item) => (
								<TreeView.Item>
									<Icon symbol="folder" />
									{item.name}
								</TreeView.Item>
							)}
						</TreeView.Group>
					</TreeView.Item>
				)}
			</TreeView>
			{renderToast && (
				<ClayAlert.ToastContainer>
					<ClayAlert
						autoClose={1000}
						displayType="danger"
						title="Error:"
					>
						Couldn't load more items
					</ClayAlert>
				</ClayAlert.ToastContainer>
			)}
		</>
	);
};

export const PerformanceTest = () => {
	const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
		new Set()
	);

	type Item = {
		label: string;
		itemSubtypes: Array<{label: string}>;
	};

	type Data = Array<Item>;

	const [items, setItems] = useState(largeData as Data);

	const [value, setValue] = useState('');

	// Just to avoid TypeScript error with required props
	const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

	OptionalCheckbox.displayName = 'ClayCheckbox';

	const itemsFiltered = useMemo<Data>(() => {
		if (!value) {
			return items;
		}

		const filter = createFilter(items, 'itemSubtypes', 'label');

		return filter.applyFilter(value);
	}, [items, value]);

	return (
		<>
			<Input
				onChange={(event) => setValue(event.target.value)}
				placeholder="Search..."
				value={value}
			/>
			<TreeView<Item>
				items={itemsFiltered}
				nestedKey="itemSubtypes"
				onItemsChange={(data) => setItems(data as Data)}
				onLoadMore={async () => {
					const items = (largeData as Data).map((node) => ({
						label: node.label + Math.random().toFixed(3),
					}));

					return Promise.resolve([...items]);
				}}
				onSelectionChange={(keys) => setSelectionChange(keys)}
				selectedKeys={selectedKeys}
				selectionMode="multiple-recursive"
				showExpanderOnHover={false}
			>
				{(item) => (
					<TreeView.Item>
						<TreeView.ItemStack>
							<OptionalCheckbox /> {item.label}
						</TreeView.ItemStack>
						<TreeView.Group items={item.itemSubtypes}>
							{(item) => (
								<TreeView.Item>
									<OptionalCheckbox /> {item.label}
								</TreeView.Item>
							)}
						</TreeView.Group>
					</TreeView.Item>
				)}
			</TreeView>
		</>
	);
};

export const DemoCategoriesSingle = () => {
	const clickTimerRef = useRef<any>();

	const onCategoryClick = useCallback(
		(
			detail: number,
			item: any,
			leaf: boolean,
			selection: any,
			expand: any
		) => {
			switch (detail) {
				case 1:
					clickTimerRef.current = setTimeout(() => {
						if (!selection.has(item.id)) {
							selection.toggle(item.id);
						}
					}, 200);
					break;
				case 2:
					if (!selection.has(item.id)) {
						selection.toggle(item.id);
					}
					if (!leaf) {
						expand.toggle(item.id);
					}
					break;
				default:
					break;
			}
		},
		[]
	);

	return (
		<TreeView
			defaultItems={[
				{
					id: 0,
					name: 'Animals',
					vocabulary: true,
				},
				{
					id: 1,
					name: 'Vegetables',
					vocabulary: true,
				},
				{
					children: [
						{
							children: [
								{
									id: 7,
									name: 'Metals',
								},
								{
									id: 8,
									name: 'Semimetals',
								},
								{
									id: 9,
									name: 'Nonmetals',
								},
							],
							id: 4,
							name: 'Native Elements',
						},
						{
							id: 5,
							name: 'Sulfides',
						},
						{
							id: 6,
							name: 'Silicates',
						},
					],
					id: 2,
					name: 'Minerals',
					vocabulary: true,
				},
				{
					id: 3,
					name: 'Plants',
					vocabulary: true,
				},
			]}
			showExpanderOnHover={false}
		>
			{(item, selection, expand) => (
				<TreeView.Item>
					<TreeView.ItemStack
						onClick={(event) => {
							clearTimeout(clickTimerRef.current);

							event.preventDefault();

							if (item.vocabulary) {
								// @ts-ignore
								switch (event.detail) {
									case 1:
										clickTimerRef.current = setTimeout(
											() => {
												expand.toggle(item.id);
											},
											200
										);
										break;
									case 2:
										expand.toggle(item.id);
										break;
									default:
										break;
								}
							} else {
								onCategoryClick(
									// @ts-ignore
									event.detail,
									item,
									false,
									selection,
									expand
								);
							}
						}}
					>
						<Icon
							symbol={
								item.vocabulary ? 'vocabulary' : 'categories'
							}
						/>
						{item.name}
					</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{(item) => (
							<TreeView.Item
								onClick={(event) => {
									clearTimeout(clickTimerRef.current);
									event.preventDefault();
									onCategoryClick(
										// @ts-ignore
										event.detail,
										item,
										false,
										selection,
										expand
									);
								}}
							>
								<Icon symbol="categories" />
								{item.name}
							</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};

export const DemoCategoriesMultiple = () => {
	// Just to avoid TypeScript error with required props
	const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

	OptionalCheckbox.displayName = 'ClayCheckbox';

	return (
		<TreeView
			defaultItems={[
				{
					children: [
						{
							id: 16,
							name: 'Dog',
						},
						{
							id: 17,
							name: 'Cat',
						},
					],
					id: 1,
					name: 'Animals',
					vocabulary: true,
				},
				{
					children: [
						{
							id: 14,
							name: 'Arrowroot',
						},
						{
							id: 15,
							name: 'Arugula',
						},
					],
					id: 2,
					name: 'Vegetables',
					vocabulary: true,
				},
				{
					children: [
						{
							children: [
								{
									id: 8,
									name: 'Metals',
								},
								{
									id: 9,
									name: 'Semimetals',
								},
								{
									id: 10,
									name: 'Nonmetals',
								},
							],
							id: 5,
							name: 'Native Elements',
						},
						{
							id: 6,
							name: 'Sulfides',
						},
						{
							id: 7,
							name: 'Silicates',
						},
					],
					id: 3,
					name: 'Minerals',
					vocabulary: true,
				},
				{
					children: [
						{
							id: 11,
							name: 'Bamboo',
						},
						{
							id: 12,
							name: 'Cactus',
						},
						{
							id: 13,
							name: 'Eucalyptus',
						},
					],
					id: 4,
					name: 'Plants',
					vocabulary: true,
				},
			]}
			selectionMode="multiple-recursive"
			showExpanderOnHover={false}
		>
			{(item, selection, expand) => (
				<TreeView.Item>
					<TreeView.ItemStack
						onClick={(event) => {
							event.preventDefault();

							if (item.vocabulary) {
								expand.toggle(item.id);
							} else {
								selection.toggle(item.id);
							}
						}}
					>
						{!item.vocabulary && <OptionalCheckbox />}
						<Icon
							symbol={
								item.vocabulary ? 'vocabulary' : 'categories'
							}
						/>
						{item.name}
						{item.vocabulary && (
							<div className="pl-4">
								<Button
									className="quick-action-item"
									displayType="secondary"
									onClick={(event) => {
										event.stopPropagation();

										selection.toggle(item.id);
									}}
									small
								>
									{selection.has(item.id)
										? 'Uncheck child nodes'
										: 'Check child nodes'}
								</Button>
							</div>
						)}
					</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{(item) => (
							<TreeView.Item
								onClick={() => selection.toggle(item.id)}
							>
								<OptionalCheckbox />
								<Icon symbol="categories" />
								{item.name}
							</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};

export const DemoDocumentsMultiple = () => {
	// Just to avoid TypeScript error with required props
	const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

	OptionalCheckbox.displayName = 'ClayCheckbox';

	const MAPPING_ICON = {
		article: 'web-content',
		documents: 'documents-and-media',
	};

	return (
		<TreeView
			defaultItems={[
				{
					children: [
						{id: 2, name: 'Basic Web Content'},
						{id: 3, name: 'New'},
						{id: 4, name: 'Article'},
					],
					id: 1,
					name: 'Web Content Article',
					type: 'article',
				},
				{
					children: [
						{id: 5, name: 'Basic Documents'},
						{name: 'External Video Shortcut'},
					],
					id: 6,
					name: 'Documents',
					type: 'documents',
				},
			]}
			defaultSelectedKeys={new Set([1, 2, 3, 4, 5])}
			expandDoubleClick
			selectionMode="multiple-recursive"
			showExpanderOnHover={false}
		>
			{(item) => (
				<TreeView.Item>
					<TreeView.ItemStack>
						<OptionalCheckbox />
						{MAPPING_ICON[item.type] && (
							<Icon symbol={MAPPING_ICON[item.type]} />
						)}
						{item.name}
						<div className="pl-2">
							<Badge label={item.children.length} />
						</div>
					</TreeView.ItemStack>
					<TreeView.Group items={item.children}>
						{(item) => (
							<TreeView.Item>
								<OptionalCheckbox />
								{item.name}
							</TreeView.Item>
						)}
					</TreeView.Group>
				</TreeView.Item>
			)}
		</TreeView>
	);
};
