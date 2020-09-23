/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export const NavItem: React.FunctionComponent<React.HTMLAttributes<
	HTMLLIElement
>> = ({children, className, ...otherProps}) => {
	return (
		<li {...otherProps} className={classNames('nav-item', className)}>
			{children}
		</li>
	);
};
