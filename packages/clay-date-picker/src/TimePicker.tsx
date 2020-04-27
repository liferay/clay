/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTimePicker, {Input} from '@clayui/time-picker';
import React from 'react';

interface IProps {
	currentTime: string;
	disabled?: boolean;
	onTimeChange: (hours: number | string, minutes: number | string) => void;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	timezone?: string;
}

const DEFAULT_VALUE = '--';

const ClayDatePickerTimePicker: React.FunctionComponent<IProps> = ({
	currentTime,
	disabled,
	onTimeChange,
	spritemap,
	timezone,
}) => {
	const [values, setValues] = React.useState<Input>({
		ampm: DEFAULT_VALUE,
		hours: DEFAULT_VALUE,
		minutes: DEFAULT_VALUE,
	});

	/**
	 * Handles the control time picker
	 */
	const handleOnChange = (values: Input) => {
		const hours =
			values.hours === DEFAULT_VALUE
				? DEFAULT_VALUE
				: Number(values.hours);
		const minutes =
			values.minutes === DEFAULT_VALUE
				? DEFAULT_VALUE
				: Number(values.minutes);

		setValues(values);
		onTimeChange(hours, minutes);
	};

	React.useEffect(() => {
		const time = currentTime.split(':');

		setValues((prevValues) => ({
			...prevValues,
			hours: String(time[0]),
			minutes: String(time[1]),
		}));
	}, [currentTime]);

	return (
		<div className="time-picker">
			<ClayTimePicker
				disabled={disabled}
				icon
				onInputChange={handleOnChange}
				spritemap={spritemap}
				timezone={timezone}
				values={values}
			/>
		</div>
	);
};

export default ClayDatePickerTimePicker;
