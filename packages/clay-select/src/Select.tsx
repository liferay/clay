/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Option from './Option';
import React, {SelectHTMLAttributes} from 'react';

const Select: React.FunctionComponent<
	SelectHTMLAttributes<HTMLSelectElement>
> & {
	Option: typeof Option;
} = ({children, className, ...otherProps}) => (
	<select {...otherProps} className={classNames('form-control', className)}>
		{children}
	</select>
);

Select.Option = Option;

export default Select;
