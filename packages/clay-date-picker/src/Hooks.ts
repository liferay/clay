/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useCallback, useState} from 'react';

import {IDay, Month, WeekDays, clone, formatDate, setDate} from './Helpers';
import {FirstDayOfWeek} from './types';

/**
 * Handles selected days and stabilize date time when set to avoid problems
 * when the range is used to check intervals.
 */
export const useDaysSelected = (initialMonth: Date) => {
	const [daysSelected, set] = useState(() => {
		const date = normalizeTime(initialMonth);

		return [date, date] as const;
	});

	const setDaysSelected = useCallback(([start, end]: [Date, Date]) => {
		// Preserves the reference of dates
		if (start === end) {
			const date = normalizeTime(start);

			set([date, date]);
		} else {
			set([normalizeTime(start), normalizeTime(end)]);
		}
	}, []);

	return [daysSelected, setDaysSelected] as const;
};

/**
 * Generates the table of days of the month.
 */
export const useWeeks = (
	currentMonth: Date,
	firstDayOfWeek: FirstDayOfWeek
) => {
	const [weeks, set] = useState<Month>(() =>
		getWeekArray(currentMonth, firstDayOfWeek)
	);

	const setWeeks = useCallback(
		(value: Date) => set(getWeekArray(value, firstDayOfWeek)),
		[firstDayOfWeek]
	);

	return [weeks, setWeeks] as [Month, (value: Date) => void];
};

/**
 * Sets the current time
 */
export const useCurrentTime = (format: string) => {
	const [currentTime, set] = useState<string>(() =>
		formatDate(setDate(new Date(), {hours: 0, minutes: 0}), format)
	);

	const setCurrentTime = useCallback(
		(hours: number | string, minutes: number | string) => {
			const date = setDate(new Date(), {hours, minutes});

			if (typeof hours !== 'string') {
				hours = formatDate(date, 'HH');
			}

			if (typeof minutes !== 'string') {
				minutes = formatDate(date, 'mm');
			}

			set(`${hours}:${minutes}`);
		},
		[]
	);

	return [currentTime, setCurrentTime] as [
		string,
		(hours: number | string, minutes: number | string) => void
	];
};

const normalizeTime = (date: Date) =>
	setDate(date, {hours: 12, milliseconds: 0, minutes: 0, seconds: 0});

function getDaysInMonth(d: Date) {
	const firstDayOfMonth = new Date(d.getFullYear(), d.getMonth(), 1, 12);

	firstDayOfMonth.setMonth(firstDayOfMonth.getMonth() + 1);
	firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 1);

	return firstDayOfMonth.getDate();
}

/**
 * Utility function to generate a table two days of the month.
 * Based on (This implementation does not have the fixation of
 * 6 weeks) https://github.com/gpbl/react-day-picker/blob/master/src/Helpers.js#L55
 *
 * @example
 * getWeekArray(new Date(), 0);
 *
 * [
 *   [
 *     {
 *       date: Sun Dec 30 2018 12:00:00 GMT-0300...
 *       nextMonth: false
 *       previousMonth: true
 * 	   },
 *     ...
 *   ]
 *   ...
 * ]
 *
 * The `outside` property references when a day
 * does not belong to the current month.
 */
function getWeekArray(d: Date, firstDayOfWeek = 0): Month {
	const daysInMonth = getDaysInMonth(d);
	const dayArray: Array<IDay> = [];

	let week: WeekDays = [];
	const weekArray: Month = [];

	for (let i = 1; i <= daysInMonth; i += 1) {
		const genDay = new Date(d.getFullYear(), d.getMonth(), i, 12);
		dayArray.push({date: genDay});
	}

	dayArray.forEach((day) => {
		if (week.length > 0 && day.date.getDay() === firstDayOfWeek) {
			weekArray.push(week);
			week = [];
		}
		week.push(day);
		if (dayArray.indexOf(day) === dayArray.length - 1) {
			weekArray.push(week);
		}
	});

	// unshift days from start of the first week
	const firstWeek = weekArray[0];
	for (let i = 7 - firstWeek.length; i > 0; i -= 1) {
		const outsideDate = clone(firstWeek[0].date);
		outsideDate.setDate(firstWeek[0].date.getDate() - 1);
		firstWeek.unshift({date: outsideDate, previousMonth: true});
	}

	// push days until the end of the last week
	const lastWeek = weekArray[weekArray.length - 1];
	for (let i = lastWeek.length; i < 7; i += 1) {
		const outsideDate = clone(lastWeek[lastWeek.length - 1].date);
		outsideDate.setDate(lastWeek[lastWeek.length - 1].date.getDate() + 1);
		lastWeek.push({date: outsideDate, nextMonth: true});
	}

	return weekArray;
}
