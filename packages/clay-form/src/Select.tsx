/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {OptionHTMLAttributes, SelectHTMLAttributes} from 'react';

const Option: React.FunctionComponent<
	OptionHTMLAttributes<HTMLOptionElement>
> = ({label, ...otherProps}) => <option {...otherProps}>{label}</option>;

const ClaySelect: React.FunctionComponent<
	SelectHTMLAttributes<HTMLSelectElement>
> & {
	Option: typeof Option;
} = ({children, className, ...otherProps}) => (
	<select {...otherProps} className={classNames('form-control', className)}>
		{children}
	</select>
);

ClaySelect.Option = Option;

export default ClaySelect;
