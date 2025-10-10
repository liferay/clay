/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayBreadcrumb from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

describe('ClayBreadcrumb', () => {
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
			<ClayBreadcrumb items={items} spritemap="path/to/spritemap" />
		);

		expect(container).toMatchSnapshot();
	});

	it('throws a warning when not passing `active` to any `items`', () => {
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
			<ClayBreadcrumb
				ellipsisBuffer={3}
				items={items}
				spritemap="path/to/spritemap"
			/>
		);

		expect(mockWarnings).toBeCalled();
		expect(mockWarnings.mock.calls[0]![0]).toBe(
			'Warning: ClayBreadcrumb expects at least one `active` item on `items`.'
		);

		expect(container).toMatchSnapshot();
		jest.resetAllMocks();
	});

	it('renders with properties passed by `ellipsisProps`', () => {
		const {container} = render(
			<ClayBreadcrumb
				ellipsisBuffer={1}
				ellipsisProps={{style: {fontSize: '15px'}}}
				items={items}
				spritemap="path/to/spritemap"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('calls callback when an item is clicked', () => {
		const itemClickMock = jest.fn((event) => {
			event.persist();
		});

		const itemsWithoutHref = [
			{
				active: true,
				label: '1',
				onClick: itemClickMock,
			},
			{
				label: '2',
				onClick: itemClickMock,
			},
			{
				label: '3',
				onClick: itemClickMock,
			},
			{
				label: '4',
				onClick: itemClickMock,
			},
			{
				label: '5',
				onClick: itemClickMock,
			},
		];

		const {container, getByTestId} = render(
			<ClayBreadcrumb
				ellipsisBuffer={1}
				items={itemsWithoutHref}
				spritemap="path/to/spritemap"
			/>
		);

		fireEvent.click(getByTestId('testId5'));

		expect(itemClickMock).toHaveBeenCalled();

		expect(itemClickMock.mock.calls[0]![0].type).toBe('click');

		expect(container).toMatchSnapshot();
	});
});
