/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAutocomplete from '@clayui/autocomplete';
import {ClayButtonWithIcon} from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import {ClayInput} from '@clayui/form';
import ClayLabel from '@clayui/label';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import {
	FocusScope,
	InternalDispatch,
	Keys,
	noop,
	sub,
	useInternalState,
} from '@clayui/shared';
import classNames from 'classnames';
import fuzzy from 'fuzzy';
import React, {useEffect} from 'react';

const DELIMITER_KEYS = ['Enter', ','];

type Item = {
	[propName: string]: any;

	/**
	 * Label to show.
	 */
	label?: string;

	/**
	 * Hidden value of the item.
	 */
	value?: string;
};

type Locator = {
	label: string;
	value: string;
};

type Size = null | 'sm';

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

export interface IProps
	extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'> {
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
	 * Adds a component to replace the default component that renders
	 * the content of the `<ClayDropDown />` component.
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
	 */
	isLoading?: boolean;

	/**
	 * Flag to indicate if input is valid or not
	 */
	isValid?: boolean;

	/**
	 * Values that display as label items (controlled).
	 */
	items: Array<Item>;

	/**
	 * Sets the name of the field to map the value/label of the item
	 */
	locator?: Locator;

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
	onItemsChange: InternalDispatch<Array<Item>>;

	/**
	 * Determines the size of the Multi Select component.
	 */
	size?: Size;

	/**
	 * List of pre-populated items that will show up in a dropdown menu
	 */
	sourceItems?: Array<Item>;

	/**
	 * Path to spritemap for clay icons
	 */
	spritemap?: string;

	/**
	 * The value property sets the current value (controlled).
	 */
	value?: string;
}

const MultiSelectMenuRenderer: MenuRenderer = ({
	locator,
	onItemClick = () => {},
	sourceItems,
	value,
}) => (
	<ClayDropDown.ItemList>
		{sourceItems.map((item) => (
			<ClayAutocomplete.Item
				key={item[locator.value]}
				match={value}
				onClick={() => onItemClick(item)}
				value={item[locator.label]}
			/>
		))}
	</ClayDropDown.ItemList>
);

const ClayMultiSelect = React.forwardRef<HTMLDivElement, IProps>(
	(
		{
			clearAllTitle = 'Clear All',
			closeButtonAriaLabel = 'Remove {0}',
			defaultItems = [],
			defaultValue = '',
			disabled,
			disabledClearAll,
			inputName,
			inputValue,
			isLoading = false,
			isValid = true,
			items,
			locator = {
				label: 'label',
				value: 'value',
			},
			menuRenderer: MenuRenderer = MultiSelectMenuRenderer,
			onBlur = noop,
			onChange,
			onClearAllButtonClick,
			onFocus = noop,
			onItemsChange,
			onKeyDown = noop,
			onPaste = noop,
			placeholder,
			size,
			sourceItems = [],
			spritemap,
			value,
			...otherProps
		}: IProps,
		ref
	) => {
		const containerRef = React.useRef<HTMLDivElement>(null);
		const inputRef = React.useRef<HTMLInputElement | null>(null);
		const lastItemRef = React.useRef<HTMLSpanElement | null>(null);
		const [active, setActive] = React.useState(false);
		const [isFocused, setIsFocused] = React.useState(false);

		const [internalItems, setItems] = useInternalState({
			defaultName: 'defaultItems',
			defaultValue: defaultItems,
			handleName: 'onItemsChange',
			name: 'items',
			onChange: onItemsChange,
			value: items,
		});

		const [internalValue, setValue] = useInternalState({
			defaultName: 'defaultValue',
			defaultValue,
			handleName: 'onChange',
			name: 'value',
			onChange,
			value: value ?? inputValue,
		});

		useEffect(() => {
			if (isFocused) {
				setActive(!!internalValue && sourceItems.length !== 0);
			}
		}, [internalValue, isFocused, sourceItems]);

		const inputElementRef =
			(ref as React.RefObject<HTMLInputElement>) || inputRef;

		const setNewValue = (newVal: Item) => {
			setItems([...internalItems, newVal]);

			setValue('');
		};

		const getSourceItemByLabel = (label: string) => {
			return sourceItems.find((item) => item[locator.label] === label);
		};

		const getNewItem = (value: string): Item => {
			return (
				getSourceItemByLabel(value) || {
					[locator.label]: value,
					[locator.value]: value,
				}
			);
		};

		const handleKeyDown = (
			event: React.KeyboardEvent<HTMLInputElement>
		) => {
			onKeyDown(event);

			const {key} = event;

			if (key === Keys.Backspace && !internalValue) {
				event.preventDefault();
			}

			if (internalValue.trim() && DELIMITER_KEYS.includes(key)) {
				event.preventDefault();

				setNewValue(getNewItem(internalValue));
			} else if (
				!internalValue &&
				key === Keys.Backspace &&
				inputElementRef.current &&
				lastItemRef.current
			) {
				inputElementRef.current.blur();
				lastItemRef.current.focus();
			}
		};

		const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
			onPaste(event);

			const pastedText = event.clipboardData.getData('Text');

			const pastedItems = pastedText
				.split(',')
				.map((itemLabel) => getNewItem(itemLabel.trim()))
				.filter(Boolean);

			if (pastedItems.length > 0) {
				event.preventDefault();

				setItems([...internalItems, ...pastedItems]);
			}
		};

		return (
			<FocusScope arrowKeysUpDown={false}>
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
					<ClayInput.GroupItem>
						{internalItems.map((item, i) => {
							const removeItem = () =>
								setItems([
									...internalItems.slice(0, i),
									...internalItems.slice(i + 1),
								]);

							return (
								<React.Fragment key={i}>
									<ClayLabel
										closeButtonProps={{
											'aria-label': sub(
												closeButtonAriaLabel,
												[item[locator.label]]
											),
											disabled,
											onClick: () => {
												if (inputElementRef.current) {
													inputElementRef.current.focus();
												}
												removeItem();
											},
											ref: (ref) => {
												if (
													i ===
													internalItems.length - 1
												) {
													lastItemRef.current = ref;
												}
											},
										}}
										onKeyDown={({key}) => {
											if (key !== Keys.Backspace) {
												return;
											}
											if (inputElementRef.current) {
												inputElementRef.current.focus();
											}
											removeItem();
										}}
										spritemap={spritemap}
									>
										{item[locator.label]}
									</ClayLabel>

									{inputName && (
										<input
											name={inputName}
											type="hidden"
											value={item[locator.value]}
										/>
									)}
								</React.Fragment>
							);
						})}

						<input
							{...otherProps}
							className="form-control-inset"
							disabled={disabled}
							onBlur={(event) => {
								onBlur(event);
								setIsFocused(false);
							}}
							onChange={(event) =>
								setValue(event.target.value.replace(',', ''))
							}
							onFocus={(event) => {
								onFocus(event);
								setIsFocused(true);
							}}
							onKeyDown={handleKeyDown}
							onPaste={handlePaste}
							placeholder={
								internalItems.length ? undefined : placeholder
							}
							ref={inputElementRef}
							type="text"
							value={internalValue}
						/>
					</ClayInput.GroupItem>

					{isLoading && (
						<ClayInput.GroupItem shrink>
							<ClayLoadingIndicator small />
						</ClayInput.GroupItem>
					)}

					{!disabled &&
						!disabledClearAll &&
						(internalValue || internalItems.length > 0) && (
							<ClayInput.GroupItem shrink>
								<ClayButtonWithIcon
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

					{sourceItems.length > 0 && (
						<ClayAutocomplete.DropDown
							active={active}
							alignElementRef={containerRef}
							onSetActive={setActive}
						>
							<MenuRenderer
								inputValue={internalValue}
								locator={locator}
								onItemClick={(item) => {
									setNewValue(item);

									if (inputElementRef.current) {
										inputElementRef.current.focus();
									}
								}}
								sourceItems={sourceItems}
								value={internalValue}
							/>
						</ClayAutocomplete.DropDown>
					)}
				</div>
			</FocusScope>
		);
	}
);

ClayMultiSelect.displayName = 'ClayMultiSelect';

/**
 * Utility used for filtering an array of items based off the locator which
 * is set to `label` by default.
 */
export const itemLabelFilter = (
	items: Array<Item>,
	value: string,
	locator = 'label'
) => items.filter((item) => fuzzy.match(value, item[locator]));

export default ClayMultiSelect;
