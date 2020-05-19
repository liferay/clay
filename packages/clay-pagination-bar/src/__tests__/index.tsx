/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayPaginationBarWithBasicItems} from '..';
import {cleanup, fireEvent, getByText, render} from '@testing-library/react';
import React from 'react';

const spritemap = 'path/to/spritemap';

describe('ClayPaginationBar', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayPaginationBarWithBasicItems
				spritemap={spritemap}
				totalItems={100}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('calls onPageChange when arrow is clicked', () => {
		const changeMock = jest.fn();

		const {getByTestId} = render(
			<ClayPaginationBarWithBasicItems
				activePage={12}
				onPageChange={changeMock}
				spritemap={spritemap}
				totalItems={100}
			/>
		);

		fireEvent.click(getByTestId('prevArrow'), {});

		expect(changeMock).toHaveBeenLastCalledWith(11);

		fireEvent.click(getByTestId('nextArrow'), {});

		expect(changeMock).toHaveBeenLastCalledWith(13);
	});

	it('calls onDeltaChange when select is expanded', () => {
		const deltaChangeMock = jest.fn();

		const {getByTestId} = render(
			<ClayPaginationBarWithBasicItems
				activePage={12}
				onDeltaChange={deltaChangeMock}
				spritemap={spritemap}
				totalItems={100}
			/>
		);

		fireEvent.click(getByTestId('selectPaginationBar'), {});

		fireEvent.click(getByText(document.body, '20 items'), {});

		expect(deltaChangeMock).toHaveBeenLastCalledWith(20);
	});

	it('shows dropdown when pagination dropdown is clicked', () => {
		const {getByTestId} = render(
			<ClayPaginationBarWithBasicItems
				activePage={12}
				spritemap={spritemap}
				totalItems={100}
			/>
		);

		fireEvent.click(getByTestId('selectPaginationBar'), {});

		expect(
			document.body.querySelector('.dropdown-menu')!.classList
		).toContain('show');
	});
});
