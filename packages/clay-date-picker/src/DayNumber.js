/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * @param {Object} param
 * @return {React.createElement}
 */
function DayNumber({day, daySelected, onClick}) {
	const classNames = classnames('date-picker-date date-picker-calendar-item', {
		'active':
			moment(day.date).format('YYYY-MM-DD') ===
			moment(daySelected).format('YYYY-MM-DD'),
		'disabled': day.outside,
	});

	return (
		<button
			aria-label={moment(day.date)
				.clone()
				.set('hour', 12)
				.set('minute', 0)
				.set('second', 0)
				.set('millisecond', 0)
				.format('YYYY MM DD')}
			className={classNames}
			disabled={day.outside}
			onClick={() => onClick(day.date)}
			type="button"
		>
			{day.date.getDate()}
		</button>
	);
}

DayNumber.propTypes = {
	day: PropTypes.shape({
		date: PropTypes.instanceOf(Date),
		dateString: PropTypes.string,
		outside: PropTypes.bool,
	}),
	daySelected: PropTypes.instanceOf(Date),
	onClick: PropTypes.func,
};

export {DayNumber};
export default DayNumber;
