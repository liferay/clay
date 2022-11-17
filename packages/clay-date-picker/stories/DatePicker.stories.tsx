/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useRef, useState} from 'react';

import ClayDatePicker, {FirstDayOfWeek} from '../src';
import {parseDate} from '../src/Helpers';

export default {
	title: 'Design System/Components/DatePicker',
};

const ClayDatePickerWithState = (props: {[key: string]: any}) => {
	const [value, setValue] = useState<string>('');

	return (
		<>
			<label>Date Picker</label>
			<ClayDatePicker
				{...props}
				ariaLabels={{
					buttonChooseDate: `Choose Date, selected date is ${
						value.toLocaleString() ?? value
					}`,
					buttonDot: 'Go to today',
					buttonNextMonth: 'Next month',
					buttonPreviousMonth: 'Previous month',
					dialog: 'Choose Date',
					input: value.toLocaleString(),
				}}
				onChange={setValue}
				value={value}
			/>
		</>
	);
};

export const Default = () => (
	<ClayDatePickerWithState
		placeholder="YYYY-MM-DD"
		years={{
			end: 2024,
			start: 1997,
		}}
	/>
);

export const Disabled = () => (
	<ClayDatePickerWithState
		disabled
		placeholder="YYYY-MM-DD"
		years={{
			end: 2024,
			start: 1997,
		}}
	/>
);

export const Time = (args: any) => (
	<ClayDatePickerWithState
		placeholder="YYYY-MM-DD --:-- --"
		time
		timezone="GMT+01:00"
		use12Hours={args.use12Hours}
		years={{
			end: 2024,
			start: 1997,
		}}
	/>
);

Time.args = {
	use12Hours: false,
};

export const Locale = () => (
	<ClayDatePickerWithState
		dateFormat="dd.MM.yyyy"
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
		placeholder="YYYY-MM-DD HH:mm"
		time
		timezone="GMT+03:00"
		weekdaysShort={['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']}
		years={{
			end: 2024,
			start: 1997,
		}}
	/>
);

export const CustomExpand = () => {
	const [expanded, setExpanded] = useState(false);
	const [value, setValue] = useState<string>('');

	return (
		<>
			<button onClick={() => setExpanded(true)}>Open Picker</button>

			<br />
			<br />

			<ClayDatePicker
				expanded={expanded}
				onChange={setValue}
				onExpandedChange={setExpanded}
				placeholder="YYYY-MM-DD"
				value={value}
				years={{
					end: 2024,
					start: 1997,
				}}
			/>
		</>
	);
};

export const Native = () => (
	<ClayDatePickerWithState placeholder="YYYY-MM-DD" useNative />
);

export const DateRange = () => (
	<ClayDatePickerWithState
		dateFormat="yyyy/MM/dd"
		placeholder="YYYY/MM/DD - YYYY/MM/DD"
		range
		years={{
			end: 2024,
			start: 1997,
		}}
	/>
);

export const DynamicYears = () => {
	const [value, setValue] = useState<string>('');

	const initialMonthRef = useRef(new Date());

	const [years, setYears] = useState(() => {
		const year = initialMonthRef.current.getFullYear();

		return {
			end: year + 10,
			start: year - 10,
		};
	});

	return (
		<ClayDatePicker
			ariaLabels={{
				buttonChooseDate: `Choose Date, selected date is ${
					value.toLocaleString() ?? value
				}`,
				buttonDot: 'Go to today',
				buttonNextMonth: 'Next month',
				buttonPreviousMonth: 'Previous month',
				input: value.toLocaleString(),
			}}
			onChange={(value) => {
				if (value) {
					const year = parseDate(
						value,
						'yyyy-MM-dd',
						initialMonthRef.current
					).getFullYear();

					if (typeof year === 'number' && year > 1000) {
						setYears({
							end: year + 10,
							start: year - 10,
						});
					}
				}

				setValue(value);
			}}
			onNavigation={(date: Date) => {
				const year = date.getFullYear();

				setYears({
					end: year + 10,
					start: year - 10,
				});
			}}
			placeholder="YYYY-MM-DD"
			value={value}
			years={years}
			yearsCheck={false}
		/>
	);
};
