import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, {useState, useEffect, useRef} from 'react';

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

/**
 * ClayDatePicker component.
 * @return {React.createElement}
 */
function ClayDatePicker({
	ariaLabel,
	dateFormat,
	defaultValue,
	expanded: initialExpanded,
	firstDayOfWeek,
	footerElement,
	id,
	initialMonth,
	inputName,
	months,
	onValueChange,
	placeholder,
	spritemap,
	time,
	timeFormat,
	useNative,
	weekdaysShort,
	years,
}) {
	/**
	 * Indicates the current month rendered on the screen.
	 * @type {!Date}
	 */
	const [currentMonth, setCurrentMonth] = useCurrentMonth(initialMonth);

	/**
	 * Indicates the time selected by the user.
	 * @type {!Date}
	 */
	const [currentTime, setCurrentTime] = useCurrentTime(timeFormat);

	/**
	 * The day selected by the user.
	 * @type {!Date}
	 */
	const [daySelected, setDaySelected] = useState(initialMonth);

	/**
	 * The input value.
	 * @type {?(Date|undefined)}
	 */
	const [inputValue, setInputValue] = useState(undefined);

	/**
	 * An array of the weeks and days list for the current month
	 * @type {!Array<Array<{date: Date, ?outside: bool}>>}
	 */
	const [weeks, setWeeks] = useWeeks(currentMonth, firstDayOfWeek);

	/**
	 * Flag to indicate if date is expanded.
	 * @type {?bool}
	 */
	const [expanded, setExpanded] = useState(initialExpanded);

	/**
	 * Create a ref to store the datepicker DOM element
	 */
	const elementRef = useRef(null);

	/**
	 * Handles the click on element of the day
	 * @param {!Date} date
	 */
	function handleDayClicked(date) {
		setDaySelected(date);
		setInputValue(date);
	}

	/**
	 * Handles the input change.
	 * @param {!Event} event
	 */
	function inputChange(event) {
		const {value} = event.target;
		const format = time ? `${dateFormat} ${time}` : dateFormat;
		const date = moment(value, format);

		if (date.isValid()) {
			setCurrentMonth(date.toDate());
			setDaySelected(date.toDate());

			if (time) {
				setCurrentTime(date.hours(), date.minutes());
			}
		}

		if (onValueChange) {
			onValueChange(value);
		}

		setInputValue(value);
	}

	/**
	 * Handles datepicker view
	 */
	function handleCalendarButtonClicked() {
		setExpanded(!expanded);
	}

	useEffect(
		() => {
			// It is not necessary to update the weeks when the native
			// date is enabled. Unnecessary rendering and processing.
			if (!useNative) {
				setWeeks(currentMonth, firstDayOfWeek);
			}
		},
		[currentMonth]
	);

	const classNames = classnames('input-group', {
		[id]: id,
	});

	return (
		<div className={classNames} ref={elementRef}>
			<div className="input-group-item">
				<InputDate
					ariaLabel={ariaLabel}
					currentTime={currentTime}
					dateFormat={dateFormat}
					defaultValue={defaultValue}
					inputName={inputName}
					onChange={inputChange}
					placeholder={placeholder}
					time={time}
					timeFormat={timeFormat}
					useNative={useNative}
					value={inputValue}
				/>
				{!useNative && (
					<div className="input-group-inset-item input-group-inset-item-after">
						<Button
							className="d-none d-md-inline-block"
							icon="calendar"
							onClick={handleCalendarButtonClicked}
							spritemap={spritemap}
							style="unstyled"
						/>
					</div>
				)}
			</div>
			{!useNative && (
				<Dropdown
					containerRef={elementRef}
					expanded={expanded}
					onDocumentClick={() => setExpanded(false)}
				>
					<React.Fragment>
						<div className="datepicker">
							<DateNavigation
								currentMonth={currentMonth}
								months={months}
								onDotClicked={() => {
									setCurrentMonth(initialMonth);
									setDaySelected(initialMonth);
									setInputValue(initialMonth);
								}}
								onMonthChange={setCurrentMonth}
								spritemap={spritemap}
								years={years}
							/>
							<WeekdayHeader
								firstDayOfWeek={firstDayOfWeek}
								weekdaysShort={weekdaysShort}
							>
								{({weekday, key}) => (
									<Weekday key={key} weekday={weekday} />
								)}
							</WeekdayHeader>
							<div className="datepicker-body">
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
						</div>
						{(footerElement || time) && (
							<div className="datepicker-footer">
								{time && (
									<TimePicker
										currentTime={currentTime}
										onTimeChange={setCurrentTime}
										spritemap={spritemap}
										timeFormat={timeFormat}
									/>
								)}
								{!time &&
									React.Children.only(
										footerElement({spritemap})
									)}
							</div>
						)}
					</React.Fragment>
				</Dropdown>
			)}
		</div>
	);
}

ClayDatePicker.propTypes = {
	/**
	 * Aria label attribute for the button element.
	 * @default undefined
	 */
	ariaLabel: PropTypes.string,

	/**
	 * Set the format of how the date will appear in the input element.
	 * See available: https://momentjs.com/docs/#/parsing/string-format/
	 * @default YYYY-MM-DD
	 */
	dateFormat: PropTypes.string,

	/**
	 * Set the initial value of the input.
	 * @default undefined
	 */
	defaultValue: PropTypes.oneOfType([
		PropTypes.instanceOf(Date),
		PropTypes.string,
	]),

	/**
	 * Flag to indicate if date is expanded.
	 * @default false
	 */
	expanded: PropTypes.bool,

	/**
	 * Set the first day of the week, starting from
	 * 0 (Sunday) to 6 (Saturday).
	 * @default 0
	 */
	firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),

	/**
	 * Function that should return the React element to
	 * render on the datepicker footer.
	 * @default undefined
	 */
	footerElement: PropTypes.func,

	/**
	 * Id to be applied to the element.
	 * @default undefined
	 */
	id: PropTypes.string,

	/**
	 * The month to display in the calendar on the first render.
	 * @default Date
	 */
	initialMonth: PropTypes.instanceOf(Date),

	/**
	 * Name of the input.
	 * @default undefined
	 */
	inputName: PropTypes.string,

	/**
	 * The names of the months.
	 * @default January...
	 */
	months: PropTypes.arrayOf(PropTypes.string),

	/**
	 * Called when the input change.
	 * @default undefined
	 */
	onValueChange: PropTypes.func,

	/**
	 * Describe a brief tip to help users interact.
	 * @default undefined
	 */
	placeholder: PropTypes.string,

	/**
	 * The path to the SVG spritemap file containing the icons.
	 * @default undefined
	 */
	spritemap: PropTypes.string.isRequired,

	/**
	 * Flag to enable datetime selection.
	 * @default false
	 */
	time: PropTypes.bool,

	/**
	 * Set the format of how the time will appear in the input element.
	 * See available: https://momentjs.com/docs/#/parsing/string-format/
	 * @default HH:mm
	 */
	timeFormat: PropTypes.string,

	/**
	 * Flag to indicate whether to use native date picker
	 * @default false
	 */
	useNative: PropTypes.bool,

	/**
	 * Short names of days of the week to use in the header
	 * of the month. It should start from Sunday.
	 * @default [S, M, T, W, T, F, S]
	 */
	weekdaysShort: PropTypes.arrayOf(PropTypes.string),

	/**
	 * List of years available for navigation within the selector.
	 * @default {start: YearNow, end: YearNow}
	 */
	years: PropTypes.shape({
		start: PropTypes.number,
		end: PropTypes.number,
	}),
};

const DateNow = new Date();

ClayDatePicker.defaultProps = {
	dateFormat: 'YYYY-MM-DD',
	expanded: false,
	firstDayOfWeek: 0,
	initialMonth: DateNow,
	months: [
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
	time: false,
	timeFormat: 'HH:mm',
	useNative: false,
	weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	years: {
		start: DateNow.getFullYear(),
		end: DateNow.getFullYear(),
	},
};

export {ClayDatePicker};
export default ClayDatePicker;
