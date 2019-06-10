/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as Helpers from './Helpers';
import moment from 'moment';
import {FirstDayOfWeek} from './types';
import {useState} from 'react';

/**
 * Generates the table of days of the month.
 */
const useWeeks = (currentMonth: Date, firstDayOfWeek: FirstDayOfWeek) => {
	const [weeks, set] = useState<Helpers.Month>(() =>
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

export {useCurrentTime, useWeeks};
