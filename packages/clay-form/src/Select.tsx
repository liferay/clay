/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

const OptGroup = ({
	children,
	...otherProps
}: React.OptgroupHTMLAttributes<HTMLOptGroupElement>) => (
	<optgroup {...otherProps}>{children}</optgroup>
);

const Option = ({
	label,
	...otherProps
}: React.OptionHTMLAttributes<HTMLOptionElement>) => (
	<option {...otherProps}>{label}</option>
);

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	/**
	 * Set the proportional size of the Select component.
	 */
	sizing?: 'lg' | 'sm';
}

function ClaySelect(props: IProps): JSX.Element & {
	OptGroup: typeof OptGroup;
	Option: typeof Option;
};

function ClaySelect({children, className, sizing, ...otherProps}: IProps) {
	return (
		<select
			{...otherProps}
			className={classNames('form-control', className, {
				[`form-control-${sizing}`]: sizing,
			})}
		>
			{children}
		</select>
	);
}

ClaySelect.OptGroup = OptGroup;
ClaySelect.Option = Option;

export default ClaySelect;
