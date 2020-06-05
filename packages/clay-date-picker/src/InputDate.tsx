/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import React from 'react';

import {formatDate, isValid} from './Helpers';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	ariaLabel?: string;
	currentTime: string;
	dateFormat: string;
	disabled?: boolean;
	inputName?: string;
	placeholder?: string;
	time: boolean;
	useNative: boolean;
	value: string;
}

const ClayDatePickerInputDate = React.forwardRef<HTMLInputElement, IProps>(
	(
		{
			ariaLabel,
			currentTime,
			dateFormat,
			inputName = 'datePicker',
			time = false,
			useNative = false,
			value = '',
			...otherProps
		},
		ref
	) => {
		const isValidValue = (value: string | Date): string => {
			if (value instanceof Date && isValid(value)) {
				const date = formatDate(value, dateFormat);

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
					ref={ref}
					type={useNative ? 'date' : 'text'}
					value={memoizedValue}
				/>
			</>
		);
	}
);

export default ClayDatePickerInputDate;
