/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export const Item = ({
	children,
	className,
	...otherProps
}: React.HTMLAttributes<HTMLLIElement>) => {
	return (
		<li {...otherProps} className={classNames('nav-item', className)}>
			{children}
		</li>
	);
};
