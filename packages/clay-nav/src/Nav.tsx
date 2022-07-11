/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {NavItem} from './NavItem';
import {NavLink} from './NavLink';

export interface IProps extends React.HTMLAttributes<HTMLUListElement> {
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
}

function Nav(props: IProps): JSX.Element & {
	Item: typeof NavItem;
	Link: typeof NavLink;
};

function Nav({
	children,
	className,
	nestMargins,
	nested,
	stacked,
	...otherProps
}: IProps) {
	return (
		<ul
			{...otherProps}
			className={classNames('nav', className, {
				['nav-nested']: nested,
				['nav-nested-margins']: nestMargins,
				['nav-stacked']: stacked,
			})}
		>
			{children}
		</ul>
	);
}

Nav.Item = NavItem;
Nav.Link = NavLink;

export default Nav;
