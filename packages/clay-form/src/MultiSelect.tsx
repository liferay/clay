/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayAutocomplete from '@clayui/autocomplete';
import ClayDropDown from '@clayui/drop-down/src';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import React, {useLayoutEffect, useRef, useState} from 'react';

const BACKSPACE_KEY = 8;
const COMMA_KEY = 188;
const ENTER_KEY = 13;

const DELIMITER_KEYS = [ENTER_KEY, COMMA_KEY];

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {
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

const MultiSelect: React.FunctionComponent<IProps> = ({
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
	const inputRef = useRef<HTMLInputElement>(null);
	const lastItemRef = useRef<HTMLSpanElement>(null);
	const [active, setActive] = useState(false);
	const [isFocused, setIsFocused] = useState();

	useLayoutEffect(() => {
		if (sourceItems) {
			const matchedItems = sourceItems.filter(
				item => inputValue && item.match(inputValue)
			);

			setActive(matchedItems.length !== 0);
		}
	}, [sourceItems, inputValue]);

	const setNewValue = (newVal: string) => {
		onItemsChange([...items, newVal]);

		onInputChange('');
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const {keyCode} = event;

		if (inputValue && DELIMITER_KEYS.includes(keyCode)) {
			event.preventDefault();

			setNewValue(inputValue);
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

		if (pastedItems.length > 0) {
			event.preventDefault();

			onItemsChange([...items, ...pastedItems]);
		}
	};

	return (
		<div
			className={classNames('form-group', {
				['has-error']: !isValid,
			})}
			ref={forwardRef}
		>
			{label && <label>{label}</label>}

			<div className="input-group input-group-stacked-sm-down">
				<div className="input-group-item">
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
									ref={
										i === items.length - 1
											? lastItemRef
											: undefined
									}
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
							ref={inputRef}
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
												key={item}
												match={inputValue}
												onClick={() => {
													onItemsChange([
														...items,
														item,
													]);

													onInputChange('');
												}}
												value={item}
											/>
										))}
								</ClayDropDown.ItemList>
							</ClayAutocomplete.DropDown>
						)}
					</div>

					{helpText && (
						<div className="form-feedback-group">
							<div className="form-text">{helpText}</div>
						</div>
					)}

					{!isValid && errorMessage && (
						<div className="form-feedback-group">
							<div className="form-feedback-item">
								<span className="form-feedback-indicator">
									<ClayIcon
										spritemap={spritemap}
										symbol="info-circle"
									/>
								</span>

								{errorMessage}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default React.forwardRef<HTMLDivElement, Omit<IProps, 'forwardRef'>>(
	(props, ref?) => {
		const defaultRef = useRef<HTMLDivElement>(null);

		return (
			<MultiSelect
				forwardRef={
					(ref as React.RefObject<HTMLDivElement>) || defaultRef
				}
				{...props}
			/>
		);
	}
);
