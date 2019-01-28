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
function TimePicker({currentTime, onTimeChange, spritemap, timeFormat}) {
	/**
	 * Handles the control time picker
	 * @param {!Event} event
	 */
	function handleOnChange(event) {
		const {timer} = event.target.form;
		const date = moment(timer.value, timeFormat);

		onTimeChange(date.hours(), date.minutes());
	}

	return (
		<div className="date-picker-timer">
			<Icon spritemap={spritemap} symbol="time" />
			<form className="date-picker-control">
				<ClayTimePicker
					name="timer"
					onChange={handleOnChange}
					value={currentTime}
				/>
			</form>
		</div>
	);
}

TimePicker.propTypes = {
	currentTime: PropTypes.string,
	onTimeChange: PropTypes.func,
	spritemap: PropTypes.string,
	timeFormat: PropTypes.string,
};

export {TimePicker};
export default TimePicker;
