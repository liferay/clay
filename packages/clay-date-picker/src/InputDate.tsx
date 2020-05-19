/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import moment from 'moment';
import React, {ChangeEventHandler, FunctionComponent, useMemo} from 'react';

interface IProps {
	ariaLabel?: string;
	currentTime: string;
	dateFormat: string;
	inputName?: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	time: boolean;
	timeFormat: string;
	useNative: boolean;
	value: string;
}

const ClayDatePickerInputDate: FunctionComponent<IProps> = ({
	ariaLabel,
	currentTime,
	dateFormat,
	inputName = 'datePicker',
	onChange,
	placeholder,
	time = false,
	timeFormat,
	useNative = false,
	value = '',
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

	const memoizedValue = useMemo(() => isValidValue(value), [
		isValidValue,
		value,
	]);

	return (
		<>
			<input name={inputName} type="hidden" value={memoizedValue} />
			<ClayInput
				aria-label={ariaLabel}
				insetAfter={!useNative}
				onChange={onChange}
				placeholder={placeholder}
				type={useNative ? 'date' : 'text'}
				value={memoizedValue}
			/>
		</>
	);
};

export default ClayDatePickerInputDate;
