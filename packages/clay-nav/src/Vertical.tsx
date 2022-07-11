/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import {setElementFullHeight} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';
import {CSSTransition} from 'react-transition-group';
import warning from 'warning';

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
	label?: string | React.ReactNode;
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

export interface IProps {
	/**
	 * Label of item that is currently active.
	 * @deprecated since version 3.3.x
	 */
	activeLabel?: string;

	/**
	 * Flag to activate the Decorator variation.
	 */
	decorated?: boolean;

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
	trigger?: typeof Trigger;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;
}

export interface INavItemProps extends IItemWithItems {
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
	const [expanded, setExpaned] = React.useState(!initialExpanded);

	return (
		<Nav.Item {...otherProps}>
			<Nav.Link
				active={active}
				collapsed={!expanded}
				href={href}
				onClick={() => {
					setExpaned(!expanded);

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
				<CSSTransition
					className={expanded ? undefined : 'collapse'}
					classNames={{
						enter: 'collapsing',
						enterActive: `show`,
						enterDone: 'show',
						exit: `show`,
						exitActive: 'collapsing',
					}}
					in={expanded}
					onEnter={(element: HTMLElement) =>
						element.setAttribute('style', `height: 0px`)
					}
					onEntering={(element: HTMLElement) =>
						setElementFullHeight(element)
					}
					onExit={(element) => setElementFullHeight(element)}
					onExiting={(element) =>
						element.setAttribute('style', `height: 0px`)
					}
					timeout={250}
				>
					<div>
						<Nav stacked>
							{renderItems(subItems, spritemap, level++)}
						</Nav>
					</div>
				</CSSTransition>
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

function ClayVerticalNav(props: IProps): JSX.Element & {
	Trigger: typeof Trigger;
};

function ClayVerticalNav({
	activeLabel,
	decorated,
	items,
	large,
	spritemap,
	trigger: CustomTrigger = Trigger,
	triggerLabel = 'Menu',
	...otherProps
}: IProps) {
	const [active, setActive] = React.useState(false);

	warning(
		!activeLabel,
		'ClayVerticalNav: The `activeLabel` API has been deprecated in favor of `triggerLabel` and will be removed in the next major release.'
	);

	return (
		<nav
			{...otherProps}
			className={classNames('menubar menubar-transparent', {
				['menubar-decorated']: decorated,
				['menubar-vertical-expand-lg']: large,
				['menubar-vertical-expand-md']: !large,
			})}
		>
			<CustomTrigger onClick={() => setActive(!active)}>
				<span className="inline-item inline-item-before">
					{activeLabel || triggerLabel}
				</span>

				<ClayIcon
					focusable="false"
					role="presentation"
					spritemap={spritemap}
					symbol="caret-bottom"
				/>
			</CustomTrigger>

			<div
				className={classNames('collapse menubar-collapse', {
					show: active,
				})}
			>
				<Nav nested>{renderItems(items, spritemap)}</Nav>
			</div>
		</nav>
	);
}

ClayVerticalNav.Trigger = Trigger;

export {ClayVerticalNav};
