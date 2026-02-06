/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

export interface ISelectOption {
	label: string | number;
	selected?: boolean;
	value: string | number;
}

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	options: Array<ISelectOption>;
	testId: string;
	value: string | number;
}

const ClayDatePickerSelect = React.forwardRef(
	(
		{options, testId, ...otherProps}: IProps,
		ref: React.Ref<HTMLSelectElement>
	) => (
		<select
			{...otherProps}
			className="form-control form-control-sm"
			data-testid={testId}
			ref={ref}
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

ClayDatePickerSelect.displayName = 'ClayDatePickerSelect';

export default ClayDatePickerSelect;
