/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useState} from 'react';
import {cleanup, render} from 'react-testing-library';

import ClayDatePicker from '..';
import {firstDayOfWeek} from '../types';

const spritemap = `icons.svg`;

const ariaLabels = {
	buttonDot: `Select current date`,
	buttonNextMonth: `Select the next month`,
	buttonPreviousMonth: `Select the previous month`,
	input: `input-test`,
};

const DatePickerWithState = ({
	initialMonth = new Date(2019, 3, 18),
	...props
}: any) => {
	const [value, setValue] = useState();

	return (
		<ClayDatePicker
			{...props}
			initialMonth={initialMonth}
			onValueChange={setValue}
			value={value}
		/>
	);
};

describe(`Internationalization`, () => {
	afterEach(cleanup);

	it(`should render the date picker in russian`, () => {
		const {container} = render(
			<DatePickerWithState
				ariaLabels={ariaLabels}
				dateFormat="DD.MM.YYYY"
				firstDayOfWeek={firstDayOfWeek.Monday}
				initialExpanded
				months={[
					`Январь`,
					`Февраль`,
					`Март`,
					`Апрель`,
					`Май`,
					`Июнь`,
					`Июль`,
					`Август`,
					`Сентябрь`,
					`Октябрь`,
					`Ноябрь`,
					`Декабрь`,
				]}
				placeholder="DD.MM.YYYY HH:mm"
				spritemap={spritemap}
				time
				weekdaysShort={[`Вс`, `Пн`, `Вт`, `Ср`, `Чт`, `Пт`, `Сб`]}
				years={{
					end: 2024,
					start: 1997,
				}}
			/>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	describe(`FirstDayOfWeek`, () => {
		it(`first day of the week should start on Sunday`, () => {
			const {container} = render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					firstDayOfWeek={firstDayOfWeek.Sunday}
					initialExpanded
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(container.firstChild).toMatchSnapshot();
		});

		it(`first day of the week should start on Monday`, () => {
			const {container} = render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					initialExpanded
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(container.firstChild).toMatchSnapshot();
		});

		it(`first day of the week should start on Tuesday`, () => {
			const {container} = render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					firstDayOfWeek={firstDayOfWeek.Tuesday}
					initialExpanded
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(container.firstChild).toMatchSnapshot();
		});

		it(`first day of the week should start on Wednesday`, () => {
			const {container} = render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					firstDayOfWeek={firstDayOfWeek.Wednesday}
					initialExpanded
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(container.firstChild).toMatchSnapshot();
		});

		it(`first day of the week should start on Thursday`, () => {
			const {container} = render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					firstDayOfWeek={firstDayOfWeek.Thursday}
					initialExpanded
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(container.firstChild).toMatchSnapshot();
		});

		it(`first day of the week should start on Friday`, () => {
			const {container} = render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					firstDayOfWeek={firstDayOfWeek.Friday}
					initialExpanded
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(container.firstChild).toMatchSnapshot();
		});

		it(`first day of the week should start on Saturday`, () => {
			const {container} = render(
				<DatePickerWithState
					ariaLabels={ariaLabels}
					firstDayOfWeek={firstDayOfWeek.Saturday}
					initialExpanded
					placeholder="YYYY-MM-DD"
					spritemap={spritemap}
				/>
			);

			expect(container.firstChild).toMatchSnapshot();
		});
	});
});
