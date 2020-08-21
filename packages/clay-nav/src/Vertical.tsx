/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useTransitionHeight} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';

import Nav from './Nav';
import Trigger from './Trigger';

interface IItem extends React.ComponentProps<typeof Nav.Item> {
	/**
	 * Flag to indicate if item is active.
	 */
	active?: boolean;

	/**
	 * Callback for when item is clicked.
	 */
	onClick?: () => void;

	/**
	 * Link href for item.
	 */
	href?: string;

	/**
	 * Value of item.
	 */
	label?: string;
}

interface IItemWithItems extends IItem {
	/**
	 * Flag to indicate if nested items are expanded and shown.
	 */
	initialExpanded?: boolean;

	/**
	 * List of nested items under current item.
	 */
	items?: Array<IItem>;
}

interface IProps {
	/**
	 * Label of item that is currently active.
	 */
	activeLabel?: string;

	/**
	 * Label of the button that appears on smaller resolutions to open the vertical navigation.
	 */
	triggerLabel?: string;

	/**
	 * List of items.
	 */
	items: Array<IItemWithItems>;

	/**
	 * Flag to indicate if `menubar-vertical-expand-lg` class is applied.
	 */
	large?: boolean;

	/**
	 * Custom component that will be displayed on mobile resolutions that toggles the visibility of the navigation.
	 */
	trigger?: React.ReactElement;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;
}

interface INavItemProps extends IItemWithItems {
	/**
	 * Integer to keep track of what nested level the item is.
	 */
	level: number;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;
}

function Item({
	active,
	href,
	initialExpanded = false,
	items: subItems,
	label,
	level,
	onClick,
	spritemap,
	...otherProps
}: INavItemProps) {
	const menuRef = React.useRef(null);
	const [expanded, setExpaned] = React.useState(!initialExpanded);

	const [
		transitioning,
		handleTransitionEnd,
		handleClickToggler,
	] = useTransitionHeight(expanded, setExpaned, menuRef);

	const showIconCollapsed = !(
		(!expanded && transitioning) ||
		(expanded && !transitioning)
	);

	return (
		<Nav.Item {...otherProps}>
			<Nav.Link
				active={active}
				collapsed={showIconCollapsed}
				href={href}
				onClick={(e) => {
					handleClickToggler(e);

					if (onClick) {
						onClick();
					}
				}}
				role="button"
				showIcon={!!subItems}
				spritemap={spritemap}
			>
				{label}
			</Nav.Link>

			{subItems && (
				<div
					className={classNames({
						collapse: !transitioning,
						collapsing: transitioning,
						show: expanded,
					})}
					onTransitionEnd={handleTransitionEnd}
					ref={menuRef}
				>
					<Nav stacked>
						{renderItems(subItems, spritemap, level++)}
					</Nav>
				</div>
			)}
		</Nav.Item>
	);
}

function renderItems(items: Array<IItem>, spritemap?: string, level = 0) {
	return items.map((item, i) => {
		const key = `${level}-${i}`;

		return <Item {...item} key={key} level={level} spritemap={spritemap} />;
	});
}

const ClayVerticalNav: React.FunctionComponent<IProps> & {
	Trigger: typeof Trigger;
} = ({
	activeLabel,
	items,
	large,
	spritemap,
	trigger,
	triggerLabel = 'Menu',
	...otherProps
}: IProps) => {
	const [active, setActive] = React.useState(false);

	return (
		<nav
			{...otherProps}
			className={classNames('menubar menubar-transparent', {
				['menubar-vertical-expand-lg']: large,
				['menubar-vertical-expand-md']: !large,
			})}
		>
			{trigger ? (
				<div
					className="menubar-toggler"
					onClick={() => setActive(!active)}
					role="button"
				>
					{trigger}
				</div>
			) : (
				<Trigger
					handleClick={() => setActive(!active)}
					label={activeLabel || triggerLabel}
					spritemap={spritemap}
				/>
			)}

			<div
				className={classNames('collapse menubar-collapse', {
					show: active,
				})}
			>
				<Nav nested>{renderItems(items, spritemap)}</Nav>
			</div>
		</nav>
	);
};

ClayVerticalNav.Trigger = Trigger;

export {ClayVerticalNav};
