/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

import {Option, Picker} from '../../';

describe('Picker basic rendering', () => {
	afterEach(cleanup);

	it('render static content', () => {
		render(
			<Picker>
				<Option key="apple">Apple</Option>
				<Option key="banana">Banana</Option>
				<Option key="blueberry">Blueberry</Option>
			</Picker>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('render dynamic content', () => {
		const {container} = render(
			<Picker items={['Apple', 'Banana', 'Blueberry']}>
				{(item) => <Option key={item}>{item}</Option>}
			</Picker>
		);

		expect(container).toMatchSnapshot();
	});

	it('render dynamic content using native selector', () => {
		window.innerWidth = 600;

		const {container} = render(
			<Picker items={['Apple', 'Banana', 'Blueberry']} native>
				{(item) => <Option key={item}>{item}</Option>}
			</Picker>
		);

		expect(container).toMatchSnapshot();
	});

	it('render static content using native selector', () => {
		window.innerWidth = 600;

		const {container} = render(
			<Picker native>
				<Option key="apple">Apple</Option>
				<Option key="banana">Banana</Option>
				<Option key="blueberry">Blueberry</Option>
			</Picker>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders component with selected by default using native selector', () => {
		window.innerWidth = 600;

		const {getByRole} = render(
			<Picker defaultSelectedKey="apple" native>
				<Option key="apple">Apple</Option>
				<Option key="banana">Banana</Option>
				<Option key="blueberry">Blueberry</Option>
			</Picker>
		);

		const combobox = getByRole('combobox') as HTMLSelectElement;

		expect(combobox.value).toBe('apple');
	});

	it('renders open component by default', () => {
		render(
			<Picker defaultActive items={['Apple', 'Banana', 'Blueberry']}>
				{(item) => <Option key={item}>{item}</Option>}
			</Picker>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders component with selected by default', () => {
		const {getByRole} = render(
			<Picker
				defaultSelectedKey="Apple"
				items={['Apple', 'Banana', 'Blueberry']}
			>
				{(item) => <Option key={item}>{item}</Option>}
			</Picker>
		);

		const selectedValue = getByRole('combobox');

		expect(selectedValue.innerHTML).toBe('Apple');
	});

	it('renders component with selected by default and open', () => {
		const {getAllByRole} = render(
			<Picker
				defaultActive
				defaultSelectedKey="Apple"
				items={['Apple', 'Banana', 'Blueberry']}
			>
				{(item) => <Option key={item}>{item}</Option>}
			</Picker>
		);

		const [apple] = getAllByRole('option');

		expect(apple.getAttribute('aria-selected')).toBe('true');
		expect(apple.textContent).toBe('Apple');
	});

	it('renders the component as disabled', () => {
		const {getByRole} = render(
			<Picker
				defaultSelectedKey="Banana"
				disabled
				items={['Apple', 'Banana', 'Blueberry']}
			>
				{(item) => <Option key={item}>{item}</Option>}
			</Picker>
		);

		const selectedValue = getByRole('combobox');

		expect(selectedValue.getAttribute('disabled')).toBe('');
		expect(selectedValue.textContent).toBe('Banana');
	});

	it('renders component with custom placeholder', () => {
		const {getByRole} = render(
			<Picker
				items={['Apple', 'Banana', 'Blueberry']}
				placeholder="Select a fruit"
			>
				{(item) => <Option key={item}>{item}</Option>}
			</Picker>
		);

		const selectedValue = getByRole('combobox');

		expect(selectedValue.textContent).toBe('Select a fruit');
	});

	it('render component with label id', () => {
		const {getByRole} = render(
			<>
				<label htmlFor="picker" id="picker-label">
					Choose a fruit
				</label>
				<Picker
					aria-labelledby="picker-label"
					id="picker"
					items={['Apple', 'Banana', 'Blueberry']}
					placeholder="Select a fruit"
				>
					{(item) => <Option key={item}>{item}</Option>}
				</Picker>
			</>
		);

		const selectedValue = getByRole('combobox') as HTMLButtonElement;
		const label = selectedValue.labels[0];

		expect(selectedValue.getAttribute('id')).toBe('picker');
		expect(selectedValue.getAttribute('aria-labelledby')).toBe(
			'picker-label'
		);
		expect(label.getAttribute('id')).toBe('picker-label');
		expect(label.getAttribute('for')).toBe('picker');
	});

	it('render component with custom trigger', () => {
		const Trigger = React.forwardRef<
			HTMLDivElement,
			React.HTMLAttributes<HTMLDivElement>
		>(({children, ...otherProps}, ref) => (
			<div ref={ref} {...otherProps} tabIndex={0}>
				<Icon className="mr-2" symbol="user" />
				{children}
			</div>
		));

		Trigger.displayName = 'Trigger';

		const {getByRole} = render(
			<Picker as={Trigger} items={['Apple', 'Banana', 'Blueberry']}>
				{(item) => <Option key={item}>{item}</Option>}
			</Picker>
		);

		const svg = getByRole('presentation');
		const selectedValue = getByRole('combobox');

		expect(selectedValue.textContent).toBe('Select an option');
		expect(svg.tagName).toBe('svg');
		expect(selectedValue.getAttribute('aria-activedescendant')).toBe('');
		expect(selectedValue.getAttribute('aria-haspopup')).toBe('listbox');
		expect(selectedValue.getAttribute('role')).toBe('combobox');
		expect(selectedValue.getAttribute('aria-expanded')).toBe('false');
		expect(selectedValue.getAttribute('tabindex')).toBe('0');
	});
});
