/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayPaginationWithBasicItems} from '..';
import {cleanup, fireEvent, getByText, render} from '@testing-library/react';
import React from 'react';

const spritemap = 'path/to/spritemap';

describe('ClayPagination', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayPaginationWithBasicItems
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
			<ClayPaginationWithBasicItems
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

		const {getByTestId} = render(
			<ClayPaginationWithBasicItems
				activePage={12}
				onPageChange={changeMock}
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		fireEvent.click(getByTestId('prevArrow'), {});

		expect(changeMock).toHaveBeenLastCalledWith(11);

		fireEvent.click(getByTestId('nextArrow'), {});

		expect(changeMock).toHaveBeenLastCalledWith(13);
	});

	it('calls onPageChange when individual page is clicked', () => {
		const changeMock = jest.fn();

		const {getByText} = render(
			<ClayPaginationWithBasicItems
				activePage={12}
				onPageChange={changeMock}
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		fireEvent.click(getByText('25'), {});

		expect(changeMock).toHaveBeenLastCalledWith(25);
	});

	it('shows dropdown when ellipsis is clicked', () => {
		const {getAllByText} = render(
			<ClayPaginationWithBasicItems
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
			<ClayPaginationWithBasicItems
				activePage={12}
				onPageChange={changeMock}
				spritemap={spritemap}
				totalPages={25}
			/>
		);

		fireEvent.click(getAllByText('...')[0] as HTMLElement, {});

		fireEvent.click(getByText(document.body, '4') as HTMLAnchorElement, {});

		expect(changeMock).toHaveBeenLastCalledWith(4);
	});

	it("does not call a wrapping form's onSubmit", () => {
		const changeMock = jest.fn();
		const onSubmitFn = jest.fn();

		const {getByText} = render(
			<form onSubmit={onSubmitFn}>
				<ClayPaginationWithBasicItems
					activePage={1}
					onPageChange={changeMock}
					spritemap={spritemap}
					totalPages={5}
				/>
			</form>
		);

		fireEvent.click(getByText('2'), {});

		expect(changeMock).toHaveBeenLastCalledWith(2);
		expect(onSubmitFn).not.toHaveBeenCalled();
	});
});
