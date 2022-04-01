/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown from '@clayui/drop-down';
import {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import {
	FocusScope,
	InternalDispatch,
	sub,
	useInternalState,
} from '@clayui/shared';
import React from 'react';
import tinycolor from 'tinycolor2';

import Basic from './Basic';
import Custom from './Custom';
import Splotch from './Splotch';

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

interface IProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	/**
	 * Property to define whether the DropDown menu is expanded or not
	 * (controlled).
	 */
	active?: boolean;

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
	 * Property to set the default value of `active` (uncontrolled).
	 */
	defaultActive?: boolean;

	/**
	 * Property to set the default value (uncontrolled).
	 */
	defaultValue?: string;

	/**
	 * Flag for adding ColorPicker in disabled state
	 */
	disabled?: boolean;

	/**
	 * Props to add to the DropDown container.
	 */
	dropDownContainerProps?: React.ComponentProps<
		typeof ClayDropDown.Menu
	>['containerProps'];

	/**
	 * The label describing the collection of colors in the menu
	 */
	label?: string;

	/**
	 * The input attribute for name
	 */
	name?: string;

	/**
	 * Callback function for when active state changes (controlled).
	 */
	onActiveChange?: InternalDispatch<boolean>;

	/**
	 * Callback that is called when the value changes (controlled).
	 */
	onChange?: InternalDispatch<string>;

	/**
	 * Callback for when the list of colors change
	 */
	onColorsChange?: (val: Array<string>) => void;

	/**
	 * Callback for when the selected color changes
	 * @deprecated since v3.51.0 - use `onChange` instead.
	 */
	onValueChange?: (val: string) => void;

	predefinedColors?: Array<string>;

	/**
	 * Determines if the hex input should render
	 */
	showHex?: boolean;

	/**
	 * Flag for showing and disabling the palette of colors.
	 * This defaults to true
	 */
	showPalette?: boolean;

	showPredefinedColorsWithCustom?: boolean;

	/**
	 * Flag to indicate if `input-group-sm` class should
	 * be applied to `ClayInput.Group`
	 */
	small?: boolean;

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
	 * The value property sets the current value (controlled).
	 */
	value?: string;
}

const ClayColorPicker: React.FunctionComponent<IProps> = ({
	active,
	ariaLabels = DEFAULT_ARIA_LABELS,
	colors,
	defaultActive = false,
	defaultValue = 'FFFFFF',
	disabled,
	dropDownContainerProps,
	label,
	name,
	onActiveChange,
	onChange,
	onColorsChange,
	onValueChange,
	predefinedColors,
	showHex = true,
	showPalette = true,
	showPredefinedColorsWithCustom = false,
	small,
	spritemap,
	title,
	useNative = false,
	value,
	...otherProps
}: IProps) => {
	const [internalValue, setValue] = useInternalState({
		defaultName: 'defaultValue',
		defaultValue: defaultValue
			? normalizeValueHex(defaultValue)
			: undefined,
		handleName: 'onChange',
		name: 'value',
		onChange: onChange ?? onValueChange,
		value,
	});

	const [customEditorActive, setCustomEditorActive] = React.useState(false);

	const isHex = tinycolor(internalValue).getFormat() === 'hex';

	const inputColorTypeSupport = React.useMemo(() => {
		if (typeof document !== 'undefined') {
			var input = document.createElement('input');
			input.setAttribute('type', 'color');

			return input.value !== '';
		}

		return true;
	}, []);

	if (!inputColorTypeSupport) {
		useNative = false;
	}

	const triggerElementRef = React.useRef<HTMLDivElement>(null);
	const dropdownContainerRef = React.useRef<HTMLDivElement>(null);
	const inputRef = React.useRef<HTMLInputElement>(null);
	const valueInputRef = React.useRef<HTMLInputElement>(null);
	const splotchRef = React.useRef<HTMLButtonElement>(null);

	const [internalActive, setInternalActive] = useInternalState({
		defaultName: 'defaultActive',
		defaultValue: defaultActive,
		handleName: 'onActiveChange',
		name: 'active',
		onChange: onActiveChange,
		value: active,
	});

	React.useEffect(() => {
		if (!internalActive) {
			setCustomEditorActive(false);
		}
	}, [internalActive]);

	return (
		<FocusScope arrowKeysUpDown={false}>
			<div className="clay-color-picker">
				{title && <label>{title}</label>}

				<ClayInput.Group
					className="clay-color"
					ref={triggerElementRef}
					small={small}
				>
					<ClayInput.GroupItem prepend={showHex} shrink>
						{name && (
							<input
								name={name}
								onChange={(event) =>
									useNative
										? setValue(event.target.value)
										: null
								}
								ref={valueInputRef}
								style={{
									height: 0,
									position: 'absolute',
									visibility: 'hidden',
									width: 0,
								}}
								tabIndex={-1}
								type={useNative ? 'color' : 'text'}
								value={
									internalValue
										? `${isHex ? '#' : ''}${internalValue}`
										: ''
								}
							/>
						)}

						<ClayInput.GroupText>
							<Splotch
								aria-label={ariaLabels.selectColor}
								className="dropdown-toggle"
								disabled={disabled}
								onClick={() => {
									{
										if (
											useNative &&
											valueInputRef.current
										) {
											valueInputRef.current.click();
										} else {
											setInternalActive(!internalActive);
											if (!showPalette) {
												setCustomEditorActive(
													!customEditorActive
												);
											}
										}
									}
								}}
								ref={splotchRef}
								value={internalValue}
							/>
						</ClayInput.GroupText>
					</ClayInput.GroupItem>

					<ClayDropDown.Menu
						active={internalActive}
						alignElementRef={triggerElementRef}
						className="clay-color-dropdown-menu"
						containerProps={dropDownContainerProps}
						focusRefOnEsc={splotchRef}
						onSetActive={setInternalActive}
						ref={dropdownContainerRef}
					>
						{(!onColorsChange ||
							(showPredefinedColorsWithCustom &&
								!customEditorActive)) && (
							<Basic
								colors={
									(showPredefinedColorsWithCustom
										? predefinedColors
										: colors) || DEFAULT_COLORS
								}
								label={label}
								onChange={(newVal) => {
									setValue(newVal);
									setInternalActive(!internalActive);

									if (splotchRef.current) {
										splotchRef.current.focus();
									}
								}}
							/>
						)}

						{onColorsChange && (
							<Custom
								active={internalActive}
								colors={
									colors
										? colors
												.concat(BLANK_COLORS)
												.slice(0, 12)
										: BLANK_COLORS
								}
								editorActive={customEditorActive}
								label={label}
								onChange={(newVal) => {
									setValue(newVal);
								}}
								onColorsChange={onColorsChange}
								onEditorActiveChange={setCustomEditorActive}
								showPalette={showPalette}
								spritemap={spritemap}
								value={internalValue}
							/>
						)}
					</ClayDropDown.Menu>

					{showHex && (
						<ClayInput.GroupItem append>
							<ClayInput
								{...otherProps}
								aria-label={sub(ariaLabels.selectionIs, [
									internalValue,
								])}
								disabled={disabled}
								insetBefore
								onBlur={(event) => {
									const value = event.target.value;

									const newColor = tinycolor(value);

									if (newColor.isValid()) {
										if (newColor.getFormat() === 'hex') {
											setValue(newColor.toHex());
										} else if (
											newColor.toString() !== value
										) {
											setValue(newColor.toString());
										}
									} else if (!value.includes('var(')) {
										setValue('');
									}
								}}
								onChange={(event) => {
									setValue(
										normalizeValueHex(event.target.value)
									);
								}}
								ref={inputRef}
								type="text"
								value={internalValue}
							/>

							<ClayInput.GroupInsetItem before tag="label">
								{isHex ? (
									'#'
								) : (
									<ClayIcon
										spritemap={spritemap}
										style={{width: 10}}
										symbol="color-picker"
									/>
								)}
							</ClayInput.GroupInsetItem>
						</ClayInput.GroupItem>
					)}
				</ClayInput.Group>
			</div>
		</FocusScope>
	);
};

function normalizeValueHex(value: string) {
	const isHex = tinycolor(value).getFormat() === 'hex';

	if (isHex && value.indexOf('#') === 0) {
		value = value.slice(1);
	}

	return value;
}

export default ClayColorPicker;
