/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTimePicker from '@clayui/time-picker';
import Icon from '@clayui/icon';
import moment from 'moment';
import React, {ChangeEventHandler, FunctionComponent} from 'react';

interface IProps {
	currentTime: string;
	onTimeChange: (hours: number, minutes: number) => void;
	spritemap: string;
	timeFormat: string;
	timezone?: string;
}

const ClayDatePickerTimePicker: FunctionComponent<IProps> = ({
	currentTime,
	onTimeChange,
	spritemap,
	timeFormat,
	timezone,
}) => {
	/**
	 * Handles the control time picker
	 */
	const handleOnChange: ChangeEventHandler<HTMLInputElement> = event => {
		const date = moment(event.target.value, timeFormat);
		onTimeChange(date.hours(), date.minutes());
	};

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
};

export default ClayDatePickerTimePicker;
