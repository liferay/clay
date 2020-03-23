/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import moment from 'moment';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	ariaLabel?: string;
	currentTime: string;
	dateFormat: string;
	disabled?: boolean;
	inputName?: string;
	placeholder?: string;
	time: boolean;
	timeFormat: string;
	useNative: boolean;
	value: string;
}

const ClayDatePickerInputDate: React.FunctionComponent<IProps> = ({
	ariaLabel,
	currentTime,
	dateFormat,
	inputName = 'datePicker',
	time = false,
	timeFormat,
	useNative = false,
	value = '',
	...otherProps
}) => {
	const isValidValue = (value: string | Date): string => {
		const format = time ? `${dateFormat} ${timeFormat}` : dateFormat;

		if (moment(value, format).isValid() && value instanceof Date) {
			const date = moment(value)
				.clone()
				.format(dateFormat);

			return time ? `${date} ${currentTime}` : date;
		}

		return value as string;
	};

	const memoizedValue = React.useMemo(() => isValidValue(value), [
		value,
		currentTime,
	]);

	return (
		<>
			<input name={inputName} type="hidden" value={memoizedValue} />
			<ClayInput
				{...otherProps}
				aria-label={ariaLabel}
				insetAfter={!useNative}
				type={useNative ? 'date' : 'text'}
				value={memoizedValue}
			/>
		</>
	);
};

export default ClayDatePickerInputDate;
