/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback, useState} from 'react';

import {Icon, Text} from '../src';
import {Body, Cell, Head, Row, Table} from '../src/table';

export default {
	title: 'Design System/Components/Table',
};

const columns = [
	{
		id: '1',
		name: 'Name',
	},
	{
		id: '2',
		name: 'Type',
	},
];

const rows = [
	{id: 1, name: 'Games', type: 'File folder'},
	{id: 2, name: 'Program Files', type: 'File folder'},
];

const items = [
	{id: 1, name: 'Folder A', type: 'Folder'},
	{
		children: [
			{
				children: [
					{id: 5, name: 'Folder X', type: 'Folder'},
					{id: 6, name: 'Folder Z', type: 'Folder'},
					{
						id: 7,
						name: 'Text Document A',
						type: 'Text',
					},
					{
						id: 8,
						name: 'Text Document B',
						type: 'Image',
					},
					{
						id: 9,
						name: 'Text Document C',
						type: 'Vector',
					},
				],
				id: 3,
				name: 'Folder 1',
				type: 'Folder',
			},
			{id: 4, name: 'Image Document', type: 'Image'},
		],
		id: 2,
		name: 'Folder B',
		type: 'Folder',
	},
	{id: 10, name: 'Folder C', type: 'Folder'},
];

export const Dynamic = () => {
	return (
		<Table>
			<Head items={columns}>
				{(column) => <Cell key={column.id}>{column.name}</Cell>}
			</Head>

			<Body defaultItems={rows}>
				{(row) => (
					<Row>
						<Cell>{row.name}</Cell>
						<Cell>{row.type}</Cell>
					</Row>
				)}
			</Body>
		</Table>
	);
};

const columns2 = [
	{
		id: 'name',
		name: 'Name',
	},
	{
		id: 'type',
		name: 'Type',
	},
];

const rows2 = [
	{id: 1, name: 'Games', type: 'File folder'},
	{id: 2, name: 'Program Files', type: 'File folder'},
];

export const DynamicCells = () => {
	return (
		<Table>
			<Head items={columns2}>
				{(column) => <Cell key={column.id}>{column.name}</Cell>}
			</Head>

			<Body defaultItems={rows2}>
				{(row) => (
					<Row items={columns2}>
						{(column) => <Cell>{row[column.id]}</Cell>}
					</Row>
				)}
			</Body>
		</Table>
	);
};

export const Sections = () => {
	return (
		<Table>
			<Head items={columns}>
				<Cell key="name">Name</Cell>
				<Cell key="type">Type</Cell>
			</Head>

			<Body>
				<Row divider>
					<Cell>Folders</Cell>
				</Row>
				<Row>
					<Cell>Games</Cell>
					<Cell>File folder</Cell>
				</Row>
				<Row>
					<Cell>Program Files</Cell>
					<Cell>File folder</Cell>
				</Row>
				<Row>
					<Cell>Core</Cell>
					<Cell>File folder</Cell>
				</Row>
				<Row divider>
					<Cell>Folders</Cell>
				</Row>
				<Row>
					<Cell>Games</Cell>
					<Cell>File folder</Cell>
				</Row>
				<Row>
					<Cell>Program Files</Cell>
					<Cell>File folder</Cell>
				</Row>
			</Body>
		</Table>
	);
};

type Sorting = {
	column: React.Key;
	direction: 'ascending' | 'descending';
};

export const Sorting = () => {
	const [sort, setSort] = useState<Sorting | null>(null);
	const [items, setItems] = useState([
		{files: 22, id: 1, name: 'Games', type: 'File folder'},
		{files: 7, id: 2, name: 'Program Files', type: 'File folder'},
	]);

	const onSortChange = useCallback((sort: Sorting | null) => {
		if (sort) {
			setItems((items) =>
				items.sort((a, b) => {
					let cmp = new Intl.Collator('en', {numeric: true}).compare(
						a[sort.column],
						b[sort.column]
					);

					if (sort.direction === 'descending') {
						cmp *= -1;
					}

					return cmp;
				})
			);
		}

		setSort(sort);
	}, []);

	return (
		<Table onSortChange={onSortChange} sort={sort}>
			<Head>
				<Cell key="name" sortable>
					Name
				</Cell>
				<Cell key="files" sortable>
					Files
				</Cell>
				<Cell key="type" sortable>
					Type
				</Cell>
			</Head>

			<Body defaultItems={items}>
				{(row) => (
					<Row>
						<Cell>{row['name']}</Cell>
						<Cell>{row['files']}</Cell>
						<Cell>{row['type']}</Cell>
					</Row>
				)}
			</Body>
		</Table>
	);
};

export const Treegrid = () => {
	const [expandedKeys, setExpandedKeys] = useState<Set<React.Key>>(
		new Set([2, 3])
	);

	const columns = [
		{
			id: 'name',
			name: 'Name',
		},
		{
			id: 'type',
			name: 'Type',
		},
	];

	const ICON_TYPES = {
		Folder: <Icon symbol="folder" />,
		Image: <Icon symbol="picture" />,
		Text: <Icon symbol="document" />,
		Vector: <Icon symbol="document-vector" />,
	};

	return (
		<Table
			aria-label="File Explorer"
			expandedKeys={expandedKeys}
			nestedKey="children"
			onExpandedChange={setExpandedKeys}
		>
			<Head items={columns}>
				{(column) => (
					<Cell className="table-cell-minw-300" key={column.id}>
						{column.name}
					</Cell>
				)}
			</Head>

			<Body defaultItems={items}>
				{(row) => (
					<Row>
						<Cell key={`${row.id}:name`}>
							{ICON_TYPES[row['type']]}
							<Text size={3} weight="semi-bold">
								{row['name']}
							</Text>
						</Cell>
						<Cell key={`${row.id}:type`}>{row['type']}</Cell>
					</Row>
				)}
			</Body>
		</Table>
	);
};

export const AsyncLoad = () => (
	<Table
		aria-label="File Explorer"
		nestedKey="children"
		onLoadMore={async (item: any) => {
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
		<Head items={columns}>
			{(column) => (
				<Cell className="table-cell-minw-300" key={column.id}>
					{column.name}
				</Cell>
			)}
		</Head>

		<Body defaultItems={items}>
			{(row) => (
				<Row lazy>
					<Cell key={`${row.id}:name`}>
						<Text size={3} weight="semi-bold">
							{row['name']}
						</Text>
					</Cell>
					<Cell key={`${row.id}:type`}>{row['type']}</Cell>
				</Row>
			)}
		</Body>
	</Table>
);
