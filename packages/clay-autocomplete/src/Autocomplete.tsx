/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import DropDown from '@clayui/drop-down';
import {ClayInput as Input} from '@clayui/form';
import {InternalDispatch, useInternalState} from '@clayui/shared';
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
				autoComplete="off"
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					const {value} = event.target;

					if (!value) {
						currentItemSelected.current = value;
					}

					setActive(true);
					setValue(value);
				}}
				ref={inputRef}
				value={value}
			/>

			<DropDown.Menu
				active={active}
				alignElementRef={inputRef}
				alignmentByViewport={alignmentByViewport}
				autoBestAlign={!!alignmentByViewport}
				className="autocomplete-dropdown-menu"
				focusRefOnEsc={inputRef}
				onActiveChange={setActive}
				ref={menuRef}
				style={{
					maxWidth: 'none',
					width: `${inputRef.current?.clientWidth}px`,
				}}
			>
				<DropDown.ItemList>
					{itemsElements.length ? (
						itemsElements
					) : (
						<DropDown.Item disabled>
							{messages.notFound}
						</DropDown.Item>
					)}
				</DropDown.ItemList>
			</DropDown.Menu>
		</>
	);
}
