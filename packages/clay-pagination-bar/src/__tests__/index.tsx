/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
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

	it('renders without a DropDown', () => {
		const {container} = render(
			<ClayPaginationBarWithBasicItems
				showDeltasDropDown={false}
				spritemap={spritemap}
				totalItems={100}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('totalItems with 0 will render the pagination bar with only one page', () => {
		const {container} = render(
			<ClayPaginationBarWithBasicItems
				showDeltasDropDown={false}
				spritemap={spritemap}
				totalItems={0}
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

	it('calls onActiveChange when arrow is clicked', () => {
		const changeMock = jest.fn();

		const {getByTestId} = render(
			<ClayPaginationBarWithBasicItems
				active={12}
				onActiveChange={changeMock}
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

		const {getByRole} = render(
			<ClayPaginationBarWithBasicItems
				defaultActive={12}
				onDeltaChange={deltaChangeMock}
				spritemap={spritemap}
				totalItems={100}
			/>
		);

		const combobox = getByRole('combobox');

		fireEvent.click(combobox, {});

		fireEvent.click(getByText(document.body, '20 items'), {});

		expect(deltaChangeMock).toHaveBeenLastCalledWith(20);
	});

	it('shows dropdown when pagination dropdown is clicked', () => {
		const {getByRole} = render(
			<ClayPaginationBarWithBasicItems
				defaultActive={12}
				spritemap={spritemap}
				totalItems={100}
			/>
		);

		const combobox = getByRole('combobox');

		fireEvent.click(combobox, {});

		expect(getByRole('listbox')).toBeTruthy();
	});

	it('automatically goes to page 1 if active page exceeds delta', () => {
		const Comp = () => {
			const [activePage, setActivePage] = React.useState(2);
			const [delta, setDelta] = React.useState(5);

			return (
				<ClayPaginationBarWithBasicItems
					activeDelta={delta}
					activePage={activePage}
					onDeltaChange={setDelta}
					onPageChange={setActivePage}
					spritemap={spritemap}
					totalItems={15}
				/>
			);
		};
		const {container, getByRole} = render(<Comp />);

		const combobox = getByRole('combobox');

		fireEvent.click(combobox, {});

		fireEvent.click(getByText(document.body, '20 items'), {});

		expect(getByText(container, '1').parentElement?.classList).toContain(
			'active'
		);
	});
});
