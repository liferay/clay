/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as TestRenderer from 'react-test-renderer';
import ClayRadioGroup from '..';
import React from 'react';
import {cleanup, fireEvent, render} from 'react-testing-library';

describe('Rendering', () => {
	it('default', () => {
		const testRenderer = TestRenderer.create(
			<ClayRadioGroup
				onSelectedValueChange={() => {}}
				selectedValue={'one'}
			>
				<ClayRadioGroup.Radio label="One" value="one" />
				<ClayRadioGroup.Radio label="Two" value="two" />
				<ClayRadioGroup.Radio label="Three" value="three" />
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
				<ClayRadioGroup.Radio label="One" value="one" />
				<ClayRadioGroup.Radio label="Two" value="two" />
				<ClayRadioGroup.Radio label="Three" value="three" />
			</ClayRadioGroup>
		);

		const radioThree = getByLabelText('Three');

		fireEvent.click(radioThree as HTMLButtonElement, {});

		expect(handleSelectedChange).toHaveBeenCalledTimes(1);
		expect(handleSelectedChange).toHaveBeenCalledWith('three');
	});
});
