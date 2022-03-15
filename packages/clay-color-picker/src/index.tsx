/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayDropDown from '@clayui/drop-down';
import {ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import {
	FocusScope,
	TInternalStateOnChange,
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

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Flag to indicate if the DropDown container is showing or not
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
	 * Property to set the initial value of `active`.
	 */
	defaultActive?: boolean;

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
	 * Callback function for when active state changes
	 */
	onActiveChange?: TInternalStateOnChange<boolean>;

	/**
	 * Callback for when the list of colors change
	 */
	onColorsChange?: (val: Array<string>) => void;

	/**
	 * Callback for when the selected color changes
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
	 * Value of the selected color hex
	 */
	value?: string;
}

const ClayColorPicker: React.FunctionComponent<IProps> = ({
	active,
	ariaLabels = DEFAULT_ARIA_LABELS,
	colors,
	defaultActive = false,
	disabled,
	dropDownContainerProps,
	label,
	name,
	onActiveChange,
	onColorsChange,
	onValueChange = () => {},
	predefinedColors,
	showHex = true,
	showPalette = true,
	showPredefinedColorsWithCustom = false,
	small,
	spritemap,
	title,
	useNative = false,
	value = 'FFFFFF',
	...otherProps
}: IProps) => {
	const [customEditorActive, setCustomEditorActive] = React.useState(false);
	const isHex = tinycolor(value).getFormat() === 'hex';

	if (isHex && value.indexOf('#') === 0) {
		value = value.slice(1);
	}

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
		handleName: 'onActiveChange',
		initialValue: defaultActive,
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
										? onValueChange(event.target.value)
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
									value ? `${isHex ? '#' : ''}${value}` : ''
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
								value={value}
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
									onValueChange(newVal);
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
									onValueChange(newVal);
								}}
								onColorsChange={onColorsChange}
								onEditorActiveChange={setCustomEditorActive}
								showPalette={showPalette}
								spritemap={spritemap}
								value={value}
							/>
						)}
					</ClayDropDown.Menu>

					{showHex && (
						<ClayInput.GroupItem append>
							<ClayInput
								{...otherProps}
								aria-label={sub(ariaLabels.selectionIs, [
									value,
								])}
								disabled={disabled}
								insetBefore
								onChange={(event) => {
									onValueChange(event.target.value);
								}}
								ref={inputRef}
								type="text"
								value={value}
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

export default ClayColorPicker;
