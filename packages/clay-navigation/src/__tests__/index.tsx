/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayNavigation from '..';
import React from 'react';
import {cleanup, fireEvent, render} from 'react-testing-library';

describe('ClayNavigation', () => {
	afterEach(() => cleanup());

	const items = [
		{
			active: true,
			href: '#1',
			label: '1',
		},
		{
			href: '#2',
			label: '2',
		},
		{
			href: '#3',
			label: '3',
		},
		{
			href: '#4',
			label: '4',
		},
		{
			href: '#5',
			label: '5',
		},
	];

	it('renders', () => {
		const {container} = render(
			<ClayNavigation>
				<div />
			</ClayNavigation>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a Breadcrumb', () => {
		const {container} = render(
			<ClayNavigation.Breadcrumb
				items={items}
				spritemap="path/to/spritemap"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('should throw a warning when not passing `active` to any `items` on Breadcrumb', () => {
		const mockWarnings = jest
			.spyOn(global.console, 'error')
			.mockImplementation(() => null);

		const items = [
			{
				href: '#1',
				label: '1',
			},
			{
				href: '#2',
				label: '2',
			},
		];

		const {container} = render(
			<ClayNavigation.Breadcrumb
				ellipsisBuffer={3}
				items={items}
				spritemap="path/to/spritemap"
			/>
		);

		expect(mockWarnings).toBeCalled();
		expect(mockWarnings.mock.calls[0][0]).toBe(
			'Warning: ClayNavigation.Breadcrumb expects at least one `active` item on `items`.'
		);

		expect(container).toMatchSnapshot();
		jest.resetAllMocks();
	});

	it('renders a Breadcrumb with properties passed by `ellipsisProps`', () => {
		const {container} = render(
			<ClayNavigation.Breadcrumb
				ellipsisBuffer={1}
				ellipsisProps={{style: {fontSize: '15px'}}}
				items={items}
				spritemap="path/to/spritemap"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('should emit an event when an item is clicked', () => {
		const itemClickMock = jest.fn(event => {
			event.persist();
		});

		const itemsWithoutHref = [
			{
				active: true,
				label: '1',
				onItemClick: itemClickMock,
			},
			{
				label: '2',
				onItemClick: itemClickMock,
			},
			{
				label: '3',
				onItemClick: itemClickMock,
			},
			{
				label: '4',
				onItemClick: itemClickMock,
			},
			{
				label: '5',
				onItemClick: itemClickMock,
			},
		];

		const {container, getByTestId} = render(
			<ClayNavigation.Breadcrumb
				ellipsisBuffer={1}
				items={itemsWithoutHref}
				spritemap="path/to/spritemap"
			/>
		);

		fireEvent.click(getByTestId('testId1'));

		expect(itemClickMock).toHaveBeenCalled();

		expect(itemClickMock.mock.calls[0][0].type).toBe('click');

		expect(container).toMatchSnapshot();
	});
});
