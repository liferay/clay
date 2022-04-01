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
				defaultMonth={new Date(2019, 3, 18)}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				years={{end: 2019, start: 2019}}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders the date picker with the selected day using the defaultMonth', () => {
		const {getByLabelText} = render(
			<ClayDatePicker
				defaultMonth={new Date(2019, 3, 18)}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				years={{end: 2019, start: 2019}}
			/>
		);

		const daySelected = getByLabelText('Thu Apr 18 2019');

		expect(daySelected.classList).toContain('active');
	});

	it('renders date picker with dropdown open', () => {
		render(
			<ClayDatePicker
				defaultExpanded
				defaultMonth={new Date(2019, 3, 18)}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				years={{end: 2019, start: 2019}}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders date picker with time', () => {
		render(
			<ClayDatePicker
				defaultExpanded
				defaultMonth={new Date(2019, 3, 18)}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				time
				timezone="GMT+01:00"
				years={{end: 2019, start: 2019}}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders date picker with native picker', () => {
		render(
			<ClayDatePicker
				defaultExpanded
				defaultMonth={new Date(2019, 3, 18)}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				useNative
				years={{end: 2019, start: 2019}}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	it('renders the date picker with years range', () => {
		render(
			<ClayDatePicker
				defaultExpanded
				defaultMonth={new Date(2019, 3, 18)}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				years={{
					end: 2024,
					start: 1997,
				}}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});
});
