/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayAutocomplete from '@clayui/autocomplete';
import ClayDropDown from '@clayui/drop-down';
import ClayForm from './Form';
import ClayInput from './Input';
import ClayLabel from '@clayui/label';
import React, {useLayoutEffect, useRef, useState} from 'react';
import {FocusScope, useFocusManagement} from '@clayui/shared';

const BACKSPACE_KEY = 8;
const COMMA_KEY = 188;
const ENTER_KEY = 13;

const DELIMITER_KEYS = [ENTER_KEY, COMMA_KEY];

type TCompare = (
	items: Array<string>,
	newValues: Array<string>
) => Array<string>;

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	/**
	 * Function that compares the selected values with the new values that can be added,
	 * must be returned an array of values that can be added. By default this function
	 * only checks for dedupe and lowerCase values.
	 *
	 * Compare works like a compose, gets an array of functions which results will be
	 * passed to the next functions, the functions are called from right to left.
	 */
	compare?: Array<TCompare>;

	/**
	 * Message to display if isValid is false.
	 */
	errorMessage?: string;

	/**
	 * Ref added to container element
	 */
	forwardRef: React.RefObject<HTMLDivElement>;

	/**
	 * Message to display which helps users interact with input
	 */
	helpText?: string;

	/**
	 * Value of input
	 */
	inputValue: string;

	/**
	 * Values that display as label items
	 */
	items: Array<string>;

	/**
	 * Description of the input
	 */
	label?: React.ReactText;

	/**
	 * Callback for when items are added or removed
	 */
	onItemsChange: (val: Array<string>) => void;

	/**
	 * Callback for when the input value changes
	 */
	onInputChange: (val: string) => void;

	/**
	 * List of pre-populated items that will show up in a dropdown menu
	 */
	sourceItems?: Array<string>;

	/**
	 * Path to spritemap for clay icons
	 */
	spritemap?: string;

	/**
	 * Flag to indicate if input is valid or not
	 */
	isValid?: boolean;
}

const dedupe = (items: Array<string>, newValues: Array<string>) =>
	newValues.filter(value => !items.includes(value));

const lowerCase = (items: Array<string>, newValues: Array<string>) =>
	newValues.map(value => value.toLowerCase());

const compose = (...fns: Array<TCompare>) => (
	x: Array<string>,
	y: Array<string>
) => fns.reduceRight((v, f) => f(x, v), y);

const ClayMultiSelect: React.FunctionComponent<IProps> = ({
	compare = [dedupe, lowerCase],
	errorMessage,
	forwardRef,
	helpText,
	inputValue = '',
	isValid = true,
	items = [],
	label,
	onInputChange,
	onItemsChange,
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
				item => inputValue && item.match(inputValue)
			);

			setActive(matchedItems.length !== 0);
		}
	}, [sourceItems, inputValue]);

	const setNewValue = (newVal: Array<string>) => {
		onItemsChange([...items, ...newVal]);

		onInputChange('');
	};

	const compareWithCompose = compose(...compare);

	const handleDropDownClick = (newVal: string) => {
		const result = compareWithCompose(items, [newVal]);

		if (result.length) {
			setNewValue(result);
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const {keyCode} = event;
		const result = compareWithCompose(items, [inputValue]);

		if (inputValue && result.length && DELIMITER_KEYS.includes(keyCode)) {
			event.preventDefault();

			setNewValue(result);
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
		const pastedText = event.clipboardData.getData('Text');

		const pastedItems = pastedText
			.split(',')
			.map(item => item.trim())
			.filter(Boolean);
		const result = compareWithCompose(items, pastedItems);

		if (pastedItems.length > 0 && result.length) {
			event.preventDefault();

			onItemsChange([...items, ...result]);
		}
	};

	return (
		<ClayForm.Group
			className={classNames({
				['has-error']: !isValid,
			})}
			ref={forwardRef}
		>
			{label && <label>{label}</label>}

			<ClayInput.Group stacked>
				<ClayInput.GroupItem>
					<FocusScope arrowKeys={false} focusManager={focusManager}>
						<div
							className={classNames(
								'form-control form-control-tag-group',
								{
									focus: isFocused && isValid,
								}
							)}
						>
							{items.map((item, i) => {
								const removeItem = () =>
									onItemsChange([
										...items.slice(0, i),
										...items.slice(i + 1),
									]);

								return (
									<ClayLabel
										closeButtonProps={{
											onClick: removeItem,
										}}
										key={i}
										onKeyDown={({keyCode}) => {
											if (keyCode !== BACKSPACE_KEY) {
												return;
											}
											if (inputRef.current) {
												inputRef.current.focus();
											}
											removeItem();
										}}
										ref={(ref: HTMLSpanElement) => {
											focusManager.createScope(
												ref,
												`label${i}`
											);

											if (i === items.length - 1) {
												lastItemRef.current = ref;
											}
										}}
										spritemap={spritemap}
										tabIndex={0}
									>
										{item}
									</ClayLabel>
								);
							})}

							<input
								{...otherProps}
								className="form-control-inset"
								onBlur={() => setIsFocused(false)}
								onChange={event =>
									onInputChange(
										event.target.value.replace(',', '')
									)
								}
								onFocus={() => setIsFocused(true)}
								onKeyDown={handleKeyDown}
								onPaste={handlePaste}
								ref={ref => {
									inputRef.current = ref;
									focusManager.createScope(ref, 'input');
								}}
								type="text"
								value={inputValue}
							/>

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
													item.match(inputValue)
											)
											.map(item => (
												<ClayAutocomplete.Item
													innerRef={ref =>
														focusManager.createScope(
															ref,
															`item${item}`,
															true
														)
													}
													key={item}
													match={inputValue}
													onClick={() =>
														handleDropDownClick(
															item
														)
													}
													value={item}
												/>
											))}
									</ClayDropDown.ItemList>
								</ClayAutocomplete.DropDown>
							)}
						</div>
					</FocusScope>

					{helpText && (
						<ClayForm.FeedbackGroup>
							<ClayForm.Text>{helpText}</ClayForm.Text>
						</ClayForm.FeedbackGroup>
					)}

					{!isValid && errorMessage && (
						<ClayForm.FeedbackGroup>
							<ClayForm.FeedbackItem>
								<ClayForm.FeedbackIndicator
									spritemap={spritemap}
									symbol="info-circle"
								/>

								{errorMessage}
							</ClayForm.FeedbackItem>
						</ClayForm.FeedbackGroup>
					)}
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
	);
};

export const ClayInputWithMultiSelect = React.forwardRef<
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
