/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {IDay, Month, WeekDays, clone, formatDate, setDate} from './Helpers';
import {FirstDayOfWeek} from './types';

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
 *       outside: true
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
		firstWeek.unshift({date: outsideDate, outside: true});
	}

	// push days until the end of the last week
	const lastWeek = weekArray[weekArray.length - 1];
	for (let i = lastWeek.length; i < 7; i += 1) {
		const outsideDate = clone(lastWeek[lastWeek.length - 1].date);
		outsideDate.setDate(lastWeek[lastWeek.length - 1].date.getDate() + 1);
		lastWeek.push({date: outsideDate, outside: true});
	}

	return weekArray;
}

/**
 * Generates the table of days of the month.
 */
const useWeeks = (currentMonth: Date, firstDayOfWeek: FirstDayOfWeek) => {
	const [weeks, set] = React.useState<Month>(() =>
		getWeekArray(currentMonth, firstDayOfWeek)
	);

	function setWeeks(value: Date) {
		set(getWeekArray(value, firstDayOfWeek));
	}

	return [weeks, setWeeks] as [Month, (value: Date) => void];
};

/**
 * Sets the current time
 */
const useCurrentTime = (format: string) => {
	const [currentTime, set] = React.useState<string>(() =>
		formatDate(setDate(new Date(), {hours: 0, minutes: 0}), format)
	);

	function setCurrentTime(
		hours: number | string,
		minutes: number | string
	): void {
		const date = setDate(new Date(), {hours, minutes});

		if (typeof hours !== 'string') {
			hours = formatDate(date, 'HH');
		}

		if (typeof minutes !== 'string') {
			minutes = formatDate(date, 'mm');
		}

		set(`${hours}:${minutes}`);
	}

	return [currentTime, setCurrentTime] as [
		string,
		(hours: number | string, minutes: number | string) => void
	];
};

export {useCurrentTime, useWeeks};
