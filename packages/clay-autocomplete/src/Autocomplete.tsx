/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import DropDown from '@clayui/drop-down';
import {ClayInput as Input} from '@clayui/form';
import {InternalDispatch, Keys, useId, useInternalState} from '@clayui/shared';
import {hideOthers} from 'aria-hidden';
import React, {useEffect, useMemo, useRef} from 'react';

type Messages = {
	loading: string;
	notFound: string;
};

export interface IProps
	extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
	/**
	 * Flag to indicate if menu is showing or not.
	 */
	active?: boolean;

	/**
	 * Flag to align the DropDown menu within the viewport.
	 */
	alignmentByViewport?: boolean;

	/**
	 * The content.
	 */
	children?: React.ReactNode;

	/**
	 * The initial value of the active state (uncontrolled).
	 */
	defaultActive?: boolean;

	/**
	 * The initial value of the input (uncontrolled).
	 */
	defaultValue?: React.ReactText;

	/**
	 * Messages for autocomplete.
	 */
	messages?: Messages;

	/**
	 * Callback for when the active state changes (controlled).
	 */
	onActiveChange?: InternalDispatch<boolean>;

	/**
	 * Callback called when input value changes (controlled).
	 */
	onChange?: InternalDispatch<React.ReactText>;

	/**
	 * The current value of the input (controlled).
	 */
	value?: React.ReactText;

	/**
	 * The interaction required to display the menu.
	 */
	menuTrigger?: 'input' | 'focus';
}

export function Autocomplete({
	active: externalActive,
	alignmentByViewport,
	children,
	defaultActive,
	defaultValue,
	messages = {loading: '', notFound: ''},
	onActiveChange,
	onChange,
	value: externalValue,
	menuTrigger = 'input',
	...otherProps
}: IProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	const currentItemSelected = useRef<string>('');

	const [value = '', setValue] = useInternalState({
		defaultName: 'defaultValue',
		defaultValue,
		handleName: 'onChange',
		name: 'value',
		onChange,
		value: externalValue,
	});

	const [active, setActive] = useInternalState({
		defaultName: 'defaultActive',
		defaultValue: defaultActive,
		handleName: 'onActiveChange',
		name: 'active',
		onChange: onActiveChange,
		value: externalActive,
	});

	const ariaControlsId = useId();

	useEffect(() => {
		if (active) {
			const onFocus = (event: FocusEvent) => {
				if (
					!inputRef.current?.contains(event.target as Node) &&
					!menuRef.current?.contains(event.target as Node)
				) {
					setActive(false);
				}
			};

			document.addEventListener('focus', onFocus, true);

			return () => {
				document.removeEventListener('focus', onFocus, true);
			};
		}
	}, [active]);

	useEffect(() => {
		if (active) {
			const onKeyDown = (event: KeyboardEvent) => {
				if (
					inputRef.current &&
					(event.key === Keys.Left || event.key === Keys.Right)
				) {
					inputRef.current.focus();
				}
			};

			document.addEventListener('keydown', onKeyDown, true);

			return () => {
				document.removeEventListener('keydown', onKeyDown, true);
			};
		}
	}, [active]);

	useEffect(() => {
		if (menuRef.current && inputRef.current && active) {
			// Hide everything from ARIA except the MenuElement and Input
			return hideOthers([menuRef.current, inputRef.current]);
		}
	}, [active]);

	useEffect(() => {
		if (active === false) {
			setValue(currentItemSelected.current);
		}
	}, [active]);

	const [itemsElements, childElements] = useMemo(() => {
		const otherElements: Array<React.ReactNode> = [];
		const menu: Array<React.ReactElement> = [];

		React.Children.forEach(children, (child) => {
			if (
				React.isValidElement(child) &&
				// @ts-ignore
				child.type.displayName === 'ClayAutocompleteItem'
			) {
				const itemValue = child.props.value ?? child.props.children;

				// Static filter
				if (!itemValue.match(value)) {
					return;
				}

				menu.push(
					React.cloneElement(child as React.ReactElement, {
						match: value,
						onClick: (
							event: React.MouseEvent<
								| HTMLSpanElement
								| HTMLButtonElement
								| HTMLAnchorElement
							>
						) => {
							if (child.props.onClick) {
								child.props.onClick(event);
							}

							currentItemSelected.current = itemValue;
							setActive(false);
							setValue(itemValue);

							inputRef.current?.focus();
						},
						roleItem: 'option',
					})
				);
			} else {
				otherElements.push(child);
			}
		});

		return [menu, otherElements];
	}, [value, children]);

	return (
		<>
			{childElements}

			<Input
				{...otherProps}
				aria-autocomplete="list"
				aria-controls={ariaControlsId}
				aria-expanded={active}
				autoComplete="off"
				autoCorrect="off"
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					const {value} = event.target;

					if (!value) {
						currentItemSelected.current = value;
					}

					setActive(true);
					setValue(value);
				}}
				onFocus={(event) => {
					if (otherProps.onFocus) {
						otherProps.onFocus(event);
					}

					if (menuTrigger === 'focus') {
						setActive(true);
					}
				}}
				onKeyDown={(event) => {
					if (otherProps.onKeyDown) {
						otherProps.onKeyDown(event);
					}

					if (event.key === Keys.Enter) {
						setActive(false);
					}

					if (!active && event.altKey && event.key === Keys.Down) {
						event.stopPropagation();

						setActive(true);
					}
				}}
				ref={inputRef}
				role="combobox"
				spellCheck={false}
				value={value}
			/>

			<DropDown.Menu
				active={active}
				alignElementRef={inputRef}
				alignmentByViewport={alignmentByViewport}
				autoBestAlign={!!alignmentByViewport}
				className="autocomplete-dropdown-menu"
				focusRefOnEsc={inputRef}
				id={ariaControlsId}
				onActiveChange={setActive}
				ref={menuRef}
				style={{
					maxWidth: 'none',
					width: `${inputRef.current?.clientWidth}px`,
				}}
			>
				<DropDown.ItemList
					aria-label={otherProps['aria-label']}
					aria-labelledby={otherProps['aria-labelledby']}
					role="listbox"
				>
					{itemsElements.length ? (
						itemsElements
					) : (
						<DropDown.Item
							aria-disabled="true"
							className="disabled"
							roleItem="option"
						>
							{messages.notFound}
						</DropDown.Item>
					)}
				</DropDown.ItemList>
			</DropDown.Menu>
		</>
	);
}
