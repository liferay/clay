/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayDropDownWithDrilldown} from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

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

		jest.runAllTimers();

		expect(
			document.querySelectorAll('.drilldown-item')[1].classList
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
			document.querySelectorAll('.drilldown-item')[0].classList
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

		const {getByTestId} = render(
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

		fireEvent.click(getByTestId('trigger'));
		fireEvent.click(getByTestId('menu-item-Toggle'));
		fireEvent.click(getByTestId('menu-item-Toggle'));
		fireEvent.click(getByTestId('menu-item-Toggle'));

		expect(onActiveChange).toHaveBeenCalledTimes(4);

		expect(document.body).toMatchSnapshot();
	});
});
