/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDatePicker from '..';
import {cleanup, render} from '@testing-library/react';
import React from 'react';

import {FirstDayOfWeek} from '../types';

const spritemap = 'icons.svg';

const ariaLabels = {
	buttonChooseDate: 'Choose your desired date',
	buttonDot: 'Select current date',
	buttonNextMonth: 'Select the next month',
	buttonPreviousMonth: 'Select the previous month',
	input: 'input-test',
};

const DatePickerWithState = ({
	defaultMonth = new Date(2019, 3, 18),
	years = {end: 2019, start: 2019},
	...props
}: any) => {
	const [value, setValue] = React.useState('');

	return (
		<ClayDatePicker
			{...props}
			defaultMonth={defaultMonth}
			onChange={setValue}
			value={value}
			years={years}
		/>
	);
};

describe('Internationalization', () => {
	afterEach(cleanup);

	it('renders the date picker in russian', () => {
		render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				dateFormat="DD.MM.YYYY"
				defaultExpanded
				firstDayOfWeek={FirstDayOfWeek.Monday}
				months={[
					'Январь',
					'Февраль',
					'Март',
					'Апрель',
					'Май',
					'Июнь',
					'Июль',
					'Август',
					'Сентябрь',
					'Октябрь',
					'Ноябрь',
					'Декабрь',
				]}
				placeholder="DD.MM.YYYY HH:mm"
				spritemap={spritemap}
				time
				weekdaysShort={['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']}
				years={{
					end: 2024,
					start: 1997,
				}}
			/>
		);

		expect(document.body).toMatchSnapshot();
	});

	describe('FirstDayOfWeek', () => {
		it('first day of the week should start on Sunday', () => {
			render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					defaultExpanded
					firstDayOfWeek={FirstDayOfWeek.Sunday}
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(document.body).toMatchSnapshot();
		});

		it('first day of the week should start on Monday', () => {
			render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					defaultExpanded
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(document.body).toMatchSnapshot();
		});

		it('first day of the week should start on Tuesday', () => {
			render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					defaultExpanded
					firstDayOfWeek={FirstDayOfWeek.Tuesday}
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(document.body).toMatchSnapshot();
		});

		it('first day of the week should start on Wednesday', () => {
			render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					defaultExpanded
					firstDayOfWeek={FirstDayOfWeek.Wednesday}
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(document.body).toMatchSnapshot();
		});

		it('first day of the week should start on Thursday', () => {
			render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					defaultExpanded
					firstDayOfWeek={FirstDayOfWeek.Thursday}
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(document.body).toMatchSnapshot();
		});

		it('first day of the week should start on Friday', () => {
			render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					defaultExpanded
					firstDayOfWeek={FirstDayOfWeek.Friday}
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(document.body).toMatchSnapshot();
		});

		it('first day of the week should start on Saturday', () => {
			render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					defaultExpanded
					firstDayOfWeek={FirstDayOfWeek.Saturday}
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(document.body).toMatchSnapshot();
		});
	});
});
