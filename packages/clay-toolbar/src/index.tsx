/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import Action from './Action';
import Item from './Item';
import Label from './Label';
import Link from './Link';
import Nav from './Nav';
import Section from './Section';

interface IProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * Specifies whether the Toolbar will have a `component-tbar` class.
	 */
	component?: boolean;
	/**
	 * Adds a helper class that turns the Toolbar inline at a specified breakpoint.
	 */
	inlineBreakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	/**
	 * Defines if the toolbar should have the `subnav-tbar` class.
	 */
	subnav?:
		| boolean
		| {
				disabled?: boolean;
				displayType?: 'light' | 'primary';
		  };
}

const ClayToolbar: React.FunctionComponent<IProps> & {
	Action: typeof Action;
	Item: typeof Item;
	Label: typeof Label;
	Link: typeof Link;
	Nav: typeof Nav;
	Section: typeof Section;
} = ({
	children,
	className,
	component,
	inlineBreakpoint,
	subnav,
	...otherProps
}: IProps) => {
	const classes = classNames(
		className,
		'tbar',
		{
			'component-tbar': component,
			'subnav-tbar': !!subnav,
			'subnav-tbar-disabled': !!(
				subnav &&
				typeof subnav !== 'boolean' &&
				subnav.disabled
			),
			[`tbar-inline-${inlineBreakpoint}-down`]: inlineBreakpoint,
		},
		subnav &&
			typeof subnav !== 'boolean' &&
			subnav.displayType &&
			`subnav-tbar-${subnav.displayType}`
	);

	return (
		<nav {...otherProps} className={classes}>
			{children}
		</nav>
	);
};

ClayToolbar.Action = Action;
ClayToolbar.Item = Item;
ClayToolbar.Label = Label;
ClayToolbar.Link = Link;
ClayToolbar.Nav = Nav;
ClayToolbar.Section = Section;

export default ClayToolbar;
