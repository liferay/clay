/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as Helpers from './Helpers';
import moment from 'moment';
import {firstDayOfWeek} from './ClayDatePicker';
import {useState} from 'react';

/**
 * Generates the table of days of the month.
 */
const useWeeks = (currentMonth: Date, firstDayOfWeek: firstDayOfWeek) => {
	const [weeks, set] = useState<Helpers.Month>(() =>
		Helpers.getWeekArray(currentMonth, firstDayOfWeek)
	);

	function setWeeks(value: Date) {
		set(Helpers.getWeekArray(value, firstDayOfWeek));
	}

	return [weeks, setWeeks] as [Helpers.Month, (value: Date) => void];
};

/**
 * Sets the current month
 */
const useCurrentMonth = (value: Date) => {
	const setDate = (date: Date) =>
		moment(date)
			.clone()
			.set('date', 1)
			.set('hour', 12)
			.set('minute', 0)
			.set('second', 0)
			.set('millisecond', 0)
			.toDate();

	const [currentMonth, set] = useState<Date>(() => setDate(value));

	const setCurrentMonth = (value: Date) => {
		set(setDate(value));
	};

	return [currentMonth, setCurrentMonth] as [Date, (value: Date) => void];
};

/**
 * Sets the current time
 */
const useCurrentTime = (format: string) => {
	const [currentTime, set] = useState<string>(() =>
		moment()
			.set('h', 0)
			.set('m', 0)
			.format(format)
	);

	function setCurrentTime(hours: number, minutes: number): void {
		set(
			moment()
				.set('h', hours)
				.set('m', minutes)
				.format(format)
		);
	}

	return [currentTime, setCurrentTime] as [
		string,
		(hours: number, minutes: number) => void
	];
};

export {useCurrentMonth, useCurrentTime, useWeeks};
