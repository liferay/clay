/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, {useCallback, useMemo, useState} from 'react';

import {Body, Cell, Head, Row, Table} from '../../';

type Sorting = {
	column: React.Key;
	direction: 'ascending' | 'descending';
};

describe('Picker incremental interactions', () => {
	afterEach(cleanup);

	it('clicking on the column does the sorting', () => {
		const columns = [
			{id: 'name', name: 'Name'},
			{id: 'type', name: 'Type'},
		];

		function ColumnSorting() {
			const [sort, setSort] = useState<Sorting | null>(null);
			const [items, setItems] = useState([
				{id: 1, name: 'Foo', type: 'Foo'},
				{id: 2, name: 'Bar', type: 'Bar'},
				{id: 3, name: 'Baz', type: 'Baz'},
			]);

			const onSortChange = useCallback((sort: Sorting | null) => {
				if (sort) {
					setItems((items) =>
						items.sort((a, b) => {
							let cmp = new Intl.Collator('en', {
								numeric: true,
							}).compare(
								// @ts-ignore
								a[sort.column],
								// @ts-ignore
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
					<Head items={columns}>
						{(column) => (
							<Cell key={column.id} sortable>
								{column.name}
							</Cell>
						)}
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
		}

		const {getAllByRole} = render(<ColumnSorting />);

		const [name, type] = getAllByRole('columnheader');

		expect(name!.getAttribute('aria-sort')).toBe('none');
		expect(type!.getAttribute('aria-sort')).toBe('none');

		const [row1Col1, , row2Col1, , row3Col1] = getAllByRole('cell');

		expect(row1Col1!.textContent).toBe('Foo');
		expect(row2Col1!.textContent).toBe('Bar');
		expect(row3Col1!.textContent).toBe('Baz');

		userEvent.click(name!);

		expect(name!.getAttribute('aria-sort')).toBe('ascending');
		expect(type!.getAttribute('aria-sort')).toBe('none');

		const [newRow1Col1, , newRow2Col1, , newRow3Col1] =
			getAllByRole('cell');

		expect(newRow1Col1!.textContent).toBe('Bar');
		expect(newRow2Col1!.textContent).toBe('Baz');
		expect(newRow3Col1!.textContent).toBe('Foo');
	});

	it('clicking again on the header column with sorting reverses the ordering', () => {
		const columns = [
			{id: 'name', name: 'Name'},
			{id: 'type', name: 'Type'},
		];

		const items = [
			{id: 1, name: 'Foo', type: 'Foo'},
			{id: 2, name: 'Bar', type: 'Bar'},
			{id: 3, name: 'Baz', type: 'Baz'},
		];

		function ColumnSorting() {
			const [sort, setSort] = useState<Sorting | null>({
				column: 'name',
				direction: 'ascending',
			});

			const filteredItems = useMemo(() => {
				if (!sort) {
					return items;
				}

				return items.sort((a, b) => {
					let cmp = new Intl.Collator('en', {numeric: true}).compare(
						// @ts-ignore
						a[sort.column],
						// @ts-ignore
						b[sort.column]
					);

					if (sort.direction === 'descending') {
						cmp *= -1;
					}

					return cmp;
				});
			}, [sort]);

			return (
				<Table onSortChange={setSort} sort={sort}>
					<Head items={columns}>
						{(column) => (
							<Cell key={column.id} sortable>
								{column.name}
							</Cell>
						)}
					</Head>

					<Body items={filteredItems}>
						{(row) => (
							<Row items={columns}>
								{/** @ts-ignore */}
								{(column) => <Cell>{row[column.id]}</Cell>}
							</Row>
						)}
					</Body>
				</Table>
			);
		}

		const {getAllByRole} = render(<ColumnSorting />);

		const [name, type] = getAllByRole('columnheader');

		expect(name!.getAttribute('aria-sort')).toBe('ascending');
		expect(type!.getAttribute('aria-sort')).toBe('none');

		const [row1Col1, , row2Col1, , row3Col1] = getAllByRole('cell');

		expect(row1Col1!.textContent).toBe('Bar');
		expect(row2Col1!.textContent).toBe('Baz');
		expect(row3Col1!.textContent).toBe('Foo');

		userEvent.click(name!);

		expect(name!.getAttribute('aria-sort')).toBe('descending');
		expect(type!.getAttribute('aria-sort')).toBe('none');

		const [newRow1Col1, , newRow2Col1, , newRow3Col1] =
			getAllByRole('cell');

		expect(newRow1Col1!.textContent).toBe('Foo');
		expect(newRow2Col1!.textContent).toBe('Baz');
		expect(newRow3Col1!.textContent).toBe('Bar');
	});

	it('clicking on a new header column will reset the order of the previous column', () => {
		const columns = [
			{id: 'name', name: 'Name'},
			{id: 'type', name: 'Type'},
		];

		const items = [
			{id: 1, name: 'Foo', type: 'PNG'},
			{id: 2, name: 'Bar', type: 'Files'},
			{id: 3, name: 'Baz', type: 'Folder'},
		];

		function ColumnSorting() {
			const [sort, setSort] = useState<Sorting | null>({
				column: 'name',
				direction: 'ascending',
			});

			const filteredItems = useMemo(() => {
				if (!sort) {
					return items;
				}

				return items.sort((a, b) => {
					let cmp = new Intl.Collator('en', {numeric: true}).compare(
						// @ts-ignore
						a[sort.column],
						// @ts-ignore
						b[sort.column]
					);

					if (sort.direction === 'descending') {
						cmp *= -1;
					}

					return cmp;
				});
			}, [sort]);

			return (
				<Table onSortChange={setSort} sort={sort}>
					<Head items={columns}>
						{(column) => (
							<Cell key={column.id} sortable>
								{column.name}
							</Cell>
						)}
					</Head>

					<Body items={filteredItems}>
						{(row) => (
							<Row items={columns}>
								{/** @ts-ignore */}
								{(column) => <Cell>{row[column.id]}</Cell>}
							</Row>
						)}
					</Body>
				</Table>
			);
		}

		const {getAllByRole} = render(<ColumnSorting />);

		const [name, type] = getAllByRole('columnheader');

		expect(name!.getAttribute('aria-sort')).toBe('ascending');
		expect(type!.getAttribute('aria-sort')).toBe('none');

		const [row1Col1, , row2Col1, , row3Col1] = getAllByRole('cell');

		expect(row1Col1!.textContent).toBe('Bar');
		expect(row2Col1!.textContent).toBe('Baz');
		expect(row3Col1!.textContent).toBe('Foo');

		userEvent.click(type!);

		expect(name!.getAttribute('aria-sort')).toBe('none');
		expect(type!.getAttribute('aria-sort')).toBe('ascending');

		const [, newRow1Col2, , newRow2Col2, , newRow3Col2] =
			getAllByRole('cell');

		expect(newRow1Col2!.textContent).toBe('Files');
		expect(newRow2Col2!.textContent).toBe('Folder');
		expect(newRow3Col2!.textContent).toBe('PNG');
	});

	describe('tree grid', () => {
		it('pressing tab will move the focus to the first row', () => {
			const columns = [
				{id: 'name', name: 'Name'},
				{id: 'type', name: 'Type'},
			];

			const items = [
				{
					id: 1,
					name: 'Foo',
					type: 'PNG',
				},
				{id: 2, name: 'Bar', type: 'Files'},
				{
					children: [
						{id: 4, name: 'Bar', type: 'Vector'},
						{id: 5, name: 'Foo', type: 'Files'},
					],
					id: 3,
					name: 'Baz',
					type: 'Folder',
				},
			];

			const {getAllByRole} = render(
				<Table nestedKey="children">
					<Head items={columns}>
						{(column) => <Cell key={column.id}>{column.name}</Cell>}
					</Head>

					<Body items={items}>
						{(row) => (
							<Row items={columns}>
								{(column) => (
									<Cell key={`${row.id}:${column.id}`}>
										{/** @ts-ignore */}
										{row[column.id]}
									</Cell>
								)}
							</Row>
						)}
					</Body>
				</Table>
			);

			const [, firstRow] = getAllByRole('row');

			expect(document.activeElement).not.toEqual(firstRow);

			userEvent.tab();

			expect(firstRow).toHaveFocus();
		});

		it('pressing tab again will move the focus to the next element outside the table', () => {
			const columns = [
				{id: 'name', name: 'Name'},
				{id: 'type', name: 'Type'},
			];

			const items = [
				{
					id: 1,
					name: 'Foo',
					type: 'PNG',
				},
				{id: 2, name: 'Bar', type: 'Files'},
				{
					children: [
						{id: 4, name: 'Bar', type: 'Vector'},
						{id: 5, name: 'Foo', type: 'Files'},
					],
					id: 3,
					name: 'Baz',
					type: 'Folder',
				},
			];

			const {getAllByRole} = render(
				<Table nestedKey="children">
					<Head items={columns}>
						{(column) => <Cell key={column.id}>{column.name}</Cell>}
					</Head>

					<Body items={items}>
						{(row) => (
							<Row items={columns}>
								{(column) => (
									<Cell key={`${row.id}:${column.id}`}>
										{/** @ts-ignore */}
										{row[column.id]}
									</Cell>
								)}
							</Row>
						)}
					</Body>
				</Table>
			);

			const [, firstRow] = getAllByRole('row');

			expect(document.activeElement).not.toEqual(firstRow);

			userEvent.tab();

			expect(firstRow).toHaveFocus();

			userEvent.tab();

			expect(document.body).toHaveFocus();
		});

		describe('keyboard interaction on row', () => {
			it('pressing the down arrow key moves focus to the row below', () => {
				const columns = [
					{id: 'name', name: 'Name'},
					{id: 'type', name: 'Type'},
				];

				const items = [
					{
						id: 1,
						name: 'Foo',
						type: 'PNG',
					},
					{id: 2, name: 'Bar', type: 'Files'},
					{
						children: [
							{id: 4, name: 'Bar', type: 'Vector'},
							{id: 5, name: 'Foo', type: 'Files'},
						],
						id: 3,
						name: 'Baz',
						type: 'Folder',
					},
				];

				const {getAllByRole} = render(
					<Table nestedKey="children">
						<Head items={columns}>
							{(column) => (
								<Cell key={column.id}>{column.name}</Cell>
							)}
						</Head>

						<Body items={items}>
							{(row) => (
								<Row items={columns}>
									{(column) => (
										<Cell key={`${row.id}:${column.id}`}>
											{/** @ts-ignore */}
											{row[column.id]}
										</Cell>
									)}
								</Row>
							)}
						</Body>
					</Table>
				);

				const [, firstRow, secondRow] = getAllByRole('row');

				expect(document.activeElement).not.toEqual(firstRow);

				userEvent.tab();

				expect(firstRow).toHaveFocus();

				userEvent.keyboard('{ArrowDown/}');

				expect(secondRow).toHaveFocus();
			});

			it('pressing the up arrow key moves focus to the row above', () => {
				const columns = [
					{id: 'name', name: 'Name'},
					{id: 'type', name: 'Type'},
				];

				const items = [
					{
						id: 1,
						name: 'Foo',
						type: 'PNG',
					},
					{id: 2, name: 'Bar', type: 'Files'},
					{
						children: [
							{id: 4, name: 'Bar', type: 'Vector'},
							{id: 5, name: 'Foo', type: 'Files'},
						],
						id: 3,
						name: 'Baz',
						type: 'Folder',
					},
				];

				const {getAllByRole} = render(
					<Table nestedKey="children">
						<Head items={columns}>
							{(column) => (
								<Cell key={column.id}>{column.name}</Cell>
							)}
						</Head>

						<Body items={items}>
							{(row) => (
								<Row items={columns}>
									{(column) => (
										<Cell key={`${row.id}:${column.id}`}>
											{/** @ts-ignore */}
											{row[column.id]}
										</Cell>
									)}
								</Row>
							)}
						</Body>
					</Table>
				);

				const [, firstRow, secondRow] = getAllByRole('row');

				expect(document.activeElement).not.toEqual(firstRow);

				userEvent.tab();

				expect(firstRow).toHaveFocus();

				userEvent.keyboard('{ArrowDown/}');

				expect(secondRow).toHaveFocus();

				userEvent.keyboard('{ArrowUp/}');

				expect(firstRow).toHaveFocus();
			});

			it('press the left arrow key to collpase the node with expandable', () => {});

			it('pressing the left arrow key moves the focus to the row on the level above', () => {});

			it('pressing the right arrow key expands the node if the node has children', () => {});

			it('pressing the right arrow key moves the focus to the first cell', () => {});
		});

		describe('keyboard interaction on cell', () => {
			it('pressing the up arrow key moves the focus to the cell above', () => {});

			it('pressing the down arrow key moves focus to the cell below', () => {});

			it('pressing the right arrow key moves focus to the cell to the right', () => {});

			it('pressing the left arrow key moves the focus to the right cell', () => {});

			it('pressing the left arrow key in the first cell moves the focus to the row', () => {});
		});
	});
});
