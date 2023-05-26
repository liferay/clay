/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Autocomplete, Item as AutocompleteItem} from '@clayui/autocomplete';
import {ClayButtonWithIcon} from '@clayui/button';
import {ClayInput} from '@clayui/form';
import {InternalDispatch, sub, useId, useInternalState} from '@clayui/shared';
import classNames from 'classnames';
import React, {useRef, useState} from 'react';

import {Labels} from './Labels';

import type {ICollectionProps} from '@clayui/core';

import type {Item, LastChangeLiveRegion, Locator} from './types';

type Size = null | 'sm';

type Messages = {
	loading: string;
	notFound: string;
};

interface IMenuRendererProps {
	/**
	 * Value of input
	 * * @deprecated since v3.49.0 - use `value` instead.
	 */
	inputValue: string;

	locator: Locator;
	onItemClick?: (item: Item) => void;
	sourceItems: Array<Item>;

	/**
	 * The value property sets the current value (controlled).
	 */
	value: string;
}

type MenuRenderer = (props: IMenuRendererProps) => JSX.Element;

export interface IProps<T>
	extends Omit<
			React.HTMLAttributes<HTMLInputElement>,
			'onChange' | 'children'
		>,
		Omit<Partial<ICollectionProps<T, unknown>>, 'virtualize' | 'items'> {
	/**
	 * Whether MultiSelect allows an input value not corresponding to an item
	 * to be added.
	 */
	allowsCustomLabel?: boolean;

	/**
	 * Flag to align the Autocomplete within the viewport.
	 * @deprecated since v3.95.2 - it is no longer necessary...
	 */
	alignmentByViewport?: boolean;

	/**
	 * Title for the `Clear All` button.
	 */
	clearAllTitle?: string;

	/**
	 * Aria label for the Close button of the labels.
	 */
	closeButtonAriaLabel?: string;

	/**
	 * Property to set the default value (uncontrolled).
	 */
	defaultValue?: string;

	/**
	 * Set the default value of label items (uncontrolled).
	 */
	defaultItems?: Array<Item>;

	/**
	 * Direction the menu will render relative to the Autocomplete.
	 */
	direction?: 'bottom' | 'top';

	/**
	 * Adds a component to replace the default component that renders
	 * the content of the `<ClayDropDown />` component.
	 * @deprecated since v3.95.2
	 */
	menuRenderer?: MenuRenderer;

	/**
	 * Flag that indicates to disable all features of the component.
	 */
	disabled?: boolean;

	/**
	 * Flag to disabled Clear All functionality.
	 */
	disabledClearAll?: boolean;

	/**
	 * Defines the description of hotkeys for the component, use this
	 * to handle internationalization.
	 */
	hotkeysDescription?: string;

	/**
	 * Value used for each selected item's hidden input name attribute
	 */
	inputName?: string;

	/**
	 * Value of input
	 * * @deprecated since v3.49.0 - use `value` instead.
	 */
	inputValue?: string;

	/**
	 * Flag to indicate if loading icon should be rendered
	 * @deprecated since v3.95.2 - use `loadingState` instead.
	 */
	isLoading?: boolean;

	/**
	 * Flag to indicate if input is valid or not
	 */
	isValid?: boolean;

	/**
	 * Values that display as label items (controlled).
	 */
	items?: Array<Item>;

	/**
	 * The off-screen live region informs screen reader users the result of
	 * removing or adding a label.
	 */
	liveRegion?: {
		added: string;
		removed: string;
	};

	/**
	 * Sets the name of the field to map the value/label of the item
	 */
	locator?: Locator;

	/**
	 * Messages for autocomplete.
	 */
	messages?: Messages;

	/**
	 * Callback for when the clear all button is clicked
	 */
	onClearAllButtonClick?: () => void;

	/**
	 * Callback for when the input value changes (controlled).
	 */
	onChange?: InternalDispatch<string>;

	/**
	 * Callback for when items are added or removed (controlled).
	 */
	onItemsChange?: InternalDispatch<Array<Item>>;

	/**
	 * Callback is called when more items need to be loaded when the scroll
	 * reaches the bottom.
	 */
	onLoadMore?: () => Promise<any> | null;

	/**
	 * Determines the size of the Multi Select component.
	 */
	size?: Size;

	/**
	 * List of pre-populated items that will show up in a dropdown menu
	 */
	sourceItems?: Array<Item> | null;

	/**
	 * Path to spritemap for clay icons
	 */
	spritemap?: string;

	/**
	 * The value property sets the current value (controlled).
	 */
	value?: string;

	/**
	 * The current state of Autocomplete current loading. Determines whether the
	 * loading indicator should be shown or not.
	 */
	loadingState?: number;
}

const ClayMultiSelect = React.forwardRef<HTMLDivElement, IProps<unknown>>(
	(
		{
			allowsCustomLabel = true,
			alignmentByViewport: _,
			children,
			clearAllTitle = 'Clear All',
			closeButtonAriaLabel = 'Remove {0}',
			defaultItems = [],
			defaultValue = '',
			disabled,
			disabledClearAll,
			hotkeysDescription = 'Press backspace to delete the current row.',
			inputName,
			inputValue,
			isLoading: _i,
			isValid = true,
			items: externalItems,
			liveRegion = {
				added: 'Label {0} added to the list',
				removed: 'Label {0} removed to the list',
			},
			locator = {
				id: 'key',
				label: 'label',
				value: 'value',
			},
			menuRenderer: _m,
			onChange,
			onClearAllButtonClick,
			onItemsChange,
			placeholder,
			size,
			sourceItems = null,
			spritemap,
			value: externalValue,
			...otherProps
		}: IProps<unknown>,
		ref
	) => {
		const containerRef = useRef<HTMLDivElement>(null);
		const inputRef = useRef<HTMLInputElement | null>(null);
		const lastChangesRef = useRef<LastChangeLiveRegion | null>(null);

		const [isFocused, setIsFocused] = useState(false);

		const [items, setItems] = useInternalState({
			defaultName: 'defaultItems',
			defaultValue: defaultItems,
			handleName: 'onItemsChange',
			name: 'items',
			onChange: onItemsChange,
			value: externalItems,
		});

		const [value, setValue] = useInternalState({
			defaultName: 'defaultValue',
			defaultValue,
			handleName: 'onChange',
			name: 'value',
			onChange,
			value: externalValue ?? inputValue,
		});

		const inputElementRef =
			(ref as React.RefObject<HTMLInputElement>) || inputRef;

		const ariaDescriptionId = useId();

		return (
			<div
				className={classNames(
					'form-control form-control-tag-group input-group',
					{
						focus: isFocused && isValid,
						[`form-control-tag-group-${size}`]: size,
					}
				)}
				ref={containerRef}
			>
				<Autocomplete
					{...otherProps}
					allowsCustomLabel={allowsCustomLabel}
					ariaDescriptionId={ariaDescriptionId}
					as={Labels}
					closeButtonAriaLabel={closeButtonAriaLabel}
					containerElementRef={containerRef}
					filterKey={locator.label}
					inputName={inputName}
					items={sourceItems}
					labels={items}
					lastChangesRef={lastChangesRef}
					locator={locator}
					menuTrigger="focus"
					onChange={setValue}
					onFocusChange={setIsFocused}
					onItemsChange={() => {}}
					onLabelsChange={setItems}
					placeholder={placeholder}
					ref={inputElementRef}
					spritemap={spritemap}
					value={value}
				>
					{(item: Item) => {
						if (children && typeof children === 'function') {
							return React.cloneElement(children(item), {
								onClick: (event) => {
									event.preventDefault();

									setItems([...items, item]);
									setValue('');
								},
							});
						}

						return (
							<AutocompleteItem
								key={item[locator.value]}
								onClick={(event) => {
									event.preventDefault();

									setItems([...items, item]);
									setValue('');
								}}
							>
								{item[locator.label]}
							</AutocompleteItem>
						);
					}}
				</Autocomplete>

				{!disabled && !disabledClearAll && (value || items.length > 0) && (
					<ClayInput.GroupItem shrink>
						<ClayButtonWithIcon
							aria-label={clearAllTitle}
							borderless
							className="component-action"
							displayType="secondary"
							onClick={() => {
								if (onClearAllButtonClick) {
									onClearAllButtonClick();
								} else {
									setItems([]);
									setValue('');
								}

								if (inputElementRef.current) {
									inputElementRef.current.focus();
								}
							}}
							outline
							spritemap={spritemap}
							symbol="times-circle"
							title={clearAllTitle}
						/>
					</ClayInput.GroupItem>
				)}

				<div className="sr-only">
					<span id={ariaDescriptionId}>{hotkeysDescription}</span>
					<span aria-live="polite" aria-relevant="text">
						{lastChangesRef.current
							? sub(liveRegion[lastChangesRef.current.action], [
									lastChangesRef.current.label,
							  ])
							: null}
					</span>
				</div>
			</div>
		);
	}
);

ClayMultiSelect.displayName = 'ClayMultiSelect';

/**
 * Utility used for filtering an array of items based off the locator which
 * is set to `label` by default.
 * @deprecated since v3.95.2 - it is no longer necessary...
 */
export const itemLabelFilter = (
	items: Array<Item>,
	_value: string,
	_locator = 'label'
) => items;

export default Object.assign(ClayMultiSelect, {
	Item: AutocompleteItem,
});
