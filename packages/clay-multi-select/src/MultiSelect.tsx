/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import React from 'react';

const COMMA = 188;

const KEYS = [COMMA];

export interface IProps extends React.HTMLAttributes<HTMLInputElement> {
	children?: React.ReactChild | React.ReactChild[];
	errorMessage?: string;
	forwardRef?: React.Ref<HTMLDivElement>;
	helpText?: string;
	inputValue?: string;
	items: string[];
	label?: React.ReactText;
	onItemsChange: (val: string[]) => void;
	onInputChange?: (val: string) => void;
	spritemap?: string;
	validateOnBlur?: boolean;
	validationFn?: (val?: string) => boolean;
}

const MultiSelect: React.FunctionComponent<IProps> = ({
	children,
	errorMessage,
	forwardRef,
	helpText,
	items,
	label,
	onItemsChange,
	spritemap,
	validateOnBlur = false,
	validationFn = () => true,
	inputValue = '',
	onInputChange,
	...otherProps
}) => {
	const [isValid, setIsValid] = React.useState(true);
	const [isFocused, setIsFocused] = React.useState();

	const setNewValue = (newVal: string) => {
		if (validationFn(newVal)) {
			onItemsChange([...items, newVal]);

			if (onInputChange) {
				onInputChange('');
			}
		} else {
			setIsValid(false);
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		const {keyCode} = event;

		if (inputValue && KEYS.includes(keyCode)) {
			event.preventDefault();

			setNewValue(inputValue);
		} else {
			setIsValid(true);
		}
	};

	const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
		const {value} = event.target;

		setIsFocused(false);

		if (value && validateOnBlur) {
			setNewValue(value);
		}
	};

	const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
		const pastedText = event.clipboardData.getData('Text');

		const pastedItems = pastedText
			.split(',')
			.map(item => item.trim())
			.filter(item => item.length);

		if (pastedItems.length > 1) {
			event.preventDefault();

			const validItems = pastedItems.filter(
				item => item && validationFn(item)
			);

			if (validItems.length) {
				onItemsChange([...items, ...validItems]);

				if (validItems.length === items.length) {
					setIsValid(false);
				}
			}
		}
	};

	return (
		<div className="form-group" ref={forwardRef}>
			{label && <label>{label}</label>}

			<div className="input-group input-group-stacked-sm-down">
				<div
					className={classNames('input-group-item', {
						focus: isFocused && isValid,
						['has-error']: !isValid,
					})}
				>
					<div className="form-control form-control-tag-group">
						{items &&
							items.length > 0 &&
							items.map((item, i) => (
								<ClayLabel
									closeButtonProps={{
										onClick: () => {
											onItemsChange([
												...items.slice(0, i),
												...items.slice(i + 1),
											]);
										},
									}}
									key={i}
									spritemap={spritemap}
								>
									{item}
								</ClayLabel>
							))}

						<input
							{...otherProps}
							className="form-control-inset"
							onBlur={handleBlur}
							onChange={event =>
								onInputChange &&
								onInputChange(event.target.value)
							}
							onFocus={() => setIsFocused(true)}
							onKeyDown={handleKeyDown}
							onPaste={handlePaste}
							type="text"
							value={inputValue}
						/>

						{children}
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

export default React.forwardRef<HTMLDivElement, IProps>(
	({inputValue, onInputChange, ...otherProps}, ref?) => {
		const [value, setValue] = React.useState('');

		return (
			<MultiSelect
				forwardRef={ref}
				inputValue={onInputChange ? inputValue : value}
				onInputChange={onInputChange || setValue}
				{...otherProps}
			/>
		);
	}
);
