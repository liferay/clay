/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import ClayRadio from '../Radio';
import ClayRadioGroup from '../RadioGroup';

describe('Rendering', () => {
	it('default', () => {
		const testRenderer = TestRenderer.create(
			<ClayRadioGroup defaultValue="one">
				<ClayRadio label="One" value="one" />

				<ClayRadio label="Two" value="two" />

				<ClayRadio label="Three" value="three" />
			</ClayRadioGroup>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});

describe('Interactions', () => {
	afterEach(cleanup);

	it('selecting a radio element should fire the onSelectedValueChange prop with the new value', () => {
		const handleSelectedChange = jest.fn();

		const {getByLabelText} = render(
			<ClayRadioGroup
				onSelectedValueChange={handleSelectedChange}
				selectedValue="one"
			>
				<ClayRadio label="One" value="one" />

				<ClayRadio label="Two" value="two" />

				<ClayRadio label="Three" value="three" />
			</ClayRadioGroup>
		);

		const radioThree = getByLabelText('Three');

		fireEvent.click(radioThree as HTMLButtonElement, {});

		expect(handleSelectedChange).toHaveBeenCalledTimes(1);
		expect(handleSelectedChange).toHaveBeenCalledWith('three');
	});

	it('selecting a radio element should fire the onChange prop with the new value', () => {
		const onChange = jest.fn();

		const {getByLabelText} = render(
			<ClayRadioGroup onChange={onChange} value="one">
				<ClayRadio label="One" value="one" />

				<ClayRadio label="Two" value="two" />

				<ClayRadio label="Three" value="three" />
			</ClayRadioGroup>
		);

		const radioThree = getByLabelText('Three');

		fireEvent.click(radioThree as HTMLButtonElement, {});

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith('three');
	});

	it('select a radio element with the uncontrolled component', () => {
		const {getByLabelText} = render(
			<ClayRadioGroup defaultValue="one">
				<ClayRadio label="One" value="one" />

				<ClayRadio label="Two" value="two" />

				<ClayRadio label="Three" value="three" />
			</ClayRadioGroup>
		);

		const radioOne = getByLabelText('One') as HTMLInputElement;

		expect(radioOne.checked).toBe(true);

		const radioThree = getByLabelText('Three') as HTMLInputElement;

		fireEvent.click(radioThree as HTMLButtonElement, {});

		expect(radioThree.checked).toBe(true);
	});
});
