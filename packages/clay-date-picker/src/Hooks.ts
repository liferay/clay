/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import moment from 'moment';
import React from 'react';

import * as Helpers from './Helpers';
import {FirstDayOfWeek} from './types';

/**
 * Generates the table of days of the month.
 */
const useWeeks = (currentMonth: Date, firstDayOfWeek: FirstDayOfWeek) => {
	const [weeks, set] = React.useState<Helpers.Month>(() =>
		Helpers.getWeekArray(currentMonth, firstDayOfWeek)
	);

	function setWeeks(value: Date) {
		set(Helpers.getWeekArray(value, firstDayOfWeek));
	}

	return [weeks, setWeeks] as [Helpers.Month, (value: Date) => void];
};

/**
 * Sets the current time
 */
const useCurrentTime = (format: string) => {
	const [currentTime, set] = React.useState<string>(() =>
		moment()
			.set('h', 0)
			.set('m', 0)
			.format(format)
	);

	function setCurrentTime(
		hours: number | string,
		minutes: number | string
	): void {
		if (typeof hours !== 'string') {
			hours = moment()
				.set('h', hours)
				.format('H');
		}

		if (typeof minutes !== 'string') {
			minutes = moment()
				.set('m', minutes)
				.format('m');
		}

		set(`${hours}:${minutes}`);
	}

	return [currentTime, setCurrentTime] as [
		string,
		(hours: number | string, minutes: number | string) => void
	];
};

export {useCurrentTime, useWeeks};
