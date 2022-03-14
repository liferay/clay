/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayForm, {ClayInput} from '@clayui/form';
import Icon from '@clayui/icon';
import {TInternalStateOnChange, useInternalState} from '@clayui/shared';
import React from 'react';
import tinycolor from 'tinycolor2';

import GradientSelector from './GradientSelector';
import Hue from './Hue';
import Splotch from './Splotch';

function findColor(colors: Array<string>, color: tinycolor.Instance): boolean {
	for (let i = 0; i < colors.length; i++) {
		const currentColor = tinycolor(colors[i]);
		if (tinycolor.equals(currentColor, color)) {
			return true;
		}
	}

	return false;
}

function getCSSVariableColor(value: string) {
	const element = document.createElement('div');

	element.setAttribute('style', `background: ${value};`);

	document.body.appendChild(element);

	const color = tinycolor(getComputedStyle(element).backgroundColor);

	document.body.removeChild(element);

	return color;
}

interface IRGBInputProps {
	/**
	 * Callback function for when the input value is changed
	 */
	onChange: (val: {r?: number; g?: number; b?: number}) => void;

	/**
	 * The name of the input. R, G, or B.
	 */
	name: string;

	/**
	 * The value of the input.
	 */
	value: number;
}

/**
 * Renders input that displays RGB values
 */
const RGBInput: React.FunctionComponent<IRGBInputProps> = ({
	name,
	onChange,
	value,
}) => {
	const inputRef = React.useRef(null);
	const [inputValue, setInputValue] = React.useState(value);

	const handleOnChange = (event: any) => {
		const value = event.target.value;

		if (value === '') {
			return;
		}

		let newVal = Number(value);

		if (newVal < 0) {
			newVal = 0;
		} else if (newVal > 255) {
			newVal = 255;
		}

		setInputValue(newVal);

		onChange({[name]: newVal});
	};

	React.useEffect(() => {
		if (document.activeElement !== inputRef.current) {
			setInputValue(value);
		}
	}, [value]);

	return (
		<ClayForm.Group>
			<ClayInput.Group>
				<ClayInput.GroupItem>
					<ClayInput
						data-testid={`${name}Input`}
						insetBefore
						max="255"
						min="0"
						onChange={handleOnChange}
						ref={inputRef}
						type="number"
						value={inputValue}
					/>
					<ClayInput.GroupInsetItem before tag="label">
						{name.toUpperCase()}
					</ClayInput.GroupInsetItem>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</ClayForm.Group>
	);
};

interface IProps {
	/**
	 * List of colors that will display as a color splotch
	 * these can be either hex values, color names or
	 * css variables.
	 */
	colors: Array<string>;

	/**
	 * Label describing the set of colors provided
	 */
	label?: string;

	/**
	 * Callback for when a color is changed
	 */
	onChange: (val: string) => void;

	/**
	 * Callback for when the list of colors is changed
	 */
	onColorsChange: (val: Array<string>) => void;

	/**
	 * Flag for showing and disabling the palette of colors
	 */
	showPalette?: boolean;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	editorActive?: boolean;

	onEditorActiveChange?: TInternalStateOnChange<boolean>;

	value?: string;
}

const DEFAULT_SPLOTCH_COLOR = 'FFFFFF';

/**
 * Renders the custom color picker
 */
const ClayColorPickerCustom: React.FunctionComponent<IProps> = ({
	colors,
	editorActive,
	label,
	onChange,
	onColorsChange,
	onEditorActiveChange,
	showPalette,
	spritemap,
	value,
}) => {
	const inputRef = React.useRef(null);

	const customMenuRef = React.useRef<HTMLDivElement>(null);

	const [activeSplotchIndex, setActiveSplotchIndex] = React.useState(() => {
		const index = colors.indexOf(value as string);

		return index !== -1 ? index : undefined;
	});

	const [internalEditorActive, setInternalEditorActive] = useInternalState({
		initialValue: !showPalette,
		onChange: onEditorActiveChange,
		value: editorActive,
	});

	const color = React.useMemo(
		() =>
			value!.includes('var(')
				? getCSSVariableColor(value!)
				: tinycolor(value),
		[value]
	);

	const previousColorRef = React.useRef(color);

	const [hue, setHue] = React.useState(color.toHsv().h);
	const [hexInputVal, setHexInputValue] = React.useState(color.toHex());

	const {b, g, r} = color.toRgb();
	const {s, v} = color.toHsv();

	const rgbArr: Array<[number, string]> = [
		[r, 'r'],
		[g, 'g'],
		[b, 'b'],
	];

	const setColors = (color: string, index?: number) => {
		const newColors = [...colors];

		index
			? (newColors[index] = color)
			: (newColors[activeSplotchIndex as number] = color);

		onColorsChange(newColors);
	};

	const setNewColor = (
		colorValue: tinycolor.Instance,
		setInput = true,
		index?: number
	) => {
		const hexString = colorValue.toHex();

		setColors(hexString, index);
		onChange(hexString);

		if (setInput) {
			setHexInputValue(hexString);
		}
	};

	React.useEffect(() => {
		if (
			(color.isValid() || value!.includes('var(')) &&
			!customMenuRef.current?.contains(document.activeElement)
		) {
			setHue(color.toHsv().h);
			setHexInputValue(color.toHex());

			const index = colors.indexOf(value as string);

			if (index !== -1) {
				setColors(
					value!.includes('var(') ? value! : color.toHex(),
					index
				);
				setActiveSplotchIndex(index);
			} else {
				setActiveSplotchIndex(undefined);
			}
		}
	}, [value, color]);

	return (
		<div ref={customMenuRef}>
			{label && (
				<div className="clay-color-header">
					<span className="component-title">{label}</span>

					{showPalette && (
						<button
							className={`${
								internalEditorActive ? 'close' : ''
							} component-action`}
							onClick={() =>
								setInternalEditorActive(!internalEditorActive)
							}
							type="button"
						>
							<Icon
								spritemap={spritemap}
								symbol={internalEditorActive ? 'times' : 'drop'}
							/>
						</button>
					)}
				</div>
			)}

			{showPalette && (
				<div className="clay-color-swatch">
					{colors.map((hex, index) => (
						<div className="clay-color-swatch-item" key={index}>
							<Splotch
								active={index === activeSplotchIndex}
								onClick={() => {
									if (activeSplotchIndex !== index) {
										setActiveSplotchIndex(index);
									}

									if (hex === DEFAULT_SPLOTCH_COLOR) {
										setInternalEditorActive(true);

										if (
											previousColorRef.current !==
												tinycolor(
													DEFAULT_SPLOTCH_COLOR
												) &&
											!findColor(colors, color)
										) {
											setNewColor(color, true, index);
											setHue(color.toHsv().h);
										} else {
											const newColor = tinycolor(hex);

											setNewColor(newColor, true, index);
											setHue(newColor.toHsv().h);
										}
									} else {
										const newColor = hex!.includes('var(')
											? getCSSVariableColor(hex!)
											: tinycolor(hex);

										previousColorRef.current = newColor;

										setHue(newColor.toHsv().h);
										setHexInputValue(newColor.toHex());
										onChange(hex);
									}
								}}
								value={hex}
							/>
						</div>
					))}
				</div>
			)}

			{editorActive && (
				<>
					<div className="clay-color-map-group">
						<GradientSelector
							color={color}
							hue={hue}
							onChange={(saturation, visibility) => {
								setNewColor(
									tinycolor({
										h: hue,
										s: saturation,
										v: visibility,
									})
								);
							}}
						/>

						<div className="clay-color-map-values">
							{rgbArr.map(([val, key]) => (
								<RGBInput
									key={key}
									name={key}
									onChange={(newVal) => {
										const newColor = tinycolor({
											b,
											g,
											r,
											...newVal,
										});

										setHue(newColor.toHsv().h);
										setNewColor(newColor);
									}}
									value={val}
								/>
							))}
						</div>
					</div>

					<Hue
						onChange={(hue) => {
							setHue(hue);

							setNewColor(tinycolor({h: hue, s, v}));
						}}
						value={hue}
					/>

					<div className="clay-color-footer">
						<ClayForm.Group>
							<ClayInput.Group>
								<ClayInput.GroupItem>
									<ClayInput
										data-testid="customHexInput"
										insetBefore
										onBlur={(event) => {
											const newColor = tinycolor(
												event.target.value
											);

											if (newColor.isValid()) {
												setHexInputValue(
													newColor.toHex()
												);
											} else {
												setHexInputValue(color.toHex());
											}
										}}
										onChange={(event) => {
											const newHexValue =
												event.target.value;

											setHexInputValue(newHexValue);

											const newColor =
												tinycolor(newHexValue);

											if (newColor.isValid()) {
												setHue(newColor.toHsv().h);
												setNewColor(newColor, false);
											}
										}}
										ref={inputRef}
										type="text"
										value={hexInputVal
											.toUpperCase()
											.substring(0, 6)}
									/>

									<ClayInput.GroupInsetItem
										before
										tag="label"
									>
										#
									</ClayInput.GroupInsetItem>
								</ClayInput.GroupItem>
							</ClayInput.Group>
						</ClayForm.Group>
					</div>
				</>
			)}
		</div>
	);
};

export default ClayColorPickerCustom;
