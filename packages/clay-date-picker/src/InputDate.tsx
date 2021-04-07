/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import React from 'react';

import {formatDate, isValid} from './Helpers';
import {TDateRange} from './types';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	ariaLabel?: string;
	currentTime: string;
	dateFormat: string;
	dateRange: TDateRange;
	disabled?: boolean;
	enableDateRange?: boolean;
	inputName?: string;
	placeholder?: string;
	time: boolean;
	useNative: boolean;
	value: string;
}

function isValidValue(
	value: string | Date,
	dateFormat: string,
	time: boolean,
	currentTime: string
) {
	if (value instanceof Date && isValid(value)) {
		const date = formatDate(value, dateFormat);

		return time ? `${date} ${currentTime}` : date;
	}

	return time ? `${value} ${currentTime}` : (value as string);
}

function isValidDateRange(
	dateRange: TDateRange,
	dateFormat: string,
	value: string
) {
	if (isValid(dateRange.fromDate) && isValid(dateRange.toDate)) {
		return value;
	}
}

const ClayDatePickerInputDate = React.forwardRef<HTMLInputElement, IProps>(
	(
		{
			ariaLabel,
			currentTime,
			dateFormat,
			dateRange,
			enableDateRange,
			inputName = 'datePicker',
			time = false,
			useNative = false,
			value = '',
			...otherProps
		},
		ref
	) => {
		const memoizedValue = React.useMemo(() => {
			if (enableDateRange) {
				return isValidDateRange(dateRange, dateFormat, value);
			}

			return isValidValue(value, dateFormat, time, currentTime);
		}, [value, currentTime, dateRange, time, currentTime]);

		return (
			<>
				<input name={inputName} type="hidden" value={memoizedValue} />
				<ClayInput
					{...otherProps}
					aria-label={ariaLabel}
					insetAfter={!useNative}
					ref={ref}
					type={useNative ? 'date' : 'text'}
					value={memoizedValue}
				/>
			</>
		);
	}
);

ClayDatePickerInputDate.displayName = 'ClayDatePickerInputDate';

export default ClayDatePickerInputDate;
