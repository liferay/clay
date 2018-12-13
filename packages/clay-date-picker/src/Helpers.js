/**
 * @param {!Date} d
 * @return {!Date}
 */
export function setDateSelected(d) {
	const newDate = clone(d);
	newDate.setHours(12, 0, 0, 0); // always set noon to avoid time zone issues
	return `${newDate.getFullYear()} ${newDate.getMonth()} ${newDate.getDate()}`;
}

/**
 * @param {!Date} d
 * @return {!Date}
 */
export function formatDate(d) {
	const dateSplit = d.split(' ');
	const newDate = new Date(...dateSplit);
	return newDate;
}

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
 * Based on https://github.com/gpbl/react-day-picker/blob/master/src/Helpers.js#L55
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
		dayArray.push({
			date: genDay,
			dateString: setDateSelected(genDay),
			number: genDay.getDate(),
		});
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

	// unshift days to start the first week
	const firstWeek = weekArray[0];
	for (let i = 7 - firstWeek.length; i > 0; i -= 1) {
		const outsideDate = clone(firstWeek[0].date);
		outsideDate.setDate(firstWeek[0].date.getDate() - 1);
		firstWeek.unshift({
			date: outsideDate,
			dateString: setDateSelected(outsideDate),
			number: outsideDate.getDate(),
			outside: true,
		});
	}

	// push days until the end of the last week
	const lastWeek = weekArray[weekArray.length - 1];
	for (let i = lastWeek.length; i < 7; i += 1) {
		const outsideDate = clone(lastWeek[lastWeek.length - 1].date);
		outsideDate.setDate(lastWeek[lastWeek.length - 1].date.getDate() + 1);
		lastWeek.push({
			date: outsideDate,
			dateString: setDateSelected(outsideDate),
			number: outsideDate.getDate(),
			outside: true,
		});
	}

	return weekArray;
}
