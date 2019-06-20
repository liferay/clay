/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayMultiSelect, {ClayMultiSelectWithAutocomplete} from '..';
import {cleanup, fireEvent, render} from 'react-testing-library';

describe('ClayMultiSelect', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayMultiSelect
				items={[]}
				onItemsChange={() => {}}
				spritemap="/foo/bar"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with items', () => {
		const testRenderer = TestRenderer.create(
			<ClayMultiSelect
				items={['foo', 'bar', 'baz']}
				onItemsChange={() => {}}
				spritemap="/foo/bar"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});

const ClayMultiSelectWithState = (props: any) => {
	const [items, setItems] = React.useState([]);

	return (
		<ClayMultiSelect
			{...props}
			items={items}
			onItemsChange={setItems}
			spritemap="/foo/bar"
		/>
	);
};

describe('Interactions', () => {
	afterEach(cleanup);

	it('adding text and hitting `,` should add a new items', () => {
		const {container} = render(<ClayMultiSelectWithState />);

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

	it('if value does not pass validation, it should not turn into a label', () => {
		const {container} = render(
			<ClayMultiSelectWithState
				validationFn={(val: string) => val === 'foo'}
			/>
		);

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

		expect(container.querySelectorAll('.label').length).toEqual(1);
	});

	it('clicking x removes item', () => {
		const onItemsChangeFn = jest.fn();

		const {container} = render(
			<ClayMultiSelect
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

	it('clicking on autocomplete item adds calls onItemsChange', () => {
		const onItemsChangeFn = jest.fn();

		render(
			<ClayMultiSelectWithAutocomplete
				inputValue="two"
				items={['foo']}
				onItemsChange={onItemsChangeFn}
				sourceItems={['one', 'two', 'three', 'four']}
				spritemap="/foo/bar"
			/>
		);

		expect(document.querySelectorAll('.dropdown-item').length).toEqual(1);

		expect(onItemsChangeFn).not.toHaveBeenCalled();

		fireEvent.click(
			document.querySelectorAll('.dropdown-item')[0] as HTMLLIElement,
			{}
		);

		expect(onItemsChangeFn).toHaveBeenCalled();
	});
});
