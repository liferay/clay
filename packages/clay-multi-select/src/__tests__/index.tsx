/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayMultiSelect from '..';
import ClayDropDown from '@clayui/drop-down';
import {cleanup, fireEvent, render} from '@testing-library/react';
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
	const [items, setItems] = React.useState(props.items as [] | []);
	const [value, setValue] = React.useState(props.inputValue || '');

	return (
		<ClayMultiSelect
			inputValue={value}
			items={items}
			onChange={setValue}
			onItemsChange={setItems}
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
							<p>{'Name'}</p>
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
			key: 'Comma',
		});

		expect(container.querySelectorAll('.label').length).toEqual(1);

		fireEvent.change(input as HTMLInputElement, {
			target: {value: 'bar'},
		});

		fireEvent.keyDown(input as HTMLInputElement, {key: 'Comma'});

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

		render(
			<ClayMultiSelectWithState
				items={[items[0]]}
				onItemsChange={onItemsChangeFn}
				sourceItems={items}
				spritemap="/foo/bar"
			/>
		);

		expect(document.querySelectorAll('.dropdown-item').length).toEqual(0);

		fireEvent.change(
			document.querySelectorAll(
				'input[type=text]'
			)[0] as HTMLInputElement,
			{target: {value: 'bar'}}
		);

		expect(document.querySelectorAll('.dropdown-item').length).toEqual(1);

		const menuStyles = (document.querySelector(
			'.autocomplete-dropdown-menu'
		) as HTMLElement).style;

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

		expect(document.querySelectorAll('.dropdown-item').length).toEqual(0);

		expect(onItemsChangeFn).not.toHaveBeenCalled();

		fireEvent.change(
			document.querySelectorAll(
				'input[type=text]'
			)[0] as HTMLInputElement,
			{target: {value: 'bar'}}
		);

		expect(document.querySelectorAll('.dropdown-item').length).toEqual(1);

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

	it('adding text filters the items', () => {
		const {container} = render(
			<ClayMultiSelectWithState sourceItems={items} />
		);

		const input = container.querySelector('input');

		fireEvent.change(input as HTMLInputElement, {
			target: {value: 'foo'},
		});

		expect(document.body).toMatchSnapshot();
	});

	it('adding text filters the items with a custom function', () => {
		const {container} = render(
			<ClayMultiSelectWithState
				filter={(item: any, inputValue: any, locator: any) =>
					item[locator.label].match(inputValue)
				}
				sourceItems={items}
			/>
		);

		const input = container.querySelector('input');

		fireEvent.change(input as HTMLInputElement, {
			target: {value: 'bar'},
		});

		expect(document.body).toMatchSnapshot();
	});

	it('adding text doesn not filter the items with a custom function', () => {
		const {container} = render(
			<ClayMultiSelectWithState filter={() => true} sourceItems={items} />
		);

		const input = container.querySelector('input');

		fireEvent.change(input as HTMLInputElement, {
			target: {value: 'foo'},
		});

		expect(document.body).toMatchSnapshot();
	});
});
