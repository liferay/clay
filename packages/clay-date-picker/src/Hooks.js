import {useState} from 'react';
import * as Helpers from './Helpers';
import moment from 'moment';

const useWeeks = (currentMonth, firstDayOfWeek) => {
	const [weeks, set] = useState(() =>
		Helpers.getWeekArray(currentMonth, firstDayOfWeek)
	);

	/**
	 * @param {*} value
	 */
	function setWeeks(value) {
		set(Helpers.getWeekArray(value, firstDayOfWeek));
	}

	return [weeks, setWeeks];
};

const useCurrentMonth = value => {
	const [currentMonth, set] = useState(() =>
		moment(value)
			.clone()
			.set('date', 1)
			.set('hour', 12)
			.toDate()
	);

	/**
	 * @param {*} value
	 */
	function setCurrentMonth(value) {
		set(
			moment(value)
				.clone()
				.set('date', 1)
				.set('hour', 12)
				.toDate()
		);
	}

	return [currentMonth, setCurrentMonth];
};

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
