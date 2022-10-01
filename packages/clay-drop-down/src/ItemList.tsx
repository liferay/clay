/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import React from 'react';

const ClayDropDownItemList = React.forwardRef<
	HTMLUListElement,
	React.HTMLAttributes<HTMLUListElement>
>(({children, className, role = 'menu', ...otherProps}, ref) => {
	return (
		<ul
			{...otherProps}
			className={classnames('list-unstyled', className)}
			ref={ref}
			role={role}
		>
			{children}
		</ul>
	);
});

ClayDropDownItemList.displayName = 'ClayDropDownItemList';

export default ClayDropDownItemList;
