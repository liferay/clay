/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import Icon from '@clayui/icon';
import {
	InternalDispatch,
	useControlledState,
	useNavigation,
} from '@clayui/shared';
import classNames from 'classnames';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import warning from 'warning';

import {Collection, useCollection} from '../collection';
import {Nav} from '../nav';
import {Item} from './Item';
import {Trigger} from './Trigger';
import {VerticalNavContextProvider} from './context';

import type {ChildrenFunction} from '../collection';

type Props<T extends Record<string, any> | string> = {

	/**
	 * Flag to indicate the navigation behavior in the menu.
	 *
	 * - manual - it will just move the focus and menu activation is done just
	 * by pressing space or enter.
	 * - automatic - moves the focus to the menuitem and activates the menu.
	 */
	'activation'?: 'manual' | 'automatic';

	/**
	 * Flag to define which item has the active state/current page.
	 */
	'active'?: React.Key;

	/**
	 * Flag to define aria-label.
	 */
	'aria-label'?: string;

	/**
	 * The component contents.
	 */
	'children'?: React.ReactNode | ChildrenFunction<T, null>;

	/**
	 * Flag to determine whether the collapse wrapper should be rendered or not
	 */
	'collapse'?: boolean;

	/**
	 * Flag to activate the Decorator variation.
	 */
	'decorated'?: boolean;

	/**
	 * Property to set the initial value of `expandedKeys` (uncontrolled).
	 */
	'defaultExpandedKeys'?: Set<React.Key>;

	/**
	 * Determines the Vertical Nav variant to use.
	 * @default transparent
	 */
	'displayType'?: 'transparent' | 'primary';

	/**
	 * The currently expanded keys in the collection (controlled).
	 */
	'expandedKeys'?: Set<React.Key>;

	/**
	 * Flag to define if the item represents the current page. Disable this
	 * attribute only if there are multiple navigations on the page.
	 */
	'itemAriaCurrent'?: boolean;

	/**
	 * Property to inform the dynamic data of the tree.
	 */
	'items'?: Array<T>;

	/**
	 * Flag to indicate if `menubar-vertical-expand-lg` class is applied.
	 * @deprecated Use "size" to determine the desired breakpoint
	 */
	'large'?: boolean;

	/**
	 * A callback that is called when items are expanded or collapsed
	 * (controlled).
	 */
	'onExpandedChange'?: InternalDispatch<Set<React.Key>>;

	/**
	 * Defines the size class to use with the menu
	 */
	'size'?: 'lg' | 'md';

	/**
	 * Path to the spritemap that Icon should use when referencing symbols.
	 */
	'spritemap'?: string;

	/**
	 * Custom component that will be displayed on mobile resolutions that
	 * toggles the visibility of the navigation.
	 */
	'trigger'?: typeof Trigger;

	/**
	 * Label of the button that appears on smaller resolutions to open the
	 * vertical navigation.
	 */
	'triggerLabel'?: string;
};

function depthActive<T extends Record<string, any>>(
	items: Array<T>
): T | undefined {
	return items.find((item) => {
		if (item['active']) {
			return true;
		}

		if ('items' in item) {
			return depthActive(item['items'] as Array<T>);
		}

		return false;
	});
}

function VerticalNav<T extends Record<string, any> | string>(
	props: Props<T>
): JSX.Element & {
	Item: typeof Item;
	Trigger: typeof Trigger;
};

function VerticalNav<T extends Record<string, any> | string>({
	active,
	activation = 'manual',
	'aria-label': ariaLabel,
	children,
	collapse,
	decorated,
	displayType = 'transparent',
	defaultExpandedKeys = new Set(),
	'expandedKeys': externalExpandedKeys,
	'itemAriaCurrent': ariaCurrent = true,
	items,
	large,
	onExpandedChange,
	size,
	spritemap,
	'trigger': CustomTrigger = Trigger,
	triggerLabel = 'Menu',
}: Props<T>) {
	const [isOpen, setIsOpen] = useState(false);

	const containerRef = useRef<HTMLUListElement | null>(null);

	const [expandedKeys, setExpandedKeys] = useControlledState({
		defaultName: 'defaultExpandedKeys',
		defaultValue: defaultExpandedKeys,
		handleName: 'onExpandedChange',
		name: 'expandedKeys',
		onChange: onExpandedChange,
		value: externalExpandedKeys,
	});

	const toggle = useCallback(
		(key: React.Key) => {
			const expanded = new Set(expandedKeys);

			if (expanded.has(key)) {
				expanded.delete(key);
			}
			else {
				expanded.add(key);
			}

			setExpandedKeys(expanded);
		},
		[expandedKeys]
	);

	const close = useCallback(
		(key: React.Key) => {
			const expanded = new Set(expandedKeys);

			if (expanded.has(key)) {
				expanded.delete(key);

				setExpandedKeys(expanded);

				return true;
			}

			return false;
		},
		[expandedKeys]
	);

	const open = useCallback(
		(key: React.Key) => {
			const expanded = new Set(expandedKeys);

			if (!expanded.has(key)) {
				expanded.add(key);

				setExpandedKeys(expanded);

				return true;
			}

			return false;
		},
		[expandedKeys]
	);

	const childrenRootRef = useRef(children);

	const {navigationFocusedElement, navigationProps} = useNavigation({
		activation,
		containerRef,
		orientation: 'vertical',
	});

	const collection = useCollection<T>({
		children,

		// Avoid collection list is obsolete because we have collection nesting
		// which is not based on group primitive like Picker with groups
		// or DropDown.

		forceDeepRootUpdate: true,
		items,
		suppressTextValueWarning: false,
	});

	// Checks if the `active` property exists in the items tree to maintain
	// compatibility with the previous version.

	const hasDepthActive = useMemo(() => {
		if (typeof active !== 'undefined' || !items) {
			return undefined;
		}

		return depthActive(items as Array<Record<string, any>>);
	}, [active, items]);

	const content = (
		<Nav
			{...navigationProps}
			aria-orientation="vertical"
			nested
			ref={containerRef}
			role="menubar"
		>
			<VerticalNavContextProvider
				activeKey={
					active && collection.hasItem(active)
						? active
						: hasDepthActive
							? null
							: undefined
				}
				ariaCurrent={ariaCurrent ? 'page' : null}
				childrenRoot={
					childrenRootRef as React.MutableRefObject<ChildrenFunction<
						Object,
						null
					> | null>
				}
				close={close}
				expandedKeys={expandedKeys}
				firstKey={collection.getFirstItem().key}
				focusedElement={navigationFocusedElement}
				open={open}
				spritemap={spritemap}
				toggle={toggle}
			>
				<Collection collection={collection} />
			</VerticalNavContextProvider>
		</Nav>
	);

	useEffect(() => {
		warning(
			ariaLabel,
			"[VerticalNav]: Missing required 'aria-label' attribute. Please provide a value to ensure accessibility."
		);
	}, [ariaLabel]);

	return (
		<nav
			aria-label={ariaLabel}
			className={classNames('menubar', {
				['menubar-decorated']: decorated,
				['menubar-primary']: displayType === 'primary',
				['menubar-transparent']: displayType === 'transparent',
				['menubar-vertical-expand-lg']: !size && large,
				['menubar-vertical-expand-md']:
					!size && !large && displayType !== 'primary',
				[`menubar-vertical-expand-${size}`]: size,
			})}
		>
			{collapse && (
				<>
					<CustomTrigger onClick={() => setIsOpen(!isOpen)}>
						<span className="inline-item inline-item-before">
							{triggerLabel}
						</span>

						<Icon
							focusable="false"
							role="presentation"
							spritemap={spritemap}
							symbol="caret-bottom"
						/>
					</CustomTrigger>

					<div
						className={classNames('collapse menubar-collapse', {
							show: isOpen,
						})}
					>
						{content}
					</div>
				</>
			)}

			{!collapse && content}
		</nav>
	);
}

VerticalNav.Item = Item;
VerticalNav.Trigger = Trigger;

export {VerticalNav};
