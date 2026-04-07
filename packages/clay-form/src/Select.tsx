/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React, {forwardRef} from 'react';

export function OptGroup({
	children,
	...otherProps
}: React.OptgroupHTMLAttributes<HTMLOptGroupElement>) {
	return <optgroup {...otherProps}>{children}</optgroup>;
}

export function Option({
	label,
	...otherProps
}: React.OptionHTMLAttributes<HTMLOptionElement>) {
	return <option {...otherProps}>{label}</option>;
}

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

type SelectComponent = React.ForwardRefExoticComponent<
	IProps & React.RefAttributes<HTMLSelectElement>
> & {
	OptGroup: typeof OptGroup;
	Option: typeof Option;
};

const Select = forwardRef<HTMLSelectElement, IProps>(
	({children, className, shrink, sizing, ...otherProps}, ref) => {
		return (
			<select
				ref={ref}
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
) as SelectComponent;

Select.OptGroup = OptGroup;
Select.Option = Option;

export default Select;
