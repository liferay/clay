/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Option from './Option';
import React, {SelectHTMLAttributes} from 'react';

const ClaySelectSelect: React.FunctionComponent<
	SelectHTMLAttributes<HTMLSelectElement>
> & {
	Option: typeof Option;
} = ({children, className, ...otherProps}) => (
	<select {...otherProps} className={classNames('form-control', className)}>
		{children}
	</select>
);

ClaySelectSelect.Option = Option;

export default ClaySelectSelect;
