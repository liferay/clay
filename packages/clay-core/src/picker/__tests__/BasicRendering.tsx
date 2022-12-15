/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

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
});
