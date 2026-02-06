/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import {ClayDropDownWithDrilldown} from '../DropDownWithDrilldown';

describe('ClayDropDownWithDrilldown', () => {
	afterEach(cleanup);

	beforeAll(() => {
		jest.useFakeTimers();
	});

	afterAll(() => {
		jest.useRealTimers();
	});

	it('renders', () => {
		const {getByTestId} = render(
			<ClayDropDownWithDrilldown
				defaultActiveMenu="x0a3"
				menus={{
					x0a3: [
						{href: '#', title: 'Hash Link'},
						{onClick: () => alert('test'), title: 'Alert!'},
						{child: 'x0a4', title: 'Subnav'},
					],
					x0a4: [
						{href: '#', title: '2nd hash link'},
						{child: 'x0a5', title: 'Subnav'},
					],
					x0a5: [{title: 'The'}, {title: 'End'}],
				}}
				renderMenuOnClick
				spritemap="#"
				trigger={<button data-testid="trigger" />}
			/>
		);

		fireEvent.click(getByTestId('trigger'));

		expect(document.body).toMatchSnapshot();
	});

	it('renders dividers', () => {
		const {getByTestId} = render(
			<ClayDropDownWithDrilldown
				initialActiveMenu="x0a3"
				menus={{
					x0a3: [
						{href: '#', title: 'Hash Link'},
						{type: 'divider'},
						{onClick: () => alert('test'), title: 'Alert!'},
						{type: 'divider'},
						{child: 'x0a4', title: 'Subnav'},
					],
					x0a4: [
						{href: '#', title: '2nd hash link'},
						{type: 'divider'},
						{child: 'x0a5', title: 'Subnav'},
					],
					x0a5: [{title: 'The'}, {type: 'divider'}, {title: 'End'}],
				}}
				renderMenuOnClick
				spritemap="#"
				trigger={<button data-testid="trigger" />}
			/>
		);

		fireEvent.click(getByTestId('trigger'));

		expect(document.body).toMatchSnapshot();
	});

	xit('navigates forwards when clicking through menus', () => {
		const {getAllByRole, getByTestId} = render(
			<ClayDropDownWithDrilldown
				initialActiveMenu="x0a3"
				menus={{
					x0a3: [
						{href: '#', title: 'Hash Link'},
						{child: 'x0a4', title: 'Subnav'},
					],
					x0a4: [{href: '#', title: '2nd hash link'}],
				}}
				renderMenuOnClick
				spritemap="#"
				trigger={<button data-testid="trigger" />}
			/>
		);

		fireEvent.click(getByTestId('trigger'));

		const [, item] = getAllByRole('menuitem');

		fireEvent.click(item!);

		jest.runAllTimers();

		expect(
			document.querySelectorAll('.drilldown-item')[1]!.classList
		).toContain('drilldown-current');
	});

	xit('navigates backwards when clicking header', () => {
		const {getByTestId} = render(
			<ClayDropDownWithDrilldown
				initialActiveMenu="x0a3"
				menus={{
					x0a3: [
						{href: '#', title: 'Hash Link'},
						{child: 'x0a4', title: 'Subnav'},
					],
					x0a4: [{href: '#', title: '2nd hash link'}],
				}}
				renderMenuOnClick
				spritemap="#"
				trigger={<button data-testid="trigger" />}
			/>
		);

		fireEvent.click(getByTestId('trigger'));

		fireEvent.click(getByTestId('menu-item-Subnav'));

		fireEvent.click(getByTestId('back-button-Subnav'));

		jest.runAllTimers();

		expect(
			document.querySelectorAll('.drilldown-item')[0]!.classList
		).toContain('drilldown-current');
	});

	it('renders with the menu initially active', () => {
		render(
			<ClayDropDownWithDrilldown
				defaultActive
				initialActiveMenu="x0a3"
				menus={{
					x0a3: [
						{href: '#', title: 'Hash Link'},
						{child: 'x0a4', title: 'Subnav'},
					],
					x0a4: [{href: '#', title: '2nd hash link'}],
				}}
				renderMenuOnClick
				spritemap="#"
				trigger={<button data-testid="trigger" />}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('the menu can be toggled by clicking in an item', () => {
		const onActiveChange = jest.fn();

		const {getAllByRole, getByTestId} = render(
			<ClayDropDownWithDrilldown
				active={false}
				defaultActiveMenu="x0a3"
				menus={{
					x0a3: [
						{onClick: onActiveChange, title: 'Toggle'},
						{child: 'x0a4', title: 'Subnav'},
					],
					x0a4: [{href: '#', title: '2nd hash link'}],
				}}
				onActiveChange={onActiveChange}
				renderMenuOnClick
				spritemap="#"
				trigger={<button data-testid="trigger" />}
			/>
		);

		userEvent.click(getByTestId('trigger'));

		const [item] = getAllByRole('menuitem', {hidden: true});

		userEvent.click(item!);

		expect(onActiveChange).toBeCalled();

		expect(document.body).toMatchSnapshot();
	});
});
