/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayButton from '@clayui/button';
import ClayDropDown, {Align} from '@clayui/drop-down';
import ClayForm from '@clayui/form';
import React, {useRef, useState} from 'react';

import ClayDatePicker, {FirstDayOfWeek} from '../src';
import {parseDate} from '../src/Helpers';

export default {
	title: 'Design System/Components/DatePicker',
};

function ClayDatePickerWithState(props: {[key: string]: any}) {
	const [value, setValue] = useState<string>('');

	return (
		<ClayForm.Group>
			<label htmlFor="datePicker1">
				Date Picker
				<ClayForm.HelpText>(Not Localizable)</ClayForm.HelpText>
			</label>

			<ClayForm.FeedbackGroup>
				<ClayForm.HelpText>Help Text</ClayForm.HelpText>
			</ClayForm.FeedbackGroup>

			<ClayDatePicker
				{...props}
				ariaLabels={{
					buttonChooseDate: `Choose Date, selected date is ${value.toLocaleString() ?? value}`,
					buttonDot: 'Go to today',
					buttonNextMonth: 'Next month',
					buttonPreviousMonth: 'Previous month',
					chooseDate:
						'Use the calendar to choose a Date. Current selection {0}',
					dialog: 'Choose Date',
					input: value.toLocaleString(),
					openCalendar: 'Open Calendar Picker',
					selectMonth: 'Select a month',
					selectYear: 'Select a year',
				}}
				id="datePicker1"
				onChange={setValue}
				value={value}
			/>

			<ClayForm.FeedbackGroup>
				<ClayForm.BlockquoteText>
					Date to localize
				</ClayForm.BlockquoteText>
			</ClayForm.FeedbackGroup>
		</ClayForm.Group>
	);
}
export function Default() {
	return (
		<ClayDatePickerWithState
			placeholder="YYYY-MM-DD"
			years={{
				end: new Date().getFullYear(),
				start: 1998,
			}}
		/>
	);
}
export function Disabled() {
	return (
		<ClayDatePickerWithState
			disabled
			placeholder="YYYY-MM-DD"
			years={{
				end: new Date().getFullYear(),
				start: 1998,
			}}
		/>
	);
}
export function Time(args: any) {
	return (
		<ClayDatePickerWithState
			placeholder={`YYYY-MM-DD --:-- ${args.use12Hours ? '--' : ''}`}
			time
			timezone="GMT+01:00"
			use12Hours={args.use12Hours}
			years={{
				end: new Date().getFullYear(),
				start: 1998,
			}}
		/>
	);
}

Time.args = {
	use12Hours: false,
};
export function Locale() {
	return (
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
				end: new Date().getFullYear(),
				start: 1998,
			}}
		/>
	);
}
export function CustomExpand() {
	const [expanded, setExpanded] = useState(false);
	const [value, setValue] = useState<string>('');

	return (
		<>
			<ClayButton
				displayType="secondary"
				onClick={() => setExpanded(true)}
			>
				Open Picker
			</ClayButton>

			<br />
			<br />
			<label htmlFor="datePickerCustomExpand">
				Date Picker
				<ClayForm.HelpText>(Not Localizable)</ClayForm.HelpText>
			</label>
			<ClayDatePicker
				expanded={expanded}
				id="datePickerCustomExpand"
				onChange={setValue}
				onExpandedChange={setExpanded}
				placeholder="YYYY-MM-DD"
				value={value}
				years={{
					end: new Date().getFullYear(),
					start: 1998,
				}}
			/>
		</>
	);
}
export function Native() {
	return <ClayDatePickerWithState placeholder="YYYY-MM-DD" useNative />;
}
export function DateRange() {
	return (
		<ClayDatePickerWithState
			dateFormat="yyyy/MM/dd"
			placeholder="YYYY/MM/DD - YYYY/MM/DD"
			range
			years={{
				end: new Date().getFullYear(),
				start: 1998,
			}}
		/>
	);
}
export function DynamicYears() {
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
				chooseDate:
					'Use the calendar to choose a Date. Current selection {0}',
				input: value.toLocaleString(),
				selectMonth: 'Select a month',
				selectYear: 'Select a year',
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
}
export function InDropdownMenu() {
	return (
		<>
			<ClayDatePickerWithState
				placeholder="YYYY-MM-DD"
				years={{
					end: new Date().getFullYear(),
					start: 1998,
				}}
			/>

			<ClayDropDown
				alignmentPosition={Align.BottomLeft}
				trigger={
					<ClayButton>
						Open this and the Date Picker Menu first
					</ClayButton>
				}
				triggerIcon="caret-bottom"
			>
				<ClayDropDown.ItemList>
					<ClayDropDown.Section>
						<ClayDatePickerWithState
							placeholder="YYYY-MM-DD"
							years={{
								end: new Date().getFullYear(),
								start: 1998,
							}}
						/>
					</ClayDropDown.Section>
				</ClayDropDown.ItemList>
			</ClayDropDown>
			<ClayDropDown trigger={<ClayButton>second dropdown</ClayButton>}>
				<ClayDropDown.Item onClick={() => alert('it worked!')}>
					This should be clickable but isnt due to aria-hidden plugin
					not working when using a mix of hideOthers and
					suppressOthers
				</ClayDropDown.Item>
			</ClayDropDown>
		</>
	);
}
