/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayMultiSelect, {itemLabelFilter} from '..';
import ClayDropDown from '@clayui/drop-down';
import {cleanup, fireEvent, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

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
			sourceItems={
				props.sourceItems && itemLabelFilter(props.sourceItems, value)
			}
			spritemap="/foo/bar"
			{...props}
		/>
	);
};

describe('ClayMultiSelect', () => {
	afterEach(cleanup);

	it('renders', () => {
		render(<ClayMultiSelectWithState items={[]} spritemap="/foo/bar" />);

		expect(document.body).toMatchSnapshot();
	});

	it('renders with items', () => {
		render(<ClayMultiSelectWithState items={items} spritemap="/foo/bar" />);

		expect(document.body).toMatchSnapshot();
	});

	it('renders as not valid', () => {
		render(
			<ClayMultiSelectWithState
				isValid={false}
				items={items}
				spritemap="/foo/bar"
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders as disabled', () => {
		render(
			<ClayMultiSelectWithState
				disabled
				isValid={false}
				items={items}
				spritemap="/foo/bar"
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders a custom menu', () => {
		const MenuCustom: React.ComponentProps<
			typeof ClayMultiSelect
		>['menuRenderer'] = ({
			inputValue,
			locator,
			onItemClick = () => {},
			sourceItems,
		}) => (
			<ClayDropDown.ItemList>
				{sourceItems
					.filter(
						(item) =>
							inputValue && item[locator.label].match(inputValue)
					)
					.map((item) => (
						<ClayDropDown.Item
							key={item.value}
							onClick={() => onItemClick(item)}
						>
							<strong>{item[locator.label]}</strong>
							<p>Name</p>
						</ClayDropDown.Item>
					))}
			</ClayDropDown.ItemList>
		);

		render(
			<ClayMultiSelectWithState
				inputValue="one"
				items={items}
				menuRenderer={MenuCustom}
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
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it("don't show a placeholder when you have items", () => {
		const onItemsChangeFn = jest.fn();

		const {container} = render(
			<ClayMultiSelectWithState
				items={items}
				onItemsChange={onItemsChangeFn}
				spritemap="/foo/bar"
			/>
		);

		expect(container.querySelector('input')!.placeholder).toBe('');
	});
});

describe('Interactions', () => {
	afterEach(cleanup);

	it('adding text and hitting `,` should add a new items', () => {
		const {container} = render(<ClayMultiSelectWithState />);

		const input = container.querySelector('input');

		fireEvent.change(input as HTMLInputElement, {
			target: {value: 'foo'},
		});

		fireEvent.keyDown(input as HTMLInputElement, {
			key: ',',
		});

		expect(container.querySelectorAll('.label').length).toEqual(1);

		fireEvent.change(input as HTMLInputElement, {
			target: {value: 'bar'},
		});

		fireEvent.keyDown(input as HTMLInputElement, {key: ','});

		expect(container.querySelectorAll('.label').length).toEqual(2);
	});

	it('clicking x removes item', () => {
		const onItemsChangeFn = jest.fn();

		const {container} = render(
			<ClayMultiSelectWithState
				items={[items[0]]}
				onItemsChange={onItemsChangeFn}
				spritemap="/foo/bar"
			/>
		);

		expect(container.querySelectorAll('.label').length).toEqual(1);

		expect(onItemsChangeFn).not.toHaveBeenCalled();

		fireEvent.click(
			container.querySelector('.label .close') as HTMLButtonElement,
			{}
		);

		expect(onItemsChangeFn).toHaveBeenCalled();
	});

	it('hitting backspace should focus last item and hitting it again should call onItemsChange', () => {
		const onItemsChangeFn = jest.fn();

		const {container} = render(
			<ClayMultiSelectWithState
				items={[items[0], items[1]]}
				onItemsChange={onItemsChangeFn}
				spritemap="/foo/bar"
			/>
		);

		expect(container.querySelectorAll('.label').length).toEqual(2);

		expect(document.activeElement!.tagName).toEqual('BODY');

		fireEvent.keyDown(
			container.querySelector('input[type=text]') as HTMLInputElement,
			{key: 'Backspace'}
		);

		expect(document.activeElement!.tagName).toEqual('BUTTON');
		expect(document.activeElement!.classList).toContain('close');

		fireEvent.keyDown(document.activeElement as HTMLSpanElement, {
			key: 'Backspace',
		});

		expect(onItemsChangeFn).toHaveBeenCalled();
	});

	it('autocomplete menu renders with left and top styles', () => {
		const onItemsChangeFn = jest.fn();

		const {container} = render(
			<ClayMultiSelectWithState
				items={[items[0]]}
				onItemsChange={onItemsChangeFn}
				sourceItems={items}
				spritemap="/foo/bar"
			/>
		);

		const input = container.querySelector<HTMLInputElement>('input');

		userEvent.click(input!);
		fireEvent.change(input!, {
			target: {value: 'foo'},
		});

		const menuStyles = (
			document.querySelector('.autocomplete-dropdown-menu') as HTMLElement
		).style;

		expect(menuStyles.left).not.toEqual('');
		expect(menuStyles.top).not.toEqual('');
	});

	it('clicking on autocomplete item calls onItemsChange', () => {
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

describe('itemLabelFilter', () => {
	it('filters item with text', () => {
		expect(
			itemLabelFilter(
				[
					{
						label: 'baz',
						value: '1',
					},
					{
						label: 'bar',
						value: '2',
					},
				],
				'baz'
			)
		).toMatchInlineSnapshot(`
		Array [
		  Object {
		    "label": "baz",
		    "value": "1",
		  },
		]
	`);
	});

	it('filters items with non-sequential text', () => {
		expect(
			itemLabelFilter(
				[
					{
						label: 'baz',
						value: '1',
					},
					{
						label: 'bar',
						value: '2',
					},
				],
				'bz'
			)
		).toMatchInlineSnapshot(`
		Array [
		  Object {
		    "label": "baz",
		    "value": "1",
		  },
		]
	`);
	});

	it('filters items with upper or lower case text', () => {
		expect(
			itemLabelFilter(
				[
					{
						label: 'Baz',
						value: '1',
					},
					{
						label: 'bar',
						value: '2',
					},
				],
				'B'
			)
		).toMatchInlineSnapshot(`
		Array [
		  Object {
		    "label": "Baz",
		    "value": "1",
		  },
		  Object {
		    "label": "bar",
		    "value": "2",
		  },
		]
	`);
	});
});
