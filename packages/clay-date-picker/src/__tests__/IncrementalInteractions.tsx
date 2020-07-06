/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDatePicker from '..';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {default as formatDate} from 'date-fns/format';
import React from 'react';

const spritemap = 'icons.svg';

const ariaLabels = {
	buttonDot: 'Select current date',
	buttonNextMonth: 'Select the next month',
	buttonPreviousMonth: 'Select the previous month',
	input: 'input-test',
};

const DatePickerWithState = ({
	initialMonth = new Date(2019, 3, 18),
	years = {end: 2019, start: 2019},
	...props
}: any) => {
	const [value, setValue] = React.useState();

	return (
		<ClayDatePicker
			{...props}
			initialMonth={initialMonth}
			onValueChange={setValue}
			value={value}
			years={years}
		/>
	);
};

/**
 * This suite of tests covered the interactions that are made
 * in the Date Picker and the rules that should be followed,
 * these tests are guided by the documentation:
 * https://docs.google.com/document/d/1iPFtX7Zku7N-sElSfpGSBlfpYvMu4ATCkVVCU_oB3a4
 */
describe('IncrementalInteractions', () => {
	afterEach(cleanup);

	it('date entered in the input element should reflect on the date picker', () => {
		const {getByLabelText, getByTestId} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				initialExpanded
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
			/>
		);

		const input: any = getByLabelText(ariaLabels.input);
		const dayNumber = getByLabelText('2019 04 10');
		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');

		fireEvent.change(input, {target: {value: '2019-04-10'}});

		expect(input.value).toBe('2019-04-10');
		expect(dayNumber.classList).toContain('active');
		expect(monthSelect.value).toBe('3');
		expect(yearSelect.value).toBe('2019');
		expect(document.body).toMatchSnapshot();
	});

	it('clicking on the date icon should open the dropdown', () => {
		const {getByTestId} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
			/>
		);

		const dropdown = getByTestId('dropdown');

		fireEvent.click(getByTestId('date-button'), {});

		expect(dropdown.classList).toContain('show');
		expect(document.body).toMatchSnapshot();
	});

	it('clicking on the date icon should close the dropdown when it is open', () => {
		const {getByTestId} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				initialExpanded
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
			/>
		);

		const dropdown = getByTestId('dropdown');

		fireEvent.click(getByTestId('date-button'), {});

		expect(dropdown.classList).not.toContain('show');
		expect(document.body).toMatchSnapshot();
	});

	it('clicking outside the dropdown should close the same', () => {
		const {getByTestId} = render(
			<>
				<DatePickerWithState
					ariaLabels={ariaLabels}
					initialExpanded
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>

				<div data-testid="outsideElement">{'OUTSIDE ELEMENT'}</div>
			</>
		);

		const dropdown = getByTestId('dropdown');

		fireEvent.mouseDown(getByTestId('outsideElement'), {});

		expect(dropdown.classList).not.toContain('show');
		expect(document.body).toMatchSnapshot();
	});

	it('clicking a month on the selector should change the content to the corresponding month', () => {
		const {getByTestId} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				initialExpanded
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
			/>
		);

		const monthSelect: any = getByTestId('month-select');

		fireEvent.change(monthSelect, {
			target: {
				value: '6',
			},
		});

		expect(monthSelect.value).toBe('6');
		expect(document.body).toMatchSnapshot();
	});

	it('clicking on the year selector should switch to the year of the corresponding month selected', () => {
		const {getByTestId} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				initialExpanded
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				years={{
					end: 2020,
					start: 2017,
				}}
			/>
		);

		const yearSelect: any = getByTestId('year-select');

		fireEvent.change(yearSelect, {
			target: {
				value: '2018',
			},
		});

		expect(yearSelect.value).toBe('2018');
		expect(document.body).toMatchSnapshot();
	});

	it('clicking on the back arrow button the content must be updated with the corresponding month', () => {
		const {getByLabelText, getByTestId, queryAllByLabelText} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				initialExpanded
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
			/>
		);

		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');
		const backArrowButtonEl = getByLabelText(
			ariaLabels.buttonPreviousMonth
		);

		fireEvent.click(backArrowButtonEl);

		const days = queryAllByLabelText('2019 03', {exact: false});

		expect(yearSelect.value).toBe('2019');
		expect(monthSelect.value).toBe('2');
		expect(days.length).toBe(31);
	});

	it('clicking on the dot button should select current date', () => {
		const {getByLabelText} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				initialExpanded
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
			/>
		);

		const input: any = getByLabelText(ariaLabels.input);
		const dotButtonEl = getByLabelText(ariaLabels.buttonDot);

		fireEvent.click(dotButtonEl);

		const currentDate = new Date();

		expect(input.value).toBe(formatDate(currentDate, 'yyyy-MM-dd'));

		const dayNumber = getByLabelText(formatDate(currentDate, 'yyyy MM dd'));
		expect(dayNumber.classList).toContain('active');
	});

	it('clicking on the next arrow button the content must be updated with the corresponding month', () => {
		const {getByLabelText, getByTestId, queryAllByLabelText} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				initialExpanded
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
			/>
		);

		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');
		const nextArrowButtonEl = getByLabelText(ariaLabels.buttonNextMonth);

		fireEvent.click(nextArrowButtonEl);

		const days = queryAllByLabelText('2019 05', {exact: false});

		expect(yearSelect.value).toBe('2019');
		expect(monthSelect.value).toBe('4');
		expect(days.length).toBe(31);
	});

	it('clicking the back arrow button should update the date to the end of the previous year when the current month is January', () => {
		const {getByLabelText, getByTestId, queryAllByLabelText} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				initialExpanded
				initialMonth={new Date(2019, 0, 18)}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				years={{
					end: 2020,
					start: 2017,
				}}
			/>
		);

		const backArrowButtonEl = getByLabelText(
			ariaLabels.buttonPreviousMonth
		);

		fireEvent.click(backArrowButtonEl);

		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');
		const days = queryAllByLabelText('2018 12', {exact: false});

		expect(yearSelect.value).toBe('2018');
		expect(monthSelect.value).toBe('11');
		expect(days.length).toBe(31);
	});

	it('clicking the next arrow button should update the date to January next year, when the current month is December', () => {
		const {getByLabelText, getByTestId, queryAllByLabelText} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				initialExpanded
				initialMonth={new Date(2019, 11, 18)}
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
				years={{
					end: 2021,
					start: 2018,
				}}
			/>
		);

		const nextArrowButtonEl = getByLabelText(ariaLabels.buttonNextMonth);

		fireEvent.click(nextArrowButtonEl);

		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');
		const days = queryAllByLabelText('2020 01', {exact: false});

		expect(yearSelect.value).toBe('2020');
		expect(monthSelect.value).toBe('0');
		expect(days.length).toBe(31);
	});

	it('clicking on the days number should change the date and the input value', () => {
		const {getByLabelText, getByTestId} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				initialExpanded
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
			/>
		);

		const input: any = getByLabelText(ariaLabels.input);
		const dayNumber = getByLabelText('2019 04 28');
		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');

		fireEvent.click(dayNumber);

		expect(input.value).toBe('2019-04-28');
		expect(yearSelect.value).toBe('2019');
		expect(monthSelect.value).toBe('3');
		expect(dayNumber.classList).toContain('active');
	});

	it('clicking on the days number disabled not should change the date and the input value', () => {
		const {getByLabelText, getByTestId} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				initialExpanded
				placeholder="YYYY-MM-DD"
				spritemap={spritemap}
			/>
		);

		const input: any = getByLabelText(ariaLabels.input);
		const dayNumber = getByLabelText('2019 05 01');
		const monthSelect: any = getByTestId('month-select');
		const yearSelect: any = getByTestId('year-select');

		fireEvent.click(dayNumber);

		expect(input.value).not.toBe('2019-05-01');
		expect(yearSelect.value).toBe('2019');
		expect(monthSelect.value).toBe('3');
		expect(dayNumber.classList).not.toContain('active');
	});

	describe('TimePicker', () => {
		it('value must only reflect in the input value when a date is selected', () => {
			const {getByLabelText, getByTestId} = render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					initialExpanded
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
					time
				/>
			);

			const input: any = getByLabelText(ariaLabels.input);
			const hoursEl = getByTestId('hours') as HTMLInputElement;

			fireEvent.keyDown(hoursEl, {key: '10'});

			expect(input.value).toBe('');
		});

		it('value entered in the time picker must reflect in the input value of the date', () => {
			const {getByLabelText, getByTestId} = render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					initialExpanded
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
					time
				/>
			);

			const input: any = getByLabelText(ariaLabels.input);
			const dayNumber = getByLabelText('2019 04 24');
			const hoursEl = getByTestId('hours') as HTMLInputElement;

			fireEvent.click(dayNumber);

			fireEvent.keyDown(hoursEl, {key: '10'});

			expect(input.value).toBe('2019-04-24 10:0');
		});

		it('value entered in the input value must be reflected in the time picker', () => {
			const {getByLabelText, getByTestId} = render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					initialExpanded
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
					time
				/>
			);

			const input: any = getByLabelText(ariaLabels.input);
			const hoursEl = getByTestId('hours') as HTMLInputElement;
			const minutesEl = getByTestId('minutes') as HTMLInputElement;

			fireEvent.change(input, {
				target: {
					value: '2019-04-18 01:20',
				},
			});

			expect(hoursEl.value).toBe('1');
			expect(minutesEl.value).toBe('20');
		});
	});
});
