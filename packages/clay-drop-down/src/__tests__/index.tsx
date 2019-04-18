/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayDropDown from '..';
import {cleanup, fireEvent, render} from 'react-testing-library';

describe('ClayDropDown', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayDropDown
				items={[
					{href: '#one', label: 'one'},
					{href: '#two', label: 'two'},
					{href: '#three', label: 'three'},
				]}
				spritemap="/foo/bar"
			>
				{'Click Me'}
			</ClayDropDown>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with search input', () => {
		const testRenderer = TestRenderer.create(
			<ClayDropDown
				items={[
					{href: '#one', label: 'one'},
					{href: '#two', label: 'two'},
					{href: '#three', label: 'three'},
				]}
				searchable
				spritemap="/foo/bar"
			>
				{'Click Me'}
			</ClayDropDown>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with icons', () => {
		const testRenderer = TestRenderer.create(
			<ClayDropDown
				items={[
					{
						label: 'Left Icon',
						leftSymbol: 'pencil',
					},
					{
						label: 'Right Icon',
						rightSymbol: 'check',
					},
					{
						label: 'Both Icons',
						leftSymbol: 'trash',
						rightSymbol: 'check',
					},
				]}
				spritemap="/foo/bar"
			>
				{'Click Me'}
			</ClayDropDown>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with groups', () => {
		const testRenderer = TestRenderer.create(
			<ClayDropDown
				items={[
					{
						items: [
							{href: '#one', label: 'one'},
							{href: '#two', label: 'two'},
						],
						label: 'Strings',
						type: 'group',
					},
					{
						type: 'divider',
					},
					{
						label: 'hello',
					},
					{
						type: 'divider',
					},
					{
						items: [
							{href: '#one', label: '1'},
							{href: '#two', label: '2'},
						],
						label: 'Numbers',
						type: 'group',
					},
				]}
				spritemap="/foo/bar"
			>
				{'Click Me'}
			</ClayDropDown>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});

describe('Interactions', () => {
	afterEach(cleanup);

	it('renders', () => {
		const handleClick = jest.fn();

		const {container, getByLabelText} = render(
			<ClayDropDown
				items={[
					{label: 'one', onClick: handleClick},
					{href: '#two', label: 'two'},
					{href: '#three', label: 'three'},
				]}
				spritemap="/foo/bar"
			>
				{'Click Me'}
			</ClayDropDown>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		const firstItem = container.querySelector('span.dropdown-item');

		fireEvent.click(firstItem as HTMLSpanElement, {});

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('filters items by search query', () => {
		const {container} = render(
			<ClayDropDown
				items={[
					{href: '#two', label: 'two'},
					{href: '#three', label: 'three'},
				]}
				searchable
				spritemap="/foo/bar"
			>
				{'Click Me'}
			</ClayDropDown>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		const searchInput = container.querySelector('input');

		fireEvent.change(searchInput as HTMLButtonElement, {
			target: {value: 'two'},
		});

		const dropdownItem = container.querySelector('.dropdown-item');

		expect((dropdownItem as HTMLElement).innerHTML).toBe('two');
	});

	it('calls onChange for form items', () => {
		const checkboxFn = jest.fn();
		const onChangeFn = jest.fn();

		const {container, getByLabelText} = render(
			<ClayDropDown
				items={[
					{
						label: 'Toggle',
						onChange: checkboxFn,
						type: 'checkbox',
					},
					{
						items: [
							{label: 'First', value: 'first'},
							{label: 'Last', value: 'last'},
						],
						label: 'Order By',
						name: 'orderBy',
						onChange: onChangeFn,
						type: 'radio',
						value: 'first',
					},
				]}
				spritemap="/foo/bar"
			>
				{'Click Me'}
			</ClayDropDown>
		);

		const toggleButton = container.querySelector('.dropdown-toggle');

		fireEvent.click(toggleButton as HTMLButtonElement, {});

		const checkbox = getByLabelText('Toggle');

		fireEvent.click(checkbox as HTMLButtonElement, {});

		expect(checkboxFn).toHaveBeenCalledTimes(1);

		const radio = getByLabelText('Last');

		fireEvent.click(radio as HTMLButtonElement, {});

		expect(onChangeFn).toHaveBeenCalledTimes(1);
		expect(onChangeFn).toHaveBeenCalledWith('last');
	});
});
