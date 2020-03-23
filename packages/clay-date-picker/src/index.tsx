/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import DropDown from '@clayui/drop-down';
import {ClayInput} from '@clayui/form';
import Icon from '@clayui/icon';
import moment from 'moment';
import React from 'react';

import DateNavigation from './DateNavigation';
import DayNumber from './DayNumber';
import DaysTable from './DaysTable';
import {getLocaleProps} from './Helpers';
import {useCurrentTime, useWeeks} from './Hooks';
import InputDate from './InputDate';
import TimePicker from './TimePicker';
import Weekday from './Weekday';
import WeekdayHeader from './WeekdayHeader';
import {FirstDayOfWeek, IAriaLabels, IYears} from './types';

export {FirstDayOfWeek, getLocaleProps, IAriaLabels, IYears};

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
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
	 * Flag to disable the component, buttons, open the datepicker, etc...
	 */
	disabled?: boolean;

	/**
	 * Set the first day of the week, starting from
	 * 0 (Sunday) to 6 (Saturday).
	 */
	firstDayOfWeek?: FirstDayOfWeek;

	/**
	 * Function that should return the React element to
	 * render on the datepicker footer.
	 */
	footerElement?: (object: {spritemap?: string}) => React.ReactNode;

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
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * Flag to enable datetime selection.
	 */
	time?: boolean;

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
const TIME_FORMAT = 'H:m';

/**
 * ClayDatePicker component.
 */
const ClayDatePicker: React.FunctionComponent<IProps> = ({
	ariaLabels = {
		buttonDot: 'Select current date',
		buttonNextMonth: 'Select the next month',
		buttonPreviousMonth: 'Select the previous month',
	},
	dateFormat = 'YYYY-MM-DD',
	disabled,
	firstDayOfWeek = 0,
	footerElement,
	id,
	initialExpanded = false,
	initialMonth = new Date(),
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
	timezone,
	useNative = false,
	value,
	weekdaysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	years = {
		end: DateNow.getFullYear(),
		start: DateNow.getFullYear(),
	},
	...otherProps
}: IProps) => {
	/**
	 * Normalize date for always set noon to avoid time zone issues
	 */
	const normalizeDate = (date: Date) =>
		moment(date)
			.clone()
			.set('date', 1)
			.set('hour', 12)
			.set('minute', 0)
			.set('second', 0)
			.set('millisecond', 0)
			.toDate();

	/**
	 * Indicates the current month rendered on the screen.
	 */
	const [currentMonth, setCurrentMonth] = React.useState<Date>(() =>
		normalizeDate(initialMonth)
	);

	/**
	 * Indicates the time selected by the user.
	 */
	const [currentTime, setCurrentTime] = useCurrentTime(TIME_FORMAT);

	/**
	 * The day selected by the user.
	 */
	const [daySelected, setDaySelected] = React.useState<Date>(initialMonth);

	/**
	 * An array of the weeks and days list for the current month
	 */
	const [weeks, setWeeks] = useWeeks(currentMonth, firstDayOfWeek);

	/**
	 * Flag to indicate if date is expanded.
	 */
	const [expanded, setExpanded] = React.useState(initialExpanded);

	/**
	 * Create a ref to store the datepicker DOM element
	 */
	const dropdownContainerRef = React.useRef<HTMLDivElement | null>(null);

	/**
	 * Create a ref to store the datepicker DOM element
	 */
	const triggerElementRef = React.useRef<HTMLDivElement | null>(null);

	/**
	 * Handles the change of the current month of the Date Picker
	 * content and takes care of updating the weeks.
	 */
	const changeMonth = (date: Date) => {
		const dateNormalized = normalizeDate(date);

		setCurrentMonth(dateNormalized);

		// It is not necessary to update the weeks when the native
		// date is enabled. Unnecessary rendering and processing.
		if (!useNative) {
			setWeeks(dateNormalized);
		}
	};

	/**
	 * Handles the click on element of the day
	 */
	const handleDayClicked = (date: Date) => {
		setDaySelected(date);
		onValueChange(date);
	};

	/**
	 * Control the value of the input propagating with the call
	 * of `onValueChange` but does not change what the user types,
	 * if a date is valid the month of the Date Picker is changed.
	 */
	const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {value} = event.target;
		const format = time ? `${dateFormat} ${TIME_FORMAT}` : dateFormat;
		const date = moment(value, format);
		const year = date.year();

		if (date.isValid() && year >= years.start && years.end >= year) {
			changeMonth(date.toDate());
			setDaySelected(date.toDate());

			if (time) {
				setCurrentTime(date.hours(), date.minutes());
			}
		}

		onValueChange(value);
	};

	/**
	 * Handles dot clicked
	 */
	const handleDotClicked = () => {
		changeMonth(initialMonth);
		setDaySelected(initialMonth);
		onValueChange(initialMonth);
	};

	const handleTimeChange = (
		hours: number | string,
		minutes: number | string
	) => {
		const format = time ? `${dateFormat} ${TIME_FORMAT}` : dateFormat;

		// Hack to force InputDate to add `currentTime` to the value of
		// the input when the value was edited by the user.
		if (typeof value === 'string' && moment(value, format).isValid()) {
			onValueChange(moment(value, format).toDate());
		}

		setCurrentTime(hours, minutes);
	};

	/**
	 * Handles datepicker view
	 */
	const handleCalendarButtonClicked = () => setExpanded(!expanded);

	return (
		<div className="date-picker">
			<ClayInput.Group id={id} ref={triggerElementRef}>
				<ClayInput.GroupItem>
					<InputDate
						{...otherProps}
						ariaLabel={ariaLabels.input}
						currentTime={currentTime}
						dateFormat={dateFormat}
						disabled={disabled}
						inputName={inputName}
						onChange={inputChange}
						placeholder={placeholder}
						time={time}
						timeFormat={TIME_FORMAT}
						useNative={useNative}
						value={value}
					/>
					{!useNative && (
						<ClayInput.GroupInsetItem after>
							<Button
								className="date-picker-dropdown-toggle"
								data-testid="date-button"
								disabled={disabled}
								displayType="unstyled"
								onClick={handleCalendarButtonClicked}
							>
								<Icon spritemap={spritemap} symbol="calendar" />
							</Button>
						</ClayInput.GroupInsetItem>
					)}
				</ClayInput.GroupItem>
			</ClayInput.Group>

			{!useNative && (
				<DropDown.Menu
					active={expanded}
					alignElementRef={triggerElementRef}
					className="date-picker-dropdown-menu"
					data-testid="dropdown"
					onSetActive={setExpanded}
					ref={dropdownContainerRef}
				>
					<div className="date-picker-calendar">
						<DateNavigation
							ariaLabels={ariaLabels}
							currentMonth={currentMonth}
							disabled={disabled}
							months={months}
							onDotClicked={handleDotClicked}
							onMonthChange={changeMonth}
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
										disabled={disabled}
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
										disabled={disabled}
										onTimeChange={handleTimeChange}
										spritemap={spritemap}
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
				</DropDown.Menu>
			)}
		</div>
	);
};

export default ClayDatePicker;
