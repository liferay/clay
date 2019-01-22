/**
 * Clone a date object.
 * @param {!Date} d The date to clone
 * @return {!Date} The cloned date
 */
export function clone(d) {
	return new Date(d.getTime());
}

/**
 * @param {!Date} d
 * @return {!Date}
 */
export function getDaysInMonth(d) {
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
 *
 * @param {!Date} d
 * @param {!number} firstDayOfWeek
 * @return {!Array}
 */
export function getWeekArray(d, firstDayOfWeek = 0) {
	const daysInMonth = getDaysInMonth(d);
	const dayArray = [];

	let week = [];
	const weekArray = [];

	for (let i = 1; i <= daysInMonth; i += 1) {
		let genDay = new Date(d.getFullYear(), d.getMonth(), i, 12);
		dayArray.push({date: genDay});
	}

	dayArray.forEach(day => {
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
 * @return {Array<int>}
 */
export function range({end, start}) {
	return Array.from(
		{
			length: end - start,
		},
		(v, k) => k + start
	);
}
