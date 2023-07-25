/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import MultiSelect from '..';
import {cleanup, render} from '@testing-library/react';
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
			<MultiSelect defaultItems={[labels[0]]} spritemap="/foo/bar" />
		);

		expect(getAllByRole('row').length).toEqual(1);

		const [close] = getAllByRole('button');

		userEvent.click(close!);

		expect(queryAllByRole('row').length).toEqual(0);
	});

	xit('pressing backspace with empty input should focus last item', () => {
		const {getAllByRole, getByRole} = render(
			<MultiSelect
				defaultItems={[labels[0], labels[1]]}
				spritemap="/foo/bar"
			/>
		);

		expect(getAllByRole('row').length).toEqual(2);

		expect(document.activeElement).toEqual(document.body);

		const combobox = getByRole('combobox');

		userEvent.click(combobox);

		expect(document.activeElement).toEqual(combobox);

		userEvent.keyboard('[Backspace]');

		const [close] = getAllByRole('button');

		expect(document.activeElement).toEqual(close);
	});
});
