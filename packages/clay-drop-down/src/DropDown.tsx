/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {__NOT_PUBLIC_COLLECTION} from '@clayui/core';
import {
	FocusScope,
	InternalDispatch,
	Keys,
	useInternalState,
	useNavigation,
} from '@clayui/shared';
import classNames from 'classnames';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import Action from './Action';
import Caption from './Caption';
import Divider from './Divider';
import {DropDownContext} from './DropDownContext';
import Group from './Group';
import Help from './Help';
import Item from './Item';
import ItemList from './ItemList';
import Menu, {Align} from './Menu';
import Search from './Search';
import Section from './Section';

import type {ICollectionProps} from '@clayui/core';

const {Collection} = __NOT_PUBLIC_COLLECTION;

export interface IProps<T>
	extends Omit<
			React.HTMLAttributes<HTMLDivElement | HTMLLIElement>,
			'children'
		>,
		Omit<ICollectionProps<T, unknown>, 'virtualize'> {
	/**
	 * Flag to indicate if the DropDown menu is active or not (controlled).
	 *
	 * This API is generally used in conjunction with `closeOnClickOutside=true`
	 * since often we are controlling the active state by clicking another element
	 * within the document.
	 */
	active?: boolean;

	/**
	 * Flag to align the DropDown menu within the viewport.
	 */
	alignmentByViewport?: React.ComponentProps<
		typeof Menu
	>['alignmentByViewport'];

	/**
	 * Default position of menu element. Values come from `./Menu`.
	 */
	alignmentPosition?: React.ComponentProps<typeof Menu>['alignmentPosition'];

	/**
	 * HTML element tag that the container should render.
	 */
	containerElement?: React.JSXElementConstructor<any> | 'div' | 'li';

	/**
	 * Flag that indicates whether to close DropDown when clicking on the item.
	 */
	closeOnClick?: boolean;

	closeOnClickOutside?: React.ComponentProps<
		typeof Menu
	>['closeOnClickOutside'];

	/**
	 *  Property to set the default value of `active` (uncontrolled).
	 */
	defaultActive?: boolean;

	/**
	 * Defines the name of the property key that is used in the items filter
	 * test (Dynamic content).
	 */
	filterKey?: string;

	/**
	 * Flag to indicate if menu contains icon symbols on the right side.
	 */
	hasRightSymbols?: boolean;

	/**
	 * Flag to indicate if menu contains icon symbols on the left side.
	 */
	hasLeftSymbols?: boolean;

	/**
	 * Prop to pass DOM element attributes to <DropDown.Menu />.
	 */
	menuElementAttrs?: React.HTMLAttributes<HTMLDivElement> &
		Pick<React.ComponentProps<typeof Menu>, 'containerProps'>;

	menuHeight?: React.ComponentProps<typeof Menu>['height'];

	menuWidth?: React.ComponentProps<typeof Menu>['width'];

	/**
	 * Callback for when the active state changes (controlled).
	 *
	 * This API is generally used in conjunction with `closeOnClickOutside=true`
	 * since often we are controlling the active state by clicking another element
	 * within the document.
	 */
	onActiveChange?: InternalDispatch<boolean>;

	/**
	 * Function for setting the offset of the menu from the trigger.
	 */
	offsetFn?: React.ComponentProps<typeof Menu>['offsetFn'];

	/**
	 * Flag indicating if the menu should be rendered lazily
	 */
	renderMenuOnClick?: boolean;

	/**
	 * Element that is used as the trigger which will activate the dropdown on click.
	 */
	trigger: React.ReactElement & {
		ref?: (node: HTMLButtonElement | null) => void;
	};
}

let counter = 0;

function ClayDropDown<T>(props: IProps<T>): JSX.Element & {
	Action: typeof Action;
	Caption: typeof Caption;
	Divider: typeof Divider;
	Group: typeof Group;
	Help: typeof Help;
	Item: typeof Item;
	ItemList: typeof ItemList;
	Menu: typeof Menu;
	Search: typeof Search;
	Section: typeof Section;
};

function ClayDropDown<T>({
	active,
	alignmentByViewport,
	alignmentPosition,
	children,
	className,
	closeOnClick = false,
	closeOnClickOutside,
	containerElement: ContainerElement = 'div',
	defaultActive = false,
	filterKey,
	hasLeftSymbols,
	hasRightSymbols,
	items,
	menuElementAttrs,
	menuHeight,
	menuWidth,
	offsetFn,
	onActiveChange,
	renderMenuOnClick = false,
	role = 'menu',
	trigger,
	...otherProps
}: IProps<T>) {
	const triggerElementRef = useRef<HTMLButtonElement | null>(null);
	const menuElementRef = useRef<HTMLDivElement>(null);

	const [initialized, setInitialized] = useState(!renderMenuOnClick);

	const [internalActive, setInternalActive] = useInternalState({
		defaultName: 'defaultActive',
		defaultValue: defaultActive,
		handleName: 'onActiveChange',
		name: 'active',
		onChange: onActiveChange,
		value: active,
	});

	const [search, setSearch] = useState('');

	const ariaControls = useMemo(() => {
		counter++;

		return `clay-dropdown-menu-${counter}`;
	}, []);

	const openMenu = useCallback(
		(value: boolean) => {
			if (!initialized) {
				setInitialized(true);
			}

			setInternalActive(value);
		},
		[initialized]
	);

	const {navigationProps} = useNavigation({
		activation: 'manual',
		containerRef: menuElementRef,
		loop: true,
		orientation: 'vertical',
		typeahead: true,
		visible: internalActive,
	});

	return (
		<FocusScope arrowKeysUpDown={false}>
			{(focusManager) => (
				<ContainerElement
					{...otherProps}
					className={classNames('dropdown', className)}
				>
					{React.cloneElement(trigger, {
						'aria-controls': ariaControls,
						'aria-expanded': internalActive,
						'aria-haspopup': 'true',
						className: classNames(
							'dropdown-toggle',
							trigger.props.className
						),
						onClick: (
							event: React.MouseEvent<HTMLButtonElement>
						) => {
							if (trigger.props.onClick) {
								trigger.props.onClick(event);
							}

							openMenu(!internalActive);
						},
						onKeyDown: (
							event: React.KeyboardEvent<HTMLButtonElement>
						) => {
							if (trigger.props.onKeyDown) {
								trigger.props.onKeyDown(event);
							}

							if (event.key === Keys.Spacebar) {
								openMenu(!internalActive);
							}

							if (event.key === Keys.Down) {
								event.preventDefault();
								event.stopPropagation();

								openMenu(true);
							}

							if (internalActive && event.key === Keys.Down) {
								event.preventDefault();
								event.stopPropagation();

								focusManager.focusFirst();
							}

							if (
								[Keys.Spacebar, Keys.Down].includes(event.key)
							) {
								event.preventDefault();
							}
						},
						ref: (node: HTMLButtonElement) => {
							triggerElementRef.current = node;
							// Call the original ref, if any.
							const {ref} = trigger;
							if (typeof ref === 'function') {
								ref(node);
							}
						},
					})}

					{initialized && (
						<Menu
							{...menuElementAttrs}
							active={internalActive}
							alignElementRef={triggerElementRef}
							alignmentByViewport={alignmentByViewport}
							alignmentPosition={alignmentPosition}
							closeOnClickOutside={closeOnClickOutside}
							hasLeftSymbols={hasLeftSymbols}
							hasRightSymbols={hasRightSymbols}
							height={menuHeight}
							id={ariaControls}
							offsetFn={offsetFn}
							onActiveChange={setInternalActive}
							onKeyDown={navigationProps.onKeyDown}
							ref={menuElementRef}
							triggerRef={triggerElementRef}
							width={menuWidth}
						>
							<FocusMenu
								condition={internalActive}
								onRender={() => {
									// After a few milliseconds querying the elements in the DOM
									// inside the menu. This especially when the menu is not
									// rendered yet only after the menu is opened, React needs
									// to commit the changes to the DOM so that the elements are
									// visible and we can move the focus.
									setTimeout(() => {
										focusManager.focusFirst();
									}, 10);
								}}
							>
								<DropDownContext.Provider
									value={{
										close: () => {
											setInternalActive(false);
											triggerElementRef.current?.focus();
										},
										closeOnClick,
										filterKey,
										onSearch: setSearch,
										search,
										tabFocus: false,
									}}
								>
									{children instanceof Function ? (
										<ul
											className="list-unstyled"
											role={role}
										>
											<Collection<T>
												items={items}
												passthroughKey={false}
											>
												{children}
											</Collection>
										</ul>
									) : (
										children
									)}
								</DropDownContext.Provider>
							</FocusMenu>
						</Menu>
					)}
				</ContainerElement>
			)}
		</FocusScope>
	);
}

type FocusMenuProps<T> = {
	children: T;
	condition: boolean;
	onRender: () => void;
};

export function FocusMenu<T>({
	children,
	condition,
	onRender,
}: FocusMenuProps<T>) {
	useEffect(() => {
		if (condition) {
			onRender();
		}
	}, [condition]);

	return children;
}

ClayDropDown.Action = Action;
ClayDropDown.Caption = Caption;
ClayDropDown.Divider = Divider;
ClayDropDown.Group = Group;
ClayDropDown.Help = Help;
ClayDropDown.Menu = Menu;
ClayDropDown.Item = Item;
ClayDropDown.ItemList = ItemList;
ClayDropDown.Search = Search;
ClayDropDown.Section = Section;

export {Align};

export default ClayDropDown;
