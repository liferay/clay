/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import MultiSelect from '..';
import {cleanup, render, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

global.ResizeObserver = require('resize-observer-polyfill');

const labels = [
	{
		label: 'foo',
		value: '1',
	},
	{
		label: 'bar',
		value: '2',
	},
	{
		label: 'baz',
		value: '3',
	},
];

describe('MultiSelect incremental interactions', () => {
	afterEach(cleanup);

	it('renders with items', () => {
		const {container} = render(
			<MultiSelect defaultItems={labels} spritemap="/foo/bar" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders as disabled', () => {
		const {container} = render(
			<MultiSelect defaultItems={labels} disabled spritemap="/foo/bar" />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a custom item', () => {
		const {getByRole} = render(
			<MultiSelect
				defaultItems={labels}
				sourceItems={[
					{
						label: 'one',
						value: '1',
					},
					{
						label: 'two',
						value: '2',
					},
				]}
				spritemap="/foo/bar"
			>
				{(item: any) => (
					<MultiSelect.Item key={item.value} textValue={item.label}>
						<strong>{item.label}</strong>

						<p>Name</p>
					</MultiSelect.Item>
				)}
			</MultiSelect>
		);

		const combobox = getByRole('combobox');

		userEvent.type(combobox, 'o');

		const listbox = getByRole('listbox');

		expect(listbox).toMatchSnapshot();
	});

	it('placeholder is not visible when it has labels', () => {
		const {getByRole} = render(
			<MultiSelect
				defaultItems={labels}
				placeholder="Type here"
				spritemap="/foo/bar"
			/>
		);

		const combobox = getByRole('combobox') as HTMLInputElement;

		expect(combobox.placeholder).toBe('');
	});

	it('add label on pressing comma key', () => {
		const {getAllByRole, getByRole} = render(
			<MultiSelect spritemap="/foo/bar" />
		);

		const combobox = getByRole('combobox') as HTMLInputElement;

		userEvent.type(combobox, 'foo');
		userEvent.type(combobox, ',');

		expect(getAllByRole('row').length).toEqual(1);

		userEvent.type(combobox, 'bar');
		userEvent.type(combobox, ',');

		expect(getAllByRole('row').length).toEqual(2);
	});

	it('remove the label when clicking on the close button', () => {
		const {getAllByRole, queryAllByRole} = render(
			<MultiSelect defaultItems={[labels[0]!]} spritemap="/foo/bar" />
		);

		expect(getAllByRole('row').length).toEqual(1);

		const [close] = getAllByRole('button');

		userEvent.click(close!);

		expect(queryAllByRole('row').length).toEqual(0);
	});

	it('pressing backspace with empty input should focus last item', () => {
		const {getAllByRole, getByRole} = render(
			<MultiSelect
				defaultItems={[labels[0]!, labels[1]!]}
				spritemap="/foo/bar"
			/>
		);

		expect(getAllByRole('row').length).toEqual(2);

		expect(document.activeElement).toEqual(document.body);

		const combobox = getByRole('combobox');

		userEvent.click(combobox);

		expect(document.activeElement).toEqual(combobox);

		userEvent.keyboard('[Backspace]');

		const rows = getAllByRole('row');
		const close = within(rows.at(-1)!).getByRole('button', {
			name: /remove/i,
		});

		expect(document.activeElement).toEqual(close);
	});

	describe('keyboard arrows indicator', () => {
		it('does not render the indicator by default', async () => {
			const {getByRole} = render(
				<MultiSelect
					defaultItems={[labels[0]!]}
					sourceItems={labels}
					spritemap="/foo/bar"
				/>
			);

			await userEvent.click(getByRole('combobox'));

			expect(
				document.body.querySelector('.clay-keyboard-arrows-indicator')
			).not.toBeInTheDocument();
		});

		it('renders the floating indicator with direction "vertical" when enabled', async () => {
			const {getByRole} = render(
				<MultiSelect
					defaultItems={[labels[0]!]}
					displayKeyboardArrowsIndicator
					sourceItems={labels}
					spritemap="/foo/bar"
				/>
			);

			await userEvent.click(getByRole('combobox'));

			const indicator = document.body.querySelector(
				'.clay-keyboard-arrows-indicator'
			);

			expect(indicator).toBeInTheDocument();
			expect(indicator).toHaveClass('clay-keyboard-arrows-vertical');
			expect(indicator).toHaveClass(
				'clay-keyboard-arrows-indicator-floating'
			);
		});
	});

	it('pressing enter on an exact label match adds the source item and clears the input', () => {
		const onItemsChange = jest.fn();
		const sourceItems = [
			{label: 'one', value: '1'},
			{label: 'two', value: '2'},
		];

		const {getByRole} = render(
			<MultiSelect
				onItemsChange={onItemsChange}
				sourceItems={sourceItems}
				spritemap="/foo/bar"
			/>
		);

		const combobox = getByRole('combobox') as HTMLInputElement;

		userEvent.type(combobox, 'one');

		userEvent.keyboard('[Enter]');

		expect(onItemsChange).toHaveBeenLastCalledWith([sourceItems[0]]);

		expect(combobox.value).toBe('');
	});

	it('pressing enter on a non-matching value with allowsCustomLabel false preserves the input', () => {
		const onItemsChange = jest.fn();
		const sourceItems = [
			{label: 'one', value: '1'},
			{label: 'two', value: '2'},
		];

		const {getByRole} = render(
			<MultiSelect
				allowsCustomLabel={false}
				onItemsChange={onItemsChange}
				sourceItems={sourceItems}
				spritemap="/foo/bar"
			/>
		);

		const combobox = getByRole('combobox') as HTMLInputElement;

		userEvent.type(combobox, 'foo');

		userEvent.keyboard('[Enter]');

		expect(onItemsChange).not.toHaveBeenCalled();

		expect(combobox.value).toBe('foo');
	});

	it('pressing enter on a non-matching value with allowsCustomLabel true adds it as a custom label', () => {
		const onItemsChange = jest.fn();
		const sourceItems = [
			{label: 'one', value: '1'},
			{label: 'two', value: '2'},
		];

		const {getByRole} = render(
			<MultiSelect
				onItemsChange={onItemsChange}
				sourceItems={sourceItems}
				spritemap="/foo/bar"
			/>
		);

		const combobox = getByRole('combobox') as HTMLInputElement;

		userEvent.type(combobox, 'foo');

		userEvent.keyboard('[Enter]');

		expect(onItemsChange).toHaveBeenCalledTimes(1);

		expect(onItemsChange).toHaveBeenLastCalledWith([
			expect.objectContaining({label: 'foo', value: 'foo'}),
		]);

		expect(combobox.value).toBe('');
	});
});
