/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import DropDown from '@clayui/drop-down';
import {ClayInput} from '@clayui/form';
import {FocusScope, sub} from '@clayui/shared';
import React, {useEffect, useRef, useState} from 'react';
import tinycolor from 'tinycolor2';

import Basic from './Basic';
import Custom from './Custom';
import Splotch from './Splotch';
import {useHexInput} from './hooks';

const DEFAULT_COLORS = [
	'000000',
	'5F5F5F',
	'9A9A9A',
	'CBCBCB',
	'E1E1E1',
	'FFFFFF',
	'FF0D0D',
	'FF8A1C',
	'2BA676',
	'006EF8',
	'7F26FF',
	'FF21A0',
	'FF5F5F',
	'FFB46E',
	'50D2A0',
	'4B9BFF',
	'AF78FF',
	'FF73C3',
	'FFB1B1',
	'FFDEC0',
	'91E3C3',
	'9DC8FF',
	'DFCAFF',
	'FFC5E6',
	'FFD9D9',
	'FFF3E8',
	'B1EBD5',
	'C5DFFF',
	'F8F2FF',
	'FFEDF7',
];

const BLANK_COLORS = Array(12).fill('FFFFFF');

const DEFAULT_ARIA_LABELS = {
	selectColor: 'Select a color',
	selectionIs: 'Color selection is {0}',
};

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Labels for the aria attributes
	 */
	ariaLabels?: {
		selectColor: string;
		selectionIs: string;
	};

	/**
	 * List of color hex values
	 */
	colors?: Array<string>;

	/**
	 * Flag for adding ColorPicker in disabled state
	 */
	disabled?: boolean;

	/**
	 * The label describing the collection of colors in the menu
	 */
	label?: string;

	/**
	 * The input attribute for name
	 */
	name?: string;

	/**
	 * Callback for when the list of colors change
	 */
	onColorsChange?: (val: Array<string>) => void;

	/**
	 * Callback for when the selected color changes
	 */
	onValueChange?: (val: string) => void;

	/**
	 * Determines if the hex input should render
	 */
	showHex?: boolean;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * Title to describe the color picker form element
	 */
	title?: string;

	/**
	 * Determines if the native color picker should be used
	 */
	useNative?: boolean;

	/**
	 * Value of the selected color hex
	 */
	value?: string;
}

const ClayColorPicker: React.FunctionComponent<IProps> = ({
	ariaLabels = DEFAULT_ARIA_LABELS,
	colors,
	disabled,
	label,
	name,
	onBlur = () => {},
	onColorsChange,
	onValueChange = () => {},
	showHex = true,
	spritemap,
	title,
	useNative = false,
	value = 'FFFFFF',
	...otherProps
}: IProps) => {
	const triggerElementRef = useRef<HTMLDivElement>(null);
	const dropdownContainerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const valueInputRef = useRef<HTMLInputElement>(null);
	const splotchRef = useRef<HTMLButtonElement>(null);

	const [active, setActive] = useState(false);
	const [hexInputValue, setHexInputValue] = useHexInput(value);

	useEffect(() => {
		if (document.activeElement !== inputRef.current) {
			setHexInputValue(value);
		}
	}, [value]);

	return (
		<FocusScope arrowKeysUpDown={false}>
			<div className="clay-color-picker">
				{name && (
					<input
						name={name}
						onChange={e =>
							useNative ? onValueChange(e.target.value) : null
						}
						ref={valueInputRef}
						style={{display: 'none'}}
						type={useNative ? 'color' : 'text'}
						value={value}
					/>
				)}

				{title && <label>{title}</label>}

				<ClayInput.Group className="clay-color" ref={triggerElementRef}>
					<ClayInput.GroupItem prepend={showHex} shrink>
						<ClayInput.GroupText>
							<Splotch
								aria-label={ariaLabels.selectColor}
								className="dropdown-toggle"
								disabled={disabled}
								onClick={() =>
									useNative && valueInputRef.current
										? valueInputRef.current.click()
										: setActive((val: boolean) => !val)
								}
								ref={splotchRef}
								size={28}
								value={value}
							/>
						</ClayInput.GroupText>
					</ClayInput.GroupItem>

					<DropDown.Menu
						active={active}
						alignElementRef={triggerElementRef}
						className="clay-color-dropdown-menu"
						onSetActive={setActive}
						ref={dropdownContainerRef}
					>
						{!onColorsChange && (
							<Basic
								colors={colors || DEFAULT_COLORS}
								label={label}
								onChange={value => {
									onValueChange(value);
									setActive((val: boolean) => !val);

									if (splotchRef.current) {
										splotchRef.current.focus();
									}
								}}
							/>
						)}

						{onColorsChange && (
							<Custom
								colors={
									colors
										? colors
												.concat(BLANK_COLORS)
												.slice(0, 12)
										: BLANK_COLORS
								}
								label={label}
								onChange={value => {
									onValueChange(value);
								}}
								onColorsChange={onColorsChange}
								spritemap={spritemap}
							/>
						)}
					</DropDown.Menu>

					{showHex && (
						<ClayInput.GroupItem append>
							<ClayInput
								{...otherProps}
								aria-label={sub(ariaLabels.selectionIs, [
									value,
								])}
								disabled={disabled}
								insetBefore
								onBlur={event => {
									const newColor = tinycolor(
										event.target.value
									);

									const hexString = newColor.isValid()
										? newColor.toHex()
										: value;

									onValueChange(hexString);
									setHexInputValue(hexString);
									onBlur(event);
								}}
								onChange={event => {
									const newHexValue = event.target.value;

									const newColor = tinycolor(newHexValue);

									setHexInputValue(newHexValue);

									if (newColor.isValid()) {
										onValueChange(newColor.toHex());
									}
								}}
								ref={inputRef}
								type="text"
								value={hexInputValue
									.toUpperCase()
									.substring(0, 6)}
							/>

							<ClayInput.GroupInsetItem before tag="label">
								{'#'}
							</ClayInput.GroupInsetItem>
						</ClayInput.GroupItem>
					)}
				</ClayInput.Group>
			</div>
		</FocusScope>
	);
};

export default ClayColorPicker;
