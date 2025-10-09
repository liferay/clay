/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayList, {ClayListWithItems} from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';
import TestRenderer from 'react-test-renderer';

describe('ClayList', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayList>
				<ClayList.Header>This is a header</ClayList.Header>
				<ClayList.Item flex>
					<ClayList.ItemField>Item 1</ClayList.ItemField>

					<ClayList.ItemField>ItemField</ClayList.ItemField>

					<ClayList.ItemField expand>
						<ClayList.ItemTitle>
							Item Title and expanded
						</ClayList.ItemTitle>
						<ClayList.ItemText>Item Text</ClayList.ItemText>
					</ClayList.ItemField>

					<ClayList.ItemField>ItemField</ClayList.ItemField>
				</ClayList.Item>

				<ClayList.Item flex>
					<ClayList.ItemField>Item 2</ClayList.ItemField>
					<ClayList.ItemField expand>
						Hover this item for action menu
					</ClayList.ItemField>
					<ClayList.ItemField>
						<ClayList.QuickActionMenu>
							<ClayList.QuickActionMenu.Item
								onClick={() => {}}
								spritemap="/foo/bar"
								symbol="trash"
							/>

							<ClayList.QuickActionMenu.Item
								onClick={() => {}}
								spritemap="/foo/bar"
								symbol="cog"
							/>
						</ClayList.QuickActionMenu>
					</ClayList.ItemField>
				</ClayList.Item>

				<ClayList.Header>This is another header</ClayList.Header>
				<ClayList.Item flex>
					<ClayList.ItemField>Item 3</ClayList.ItemField>

					<ClayList.ItemField>ItemField</ClayList.ItemField>
				</ClayList.Item>
			</ClayList>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});

describe('ClayListWithItems', () => {
	afterEach(cleanup);

	it('renders with headers', () => {
		const items = [
			{
				header: 'List of Files',
				items: [
					{
						description: 'id is 1',
						href: '#',
						id: '1',
						title: 'Account Example One',
					},
					{
						description: 'id is 2',
						href: '#',
						id: '2',
						title: 'Account Example One',
					},
				],
			},
		];

		const {container} = render(
			<ClayListWithItems items={items} spritemap="/foo/bar" />
		);

		expect(container).toMatchSnapshot();
	});

	it('calls `onSelectedItemsChange` when items are selected', () => {
		const items = [
			{
				description: 'id is 0',
				href: '#',
				id: '0',
				title: 'Account Example One',
			},
		];

		const callbackFn = jest.fn();

		const {container} = render(
			<ClayListWithItems
				items={items}
				onSelectedItemsChange={callbackFn}
				selectedItemsMap={{}}
				spritemap="/foo/bar"
			/>
		);

		fireEvent.click(
			container.querySelector('.custom-control-input') as HTMLElement,
			{}
		);

		expect(callbackFn).toHaveBeenCalledTimes(1);
	});

	it('calls action when clicked', () => {
		const callbackFn = jest.fn();

		const items = [
			{
				description: 'id is 0',
				href: '#',
				id: '0',
				quickActions: [
					{
						onClick: callbackFn,
						symbol: 'trash',
					},
				],
				title: 'Account Example One',
			},
		];

		const {container} = render(
			<ClayListWithItems items={items} spritemap="/foo/bar" />
		);

		fireEvent.click(
			container.querySelector('.quick-action-item') as HTMLElement,
			{}
		);

		expect(callbackFn).toHaveBeenCalledTimes(1);
	});
});
