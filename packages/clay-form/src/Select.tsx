/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import * as React from 'react';

const Option: React.FunctionComponent<
	React.OptionHTMLAttributes<HTMLOptionElement>
> = ({label, ...otherProps}) => <option {...otherProps}>{label}</option>;

const ClaySelect: React.FunctionComponent<
	React.SelectHTMLAttributes<HTMLSelectElement>
> & {
	Option: typeof Option;
} = ({children, className, ...otherProps}) => (
	<select {...otherProps} className={classNames('form-control', className)}>
		{children}
	</select>
);

ClaySelect.Option = Option;

export default ClaySelect;
