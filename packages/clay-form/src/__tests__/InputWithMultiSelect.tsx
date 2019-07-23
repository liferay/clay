/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import {ClayInputWithMultiSelect} from '../InputWithMultiSelect';
import {cleanup, fireEvent, render} from '@testing-library/react';

const ClayInputWithMultiSelectWithState = (props: any) => {
	const [items, setItems] = React.useState(props.items as [] | []);
	const [value, setValue] = React.useState('');

	return (
		<ClayInputWithMultiSelect
			inputValue={value}
			items={items}
			onInputChange={setValue}
			onItemsChange={setItems}
			spritemap="/foo/bar"
			{...props}
		/>
	);
};

describe('ClayInputWithMultiSelect', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayInputWithMultiSelectWithState
				items={[]}
				spritemap="/foo/bar"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with items', () => {
		const testRenderer = TestRenderer.create(
			<ClayInputWithMultiSelectWithState
				items={['foo', 'bar', 'baz']}
				spritemap="/foo/bar"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders as not valid', () => {
		const testRenderer = TestRenderer.create(
			<ClayInputWithMultiSelectWithState
				errorMessage="WRONG"
				isValid={false}
				items={['foo', 'bar', 'baz']}
				spritemap="/foo/bar"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});

describe('Interactions', () => {
	afterEach(cleanup);

	it('adding text and hitting `,` should add a new items', () => {
		const {container} = render(<ClayInputWithMultiSelectWithState />);

		const input = container.querySelector('input');

		fireEvent.change(input as HTMLInputElement, {
			target: {value: 'foo'},
		});

		fireEvent.keyDown(input as HTMLInputElement, {
			keyCode: 188,
		});

		expect(container.querySelectorAll('.label').length).toEqual(1);

		fireEvent.change(input as HTMLInputElement, {
			target: {value: 'bar'},
		});

		fireEvent.keyDown(input as HTMLInputElement, {keyCode: 188});

		expect(container.querySelectorAll('.label').length).toEqual(2);
	});

	it('clicking x removes item', () => {
		const onItemsChangeFn = jest.fn();

		const {container} = render(
			<ClayInputWithMultiSelectWithState
				items={['foo']}
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
			<ClayInputWithMultiSelectWithState
				items={['foo', 'bar']}
				onItemsChange={onItemsChangeFn}
				spritemap="/foo/bar"
			/>
		);

		expect(container.querySelectorAll('.label').length).toEqual(2);

		expect(document.activeElement!.tagName).toEqual('BODY');

		fireEvent.keyDown(
			container.querySelector('input') as HTMLInputElement,
			{keyCode: 8}
		);

		expect(document.activeElement!.tagName).toEqual('SPAN');
		expect(document.activeElement!.classList).toContain('label');

		fireEvent.keyDown(document.activeElement as HTMLSpanElement, {
			keyCode: 8,
		});

		expect(onItemsChangeFn).toHaveBeenCalled();
	});

	it('clicking on autocomplete item calls onItemsChange', () => {
		const onItemsChangeFn = jest.fn();

		render(
			<ClayInputWithMultiSelectWithState
				items={['foo']}
				onItemsChange={onItemsChangeFn}
				sourceItems={['one', 'two', 'three', 'four']}
				spritemap="/foo/bar"
			/>
		);

		expect(document.querySelectorAll('.dropdown-item').length).toEqual(0);

		expect(onItemsChangeFn).not.toHaveBeenCalled();

		fireEvent.change(
			document.querySelectorAll('input')[0] as HTMLInputElement,
			{target: {value: 'two'}}
		);

		expect(document.querySelectorAll('.dropdown-item').length).toEqual(1);

		fireEvent.click(
			document.querySelectorAll('.dropdown-item')[0] as HTMLLIElement,
			{}
		);

		expect(onItemsChangeFn).toHaveBeenCalled();
	});
});
