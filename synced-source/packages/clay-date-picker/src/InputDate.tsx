/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import React from 'react';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	ariaLabel?: string;
	disabled?: boolean;
	inputName?: string;
	placeholder?: string;
	useNative: boolean;
	value: string;
}

const ClayDatePickerInputDate = React.forwardRef<HTMLInputElement, IProps>(
	(
		{
			ariaLabel,
			inputName = 'datePicker',
			useNative = false,
			value = '',
			...otherProps
		},
		ref
	) => {
		return (
			<>
				<input name={inputName} type="hidden" value={value} />
				<ClayInput
					{...otherProps}
					aria-label={ariaLabel}
					insetAfter={!useNative}
					ref={ref}
					type={useNative ? 'date' : 'text'}
					value={value}
				/>
			</>
		);
	}
);

ClayDatePickerInputDate.displayName = 'ClayDatePickerInputDate';

export default ClayDatePickerInputDate;
