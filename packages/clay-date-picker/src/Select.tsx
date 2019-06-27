/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {forwardRef, SelectHTMLAttributes} from 'react';

export interface ISelectOption {
	label: string | number;
	selected?: boolean;
	value: string | number;
}

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
	name: string;
	options: Array<ISelectOption>;
	testId: string;
	value: string | number;
}

const ClayDatePickerSelect = forwardRef(
	(
		{name, onChange, options, testId, value}: IProps,
		ref: React.Ref<HTMLSelectElement>
	) => (
		<select
			className="form-control form-control-sm"
			data-testid={testId}
			name={name}
			onChange={onChange}
			ref={ref}
			value={value}
		>
			{options.map((option, index) => (
				<option
					key={index}
					selected={option.selected ? true : undefined}
					value={option.value}
				>
					{option.label}
				</option>
			))}
		</select>
	)
);

export default ClayDatePickerSelect;
