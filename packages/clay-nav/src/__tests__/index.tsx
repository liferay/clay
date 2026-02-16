/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayVerticalNav} from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const ITEMS = [
	{
		items: [
			{
				href: '#',
				label: 'Nested1',
			},
		],
		label: 'Home',
	},
	{
		href: '#',
		label: 'About',
	},
	{
		href: '#',
		label: 'Contact',
	},
	{
		items: [
			{
				active: true,
				href: '#',
				label: 'Five',
			},
			{
				href: '#',
				label: 'Six',
			},
		],
		label: 'Projects',
	},
	{
		href: '#',
		label: 'Seven',
	},
];

describe('ClayVerticalNav', () => {
	afterEach(() => cleanup());

	const items = [
		{
			initialExpanded: true,
			items: [
				{
					href: '#nested1',
					label: 'Nested1',
				},
			],
			label: 'Home',
		},
	];

	it('renders', () => {
		const {container} = render(
			<ClayVerticalNav
				aria-label="vertical navbar"
				items={items}
				spritemap="/path/to"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('expands items when clicked', () => {
		const {container, getByText} = render(
			<ClayVerticalNav
				aria-label="vertical navbar"
				items={items}
				spritemap="/path/to"
			/>
		);

		expect(
			container.querySelector('.collapsing.show .nav-item')
		).toBeFalsy();

		fireEvent.click(getByText('Home'));

		expect(
			container.querySelector('.collapsing.show .nav-item')
		).toBeTruthy();
	});

	it.skip('expand items by pressing the right arrow key', () => {
		const {getByText} = render(
			<ClayVerticalNav
				aria-label="vertical navbar"
				items={ITEMS}
				spritemap="/path/to"
			/>
		);

		const home = getByText('Home');

		home.focus();

		userEvent.keyboard('[ArrowDown]');
		userEvent.keyboard('[ArrowDown]');
		userEvent.keyboard('[ArrowDown]');

		const projects = getByText('Projects');

		userEvent.keyboard('[ArrowRight]');

		expect(projects!.getAttribute('aria-expanded')).toBe('true');
	});

	it.skip('collapse items by pressing the left arrow key', () => {
		const {getByText} = render(
			<ClayVerticalNav
				aria-label="vertical navbar"
				items={ITEMS}
				spritemap="/path/to"
			/>
		);

		const home = getByText('Home');

		home.focus();

		userEvent.keyboard('[ArrowDown]');
		userEvent.keyboard('[ArrowDown]');
		userEvent.keyboard('[ArrowDown]');

		const projects = getByText('Projects');

		userEvent.keyboard('[ArrowRight]');

		expect(projects!.getAttribute('aria-expanded')).toBe('true');

		userEvent.keyboard('[ArrowLeft]');

		expect(projects!.getAttribute('aria-expanded')).toBe('false');
	});

	it.skip('moves focus to first item if item is expanded', () => {
		const {getByText} = render(
			<ClayVerticalNav
				aria-label="vertical navbar"
				items={ITEMS}
				spritemap="/path/to"
			/>
		);

		const home = getByText('Home');

		home.focus();

		userEvent.keyboard('[ArrowDown]');
		userEvent.keyboard('[ArrowDown]');
		userEvent.keyboard('[ArrowDown]');

		const projects = getByText('Projects');

		expect(document.activeElement).toEqual(projects);

		userEvent.keyboard('[ArrowRight]');

		expect(projects!.getAttribute('aria-expanded')).toBe('true');

		userEvent.keyboard('[ArrowRight]');

		const first = getByText('Five');

		expect(first).toEqual(document.activeElement);
	});

	it.skip('move focus to parent if focus is on child when pressing left arrow key', () => {
		const {getByText} = render(
			<ClayVerticalNav
				aria-label="vertical navbar"
				items={ITEMS}
				spritemap="/path/to"
			/>
		);

		const home = getByText('Home');

		home.focus();

		userEvent.keyboard('[ArrowDown]');
		userEvent.keyboard('[ArrowDown]');
		userEvent.keyboard('[ArrowDown]');

		const projects = getByText('Projects');

		expect(document.activeElement).toBe(projects);

		userEvent.keyboard('[ArrowRight]');

		expect(projects.getAttribute('aria-expanded')).toBe('true');

		userEvent.keyboard('[ArrowRight]');

		const first = getByText('Five');

		expect(document.activeElement).toBe(first);

		userEvent.keyboard('[ArrowLeft]');

		expect(document.activeElement).toBe(projects);
	});
});
