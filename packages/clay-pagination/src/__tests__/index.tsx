/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayPagination, {ClayPaginationWithBar} from '..';
import React from 'react';
import {
	cleanup,
	fireEvent,
	getByTestId,
	getByText,
	render,
} from '@testing-library/react';

const spritemap = 'path/to/spritemap';

describe('ClayPagination', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayPagination
				activePage={12}
				size="lg"
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders with only one page', () => {
		const {container} = render(
			<ClayPagination
				activePage={1}
				ellipsisBuffer={1}
				spritemap={spritemap}
				totalPages={1}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('calls onPageChange when arrow is clicked', () => {
		const changeMock = jest.fn();

		const {container} = render(
			<ClayPagination
				activePage={12}
				onPageChange={changeMock}
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		fireEvent.click(
			getByTestId(container, 'prevArrow') as HTMLButtonElement,
			{}
		);

		expect(changeMock).toHaveBeenLastCalledWith(11);

		fireEvent.click(
			getByTestId(container, 'nextArrow') as HTMLButtonElement,
			{}
		);

		expect(changeMock).toHaveBeenLastCalledWith(13);
	});

	it('calls onPageChange when individual page is clicked', () => {
		const changeMock = jest.fn();

		const {container} = render(
			<ClayPagination
				activePage={12}
				onPageChange={changeMock}
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		fireEvent.click(getByText(container, '25') as HTMLElement, {});

		expect(changeMock).toHaveBeenLastCalledWith(25);
	});

	it('shows dropdown when ellipsis is clicked', () => {
		const {getAllByText} = render(
			<ClayPagination
				activePage={12}
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		fireEvent.click(getAllByText('...')[0] as HTMLElement, {});

		expect(
			document.body.querySelector('.dropdown-menu')!.classList
		).toContain('show');
	});

	it('calls onPageChange when an item is clicked in dropdown-menu', () => {
		const changeMock = jest.fn();

		const {getAllByText} = render(
			<ClayPagination
				activePage={12}
				onPageChange={changeMock}
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		fireEvent.click(getAllByText('...')[0] as HTMLElement, {});

		fireEvent.click(
			getByTestId(document.body, 'testId4') as HTMLElement,
			{}
		);

		expect(changeMock).toHaveBeenLastCalledWith(4);
	});
});

describe('ClayPaginationWithBar', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayPaginationWithBar spritemap={spritemap} totalItems={100} />
		);

		expect(container).toMatchSnapshot();
	});

	it('calls onPageChange when arrow is clicked', () => {
		const changeMock = jest.fn();

		const {container} = render(
			<ClayPaginationWithBar
				initialActivePage={12}
				onPageChange={changeMock}
				spritemap={spritemap}
				totalItems={100}
			/>
		);

		fireEvent.click(
			getByTestId(container, 'prevArrow') as HTMLButtonElement,
			{}
		);

		expect(changeMock).toHaveBeenLastCalledWith(11);

		fireEvent.click(
			getByTestId(container, 'nextArrow') as HTMLButtonElement,
			{}
		);

		expect(changeMock).toHaveBeenLastCalledWith(12);
	});

	it('calls onDeltaChange when select is expanded', () => {
		const deltaChangeMock = jest.fn();

		const {container} = render(
			<ClayPaginationWithBar
				initialActivePage={12}
				onDeltaChange={deltaChangeMock}
				spritemap={spritemap}
				totalItems={100}
			/>
		);

		fireEvent.click(
			getByTestId(container, 'selectPaginationBar') as HTMLButtonElement,
			{}
		);

		fireEvent.click(
			getByTestId(
				window.document.documentElement,
				'dropdownItem1'
			) as HTMLButtonElement,
			{}
		);

		expect(deltaChangeMock).toHaveBeenLastCalledWith(20);
	});

	it('shows dropdown when pagination dropdown is clicked', () => {
		const {container} = render(
			<ClayPaginationWithBar
				initialActivePage={12}
				spritemap={spritemap}
				totalItems={100}
			/>
		);

		fireEvent.click(
			getByTestId(container, 'selectPaginationBar') as HTMLElement,
			{}
		);

		expect(
			document.body.querySelector('.dropdown-menu')!.classList
		).toContain('show');
	});
});
