/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {OptionHTMLAttributes} from 'react';

const Option: React.FunctionComponent<
	OptionHTMLAttributes<HTMLOptionElement>
> = ({label, ...otherProps}) => <option {...otherProps}>{label}</option>;

export default Option;
