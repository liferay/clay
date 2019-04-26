/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import ClayIcon from '@clayui/icon';
import ClayLink from '@clayui/link';
import warning from 'warning';

import {useTransition} from './Hooks';

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
	/**
	 * Determines the active state of an dropdown list item.
	 */
	active?: boolean;

	/**
	 * Children elements received from ClayNavigationBar.ListItem component.
	 */
	children: React.ReactElement;

	/**
	 * Optional property that defines the label of the element 
	 * that will trigger the dropdown.
	 */
	itemLabel?: string;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Optional property that overrides itemLabel property passed to children components
	 * to manipulate dropdown's trigger label.
	 */
	activeLabel?: string;

	/**
	 * Children elements received from ClayNavigationBar component.
	 */
	children: React.ReactElement<ListItemProps>[];

	/**
	 * Determines the style of the Navigation Bar
	 */
	inverted?: boolean;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap: string;
}

type ListItemType = React.FunctionComponent<ListItemProps>;

const ListItem: ListItemType = ({
	active,
	className,
	children,
	...otherProps
}) => {
	return (
		<li
			{...otherProps}
			className={classNames('nav-item', {
				className,
				active,
			})}
		>
			{React.Children.map(
				children,
				(child: React.ReactElement<ListItemProps>, index) => {
					return React.cloneElement(child, {
						...child.props,
						className: classNames(
							'nav-link',
							child.props.className,
							{
								active,
							}
						),
						key: index,
					});
				}
			)}
		</li>
	);
};

const ClayNavigationBar: React.FunctionComponent<Props> & {
	ListItem: ListItemType;
} = ({
	activeLabel,
	className,
	children,
	inverted = false,
	spritemap,
	...otherProps
}) => {
	const [visible, setVisible] = React.useState(false);
	const contentRef = React.useRef<HTMLDivElement>(null);
	const [
		transitioning,
		handleTransitionEnd,
		handleClickToggler,
	] = useTransition(visible, setVisible, contentRef);

	const activeElements = children.filter(
		child => child.props && child.props.active
	);

	warning(
		!(!activeLabel && !activeElements.length),
		`You must provide at least one \`active\` attribute on ClayNavigationBar.ListItem or a \`activeLabel\` to ClayNavigationBar component`
	);

	warning(
		!(!activeLabel && activeElements.length > 1),
		`You passed ${
			activeElements.length
		} active props to ClayNavigationBar children, only the first one child will be considered to name the trigger element`
	);

	const label = activeLabel || activeElements[0].props.itemLabel || '';

	return (
		<nav
			{...otherProps}
			className={classNames(
				className,
				'navbar',
				'navbar-collapse-absolute',
				'navbar-expand-md',
				'navbar-underline',
				'navigation-bar',
				{
					'navigation-bar-light': !inverted,
					'navigation-bar-secondary': inverted,
				}
			)}
		>
			<div className="container-fluid container-fluid-max-xl">
				<ClayLink
					className={classNames(
						'navbar-toggler',
						'navbar-toggler-link',
						{
							collapsed: !visible,
						}
					)}
					displayType="secondary"
					onClick={handleClickToggler}
				>
					{label}

					<ClayIcon spritemap={spritemap} symbol="caret-bottom" />
				</ClayLink>

				<div
					className={classNames('navbar-collapse', {
						collapse: !transitioning,
						collapsing: transitioning,
						show: visible,
					})}
					onTransitionEnd={handleTransitionEnd}
					ref={contentRef}
				>
					<div className="container-fluid container-fluid-max-xl">
						<ul className="navbar-nav">{children}</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

ClayNavigationBar.ListItem = ListItem;

export default ClayNavigationBar;
