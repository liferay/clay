/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayPagination from '..';
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

	it('calls onPageChange when iitem is clicked in dropdown-menu', () => {
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

		fireEvent.click(getByText(document.body, '4') as HTMLElement, {});

		expect(changeMock).toHaveBeenLastCalledWith(4);
	});
});
