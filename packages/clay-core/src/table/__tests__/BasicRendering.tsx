/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, render} from '@testing-library/react';
import React from 'react';

import {Body, Cell, Head, Row, Table} from '../../';

describe('Table basic rendering', () => {
	afterEach(cleanup);

	it('render static content', () => {
		const {container} = render(
			<Table>
				<Head>
					<Cell key="name">Name</Cell>
					<Cell key="type">Type</Cell>
				</Head>

				<Body>
					<Row>
						<Cell>Foo</Cell>
						<Cell>Foo</Cell>
					</Row>
					<Row>
						<Cell>Bar</Cell>
						<Cell>Bar</Cell>
					</Row>
					<Row>
						<Cell>Baz</Cell>
						<Cell>Baz</Cell>
					</Row>
				</Body>
			</Table>
		);

		expect(container).toMatchSnapshot();
	});

	it('render dynamic content', () => {
		const columns = [
			{id: 'name', name: 'Name'},
			{id: 'type', name: 'Type'},
		];

		const items = [
			{id: 1, name: 'Foo', type: 'Foo'},
			{id: 2, name: 'Bar', type: 'Bar'},
			{id: 3, name: 'Baz', type: 'Baz'},
		];

		const {container} = render(
			<Table>
				<Head items={columns}>
					{(column) => <Cell key={column.id}>{column.name}</Cell>}
				</Head>

				<Body items={items}>
					{(row) => (
						<Row items={columns}>
							{/** @ts-ignore */}
							{(column) => <Cell>{row[column.id]}</Cell>}
						</Row>
					)}
				</Body>
			</Table>
		);

		expect(container).toMatchSnapshot();
	});

	it('render with sort column', () => {
		const {container} = render(
			<Table>
				<Head>
					<Cell key="name" sortable>
						Name
					</Cell>
					<Cell key="type" sortable>
						Type
					</Cell>
				</Head>

				<Body>
					<Row>
						<Cell>Foo</Cell>
						<Cell>Foo</Cell>
					</Row>
					<Row>
						<Cell>Bar</Cell>
						<Cell>Bar</Cell>
					</Row>
					<Row>
						<Cell>Baz</Cell>
						<Cell>Baz</Cell>
					</Row>
				</Body>
			</Table>
		);

		expect(container).toMatchSnapshot();
	});

	it('render with treegrid', () => {
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

		const {container} = render(
			<Table aria-label="File Explorer" nestedKey="children">
				<Head items={columns}>
					{(column) => <Cell key={column.id}>{column.name}</Cell>}
				</Head>

				<Body
					items={[
						{id: 1, name: 'Folder A', type: 'Folder'},
						{
							children: [
								{
									children: [
										{
											id: 5,
											name: 'Folder X',
											type: 'Folder',
										},
										{
											id: 6,
											name: 'Folder Z',
											type: 'Folder',
										},
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
					]}
				>
					{(row) => (
						<Row>
							<Cell key={`${row.id}:name`}>{row['name']}</Cell>
							<Cell key={`${row.id}:type`}>{row['type']}</Cell>
						</Row>
					)}
				</Body>
			</Table>
		);

		expect(container).toMatchSnapshot();
	});
});
