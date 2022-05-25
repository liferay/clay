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

	it('render date picker with default value', () => {
		const {getByLabelText, getByTestId} = render(
			<ClayDatePicker
				ariaLabels={{
					buttonChooseDate: 'Choose your desired date',
					buttonDot: 'Select current date',
					buttonNextMonth: 'Select the next month',
					buttonPreviousMonth: 'Select the previous month',
					input: 'input-test',
				}}
				defaultMonth={new Date(2019, 3, 18)}
				defaultValue="2019-04-10"
				spritemap={spritemap}
				years={{end: 2019, start: 2019}}
			/>
		);

		const input: any = getByLabelText('input-test');
		const dayNumber = getByLabelText(new Date('2019 04 10').toDateString());
		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');

		expect(input.value).toBe('2019-04-10');
		expect(dayNumber.classList).toContain('active');
		expect(monthSelect.value).toBe('3');
		expect(yearSelect.value).toBe('2019');
	});

	it('render date picker with value controlled', () => {
		const {getByLabelText, getByTestId} = render(
			<ClayDatePicker
				ariaLabels={{
					buttonChooseDate: 'Choose your desired date',
					buttonDot: 'Select current date',
					buttonNextMonth: 'Select the next month',
					buttonPreviousMonth: 'Select the previous month',
					input: 'input-test',
				}}
				defaultMonth={new Date(2019, 3, 18)}
				onChange={() => {}}
				spritemap={spritemap}
				value="2019-04-10"
				years={{end: 2019, start: 2019}}
			/>
		);

		const input: any = getByLabelText('input-test');
		const dayNumber = getByLabelText(new Date('2019 04 10').toDateString());
		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');

		expect(input.value).toBe('2019-04-10');
		expect(dayNumber.classList).toContain('active');
		expect(monthSelect.value).toBe('3');
		expect(yearSelect.value).toBe('2019');
	});

	it('render date picker with value controlled with range', () => {
		const {getByLabelText, getByTestId} = render(
			<ClayDatePicker
				ariaLabels={{
					buttonChooseDate: 'Choose your desired date',
					buttonDot: 'Select current date',
					buttonNextMonth: 'Select the next month',
					buttonPreviousMonth: 'Select the previous month',
					input: 'input-test',
				}}
				defaultMonth={new Date(2019, 3, 18)}
				onChange={() => {}}
				range
				spritemap={spritemap}
				value="2019-04-10 - 2019-04-15"
				years={{end: 2019, start: 2019}}
			/>
		);

		const input: any = getByLabelText('input-test');
		const dayNumber = getByLabelText(new Date('2019 04 10').toDateString());
		const endDate = getByLabelText(new Date('2019 04 15').toDateString());
		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');

		expect(input.value).toBe('2019-04-10 - 2019-04-15');
		expect(dayNumber.classList).toContain('active');
		expect(endDate.classList).toContain('active');
		expect(monthSelect.value).toBe('3');
		expect(yearSelect.value).toBe('2019');
	});

	it('render date picker with default value with range', () => {
		const {getByLabelText, getByTestId} = render(
			<ClayDatePicker
				ariaLabels={{
					buttonChooseDate: 'Choose your desired date',
					buttonDot: 'Select current date',
					buttonNextMonth: 'Select the next month',
					buttonPreviousMonth: 'Select the previous month',
					input: 'input-test',
				}}
				defaultMonth={new Date(2019, 3, 18)}
				defaultValue="2019-04-10 - 2019-04-15"
				range
				years={{end: 2019, start: 2019}}
			/>
		);

		const input: any = getByLabelText('input-test');
		const dayNumber = getByLabelText(new Date('2019 04 10').toDateString());
		const endDate = getByLabelText(new Date('2019 04 15').toDateString());
		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');

		expect(input.value).toBe('2019-04-10 - 2019-04-15');
		expect(dayNumber.classList).toContain('active');
		expect(endDate.classList).toContain('active');
		expect(monthSelect.value).toBe('3');
		expect(yearSelect.value).toBe('2019');
	});

	it('render date picker with value controlled with time', () => {
		const {getByLabelText, getByTestId} = render(
			<ClayDatePicker
				ariaLabels={{
					buttonChooseDate: 'Choose your desired date',
					buttonDot: 'Select current date',
					buttonNextMonth: 'Select the next month',
					buttonPreviousMonth: 'Select the previous month',
					input: 'input-test',
				}}
				defaultMonth={new Date(2019, 3, 18)}
				onChange={() => {}}
				spritemap={spritemap}
				time
				value="2019-04-10 05:00"
				years={{end: 2019, start: 2019}}
			/>
		);

		const input: any = getByLabelText('input-test');
		const dayNumber = getByLabelText(new Date('2019 04 10').toDateString());

		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');

		const hours = getByTestId('hours') as HTMLInputElement;
		const minutes = getByTestId('minutes') as HTMLInputElement;

		expect(input.value).toBe('2019-04-10 05:00');
		expect(dayNumber.classList).toContain('active');
		expect(monthSelect.value).toBe('3');
		expect(yearSelect.value).toBe('2019');
		expect(hours.value).toBe('05');
		expect(minutes.value).toBe('00');
	});

	it('render date picker with default value with time', () => {
		const {getByLabelText, getByTestId} = render(
			<ClayDatePicker
				ariaLabels={{
					buttonChooseDate: 'Choose your desired date',
					buttonDot: 'Select current date',
					buttonNextMonth: 'Select the next month',
					buttonPreviousMonth: 'Select the previous month',
					input: 'input-test',
				}}
				defaultMonth={new Date(2019, 3, 18)}
				defaultValue="2019-04-10 05:00"
				spritemap={spritemap}
				time
				years={{end: 2019, start: 2019}}
			/>
		);

		const input: any = getByLabelText('input-test');
		const dayNumber = getByLabelText(new Date('2019 04 10').toDateString());

		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');

		const hours = getByTestId('hours') as HTMLInputElement;
		const minutes = getByTestId('minutes') as HTMLInputElement;

		expect(input.value).toBe('2019-04-10 05:00');
		expect(dayNumber.classList).toContain('active');
		expect(monthSelect.value).toBe('3');
		expect(yearSelect.value).toBe('2019');
		expect(hours.value).toBe('05');
		expect(minutes.value).toBe('00');
	});
});
