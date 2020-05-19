/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

const Item: React.FunctionComponent<React.HTMLAttributes<HTMLLIElement>> = ({
	children,
	className,
	...otherProps
}) => (
	<li {...otherProps} className={classNames('nav-item', className)}>
		{children}
	</li>
);

export default Item;
