/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {NavItem} from './NavItem';
import {NavLink} from './NavLink';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * Flag to indicate if `nav-pills` class should be applied. Adds background colors and border styles to navigation items.
	 */
	navPills?: boolean;

	/**
	 * Flag to indicate if `nav-justified` class should be applied. Make navigation items equal width relative to its parent container.
	 */
	justified?: boolean;

	/**
	 * Flag to indicate if `nav-nested` class should be applied. Adds padding to indent each nested navigation.
	 */
	nested?: boolean;

	/**
	 * Flag to indicate if `nav-nested-margins` class should be applied. Adds margin to indent each nested navigation.
	 */
	nestMargins?: boolean;

	/**
	 * Flag to indicate if `nav-stacked` class should be applied.
	 */
	stacked?: boolean;

	/**
	 * Flag to indicate if `nav-unstyled` class should be applied. Removes spacing around nav-link and nav-btn.
	 */
	unstyled?: boolean;
}

const Nav: React.FunctionComponent<IProps> & {
	Item: typeof NavItem;
	Link: typeof NavLink;
} = ({
	children,
	className,
	justified,
	navPills,
	nestMargins,
	nested,
	stacked,
	unstyled,
	...otherProps
}: IProps) => {
	return (
		<ul
			{...otherProps}
			className={classNames('nav', className, {
				['nav-justified']: justified,
				['nav-nested']: nested,
				['nav-nested-margins']: nestMargins,
				['nav-pills']: navPills,
				['nav-stacked']: stacked,
				['nav-unstyled']: unstyled,
			})}
		>
			{children}
		</ul>
	);
};

Nav.Item = NavItem;
Nav.Link = NavLink;

export default Nav;
