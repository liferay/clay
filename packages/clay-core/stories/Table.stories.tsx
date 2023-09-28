/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback, useState} from 'react';

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

export const Dynamic = () => {
	return (
		<Table>
			<Head items={columns}>
				{(column) => <Cell key={column.id}>{column.name}</Cell>}
			</Head>

			<Body items={rows}>
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

			<Body items={rows2}>
				{(row) => (
					<Row items={columns2}>
						{(column) => <Cell>{row[column.id]}</Cell>}
					</Row>
				)}
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

			<Body items={items}>
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
