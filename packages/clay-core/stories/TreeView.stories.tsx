/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';

import '@clayui/css/src/scss/cadmin.scss';
import ClayAlert from '@clayui/alert';
import Button from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {ClayDropDownWithItems as DropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox as Checkbox, ClayInput as Input} from '@clayui/form';
import Icon from '@clayui/icon';
import {Provider} from '@clayui/provider';
import Sticker from '@clayui/sticker';
import {storiesOf} from '@storybook/react';
import React, {useMemo, useState} from 'react';

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

storiesOf('Components|ClayTreeView', module)
	.add('light', () => (
		<Provider spritemap={spritemap} theme="cadmin">
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
		</Provider>
	))
	.add('dark', () => (
		<Provider spritemap={spritemap} theme="cadmin">
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
		</Provider>
	))
	.add('actions', () => (
		<Provider spritemap={spritemap} theme="cadmin">
			<TreeView>
				<TreeView.Item
					actions={
						<>
							<Button displayType={null} monospaced>
								<Icon symbol="times" />
							</Button>
							<DropDownWithItems
								items={[
									{label: 'One'},
									{label: 'Two'},
									{label: 'Three'},
								]}
								trigger={
									<Button displayType={null} monospaced>
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
							<Button displayType={null} monospaced>
								<Icon symbol="times" />
							</Button>
							<DropDownWithItems
								items={[
									{label: 'Four'},
									{label: 'Five'},
									{label: 'Six'},
								]}
								trigger={
									<Button displayType={null} monospaced>
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
		</Provider>
	))
	.add('dynamic', () => (
		<Provider spritemap={spritemap} theme="cadmin">
			<TreeView
				dragAndDrop
				items={[
					{
						children: [
							{name: 'Blogs'},
							{name: 'Documents and Media'},
						],
						name: 'Liferay Drive',
					},
					{
						children: [
							{name: 'Blogs'},
							{name: 'Documents and Media'},
						],
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
							{(item) => (
								<TreeView.Item>{item.name}</TreeView.Item>
							)}
						</TreeView.Group>
					</TreeView.Item>
				)}
			</TreeView>
		</Provider>
	))
	.add('dynamic w/onItemClick callback', () => (
		<Provider spritemap={spritemap} theme="cadmin">
			<TreeView
				dragAndDrop
				items={[
					{
						children: [
							{name: 'Blogs'},
							{name: 'Documents and Media'},
						],
						name: 'Liferay Drive',
					},
					{
						children: [
							{name: 'Blogs'},
							{name: 'Documents and Media'},
						],
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
				nestedKey="children"
				onItemClick={(item) => {
					alert(`You selected: ${item.name}`);
				}}
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
							{(item) => (
								<TreeView.Item>{item.name}</TreeView.Item>
							)}
						</TreeView.Group>
					</TreeView.Item>
				)}
			</TreeView>
		</Provider>
	))
	.add('w/styling', () => (
		<Provider spritemap={spritemap} theme="cadmin">
			<TreeView
				expanderButtonClasses="expander-css-class-1"
				items={[
					{
						children: [
							{name: 'Blogs'},
							{name: 'Documents and Media'},
						],
						name: 'Liferay Drive',
					},
					{
						children: [{name: 'PDF'}, {name: 'Word'}],
						name: 'Documents and Media',
					},
				]}
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
		</Provider>
	))
	.add('nested', () => {
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
			<Provider spritemap={spritemap} theme="cadmin">
				<TreeView
					dragAndDrop
					items={ITEMS_DRIVE}
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
	})
	.add('sticker', () => (
		<Provider spritemap={spritemap} theme="cadmin">
			<TreeView dragAndDrop showExpanderOnHover={false}>
				<TreeView.Item>
					<TreeView.ItemStack>
						<Sticker
							displayType="primary"
							shape="user-icon"
							size="sm"
						>
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
							<Sticker
								displayType="primary"
								shape="user-icon"
								size="sm"
							>
								EY
							</Sticker>
							Emily Young
						</TreeView.Item>
					</TreeView.Group>
				</TreeView.Item>
			</TreeView>
		</Provider>
	))
	.add('page elements', () => {
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
			new Set(['1', '2', '3', '4', '5'])
		);

		return (
			<Provider spritemap={spritemap} theme="cadmin">
				<TreeView
					expandedKeys={expandedKeys}
					expanderIcons={{
						close: <Icon symbol="hr" />,
						open: <Icon symbol="plus" />,
					}}
					items={items}
					nestedKey="children"
					onExpandedChange={(keys) => setExpandedKeys(keys)}
					showExpanderOnHover={false}
				>
					{(item) => (
						<TreeView.Item>
							<TreeView.ItemStack>
								{item.type && (
									<Icon
										symbol={TYPES_TO_SYMBOLS[item.type]}
									/>
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
			</Provider>
		);
	})
	.add('selection', () => {
		const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
			new Set()
		);

		// Just to avoid TypeScript error with required props
		const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

		OptionalCheckbox.displayName = 'ClayCheckbox';

		return (
			<Provider spritemap={spritemap} theme="cadmin">
				<TreeView
					dragAndDrop
					items={ITEMS_DRIVE}
					nestedKey="children"
					onSelectionChange={(keys) => setSelectionChange(keys)}
					selectedKeys={selectedKeys}
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
			</Provider>
		);
	})
	.add('selection w/async load', () => {
		const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
			new Set()
		);

		// Just to avoid TypeScript error with required props
		const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

		OptionalCheckbox.displayName = 'ClayCheckbox';

		return (
			<Provider spritemap={spritemap} theme="cadmin">
				<TreeView
					items={ITEMS_DRIVE}
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
			</Provider>
		);
	})
	.add('expand on check', () => {
		const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
			new Set()
		);

		// Just to avoid TypeScript error with required props
		const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

		OptionalCheckbox.displayName = 'ClayCheckbox';

		return (
			<Provider spritemap={spritemap} theme="cadmin">
				<TreeView
					dragAndDrop
					expandOnCheck
					items={ITEMS_DRIVE}
					nestedKey="children"
					onSelectionChange={(keys) => setSelectionChange(keys)}
					selectedKeys={selectedKeys}
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
			</Provider>
		);
	})
	.add('expand on check w/single selection', () => {
		const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
			new Set()
		);

		// Just to avoid TypeScript error with required props
		const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

		OptionalCheckbox.displayName = 'ClayCheckbox';

		return (
			<Provider spritemap={spritemap} theme="cadmin">
				<TreeView
					dragAndDrop
					expandOnCheck
					items={ITEMS_DRIVE}
					nestedKey="children"
					onSelectionChange={(keys) => setSelectionChange(keys)}
					selectedKeys={selectedKeys}
					selectionMode="single"
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
			</Provider>
		);
	})
	.add('single selection', () => {
		const [selectedKeys, setSelectionChange] = useState<Set<React.Key>>(
			new Set()
		);

		// Just to avoid TypeScript error with required props
		const OptionalCheckbox = (props: any) => <Checkbox {...props} />;

		OptionalCheckbox.displayName = 'ClayCheckbox';

		return (
			<Provider spritemap={spritemap} theme="cadmin">
				<TreeView
					items={ITEMS_DRIVE}
					nestedKey="children"
					onSelectionChange={(keys) => setSelectionChange(keys)}
					selectedKeys={selectedKeys}
					selectionMode="single"
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
			</Provider>
		);
	})
	.add('large data', () => {
		const rootNode = createNode(10, 5);

		return (
			<Provider spritemap={spritemap} theme="cadmin">
				<TreeView
					items={[rootNode]}
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
			</Provider>
		);
	})
	.add('async load', () => {
		return (
			<Provider spritemap={spritemap} theme="cadmin">
				<TreeView
					items={ITEMS_DRIVE}
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
									<TreeView.Item>
										<Icon symbol="folder" />
										{item.name}
									</TreeView.Item>
								)}
							</TreeView.Group>
						</TreeView.Item>
					)}
				</TreeView>
			</Provider>
		);
	})
	.add('async load /w error handling', () => {
		const [renderToast, setRenderToast] = React.useState(false);

		const onLoadMore = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					reject(new Error('Could not load more items'));
				}, 1000);
			}).catch(() => {
				setRenderToast(true);
			});
		};

		return (
			<Provider spritemap={spritemap} theme="cadmin">
				<TreeView
					items={ITEMS_DRIVE}
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
			</Provider>
		);
	})
	.add('performance', () => {
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
			<Provider spritemap={spritemap} theme="cadmin">
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
			</Provider>
		);
	});
