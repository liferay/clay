/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {Body, Column, Head, Row, Table} from '../src/table';

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
				{(column) => <Column key={column.id}>{column.name}</Column>}
			</Head>

			<Body items={rows}>
				{(row) => (
					<Row>
						<Column>{row.name}</Column>
						<Column>{row.type}</Column>
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
				{(column) => <Column key={column.id}>{column.name}</Column>}
			</Head>

			<Body items={rows2}>
				{(row) => (
					<Row items={columns2}>
						{(column) => <Column>{row[column.id]}</Column>}
					</Row>
				)}
			</Body>
		</Table>
	);
};
