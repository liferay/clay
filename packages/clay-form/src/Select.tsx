/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export const OptGroup = ({
	children,
	...otherProps
}: React.OptgroupHTMLAttributes<HTMLOptGroupElement>) => (
	<optgroup {...otherProps}>{children}</optgroup>
);

export const Option = ({
	label,
	...otherProps
}: React.OptionHTMLAttributes<HTMLOptionElement>) => (
	<option {...otherProps}>{label}</option>
);

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	/**
	 * Flag to make the Select component only as wide as its contents.
	 */
	shrink?: boolean;

	/**
	 * Set the proportional size of the Select component.
	 */
	sizing?: 'lg' | 'sm';
}

function Select({children, className, shrink, sizing, ...otherProps}: IProps) {
	return (
		<select
			{...otherProps}
			className={classNames('form-control', className, {
				'form-control-shrink': shrink,
				[`form-control-${sizing}`]: sizing,
			})}
		>
			{children}
		</select>
	);
}

Select.OptGroup = OptGroup;
Select.Option = Option;

export default Select;
