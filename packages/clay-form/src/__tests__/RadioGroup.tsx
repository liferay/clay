/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import ClayRadio from '../Radio';
import ClayRadioGroup from '../RadioGroup';

describe('Rendering', () => {
	it('default', () => {
		const testRenderer = TestRenderer.create(
			<ClayRadioGroup
				onSelectedValueChange={() => {}}
				selectedValue={'one'}
			>
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
				selectedValue={'one'}
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
});
