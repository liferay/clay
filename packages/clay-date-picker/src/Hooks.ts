/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {Month, formatDate, getWeekArray, setDate} from './Helpers';
import {FirstDayOfWeek} from './types';

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
			hours = formatDate(date, 'H');
		}

		if (typeof minutes !== 'string') {
			minutes = formatDate(date, 'm');
		}

		set(`${hours}:${minutes}`);
	}

	return [currentTime, setCurrentTime] as [
		string,
		(hours: number | string, minutes: number | string) => void
	];
};

export {useCurrentTime, useWeeks};
