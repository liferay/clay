/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

const Header = React.forwardRef<
	HTMLLIElement,
	React.HTMLAttributes<HTMLLIElement>
>(({children, className, ...otherProps}, ref) => {
	return (
		<li
			{...otherProps}
			className={classNames('list-group-header', className)}
			ref={ref}
		>
			<p className="list-group-header-title">{children}</p>
		</li>
	);
});

Header.displayName = 'ClayListHeader';

export default Header;
