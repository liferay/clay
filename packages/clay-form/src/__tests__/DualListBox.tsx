/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

import ClayDualListBox from '../DualListBox';

const options = [
	[
		{
			label: 'Option 1',
			value: '1',
		},
		{
			label: 'Option 2',
			value: '2',
		},
		{
			label: 'Option 3',
			value: '3',
		},
	],
	[
		{
			label: 'Option 4',
			value: '4',
		},
		{
			label: 'Option 5',
			value: '5',
		},
	],
];

describe('Rendering', () => {
	afterEach(cleanup);

	it('renders ClayDualListBox', () => {
		const {container} = render(
			<ClayDualListBox
				items={options}
				left={{
					label: 'In Use',
					onSelectChange: () => {},
					selected: [''],
				}}
				onItemsChange={() => {}}
				right={{
					label: 'Available',
					onSelectChange: () => {},
					selected: [''],
				}}
				size={8}
				spritemap="/path/to/some/resource.svg"
			/>
		);

		expect(container).toMatchSnapshot();
	});
});

describe('Interactions', () => {
	afterEach(cleanup);

	it('calls onChange event when transfering items', () => {
		const handleChange = jest.fn();

		const {getByTestId} = render(
			<ClayDualListBox
				items={options}
				left={{
					label: 'In Use',
					onSelectChange: () => {},
					selected: ['2'],
				}}
				onItemsChange={handleChange}
				right={{
					label: 'Available',
					onSelectChange: () => {},
					selected: ['5'],
				}}
				size={8}
				spritemap="/path/to/some/resource.svg"
			/>
		);

		expect(handleChange).not.toHaveBeenCalled();

		fireEvent.click(getByTestId('ltr') as HTMLButtonElement, {});

		expect(handleChange).toHaveBeenCalledWith([
			[
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 3',
					value: '3',
				},
			],
			[
				{
					label: 'Option 4',
					value: '4',
				},
				{
					label: 'Option 5',
					value: '5',
				},
				{
					label: 'Option 2',
					value: '2',
				},
			],
		]);

		fireEvent.click(getByTestId('rtl') as HTMLButtonElement, {});

		expect(handleChange).toHaveBeenCalledWith([
			[
				{
					label: 'Option 1',
					value: '1',
				},
				{
					label: 'Option 2',
					value: '2',
				},
				{
					label: 'Option 3',
					value: '3',
				},
				{
					label: 'Option 5',
					value: '5',
				},
			],
			[
				{
					label: 'Option 4',
					value: '4',
				},
			],
		]);
	});
});
