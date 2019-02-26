/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTimePicker from 'clay-time-picker';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from './Icon';

/**
 * TimePicker
 * @return {React.createElement}
 */
function TimePicker({
	currentTime,
	onTimeChange,
	spritemap,
	timeFormat,
	timezone,
}) {
	/**
	 * Handles the control time picker
	 * @param {!Event} event
	 */
	function handleOnChange(event) {
		const {value} = event.target;
		const date = moment(value, timeFormat);

		onTimeChange(date.hours(), date.minutes());
	}

	return (
		<div className="time-picker">
			<div className="input-group">
				<div className="input-group-item input-group-item-shrink">
					<span className="input-group-text">
						<Icon spritemap={spritemap} symbol="time" />
					</span>
				</div>
				<ClayTimePicker
					name="timer"
					onChange={handleOnChange}
					timezone={timezone}
					value={currentTime}
					wrapTime={false}
				/>
			</div>
		</div>
	);
}

TimePicker.propTypes = {
	currentTime: PropTypes.string,
	onTimeChange: PropTypes.func,
	spritemap: PropTypes.string,
	timeFormat: PropTypes.string,
	timezone: PropTypes.string,
};

export {TimePicker};
export default TimePicker;
