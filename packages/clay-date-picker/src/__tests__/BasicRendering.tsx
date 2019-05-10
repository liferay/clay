/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';

import ClayDatePicker from '..';

const spritemap = `icons.svg`;

describe(`BasicRendering`, () => {
	it(`renders by default`, () => {
		const component = TestRenderer.create(
			<ClayDatePicker
				initialMonth={new Date(2019, 3, 18)}
				onValueChange={() => {}}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				value={``}
			/>
		);

		expect(component.toJSON()).toMatchSnapshot();
	});

	it(`renders date picker with dropdown open`, () => {
		const component = TestRenderer.create(
			<ClayDatePicker
				initialExpanded
				initialMonth={new Date(2019, 3, 18)}
				onValueChange={() => {}}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				value={``}
			/>
		);

		expect(component.toJSON()).toMatchSnapshot();
	});

	it(`renders date picker with time`, () => {
		const component = TestRenderer.create(
			<ClayDatePicker
				initialExpanded
				initialMonth={new Date(2019, 3, 18)}
				onValueChange={() => {}}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				time
				timezone="GMT+01:00"
				value={``}
			/>
		);

		expect(component.toJSON()).toMatchSnapshot();
	});

	it(`renders date picker with native picker`, () => {
		const component = TestRenderer.create(
			<ClayDatePicker
				initialExpanded
				initialMonth={new Date(2019, 3, 18)}
				onValueChange={() => {}}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				useNative
				value={``}
			/>
		);

		expect(component.toJSON()).toMatchSnapshot();
	});

	it(`renders the date picker with years range`, () => {
		const component = TestRenderer.create(
			<ClayDatePicker
				initialExpanded
				initialMonth={new Date(2019, 3, 18)}
				onValueChange={() => {}}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				value={``}
				years={{
					end: 2024,
					start: 1997,
				}}
			/>
		);

		expect(component.toJSON()).toMatchSnapshot();
	});
});
