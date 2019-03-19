/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {FunctionComponent, SelectHTMLAttributes} from 'react';

export interface ISelectOption {
	label: string | number;
	selected?: boolean;
	value: string | number;
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
	name: string;
	options: Array<ISelectOption>;
	value: string | number;
}

const Select: FunctionComponent<Props> = ({name, onChange, options, value}) => (
	<select
		className="form-control form-control-sm"
		name={name}
		onChange={onChange}
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
);

export default Select;
