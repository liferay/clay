/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {
	FocusScope,
	InternalDispatch,
	Keys,
	useInternalState,
} from '@clayui/shared';
import classNames from 'classnames';
import React, {useEffect, useMemo, useRef, useState} from 'react';

import Action from './Action';
import Caption from './Caption';
import Divider from './Divider';
import Group from './Group';
import Help from './Help';
import Item from './Item';
import ItemList from './ItemList';
import Menu, {Align} from './Menu';
import Search from './Search';
import Section from './Section';

export interface IProps
	extends React.HTMLAttributes<HTMLDivElement | HTMLLIElement> {
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

	closeOnClickOutside?: React.ComponentProps<
		typeof Menu
	>['closeOnClickOutside'];

	/**
	 *  Property to set the default value of `active` (uncontrolled).
	 */
	defaultActive?: boolean;

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

function ClayDropDown(props: IProps): JSX.Element & {
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

function ClayDropDown({
	active,
	alignmentByViewport,
	alignmentPosition,
	children,
	className,
	closeOnClickOutside,
	containerElement: ContainerElement = 'div',
	defaultActive = false,
	hasLeftSymbols,
	hasRightSymbols,
	menuElementAttrs,
	menuHeight,
	menuWidth,
	offsetFn,
	onActiveChange,
	renderMenuOnClick = false,
	trigger,
	...otherProps
}: IProps) {
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

	const handleKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
		if (event.key === Keys.Esc) {
			setInternalActive(!internalActive);
		}
	};

	const handleFocus = (event: FocusEvent) => {
		if (
			!menuElementRef.current?.parentElement?.contains(
				event.target as Node
			) &&
			!triggerElementRef.current?.contains(event.target as Node)
		) {
			setInternalActive(false);
		}
	};

	useEffect(() => {
		document.addEventListener('focus', handleFocus, true);

		return () => {
			document.removeEventListener('focus', handleFocus, true);
		};
	}, [handleFocus]);

	const ariaControls = useMemo(() => {
		counter++;

		return `clay-dropdown-menu-${counter}`;
	}, []);

	return (
		<FocusScope>
			<ContainerElement
				{...otherProps}
				className={classNames('dropdown', className)}
				onKeyUp={handleKeyUp}
			>
				{React.cloneElement(trigger, {
					'aria-controls': ariaControls,
					'aria-expanded': internalActive,
					'aria-haspopup': 'menu',
					className: classNames(
						'dropdown-toggle',
						trigger.props.className
					),
					onClick: () => {
						if (!initialized) {
							setInitialized(true);
						}

						setInternalActive(!internalActive);
					},
					ref: (node: HTMLButtonElement) => {
						if (node) {
							triggerElementRef.current = node;
							// Call the original ref, if any.
							const {ref} = trigger;
							if (typeof ref === 'function') {
								ref(node);
							}
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
						onSetActive={setInternalActive}
						ref={menuElementRef}
						width={menuWidth}
					>
						{children}
					</Menu>
				)}
			</ContainerElement>
		</FocusScope>
	);
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
