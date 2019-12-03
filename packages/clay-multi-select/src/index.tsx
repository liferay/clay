/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayAutocomplete from '@clayui/autocomplete';
import ClayDropDown from '@clayui/drop-down';
import {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import {FocusScope, noop, sub} from '@clayui/shared';
import classNames from 'classnames';
import React, {useLayoutEffect, useRef, useState} from 'react';

const BACKSPACE_KEY = 8;
const COMMA_KEY = 188;
const ENTER_KEY = 13;

const DELIMITER_KEYS = [ENTER_KEY, COMMA_KEY];

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

interface IMenuRendererProps {
	filter?: (item: Item, inputValue: string, locator: Locator) => boolean;
	inputValue: string;
	locator: Locator;
	onItemClick?: (item: Item) => void;
	sourceItems: Array<Item>;
}

type MenuRenderer = React.FunctionComponent<IMenuRendererProps>;

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	/**
	 * Title for the `Clear All` button.
	 */
	clearAllTitle?: string;

	/**
	 * Aria label for the Close button of the labels.
	 */
	closeButtonAriaLabel?: string;

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
	 * Callback to filter items based on the inputValue and locator
	 */
	filter?: (item: Item, inputValue: string, locator: Locator) => boolean;

	/**
	 * Value used for each selected item's hidden input name attribute
	 */
	inputName?: string;

	/**
	 * Value of input
	 */
	inputValue: string;

	/**
	 * Flag to indicate if input is valid or not
	 */
	isValid?: boolean;

	/**
	 * Values that display as label items
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
	 * Callback for when the input value changes
	 */
	onChange: (val: any) => void;

	/**
	 * Callback for when items are added or removed
	 */
	onItemsChange: (val: Array<Item>) => void;

	/**
	 * List of pre-populated items that will show up in a dropdown menu
	 */
	sourceItems?: Array<Item>;

	/**
	 * Path to spritemap for clay icons
	 */
	spritemap?: string;
}

const defaultFilter = (item: Item, inputValue: string, locator: Locator) =>
	inputValue && item[locator.label].match(inputValue);

const MultiSelectMenuRenderer: MenuRenderer = ({
	filter = defaultFilter,
	inputValue,
	locator,
	onItemClick = () => {},
	sourceItems,
}) => (
	<ClayDropDown.ItemList>
		{sourceItems
			.filter(item => filter(item, inputValue, locator))
			.map(item => (
				<ClayAutocomplete.Item
					key={item[locator.value]}
					match={inputValue}
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
			disabled,
			disabledClearAll,
			filter = defaultFilter,
			inputName,
			inputValue = '',
			isValid = true,
			items = [],
			locator = {
				label: 'label',
				value: 'value',
			},
			menuRenderer: MenuRenderer = MultiSelectMenuRenderer,
			onBlur = noop,
			onClearAllButtonClick = () => {
				onItemsChange([]);
				onChange('');
			},
			onChange = noop,
			onFocus = noop,
			onItemsChange = noop,
			onKeyDown = noop,
			onPaste = noop,
			sourceItems = [],
			spritemap,
			...otherProps
		}: IProps,
		ref
	) => {
		const defaultRef = useRef<HTMLDivElement>(null);
		const inputRef = useRef<HTMLInputElement | null>(null);
		const lastItemRef = useRef<HTMLSpanElement | null>(null);
		const [active, setActive] = useState(false);
		const [isFocused, setIsFocused] = useState();

		useLayoutEffect(() => {
			if (sourceItems) {
				const matchedItems = sourceItems.filter(item =>
					filter(item, inputValue, locator)
				);

				setActive(matchedItems.length !== 0);
			}
		}, [sourceItems, inputValue]);

		const setNewValue = (newVal: Item) => {
			onItemsChange([...items, newVal]);

			onChange('');
		};

		const getSourceItemByLabel = (label: string) => {
			return sourceItems.find(item => item[locator.label] === label);
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

			const {keyCode} = event;

			if (keyCode === BACKSPACE_KEY && !inputValue) {
				event.preventDefault();
			}

			if (inputValue && DELIMITER_KEYS.includes(keyCode)) {
				event.preventDefault();

				setNewValue(getNewItem(inputValue));
			} else if (
				!inputValue &&
				keyCode === BACKSPACE_KEY &&
				inputRef.current &&
				lastItemRef.current
			) {
				inputRef.current.blur();
				lastItemRef.current.focus();
			}
		};

		const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
			onPaste(event);

			const pastedText = event.clipboardData.getData('Text');

			const pastedItems = pastedText
				.split(',')
				.map(itemLabel => getNewItem(itemLabel.trim()))
				.filter(Boolean);

			if (pastedItems.length > 0) {
				event.preventDefault();

				onItemsChange([...items, ...pastedItems]);
			}
		};

		const containerRef =
			(ref as React.RefObject<HTMLDivElement>) || defaultRef;

		return (
			<FocusScope arrowKeysUpDown={false}>
				<div
					className={classNames(
						'form-control form-control-tag-group input-group',
						{
							focus: isFocused && isValid,
						}
					)}
					ref={containerRef}
				>
					<ClayInput.GroupItem>
						{items.map((item, i) => {
							const removeItem = () =>
								onItemsChange([
									...items.slice(0, i),
									...items.slice(i + 1),
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
												if (inputRef.current) {
													inputRef.current.focus();
												}
												removeItem();
											},
											ref: ref => {
												if (i === items.length - 1) {
													lastItemRef.current = ref;
												}
											},
										}}
										onKeyDown={({keyCode}) => {
											if (keyCode !== BACKSPACE_KEY) {
												return;
											}
											if (inputRef.current) {
												inputRef.current.focus();
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
							onBlur={e => {
								onBlur(e);
								setIsFocused(false);
							}}
							onChange={event =>
								onChange(event.target.value.replace(',', ''))
							}
							onFocus={e => {
								onFocus(e);
								setIsFocused(true);
							}}
							onKeyDown={handleKeyDown}
							onPaste={handlePaste}
							ref={inputRef}
							type="text"
							value={inputValue}
						/>
					</ClayInput.GroupItem>

					{!disabled &&
						!disabledClearAll &&
						(inputValue || items.length > 0) && (
							<ClayInput.GroupItem shrink>
								<button
									className="component-action"
									onClick={() => {
										onClearAllButtonClick();

										if (inputRef.current) {
											inputRef.current.focus();
										}
									}}
									title={clearAllTitle}
									type="button"
								>
									<ClayIcon
										spritemap={spritemap}
										symbol="times-circle"
									/>
								</button>
							</ClayInput.GroupItem>
						)}

					{sourceItems.length > 0 && (
						<ClayAutocomplete.DropDown
							active={active}
							alignElementRef={containerRef}
							onSetActive={setActive}
						>
							<MenuRenderer
								filter={filter}
								inputValue={inputValue}
								locator={locator}
								onItemClick={item => {
									setNewValue(item);

									if (inputRef.current) {
										inputRef.current.focus();
									}
								}}
								sourceItems={sourceItems}
							/>
						</ClayAutocomplete.DropDown>
					)}
				</div>
			</FocusScope>
		);
	}
);

export default ClayMultiSelect;
