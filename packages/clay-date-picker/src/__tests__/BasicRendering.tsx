/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDatePicker from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

const spritemap = 'icons.svg';

describe('BasicRendering', () => {
	afterEach(cleanup);

	it('renders by default', () => {
		render(
			<ClayDatePicker
				initialMonth={new Date(2019, 3, 18)}
				onValueChange={() => {}}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				value={''}
				years={{end: 2019, start: 2019}}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders the date picker with the selected day using the initialMonth', () => {
		const {getByLabelText} = render(
			<ClayDatePicker
				initialMonth={new Date(2019, 3, 18)}
				onValueChange={() => {}}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				value={''}
				years={{end: 2019, start: 2019}}
			/>
		);

		const daySelected = getByLabelText('Thu Apr 18 2019');

		expect(daySelected.classList).toContain('active');
	});

	it('renders date picker with dropdown open', () => {
		render(
			<ClayDatePicker
				initialExpanded
				initialMonth={new Date(2019, 3, 18)}
				onValueChange={() => {}}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				value={''}
				years={{end: 2019, start: 2019}}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders date picker with time', () => {
		render(
			<ClayDatePicker
				initialExpanded
				initialMonth={new Date(2019, 3, 18)}
				onValueChange={() => {}}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				time
				timezone="GMT+01:00"
				value={''}
				years={{end: 2019, start: 2019}}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders date picker with native picker', () => {
		render(
			<ClayDatePicker
				initialExpanded
				initialMonth={new Date(2019, 3, 18)}
				onValueChange={() => {}}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				useNative
				value={''}
				years={{end: 2019, start: 2019}}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders the date picker with years range', () => {
		render(
			<ClayDatePicker
				initialExpanded
				initialMonth={new Date(2019, 3, 18)}
				onValueChange={() => {}}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				value={''}
				years={{
					end: 2024,
					start: 1997,
				}}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});
});
