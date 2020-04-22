/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

const OptGroup: React.FunctionComponent<React.OptgroupHTMLAttributes<
	HTMLOptGroupElement
>> = ({children, ...otherProps}) => (
	<optgroup {...otherProps}>{children}</optgroup>
);

const Option: React.FunctionComponent<React.OptionHTMLAttributes<
	HTMLOptionElement
>> = ({label, ...otherProps}) => <option {...otherProps}>{label}</option>;

const ClaySelect: React.FunctionComponent<
	React.SelectHTMLAttributes<HTMLSelectElement>
> & {
	OptGroup: typeof OptGroup;
	Option: typeof Option;
} = ({children, className, ...otherProps}) => (
	<select {...otherProps} className={classNames('form-control', className)}>
		{children}
	</select>
);

ClaySelect.OptGroup = OptGroup;
ClaySelect.Option = Option;

export default ClaySelect;
