/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTimePicker, {Input} from '@clayui/time-picker';
import React from 'react';

type Props = {
	currentTime: string;
	disabled?: boolean;
	onTimeChange: (
		hours: number | string,
		minutes: number | string,
		ampm: Input['ampm']
	) => void;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	timezone?: string;
	use12Hours?: boolean;
};

const DEFAULT_VALUE = '--';

const ClayDatePickerTimePicker = ({
	currentTime,
	disabled,
	onTimeChange,
	spritemap,
	timezone,
	use12Hours,
}: Props) => {
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
		const ampm = values.ampm ? values.ampm : DEFAULT_VALUE;

		setValues(values);
		onTimeChange(hours, minutes, ampm);
	};

	React.useEffect(() => {
		const [hours, minutesAndAmpm] = currentTime.split(':');

		const [minutes, ampm] = minutesAndAmpm!.split(' ');

		setValues((prevValues) => ({
			...prevValues,
			ampm: ampm as Input['ampm'],
			hours: String(hours),
			minutes: String(minutes),
		}));
	}, [currentTime, use12Hours]);

	return (
		<div className="time-picker">
			<ClayTimePicker
				disabled={disabled}
				icon
				onInputChange={handleOnChange}
				spritemap={spritemap}
				timezone={timezone}
				use12Hours={use12Hours}
				values={values}
			/>
		</div>
	);
};

export default ClayDatePickerTimePicker;
