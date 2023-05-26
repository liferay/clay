/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayMultiSelect from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

global.ResizeObserver = require('resize-observer-polyfill');

const items = [
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

const ClayMultiSelectWithState = (props: any) => {
	const [items, setItems] = React.useState((props.items as []) || []);
	const [value, setValue] = React.useState(props.inputValue || '');

	return (
		<ClayMultiSelect
			inputValue={value}
			items={items}
			onChange={setValue}
			onItemsChange={setItems}
			sourceItems={props.sourceItems}
			spritemap="/foo/bar"
			{...props}
		/>
	);
};

describe('Interactions', () => {
	afterEach(cleanup);

	xit('clicking on autocomplete item calls onItemsChange', () => {
		const onItemsChangeFn = jest.fn();

		render(
			<ClayMultiSelectWithState
				items={[items[0]]}
				onItemsChange={onItemsChangeFn}
				sourceItems={items}
				spritemap="/foo/bar"
			/>
		);

		expect(onItemsChangeFn).not.toHaveBeenCalled();

		fireEvent.click(
			document.querySelectorAll('.dropdown-item')[0] as HTMLLIElement,
			{}
		);

		expect(onItemsChangeFn).toHaveBeenCalled();
	});

	it('clicking the Clear All button removes items and text in the input', () => {
		const onItemsChangeFn = jest.fn();
		const onChangeFn = jest.fn();

		const {getByTitle} = render(
			<ClayMultiSelectWithState
				inputValue="foo"
				items={[items[0]]}
				onChange={onChangeFn}
				onItemsChange={onItemsChangeFn}
				sourceItems={items}
				spritemap="/foo/bar"
			/>
		);

		const clearButton = getByTitle('Clear All');

		fireEvent.click(clearButton, {});

		expect(onItemsChangeFn).toHaveBeenCalledWith([]);
		expect(onChangeFn).toHaveBeenCalledWith('');
	});

	it('clicking the Clear All button should move the focus to the input', () => {
		const {container, getByTitle} = render(
			<ClayMultiSelectWithState
				inputValue="foo"
				items={[items[0]]}
				onChange={jest.fn()}
				onItemsChange={jest.fn()}
				sourceItems={items}
				spritemap="/foo/bar"
			/>
		);

		const clearButton = getByTitle('Clear All');
		const input = container.querySelector('.form-control-inset');

		expect(document.activeElement).not.toBe(input);

		fireEvent.click(clearButton, {});

		expect(document.activeElement).toBe(input);
	});

	it('Use custom function for filtering autocomplete results', () => {
		function myFilter(items: any, value: string) {
			return items.filter(
				(item: any) =>
					item.label.match(value) || item.value.match(value)
			);
		}

		const WithCustomFilter = () => {
			const [value, setValue] = React.useState('');
			const [selectedItems, setSelectedItems] = React.useState<any>([]);

			return (
				<ClayMultiSelect
					inputValue={value}
					items={selectedItems}
					onChange={setValue}
					onItemsChange={setSelectedItems}
					sourceItems={myFilter(items, value)}
					spritemap="/foo/bar"
				/>
			);
		};

		const {container} = render(<WithCustomFilter />);

		const input = container.querySelector('input');

		fireEvent.change(input as HTMLInputElement, {
			target: {value: 'bar'},
		});

		expect(
			document.querySelector('.autocomplete-dropdown-menu')
		).toMatchSnapshot();

		fireEvent.change(input as HTMLInputElement, {
			target: {value: '1'},
		});

		expect(
			document.querySelector('.autocomplete-dropdown-menu')
		).toMatchSnapshot();
	});

	xit('allows for async sourceItems', () => {
		jest.useFakeTimers();
		const callbackFn = jest.fn();

		const AsyncMultiSelect = () => {
			const [value, setValue] = React.useState('');
			const [selectedItems, setSelectedItems] = React.useState<any>([]);
			const [isLoading, setIsLoading] = React.useState(false);

			function asyncData(query: string) {
				setIsLoading(true);

				setTimeout(() => {
					callbackFn(query);

					setIsLoading(false);
				}, 2000);
			}

			return (
				<ClayMultiSelect
					inputValue={value}
					isLoading={isLoading}
					items={selectedItems}
					onChange={(value: string) => {
						setValue(value);

						asyncData(value);
					}}
					onItemsChange={setSelectedItems}
					sourceItems={items}
					spritemap="/foo/bar"
				/>
			);
		};

		const {container} = render(<AsyncMultiSelect />);

		const input = container.querySelector('input');

		fireEvent.change(input as HTMLInputElement, {
			target: {value: 'b'},
		});

		expect(callbackFn).not.toHaveBeenCalled();

		jest.runAllTimers();

		expect(callbackFn).toHaveBeenCalledWith('b');

		jest.useRealTimers();
	});
});
