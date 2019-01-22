/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useState} from 'react';
import * as Helpers from './Helpers';
import moment from 'moment';

/**
 * Generates the table of days of the month.
 * @param {!Date} currentMonth
 * @param {!number} firstDayOfWeek
 * @return {Array}
 */
const useWeeks = (currentMonth, firstDayOfWeek) => {
	const [weeks, set] = useState(() =>
		Helpers.getWeekArray(currentMonth, firstDayOfWeek)
	);

	/**
	 * @param {!Date} value
	 */
	function setWeeks(value) {
		set(Helpers.getWeekArray(value, firstDayOfWeek));
	}

	return [weeks, setWeeks];
};

/**
 * Sets the current month
 * @param {!Date} value
 * @return {Array}
 */
const useCurrentMonth = value => {
	const setDate = date =>
		moment(date)
			.clone()
			.set('date', 1)
			.set('hour', 12)
			.set('minute', 0)
			.set('second', 0)
			.set('millisecond', 0)
			.toDate();

	const [currentMonth, set] = useState(() => setDate(value));

	/**
	 * @param {!Date} value
	 */
	function setCurrentMonth(value) {
		set(setDate(value));
	}

	return [currentMonth, setCurrentMonth];
};

/**
 * Sets the current time
 * @param {!string} format
 * @return {Array}
 */
const useCurrentTime = format => {
	const [currentTime, set] = useState(() =>
		moment()
			.set('h', 0)
			.set('m', 0)
			.format(format)
	);

	/**
	 * @param {!number} hours
	 * @param {!number} minutes
	 */
	function setCurrentTime(hours, minutes) {
		set(
			moment()
				.set('h', hours)
				.set('m', minutes)
				.format(format)
		);
	}

	return [currentTime, setCurrentTime];
};

export {useCurrentMonth, useCurrentTime, useWeeks};
