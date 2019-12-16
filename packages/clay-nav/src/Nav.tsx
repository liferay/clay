/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import * as React from 'react';

import {NavItem} from './NavItem';
import {NavLink} from './NavLink';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * Flag to indicate if `nav-nested` class should be applied.
	 */
	nested?: boolean;

	/**
	 * Flag to indicate if `nav-nested-margins` class should be applied.
	 */
	nestMargins?: boolean;

	/**
	 * Flag to indicate if `nav-stacked` class should be applied.
	 */
	stacked?: boolean;
}

const Nav: React.FunctionComponent<IProps> & {
	Item: typeof NavItem;
	Link: typeof NavLink;
} = ({children, className, nestMargins, nested, stacked, ...otherProps}) => {
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
};

Nav.Item = NavItem;
Nav.Link = NavLink;

export default Nav;
