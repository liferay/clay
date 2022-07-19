/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import React from 'react';

const ClayDropDownItemList = ({
	children,
	className,
	role = 'menu',
	...otherProps
}: React.HTMLAttributes<HTMLUListElement>) => {
	return (
		<ul
			{...otherProps}
			className={classnames('list-unstyled', className)}
			role={role}
		>
			{children}
		</ul>
	);
};

export default ClayDropDownItemList;
