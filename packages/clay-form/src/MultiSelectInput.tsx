/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayAutocomplete from '@clayui/autocomplete';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayInput from './Input';
import ClayLabel from '@clayui/label';
import React, {useLayoutEffect, useRef, useState} from 'react';
import {FocusScope, noop, sub, useFocusManagement} from '@clayui/shared';

const BACKSPACE_KEY = 8;
const COMMA_KEY = 188;
const ENTER_KEY = 13;

const DELIMITER_KEYS = [ENTER_KEY, COMMA_KEY];

type Item = {
	/**
	 * Label to show.
	 */
	label: string;

	/**
	 * Hidden value of the item.
	 */
	value: string;
};

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
	 * Flag that indicates to disable all features of the component.
	 */
	disabled?: boolean;

	/**
	 * Flag to disabled Clear All functionality.
	 */
	disabledClearAll?: boolean;

	/**
	 * Ref added to container element
	 */
	forwardRef: React.RefObject<HTMLDivElement>;

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

	onClearAllButtonClick: () => void;

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

const ClayMultiSelect: React.FunctionComponent<IProps> = ({
	clearAllTitle = 'Clear All',
	closeButtonAriaLabel = 'Remove {0}',
	disabled,
	disabledClearAll,
	forwardRef,
	inputName,
	inputValue = '',
	isValid = true,
	items = [],
	onBlur = noop,
	onClearAllButtonClick = () => {
		onItemsChange([]);
		onChange('');
	},
	onFocus = noop,
	onChange = noop,
	onItemsChange = noop,
	onKeyDown = noop,
	onPaste = noop,
	sourceItems,
	spritemap,
	...otherProps
}) => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const lastItemRef = useRef<HTMLSpanElement | null>(null);
	const [active, setActive] = useState(false);
	const [isFocused, setIsFocused] = useState();
	const focusManager = useFocusManagement();

	useLayoutEffect(() => {
		if (sourceItems) {
			const matchedItems = sourceItems.filter(
				item => inputValue && item.label.match(inputValue)
			);

			setActive(matchedItems.length !== 0);
		}
	}, [sourceItems, inputValue]);

	const setNewValue = (newVal: Item) => {
		onItemsChange([...items, newVal]);

		onChange('');
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		onKeyDown(event);

		const {keyCode} = event;

		if (inputValue && DELIMITER_KEYS.includes(keyCode)) {
			event.preventDefault();

			let newItem: Item = {
				label: inputValue,
				value: inputValue,
			};

			if (sourceItems && sourceItems.length > 0) {
				newItem =
					sourceItems.find(item => item.label === inputValue) ||
					newItem;
			}

			setNewValue(newItem);
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
			.map(item => {
				return {
					label: item.trim(),
					value: item.trim(),
				};
			})
			.filter(Boolean);

		if (pastedItems.length > 0) {
			event.preventDefault();

			onItemsChange([...items, ...pastedItems]);
		}
	};

	return (
		<FocusScope arrowKeys={false} focusManager={focusManager}>
			<div
				className={classNames(
					'form-control form-control-tag-group input-group',
					{
						focus: isFocused && isValid,
					}
				)}
				ref={forwardRef}
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
											[item.label]
										),
										disabled,
										onClick: () => {
											if (inputRef.current) {
												inputRef.current.focus();
											}
											removeItem();
										},
										ref: ref => {
											focusManager.createScope(
												ref,
												`label${i}`
											);

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
									{item.label}
								</ClayLabel>

								{inputName && (
									<input
										name={inputName}
										type="hidden"
										value={item.value}
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
						ref={ref => {
							inputRef.current = ref;
							focusManager.createScope(ref, 'input');
						}}
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
								ref={ref =>
									focusManager.createScope(
										ref,
										'clearAllButton'
									)
								}
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

				{sourceItems && (
					<ClayAutocomplete.DropDown
						active={active}
						alignElementRef={forwardRef}
						onSetActive={setActive}
					>
						<ClayDropDown.ItemList>
							{sourceItems
								.filter(
									item =>
										inputValue &&
										item.label.match(inputValue)
								)
								.map(item => (
									<ClayAutocomplete.Item
										innerRef={ref =>
											focusManager.createScope(
												ref,
												`item${item.label}`,
												true
											)
										}
										key={item.value}
										match={inputValue}
										onClick={() => {
											setNewValue(item);

											if (inputRef.current) {
												inputRef.current.focus();
											}
										}}
										value={item.label}
									/>
								))}
						</ClayDropDown.ItemList>
					</ClayAutocomplete.DropDown>
				)}
			</div>
		</FocusScope>
	);
};

export const ClayMultiSelectInput = React.forwardRef<
	HTMLDivElement,
	Omit<IProps, 'forwardRef'>
>((props, ref?) => {
	const defaultRef = useRef<HTMLDivElement>(null);

	return (
		<ClayMultiSelect
			forwardRef={(ref as React.RefObject<HTMLDivElement>) || defaultRef}
			{...props}
		/>
	);
});
