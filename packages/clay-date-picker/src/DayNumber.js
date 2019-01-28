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
	const classNames = classnames('date-picker-day', {
		active:
			moment(day.date).format('YYYY-MM-DD') ===
			moment(daySelected).format('YYYY-MM-DD'),
		outside: day.outside,
	});

	return (
		<div
			aria-label={moment(day.date)
				.clone()
				.set('hour', 12)
				.set('minute', 0)
				.set('second', 0)
				.set('millisecond', 0)
				.format('YYYY MM DD')}
			className={classNames}
			onClick={() => onClick(day.date)}
			tabIndex={day.outside ? -1 : 0}
		>
			{day.date.getDate()}
		</div>
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
