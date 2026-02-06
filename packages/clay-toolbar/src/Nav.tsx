/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLUListElement> {

	/**
	 * Specifies whether the `tbar-nav-wrap` class should be added to the Toolbar.Nav
	 */
	wrap?: boolean;
}
export function Nav({children, className, wrap, ...otherProps}: IProps) {
	return (
		<ul
			className={classNames(className, 'tbar-nav', {
				'tbar-nav-wrap': wrap,
			})}
			{...otherProps}
		>
			{children}
		</ul>
	);
}

Nav.displayName = 'ClayToolbarNav';
