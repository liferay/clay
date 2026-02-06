/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

import {Item} from './Item';
import {Link} from './Link';

export interface IPropsNav extends React.HTMLAttributes<HTMLUListElement> {

	/**
	 * Flag to indicate if `nav-nested-margins` class should be applied. Adds margin to indent each nested navigation.
	 */
	nestMargins?: boolean;

	/**
	 * Flag to indicate if `nav-nested` class should be applied. Adds padding to indent each nested navigation.
	 */
	nested?: boolean;

	/**
	 * Flag to indicate if `nav-stacked` class should be applied.
	 */
	stacked?: boolean;
}

const NavComponent = React.forwardRef<HTMLUListElement, IPropsNav>(function Nav(
	{children, className, nestMargins, nested, stacked, ...otherProps},
	ref
) {
	return (
		<ul
			{...otherProps}
			className={classNames('nav', className, {
				['nav-nested']: nested,
				['nav-nested-margins']: nestMargins,
				['nav-stacked']: stacked,
			})}
			ref={ref}
		>
			{children}
		</ul>
	);
});

NavComponent.displayName = 'Nav';

export const Nav = Object.assign(NavComponent, {
	Item,
	Link,
});
