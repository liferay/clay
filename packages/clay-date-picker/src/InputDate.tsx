/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import * as moment from 'moment';
import * as React from 'react';

interface IProps {
	ariaLabel?: string;
	currentTime: string;
	dateFormat: string;
	inputName?: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
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

	const memoizedValue = React.useMemo(() => isValidValue(value), [
		value,
		currentTime,
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
