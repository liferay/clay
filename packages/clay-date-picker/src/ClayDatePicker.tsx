/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import moment from 'moment';
import React, {
	ChangeEvent,
	FunctionComponent,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';

import {useCurrentMonth, useCurrentTime, useWeeks} from './Hooks';

import Button from './Button';
import DateNavigation from './DateNavigation';
import DayNumber from './DayNumber';
import DaysTable from './DaysTable';
import Dropdown from './Dropdown';
import InputDate from './InputDate';
import TimePicker from './TimePicker';
import Weekday from './Weekday';
import WeekdayHeader from './WeekdayHeader';

export enum firstDayOfWeek {
	Sunday = 0,
	Monday = 1,
	Tuesday = 2,
	Wednesday = 3,
	Thursday = 4,
	Friday = 5,
	Saturday = 6,
}

export interface IAriaLabels {
	buttonDot: string;
	buttonNextMonth: string;
	buttonPreviousMonth: string;
	input?: string;
}

export interface IYears {
	end: number;
	start: number;
}

interface Props {
	/**
	 * Labels for the aria attributes
	 */
	ariaLabels?: IAriaLabels;

	/**
	 * Set the format of how the date will appear in the input element.
	 * See available: https://momentjs.com/docs/#/parsing/string-format/
	 */
	dateFormat?: string;

	/**
	 * Set the first day of the week, starting from
	 * 0 (Sunday) to 6 (Saturday).
	 */
	firstDayOfWeek?: firstDayOfWeek;

	/**
	 * Function that should return the React element to
	 * render on the datepicker footer.
	 */

	footerElement?: (object: {spritemap: string}) => ReactNode;

	/**
	 * Id to be applied to the element.
	 */
	id?: string;

	/**
	 * Flag to indicate if date is expanded.
	 */
	initialExpanded?: boolean;

	/**
	 * The month to display in the calendar on the first render.
	 */
	initialMonth?: Date;

	/**
	 * Name of the input.
	 */
	inputName?: string;

	/**
	 * The names of the months.
	 */
	months?: Array<string>;

	/**
	 * Called when the input change.
	 */
	onValueChange: (value: Date | string) => void;

	/**
	 * Describe a brief tip to help users interact.
	 */
	placeholder?: string;

	/**
	 * The path to the SVG spritemap file containing the icons.
	 */
	spritemap: string;

	/**
	 * Flag to enable datetime selection.
	 */
	time?: boolean;

	/**
	 * Set the format of how the time will appear in the input element.
	 * See available: https://momentjs.com/docs/#/parsing/string-format/
	 */
	timeFormat?: string;

	/**
	 * Flag to indicate the timezone of the Time Picker.
	 */
	timezone?: string;

	/**
	 * Flag to indicate whether to use native date picker
	 */
	useNative?: boolean;

	/**
	 * Set the value of the input.
	 */
	value: string;

	/**
	 * Short names of days of the week to use in the header
	 * of the month. It should start from Sunday.
	 */
	weekdaysShort?: Array<string>;

	/**
	 * List of years available for navigation within the selector.
	 */
	years?: IYears;
}

const DateNow = new Date();

/**
 * ClayDatePicker component.
 */
const ClayDatePicker: FunctionComponent<Props> = ({
	ariaLabels = {
		buttonDot: 'Select current date',
		buttonNextMonth: 'Select the next month',
		buttonPreviousMonth: 'Select the previous month',
	},
	dateFormat = 'YYYY-MM-DD',
	firstDayOfWeek = 0,
	footerElement,
	id,
	initialExpanded = false,
	initialMonth = DateNow,
	inputName,
	months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	],
	onValueChange = () => {},
	placeholder,
	spritemap,
	time = false,
	timeFormat = 'HH:mm',
	timezone,
	useNative = false,
	value,
	weekdaysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	years = {
		end: DateNow.getFullYear(),
		start: DateNow.getFullYear(),
	},
}) => {
	/**
	 * Indicates the current month rendered on the screen.
	 */
	const [currentMonth, setCurrentMonth] = useCurrentMonth(initialMonth);

	/**
	 * Indicates the time selected by the user.
	 */
	const [currentTime, setCurrentTime] = useCurrentTime(timeFormat);

	/**
	 * The day selected by the user.
	 */
	const [daySelected, setDaySelected] = useState<Date>(initialMonth);

	/**
	 * An array of the weeks and days list for the current month
	 */
	const [weeks, setWeeks] = useWeeks(currentMonth, firstDayOfWeek);

	/**
	 * Flag to indicate if date is expanded.
	 */
	const [expanded, setExpanded] = useState(initialExpanded);

	/**
	 * Create a ref to store the datepicker DOM element
	 */
	const elementRef = useRef<HTMLDivElement | null>(null);

	/**
	 * Handles the click on element of the day
	 */
	function handleDayClicked(date: Date) {
		setDaySelected(date);
		onValueChange(date);
	}

	/**
	 * Handles the input change.
	 */
	function inputChange(event: ChangeEvent<HTMLInputElement>) {
		const {value} = event.target;
		const format = time ? `${dateFormat} ${timeFormat}` : dateFormat;
		const date = moment(value, format);
		const year = date.year();

		if (date.isValid() && year >= years.start && years.end >= year) {
			setCurrentMonth(date.toDate());
			setDaySelected(date.toDate());

			if (time) {
				setCurrentTime(date.hours(), date.minutes());
			}
		}

		onValueChange(value);
	}

	/**
	 * Handles dot cliecked
	 */
	const handleDotClicked = () => {
		setCurrentMonth(initialMonth);
		setDaySelected(initialMonth);
		onValueChange(initialMonth);
	};

	/**
	 * Handles datepicker view
	 */
	const handleCalendarButtonClicked = () => setExpanded(!expanded);

	/**
	 * Handles document click
	 */
	const handleDocClick = () => setExpanded(false);

	useEffect(() => {
		// It is not necessary to update the weeks when the native
		// date is enabled. Unnecessary rendering and processing.
		if (!useNative) {
			setWeeks(currentMonth);
		}
	}, [currentMonth]);

	return (
		<div className="date-picker" ref={elementRef}>
			<div className="input-group" id={id}>
				<div className="input-group-item">
					<InputDate
						ariaLabel={ariaLabels.input}
						currentTime={currentTime}
						dateFormat={dateFormat}
						inputName={inputName}
						onChange={inputChange}
						placeholder={placeholder}
						time={time}
						timeFormat={timeFormat}
						useNative={useNative}
						value={value}
					/>
					{!useNative && (
						<div className="input-group-inset-item input-group-inset-item-after">
							<Button
								className="date-picker-dropdown-toggle"
								icon="calendar"
								onClick={handleCalendarButtonClicked}
								spritemap={spritemap}
								variant="unstyled"
							/>
						</div>
					)}
				</div>
			</div>

			{!useNative && (
				<Dropdown
					containerRef={elementRef}
					expanded={expanded}
					onDocumentClick={handleDocClick}
				>
					<React.Fragment>
						<div className="date-picker-calendar">
							<DateNavigation
								ariaLabels={ariaLabels}
								currentMonth={currentMonth}
								months={months}
								onDotClicked={handleDotClicked}
								onMonthChange={setCurrentMonth}
								spritemap={spritemap}
								years={years}
							/>
							<div className="date-picker-calendar-body">
								<WeekdayHeader
									firstDayOfWeek={firstDayOfWeek}
									weekdaysShort={weekdaysShort}
								>
									{({key, weekday}) => (
										<Weekday key={key} weekday={weekday} />
									)}
								</WeekdayHeader>
								<DaysTable weeks={weeks}>
									{({day, key}) => (
										<DayNumber
											day={day}
											daySelected={daySelected}
											key={key}
											onClick={handleDayClicked}
										/>
									)}
								</DaysTable>
							</div>
							{(footerElement || time) && (
								<div className="date-picker-calendar-footer">
									{time && (
										<TimePicker
											currentTime={currentTime}
											onTimeChange={setCurrentTime}
											spritemap={spritemap}
											timeFormat={timeFormat}
											timezone={timezone}
										/>
									)}
									{!time &&
										footerElement &&
										React.Children.only(
											footerElement({spritemap})
										)}
								</div>
							)}
						</div>
					</React.Fragment>
				</Dropdown>
			)}
		</div>
	);
};

export default ClayDatePicker;
