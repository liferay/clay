/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
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

	it('w/ dataLabel', () => {
		const testRenderer = TestRenderer.create(
			<ClayToggle
				dataLabel={{off: 'Off', on: 'On'}}
				onToggle={() => {}}
				toggled={false}
			/>
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

	it('w/ symbol inverse', () => {
		const testRenderer = TestRenderer.create(
			<ClayToggle
				onToggle={() => {}}
				spritemap="/foo.svg"
				symbol={{
					inverse: true,
					off: 'times',
					on: 'check',
				}}
				toggled={false}
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('w/ helpText', () => {
		const testRenderer = TestRenderer.create(
			<ClayToggle
				helpText={{
					bottom: 'Bottom Help Text',
					left: 'Left Help Text',
					right: 'Right Help Text',
					top: 'Top Help Text',
				}}
				onToggle={() => {}}
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
				selectedValue={'foo'}
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

		const {getByLabelText} = render(
			<ClayToggle
				id="toggle"
				label="Toggle"
				onToggle={handleToggleChange}
				toggled={false}
			/>
		);

		fireEvent.click(getByLabelText('Toggle') as HTMLButtonElement, {});

		expect(handleToggleChange).toHaveBeenCalledTimes(1);
		expect(handleToggleChange).toHaveBeenCalledWith(true);
	});

	it('selecting toggle inside of radiogroup', () => {
		const handleSelectedChange = jest.fn();

		const {getByLabelText} = render(
			<ClayRadioGroup
				onSelectedValueChange={handleSelectedChange}
				selectedValue={'foo'}
			>
				<ClayToggle id="foo" label="Foo" value="foo" />

				<ClayToggle id="bar" label="Bar" value="bar" />

				<ClayToggle id="baz" label="Baz" value="baz" />
			</ClayRadioGroup>
		);

		const toggleBar = getByLabelText('Bar');

		fireEvent.click(toggleBar as HTMLButtonElement, {});

		expect(handleSelectedChange).toHaveBeenCalledTimes(1);
		expect(handleSelectedChange).toHaveBeenCalledWith('bar');
	});
});
