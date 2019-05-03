/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

const Header: React.FunctionComponent<React.HTMLAttributes<HTMLLIElement>> = ({
	children,
	className,
	...otherProps
}) => {
	return (
		<li
			{...otherProps}
			className={classNames('list-group-header', className)}
		>
			<h3 className="list-group-header-title">{children}</h3>
		</li>
	);
};

export default Header;
