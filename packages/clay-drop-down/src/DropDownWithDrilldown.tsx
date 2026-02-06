/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayButtonWithIcon} from '@clayui/button';
import {
	InternalDispatch,
	useControlledState,
	useInteractionFocus,
} from '@clayui/shared';
import classNames from 'classnames';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {CSSTransition} from 'react-transition-group';

import Caption from './Caption';
import DropDown from './DropDown';
import Help from './Help';
import {ClayDropDownContext, DropDownItems, findNested} from './Items';
import Menu from './Menu';
import Search from './Search';

import type {AlignPoints} from '@clayui/shared';

import type {Item} from './Items';
import type {IProps as SearchProps} from './Search';

type Messages = {
	back: string;
	goTo: string;
};

type TriggerElement = React.ReactElement & {
	ref?: (node: HTMLButtonElement | null) => void;
};

export type Props = {

	/**
	 * Flag to indicate if the menu should be initially open (controlled).
	 */
	active?: boolean;

	/**
	 * Flag to align the DropDown menu within the viewport.
	 */
	alignmentByViewport?: boolean;

	/**
	 * Default position of menu element. Values come from above.
	 *
	 * Align.TopCenter = 0;
	 * Align.TopRight = 1;
	 * Align.RightCenter = 2;
	 * Align.BottomRight = 3;
	 * Align.BottomCenter = 4;
	 * Align.BottomLeft = 5;
	 * Align.LeftCenter = 6;
	 * Align.TopLeft = 7;
	 *
	 * Defaults to BottomLeft
	 *
	 * You can also pass an array of strings, corresponding to the points
	 * of the targetNode and sourceNode, `[sourceNode, targetNode]`.
	 *
	 * Points can be 't'(top), 'b'(bottom), 'c'(center), 'l'(left), 'r'(right).
	 * For example: `['tl', 'bl']` corresponds to the bottom left alignment.
	 */
	alignmentPosition?: number | AlignPoints;

	/**
	 * Informational text that appears at the end or above the `footerContent` prop.
	 */
	caption?: string;

	className?: string;

	/**
	 * HTML element tag that the container should render.
	 */
	containerElement?: React.JSXElementConstructor<any> | 'div' | 'li';

	/**
	 * Property to set the initial value of `active` (uncontrolled).
	 */
	defaultActive?: boolean;

	/**
	 * The unique identifier of the menu that should be active on mount.
	 */
	defaultActiveMenu?: string;

	/**
	 * Add an action button or any other element you want to be fixed position to the
	 * footer from the DropDown.
	 */
	footerContent?: React.ReactElement;

	/**
	 * Add informational text at the top of DropDown.
	 */
	helpText?: string;

	/**
	 * The unique identifier of the menu that should be active on mount.
	 * @deprecated since v3.51.0 - use `defaultActiveMenu` instead.
	 */
	initialActiveMenu?: string;

	/**
	 * Prop to pass DOM element attributes to DropDown.Menu.
	 */
	menuElementAttrs?: React.HTMLAttributes<HTMLDivElement> &
		Pick<React.ComponentProps<typeof Menu>, 'containerProps'>;

	/**
	 * Adds utility class name `dropdown-menu-height-${height}`
	 */
	menuHeight?: 'auto';

	/**
	 * The modifier class `dropdown-menu-width-${width}` makes the menu expand
	 * the full width of the page.
	 *
	 * - sm makes the menu 500px wide.
	 * - shrink makes the menu auto-adjust to text and max 240px wide.
	 * - full makes the menu 100% wide.
	 */
	menuWidth?: 'sm' | 'shrink' | 'full';

	/**
	 * Map of menus and items to be used in the drilldown. Each key should be a unique identifier for the menu.
	 */
	menus: {
		[id: string]: Array<Item>;
	};

	/**
	 * Messages for drilldown.
	 */
	messages?: Messages;

	/**
	 * Function for setting the offset of the menu from the trigger.
	 */
	offsetFn?: (points: AlignPoints) => [number, number];

	/**
	 * Callback the will be invoked when the active prop is changed (controlled).
	 */
	onActiveChange?: InternalDispatch<boolean>;

	/**
	 * Callback will always be called when the user is interacting with search.
	 */
	onSearchValueChange?: (newValue: string) => void;

	/**
	 * Flag indicating if the menu should be rendered lazily
	 */
	renderMenuOnClick?: boolean;

	/**
	 * Pass the props to the Search component.
	 */
	searchProps?: SearchProps;

	/**
	 * The value that will be passed to the search input element.
	 */
	searchValue?: string;

	/**
	 * Flag to show search at the top of the DropDown.
	 */
	searchable?: boolean;

	/**
	 * Path to spritemap
	 */
	spritemap?: string;

	/**
	 * Element that is used as the trigger which will activate the dropdown on click.
	 */
	trigger: TriggerElement;

	/**
	 * Flag indicating if the caret icon should be displayed on the right side.
	 */
	triggerIcon?: string | null;
};

type History = {
	id: string;
	title: string;
};

export function ClayDropDownWithDrilldown({
	active: externalActive,
	alignmentByViewport,
	alignmentPosition,
	caption,
	className,
	containerElement,
	defaultActive = false,
	footerContent,
	helpText,
	defaultActiveMenu,
	initialActiveMenu,
	menuElementAttrs,
	menuHeight,
	menuWidth,
	menus,
	messages = {
		back: 'Back',
		goTo: 'Go to',
	},
	offsetFn,
	onActiveChange,
	onSearchValueChange = () => {},
	renderMenuOnClick,
	searchable,
	searchProps,
	searchValue = '',
	spritemap,
	trigger,
	triggerIcon = null,
}: Props) {
	const [activeMenu, setActiveMenu] = useState(
		defaultActiveMenu ?? initialActiveMenu
	);
	const [direction, setDirection] = useState<'prev' | 'next'>();
	const [history, setHistory] = useState<Array<History>>([]);
	const triggerElementRef = useRef<HTMLButtonElement | null>(null);
	const {isFocusVisible} = useInteractionFocus();
	const [active, setActive] = useControlledState({
		defaultName: 'defaultActive',
		defaultValue: defaultActive,
		handleName: 'onActiveChange',
		name: 'active',
		onChange: onActiveChange,
		value: externalActive,
	});
	const focusHistoryRef = useRef<Array<HTMLElement>>([]);
	const innerRef = useRef<HTMLDivElement>(null);
	const menuIds = Object.keys(menus);
	const Wrap = footerContent ? 'form' : React.Fragment;
	useEffect(() => {
		if (!isFocusVisible()) {
			return;
		}
		if (innerRef.current) {
			if (direction === 'prev') {
				const [previous] = focusHistoryRef.current.slice(-1);
				focusHistoryRef.current = focusHistoryRef.current.slice(
					0,
					focusHistoryRef.current.length - 1
				);
				previous?.focus();
			}
			else {
				const itemEl = innerRef.current.querySelector<HTMLElement>(
					'.drilldown-current a.dropdown-item, .drilldown-current button.dropdown-item'
				);
				focusHistoryRef.current = [
					...focusHistoryRef.current,
					document.activeElement as HTMLElement,
				];
				itemEl?.focus();
			}
		}
	}, [activeMenu, direction, innerRef, focusHistoryRef, menus]);
	const onBack = useCallback(() => {
		const [parent] = history.slice(-1);
		setHistory(history.slice(0, history.length - 1));
		setDirection('prev');
		setActiveMenu(parent!.id);
	}, [history]);
	const onForward = useCallback(
		(label: string, id: string) => {
			setHistory((history) => [
				...history,
				{id: activeMenu, title: label} as History,
			]);
			setDirection('next');
			setActiveMenu(id);
		},
		[activeMenu]
	);
	const onClose = useCallback(() => {
		setActive(false);
		triggerElementRef.current?.focus();
	}, []);
	const hasLeftSymbols = useMemo(
		() =>
			menus[activeMenu!]
				? findNested(menus[activeMenu!]!, 'symbolLeft')
				: false,
		[activeMenu, menus]
	);

	return (
		<DropDown
			active={active}
			alignmentByViewport={alignmentByViewport}
			alignmentPosition={alignmentPosition}
			className={className}
			containerElement={containerElement}
			hasLeftSymbols={hasLeftSymbols}
			hasRightSymbols
			menuElementAttrs={{
				...menuElementAttrs,
				className: classNames(menuElementAttrs?.className, 'drilldown'),
			}}
			menuHeight={menuHeight}
			menuWidth={menuWidth}
			offsetFn={offsetFn}
			onActiveChange={(value) => {
				if (!active) {
					setActiveMenu(defaultActiveMenu);
					focusHistoryRef.current = [];
					setHistory([]);
					setDirection('prev');
				}
				setActive(value);
			}}
			renderMenuOnClick={renderMenuOnClick}
			trigger={React.cloneElement(trigger, {
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
			triggerIcon={triggerIcon}
		>
			<ClayDropDownContext.Provider
				value={{
					close: onClose,
					messages,
					onForward,
				}}
			>
				<div className="drilldown-inner" ref={innerRef}>
					{menuIds.map((menuKey) => {
						const items = menus[menuKey]!.map(
							({label, title, ...item}) => ({
								...item,
								label: label || title,
							})
						);
						const header =
							activeMenu === menuKey && !!history.length
								? history.slice(-1)[0]!.title
								: undefined;
						const initialClasses = classNames('transitioning', {
							'drilldown-prev-initial': direction === 'prev',
						});
						const active = activeMenu === menuKey;

						return (
							<CSSTransition
								aria-hidden={!active}
								className={classNames('drilldown-item', {
									'drilldown-current': active,
								})}
								classNames={{
									enter: initialClasses,
									enterActive: `drilldown-transition drilldown-${direction}-active`,
									exit: initialClasses,
									exitActive: `drilldown-transition drilldown-${direction}-active`,
								}}
								in={active}
								key={menuKey}
								timeout={250}
							>
								<div className="drilldown-item-inner">
									{header && (
										<>
											<div
												className="dropdown-header"
												data-testid={`back-button-${header}`}
												onClick={onBack}
											>
												<ClayButtonWithIcon
													aria-label={messages.back}
													className="component-action dropdown-item-indicator-start"
													onClick={onBack}
													spritemap={spritemap}
													symbol="angle-left"
													tabIndex={-1}
													title={messages.back}
												/>

												<span className="dropdown-item-indicator-text-start">
													{header}
												</span>
											</div>

											<div className="dropdown-divider" />
										</>
									)}

									{defaultActiveMenu === menuKey ? (
										<>
											{helpText && (
												<Help>{helpText}</Help>
											)}

											{searchable && (
												<Search
													{...searchProps}
													onChange={
														onSearchValueChange
													}
													spritemap={spritemap}
													value={searchValue}
												/>
											)}

											<Wrap>
												{footerContent ? (
													<div className="inline-scroller">
														<DropDownItems
															items={items}
															spritemap={
																spritemap
															}
														/>
													</div>
												) : (
													<DropDownItems
														items={items}
														spritemap={spritemap}
													/>
												)}

												{caption && (
													<Caption>{caption}</Caption>
												)}

												{footerContent && (
													<div
														className="dropdown-section"
														role="presentation"
													>
														{footerContent}
													</div>
												)}
											</Wrap>
										</>
									) : (
										<DropDownItems
											items={items}
											spritemap={spritemap}
										/>
									)}
								</div>
							</CSSTransition>
						);
					})}
				</div>
			</ClayDropDownContext.Provider>
		</DropDown>
	);
}

ClayDropDownWithDrilldown.displayName = 'ClayDropDownWithDrilldown';
