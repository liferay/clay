/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {cleanup, fireEvent, render} from '@testing-library/react';
import React from 'react';
import TestRenderer from 'react-test-renderer';

import ClayRadioGroup from '../RadioGroup';
import ClayToggle from '../Toggle';

describe('Rendering', () => {
	it('default', () => {
		const testRenderer = TestRenderer.create(
			<ClayToggle onToggle={() => {}} toggled={false} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('w/ symbol', () => {
		const testRenderer = TestRenderer.create(
			<ClayToggle
				onToggle={() => {}}
				spritemap="/foo.svg"
				symbol={{
					off: 'times',
					on: 'check',
				}}
				toggled={false}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('w/ disabled', () => {
		const testRenderer = TestRenderer.create(
			<ClayToggle disabled onToggle={() => {}} toggled={false} />
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('inside radiogroup', () => {
		const testRenderer = TestRenderer.create(
			<ClayRadioGroup
				onSelectedValueChange={() => {}}
				selectedValue="foo"
			>
				<ClayToggle label="Foo" value="foo" />

				<ClayToggle label="Bar" value="bar" />

				<ClayToggle label="Baz" value="baz" />
			</ClayRadioGroup>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});

describe('Interactions', () => {
	afterEach(cleanup);

	it('toggles on/off', () => {
		const handleToggleChange = jest.fn();

		const {getByTestId} = render(
			<ClayToggle
				data-testid="toggler"
				label="Toggle"
				onToggle={handleToggleChange}
				toggled={false}
			/>
		);

		fireEvent.click(getByTestId('toggler') as HTMLButtonElement, {});

		expect(handleToggleChange).toHaveBeenCalledTimes(1);
		expect(handleToggleChange).toHaveBeenCalledWith(true);
	});

	it('selecting toggle inside of radiogroup', () => {
		const handleSelectedChange = jest.fn();

		const {getByTestId} = render(
			<ClayRadioGroup
				onSelectedValueChange={handleSelectedChange}
				selectedValue="foo"
			>
				<ClayToggle label="Foo" value="foo" />

				<ClayToggle data-testid="toggler" label="Bar" value="bar" />

				<ClayToggle label="Baz" value="baz" />
			</ClayRadioGroup>
		);

		const toggleBar = getByTestId('toggler');

		fireEvent.click(toggleBar as HTMLButtonElement, {});

		expect(handleSelectedChange).toHaveBeenCalledTimes(1);
		expect(handleSelectedChange).toHaveBeenCalledWith('bar');
	});
});
