/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';

import ClaySelectBox from '../SelectBox';

const options = [
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
];

describe('Rendering', () => {
	afterEach(cleanup);

	it('renders ClaySelectBox', () => {
		const {container} = render(
			<ClaySelectBox
				aria-label="Select Box Label"
				items={options}
				onSelectChange={() => {}}
				value="1"
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders ClaySelectBox with multiple options selected', () => {
		const {container} = render(
			<ClaySelectBox
				aria-label="Select Box Label"
				items={options}
				multiple
				onSelectChange={() => {}}
				value={['1', '2']}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders ClaySelectBox with buttons to reorder options', () => {
		const {container} = render(
			<ClaySelectBox
				aria-label="Select Box Label"
				items={options}
				multiple
				onItemsChange={() => {}}
				onSelectChange={() => {}}
				showArrows
				spritemap="/path/to/some/resource.svg"
				value={['1']}
			/>
		);

		expect(container).toMatchSnapshot();
	});
});

describe('Interactions', () => {
	afterEach(cleanup);

	it('changes order of options in ClaySelectBox when reorder up button is clicked', () => {
		const handleOnItemsChange = jest.fn();
		const {container} = render(
			<ClaySelectBox
				aria-label="Select Box Label"
				items={options}
				multiple
				onItemsChange={handleOnItemsChange}
				onSelectChange={() => {}}
				showArrows
				spritemap="/path/to/some/resource.svg"
				value={['2']}
			/>
		);

		const reorderUpButton = container.querySelector('.reorder-button-up');

		expect(handleOnItemsChange).not.toHaveBeenCalled();

		fireEvent.click(reorderUpButton as HTMLButtonElement, {});

		expect(handleOnItemsChange).toHaveBeenCalledWith([
			{label: 'Option 2', value: '2'},
			{label: 'Option 1', value: '1'},
			{label: 'Option 3', value: '3'},
		]);
	});

	it('selects multiple options', () => {
		const handleChange = jest.fn();

		const {container} = render(
			<ClaySelectBox
				aria-label="Select Box Label"
				items={options}
				multiple
				onSelectChange={handleChange}
				showArrows
				spritemap="/path/to/some/resource.svg"
				value={[]}
			/>
		);

		const select = container.querySelector('select')!;
		const optionsElements = select.querySelectorAll('option');

		optionsElements[0]!.selected = true;
		optionsElements[1]!.selected = true;

		fireEvent.change(select);

		expect(handleChange).toHaveBeenCalledWith(['1', '2']);
	});
});
