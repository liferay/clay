/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import {Keys, setElementFullHeight, useNavigation} from '@clayui/shared';
import classNames from 'classnames';
import React, {useMemo, useRef, useState} from 'react';
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
	 * Flag to define if the item represents the current page. Disable this
	 * attribute only if there are multiple navigations on the page.
	 */
	itemAriaCurrent?: boolean;

	/**
	 * Flag to indicate the navigation behavior in the menu.
	 *
	 * - manual - it will just move the focus and menu activation is done just
	 * by pressing space or enter.
	 * - automatic - moves the focus to the menuitem and activates the menu.
	 */
	activation?: 'manual' | 'automatic';

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

export interface INavItemProps extends Omit<IItemWithItems, 'aria-current'> {
	'aria-current'?: 'page' | null;

	/**
	 * Integer to keep track of what nested level the item is.
	 */
	level: number;

	/**
	 * Internal property
	 * @ignore
	 */
	parentItemRef?: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	spritemap?: string;
}

function findSelectedNested(
	items: Array<IItemWithItems>
): IItemWithItems | undefined {
	return items.find((item) => {
		if (item.active) {
			return true;
		}

		if (item.items) {
			return findSelectedNested(item.items);
		}

		return false;
	});
}

function Item({
	active,
	'aria-current': ariaCurrent = 'page',
	href,
	initialExpanded = false,
	items,
	label,
	level,
	onClick,
	parentItemRef,
	spritemap,
	...otherProps
}: INavItemProps) {
	const [expanded, setExpaned] = React.useState(initialExpanded);

	const itemRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
	const menusRef = useRef<HTMLDivElement>(null);

	const hasItemSelectedNested = useMemo(() => {
		if (items) {
			return !!findSelectedNested(items);
		}

		return false;
	}, [items]);

	return (
		<Nav.Item role="none" {...otherProps}>
			<Nav.Link
				active={active}
				aria-current={active ? ariaCurrent ?? undefined : undefined}
				aria-expanded={items ? expanded : undefined}
				aria-haspopup={items ? true : undefined}
				collapsed={!expanded}
				href={href}
				onClick={() => {
					setExpaned(!expanded);

					if (onClick) {
						onClick();
					}
				}}
				onKeyDown={(event) => {
					switch (event.key) {
						case Keys.Right: {
							if (items && !expanded) {
								setExpaned(true);
							} else if (items && menusRef.current) {
								const firstItemElement =
									menusRef.current.querySelector<HTMLElement>(
										'.nav-link:not([disabled])'
									);
								firstItemElement?.focus();
							}
							break;
						}
						case Keys.Left: {
							if (items && expanded) {
								setExpaned(false);
							} else if (!items && parentItemRef?.current) {
								parentItemRef.current?.focus();
							}
							break;
						}
						default:
							break;
					}
				}}
				ref={itemRef}
				role={items ? 'button' : 'menuitem'}
				showIcon={!!items}
				spritemap={spritemap}
				tabIndex={
					!active && !(hasItemSelectedNested && items && !expanded)
						? -1
						: undefined
				}
			>
				{label}
			</Nav.Link>

			{items && (
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
					<div ref={menusRef}>
						<Nav role="menu" stacked>
							{renderItems(
								items,
								ariaCurrent,
								spritemap,
								level++,
								itemRef
							)}
						</Nav>
					</div>
				</CSSTransition>
			)}
		</Nav.Item>
	);
}

function renderItems(
	items: Array<IItem>,
	ariaCurrent: 'page' | null,
	spritemap?: string,
	level = 0,
	parentItemRef?: React.RefObject<HTMLButtonElement | HTMLAnchorElement>
) {
	return items.map((item, i) => {
		const key = `${level}-${i}`;

		return (
			<Item
				{...item}
				aria-current={ariaCurrent}
				key={key}
				level={level}
				parentItemRef={parentItemRef}
				spritemap={spritemap}
			/>
		);
	});
}

function ClayVerticalNav(props: IProps): JSX.Element & {
	Trigger: typeof Trigger;
};

function ClayVerticalNav({
	activation = 'manual',
	activeLabel,
	decorated,
	itemAriaCurrent: ariaCurrent = true,
	items,
	large,
	spritemap,
	trigger: CustomTrigger = Trigger,
	triggerLabel = 'Menu',
	...otherProps
}: IProps) {
	const [active, setActive] = useState(false);
	const containerRef = useRef<HTMLDivElement | null>(null);

	const {navigationProps} = useNavigation({
		activation,
		containerRef,
		orientation: 'vertical',
	});

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
				{...navigationProps}
				className={classNames('collapse menubar-collapse', {
					show: active,
				})}
				ref={containerRef}
			>
				<Nav aria-orientation="vertical" nested role="menubar">
					{renderItems(items, ariaCurrent ? 'page' : null, spritemap)}
				</Nav>
			</div>
		</nav>
	);
}

ClayVerticalNav.Trigger = Trigger;

export {ClayVerticalNav};
