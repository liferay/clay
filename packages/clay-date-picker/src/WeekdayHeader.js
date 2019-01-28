/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} param
 * @return {React.createElement}
 */
function WeekdayHeader({children, firstDayOfWeek, weekdaysShort}) {
	return (
		<div className="date-picker-header">
			{weekdaysShort.map((weekday, index) => {
				return React.Children.only(
					children({
						weekday: weekdaysShort[(index + firstDayOfWeek) % 7],
						key: index,
					})
				);
			})}
		</div>
	);
}

WeekdayHeader.propTypes = {
	children: PropTypes.func.isRequired,
	firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
	weekdaysShort: PropTypes.array,
};

WeekdayHeader.defaultProps = {
	firstDayOfWeek: 0,
};

export {WeekdayHeader};
export default WeekdayHeader;
