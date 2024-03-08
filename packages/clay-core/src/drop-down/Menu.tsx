/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {
	FOCUSABLE_ELEMENTS,
	InternalDispatch,
	Keys,
	Overlay,
	getFocusableList,
	useControlledState,
	useId,
	useNavigation,
	useOverlayPosition,
} from '@clayui/shared';
import classNames from 'classnames';
import React, {
	useCallback,
	useEffect,
	useImperativeHandle,
	useRef,
} from 'react';

import {Collection, useCollection, useVirtual} from '../collection';

import type {ICollectionProps} from '../collection';

const List = React.forwardRef<
	HTMLUListElement,
	React.HTMLAttributes<HTMLUListElement>
>(function List({children, ...otherProps}, ref) {
	return (
		<ul {...otherProps} className="list-unstyled" ref={ref}>
			{children}
		</ul>
	);
});

type Props<T> = {
	alwaysClose?: boolean;

	/**
	 * The `aria-label` attribute defines a string value that labels an interactive
	 * element.
	 */
	'aria-label'?: string;

	/**
	 * The `aria-labelledby` attribute identifies the element (or elements) that
	 * labels the element it is applied to.
	 */
	'aria-labelledby'?: string;

	/**
	 * Flag to indicate if menu is showing or not (controlled).
	 */
	active?: boolean;

	/**
	 * Custom container component.
	 */
	as?:
		| 'div'
		| React.ForwardRefExoticComponent<any>
		| ((props: React.HTMLAttributes<HTMLDivElement>) => JSX.Element);

	/**
	 * CSS clases to menu element.
	 */
	className?: string;

	/**
	 * The initial value of the active state (uncontrolled).
	 */
	defaultActive?: boolean;

	/**
	 * Flag to indicate that the component is disabled.
	 */
	disabled?: boolean;

	/**
	 * Callback for when the active state changes (controlled).
	 */
	onActiveChange?: InternalDispatch<boolean>;

	/**
	 * Defines the ARIA role of the menu.
	 */
	role?: 'menu' | 'listbox';

	/**
	 * Trigger menu.
	 */
	trigger: React.ReactElement & {
		ref?: (node: HTMLButtonElement | null) => void;
	};

	style?: React.CSSProperties;

	UNSAFE_focusableElements?: Array<string>;
} & Omit<Partial<ICollectionProps<T, unknown>>, 'virtualize'>;

function MenuInner<T extends Record<string, unknown> | string | number>(
	{
		UNSAFE_focusableElements,
		active: externalActive,
		alwaysClose = true,
		as: As = 'div',
		children,
		className,
		defaultActive,
		disabled,
		items,
		onActiveChange,
		role = 'menu',
		style,
		trigger,
		...otherProps
	}: Props<T>,
	ref: React.Ref<HTMLDivElement | null>
) {
	const portalRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement | null>(null);

	useImperativeHandle(ref, () => menuRef.current, []);

	const [active, setActive] = useControlledState({
		defaultName: 'defaultActive',
		defaultValue: defaultActive,
		handleName: 'onActiveChange',
		name: 'active',
		onChange: onActiveChange,
		value: externalActive,
	});

	const virtualizer = useVirtual<T>({
		estimateSize: 32,
		items: items ?? [],
		parentRef: menuRef,
	});

	const collection = useCollection<T, unknown>({
		children,
		itemContainer: useCallback(
			({
				children,
				keyValue,
			}: {
				children: React.ReactElement;
				keyValue: React.Key;
			}) => {
				return React.cloneElement(children, {
					keyValue,
					onClick: (
						event: React.MouseEvent<
							| HTMLSpanElement
							| HTMLButtonElement
							| HTMLAnchorElement
						>
					) => {
						if (children.props.onClick) {
							children.props.onClick(event);
						}

						if (event.defaultPrevented) {
							return;
						}

						if (alwaysClose) {
							setActive(false);
						}
					},
					role: role === 'menu' ? 'menuitem' : 'option',
				}) as React.ReactElement;
			},
			[]
		),
		items,
		suppressTextValueWarning: false,
		virtualizer: items && items.length > 70 ? virtualizer : undefined,
	});

	useOverlayPosition(
		{
			alignmentByViewport: true,
			alignmentPosition: 5,
			autoBestAlign: true,
			isOpen: active,
			ref: menuRef,
			triggerRef,
		},
		[active, children]
	);

	const {navigationProps} = useNavigation({
		activation: 'manual',
		collection: items && items.length > 70 ? collection : undefined,
		containerRef: menuRef,
		focusableElements: UNSAFE_focusableElements,
		loop: true,
		orientation: 'vertical',
		typeahead: true,
		visible: active,
	});

	const onClose = useCallback(() => setActive(false), []);

	const ariaControlsId = useId();

	return (
		<div className="dropdown" ref={containerRef}>
			{React.cloneElement(trigger, {
				'aria-controls': active ? ariaControlsId : undefined,
				'aria-expanded': active,
				'aria-haspopup': 'true',
				className: classNames(
					'dropdown-toggle',
					trigger.props.className
				),
				disabled,
				onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
					if (trigger.props.onClick) {
						trigger.props.onClick(event);
					}

					setActive(!active);
				},
				onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => {
					if (trigger.props.onKeyDown) {
						trigger.props.onKeyDown(event);
					}

					switch (event.key) {
						case Keys.Spacebar:
							event.preventDefault();
							setActive(!active);
							break;
						case Keys.Up:
						case Keys.Down: {
							event.preventDefault();
							event.stopPropagation();

							if (!active) {
								setActive(true);
							}

							navigationProps.onKeyDown(event);
							break;
						}
						default:
							break;
					}
				},
				ref: (node: HTMLButtonElement) => {
					triggerRef.current = node;
					// Call the original ref, if any.
					const {ref} = trigger;
					if (typeof ref === 'function') {
						ref(node);
					}
				},
			})}

			{active && (
				<Overlay
					isCloseOnInteractOutside
					isKeyboardDismiss
					isOpen
					menuRef={menuRef}
					onClose={onClose}
					portalRef={portalRef}
					suppress={[menuRef, triggerRef]}
					triggerRef={triggerRef}
				>
					<div ref={portalRef} role="presentation">
						<As
							className={classNames(
								'dropdown-menu show',
								className
							)}
							ref={menuRef}
							role="presentation"
							style={style}
						>
							<FocusMenu
								onRender={() => {
									// After a few milliseconds querying the elements in the DOM
									// inside the menu. This especially when the menu is not
									// rendered yet only after the menu is opened, React needs
									// to commit the changes to the DOM so that the elements are
									// visible and we can move the focus.
									setTimeout(() => {
										const list = getFocusableList(
											menuRef,
											UNSAFE_focusableElements
										);

										if (list.length) {
											list[0]!.focus();
										}
									}, 10);
								}}
							>
								<Collection<T>
									{...otherProps}
									as={List}
									collection={collection}
									id={ariaControlsId}
									onKeyDown={(event) => {
										switch (event.key) {
											case Keys.Tab: {
												event.preventDefault();

												setActive(false);

												const list =
													Array.from<HTMLElement>(
														document.querySelectorAll(
															FOCUSABLE_ELEMENTS.join(
																','
															)
														)
													);
												const position = list.indexOf(
													triggerRef.current!
												);

												const nextElement =
													list[position + 1];

												if (nextElement) {
													nextElement.focus();
												}
												break;
											}
											default:
												navigationProps.onKeyDown(
													event
												);
												break;
										}
									}}
									role={role}
								>
									{children}
								</Collection>
							</FocusMenu>
						</As>
					</div>
				</Overlay>
			)}
		</div>
	);
}

type FocusMenuProps<T> = {
	children: T;
	onRender: () => void;
};

export function FocusMenu<T>({children, onRender}: FocusMenuProps<T>) {
	useEffect(() => {
		onRender();
	}, []);

	return children;
}

type ForwardRef = {
	displayName: string;
	<T>(props: Props<T> & {ref?: React.Ref<HTMLDivElement>}): JSX.Element;
};

/**
 * Menu is an experimental component for the evolution of DropDown for the
 * upcoming major version 4.x. It includes features like OOTB virtualization
 * for groups.
 *
 * OBS: The component is not functional for all DropDown use cases,
 * this is a WIP.
 */
export const Menu = React.forwardRef(MenuInner) as ForwardRef;

Menu.displayName = 'Menu';
