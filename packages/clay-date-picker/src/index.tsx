/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button from '@clayui/button';
import DropDown from '@clayui/drop-down';
import {ClayInput} from '@clayui/form';
import Icon from '@clayui/icon';
import {FocusScope} from '@clayui/shared';
import React from 'react';

import DateNavigation from './DateNavigation';
import DayNumber from './DayNumber';
import DaysTable from './DaysTable';
import {isValid, parseDate, setDate} from './Helpers';
import {useCurrentTime, useWeeks} from './Hooks';
import InputDate from './InputDate';
import TimePicker from './TimePicker';
import Weekday from './Weekday';
import WeekdayHeader from './WeekdayHeader';
import {FirstDayOfWeek, IAriaLabels, IYears} from './types';

export {FirstDayOfWeek};

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	/**
	 * Labels for the aria attributes
	 */
	ariaLabels?: IAriaLabels;

	/**
	 * Set the format of how the date will appear in the input element.
	 * See available: https://date-fns.org/v2.14.0/docs/format
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
	 * Flag to indicate if date is initially expanded when
	 * `expand` and `onExpandChange` are not being used.
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
	 * Called when the user is browsing the date picker, changing the
	 * month, year and navigating with arrows.
	 */
	onNavigation?: (data: Date) => void;

	/**
	 * Called when the input change.
	 *
	 * Second argument gives the type that caused the value change
	 */
	onValueChange: (
		value: Date | string,
		type?: 'click' | 'input' | 'time'
	) => void;

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

	/**
	 * Determines if menu is expanded or not
	 */
	expanded?: boolean;

	/**
	 * Callback for when dropdown changes its active state
	 */
	onExpandedChange?: (val: boolean) => void;
}

const dateNow = new Date();
const TIME_FORMAT = 'H:m';

/**
 * ClayDatePicker component.
 */
const ClayDatePicker: React.FunctionComponent<IProps> = React.forwardRef<
	HTMLInputElement,
	IProps
>(
	(
		{
			ariaLabels = {
				buttonDot: 'Select current date',
				buttonNextMonth: 'Select the next month',
				buttonPreviousMonth: 'Select the previous month',
			},
			dateFormat = 'yyyy-MM-dd',
			disabled,
			expanded,
			firstDayOfWeek = FirstDayOfWeek.Sunday,
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
			onExpandedChange,
			onNavigation = () => {},
			onValueChange = () => {},
			placeholder,
			spritemap,
			time = false,
			timezone,
			useNative = false,
			value,
			weekdaysShort = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			years = {
				end: dateNow.getFullYear(),
				start: dateNow.getFullYear(),
			},
			...otherProps
		}: IProps,
		ref
	) => {
		/**
		 * Normalize date for always set noon to avoid time zone issues
		 */
		const normalizeDate = (date: Date) =>
			setDate(date, {
				date: 1,
				hours: 12,
				milliseconds: 1,
				minutes: 1,
				seconds: 1,
			});

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
		const [daySelected, setDaySelected] = React.useState<Date>(
			initialMonth
		);

		/**
		 * An array of the weeks and days list for the current month
		 */
		const [weeks, setWeeks] = useWeeks(currentMonth, firstDayOfWeek);

		/**
		 * Flag to indicate if date is expanded.
		 */
		const [internalExpanded, setInternalExpanded] = React.useState(
			initialExpanded
		);

		expanded = expanded !== undefined ? expanded : internalExpanded;

		const setExpanded = onExpandedChange
			? onExpandedChange
			: setInternalExpanded;

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
			onNavigation(dateNormalized);

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

			onValueChange(date, 'click');
		};

		/**
		 * Control the value of the input propagating with the call
		 * of `onValueChange` but does not change what the user types,
		 * if a date is valid the month of the Date Picker is changed.
		 */
		const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			const {value} = event.target;
			const format = time ? `${dateFormat} ${TIME_FORMAT}` : dateFormat;

			const date = parseDate(value, format, new Date());
			const year = date.getFullYear();

			if (isValid(date) && year >= years.start && years.end >= year) {
				changeMonth(date);
				setDaySelected(date);

				if (time) {
					setCurrentTime(date.getHours(), date.getMinutes());
				}
			}

			onValueChange(value, 'input');
		};

		/**
		 * Changes selected date to the current date. The same happens when there
		 * is no date selected.
		 */
		const handleDotClicked = () => {
			changeMonth(dateNow);
			setDaySelected(dateNow);
			onValueChange(dateNow);
		};

		const handleTimeChange = (
			hours: number | string,
			minutes: number | string
		) => {
			const format = time ? `${dateFormat} ${TIME_FORMAT}` : dateFormat;

			// Hack to force InputDate to add `currentTime` to the value of
			// the input when the value was edited by the user.
			if (
				typeof value === 'string' &&
				isValid(parseDate(value, format, new Date()))
			) {
				onValueChange(parseDate(value, format, new Date()), 'time');
			}

			setCurrentTime(hours, minutes);
		};

		/**
		 * Handles datepicker view
		 */
		const handleCalendarButtonClicked = () => setExpanded(!expanded);

		/**
		 * Handle with the focus when it's outside of the component
		 * In this case, forces the state of expanded to be false
		 */
		const handleFocus = (event: FocusEvent) => {
			if (
				dropdownContainerRef.current &&
				!dropdownContainerRef.current.contains(event.target as Node) &&
				triggerElementRef.current &&
				!triggerElementRef.current.contains(event.target as Node)
			) {
				setExpanded(false);
			}
		};

		React.useEffect(() => {
			document.addEventListener('focus', handleFocus, true);

			return () => {
				document.removeEventListener('focus', handleFocus, true);
			};
		}, [handleFocus]);

		return (
			<FocusScope arrowKeysLeftRight>
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
								ref={ref}
								time={time}
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
										<Icon
											spritemap={spritemap}
											symbol="calendar"
										/>
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
											<Weekday
												key={key}
												weekday={weekday}
											/>
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
			</FocusScope>
		);
	}
);

export default ClayDatePicker;
