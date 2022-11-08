/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayNav, {ClayVerticalNav} from '..';
import {
	cleanup,
	fireEvent,
	getAllByRole as docGetAllByRole,
	render,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('ClayNav', () => {
	afterEach(() => cleanup());

	it('renders', () => {
		const {container} = render(
			<ClayNav>
				<div />
			</ClayNav>
		);

		expect(container).toMatchSnapshot();
	});
});

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
			<ClayVerticalNav items={items} spritemap="/path/to" />
		);

		expect(container).toMatchSnapshot();
	});

	it('expands items when clicked', () => {
		const {container, getByText} = render(
			<ClayVerticalNav items={items} spritemap="/path/to" />
		);

		expect(
			container.querySelector('.collapsing.show .nav-item')
		).toBeFalsy();

		fireEvent.click(getByText('Home'));

		expect(
			container.querySelector('.collapsing.show .nav-item')
		).toBeTruthy();
	});

	it('expand items by pressing the right arrow key', () => {
		const {getAllByRole} = render(
			<ClayVerticalNav items={ITEMS} spritemap="/path/to" />
		);

		const [, , projects] = getAllByRole('button');

		userEvent.tab();
		userEvent.tab();

		expect(document.activeElement).toEqual(projects);

		userEvent.keyboard('[ArrowRight]');

		expect(projects.getAttribute('aria-expanded')).toBe('true');
	});

	it('collapse items by pressing the left arrow key', () => {
		const {getAllByRole} = render(
			<ClayVerticalNav items={ITEMS} spritemap="/path/to" />
		);

		const [, , projects] = getAllByRole('button');

		userEvent.tab();
		userEvent.tab();

		expect(document.activeElement).toEqual(projects);

		userEvent.keyboard('[ArrowRight]');

		expect(projects.getAttribute('aria-expanded')).toBe('true');

		userEvent.keyboard('[ArrowLeft]');

		expect(projects.getAttribute('aria-expanded')).toBe('false');
	});

	it('moves focus to first item if item is expanded', () => {
		const {getAllByRole} = render(
			<ClayVerticalNav items={ITEMS} spritemap="/path/to" />
		);

		const [, , projects] = getAllByRole('button');

		userEvent.tab();
		userEvent.tab();

		expect(document.activeElement).toEqual(projects);

		userEvent.keyboard('[ArrowRight]');

		expect(projects.getAttribute('aria-expanded')).toBe('true');

		userEvent.keyboard('[ArrowRight]');

		const [first] = docGetAllByRole(
			projects.parentNode as HTMLElement,
			'menuitem'
		);

		expect(first).toEqual(document.activeElement);
	});

	it('move focus to parent if focus is on child when pressing left arrow key', () => {
		const {getAllByRole} = render(
			<ClayVerticalNav items={ITEMS} spritemap="/path/to" />
		);

		const [, , projects] = getAllByRole('button');

		userEvent.tab();
		userEvent.tab();

		expect(document.activeElement).toEqual(projects);

		userEvent.keyboard('[ArrowRight]');

		expect(projects.getAttribute('aria-expanded')).toBe('true');

		userEvent.keyboard('[ArrowRight]');

		const [first] = docGetAllByRole(
			projects.parentNode as HTMLElement,
			'menuitem'
		);

		expect(first).toEqual(document.activeElement);

		userEvent.keyboard('[ArrowLeft]');

		expect(projects).toEqual(document.activeElement);
	});
});
