/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayForm, {ClayInput} from '@clayui/form';
import React, {useEffect, useReducer, useRef, useState} from 'react';
import tinycolor from 'tinycolor2';

import Alpha from './Alpha';
import GradientSelector from './GradientSelector';
import Hue from './Hue';
import {findColorIndex} from './util';

import type {Instance} from 'tinycolor2';

type State = {
	hex: string;
	hue: number;
	splotch?: number;
};

function reducer(state: State, action: Partial<State>) {
	return {
		...state,
		...action,
	};
}

export enum LimitValue {
	maxRGB = 255,
	maxHue = 360,
	min = 0,
}

export function useEditor(
	value: string,
	color: Instance,
	colors: Array<string>
) {
	const [state, dispatch] = useReducer(reducer, {}, () => {
		const index = colors.findIndex(
			(color) => color.toUpperCase() === value.toUpperCase()
		);

		return {
			hex: color.toHex8(),
			hue: color.toHsv().h,
			splotch: index !== -1 ? index : undefined,
		};
	});

	return [state, dispatch] as const;
}

type RGBInputProps = {
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
};

/**
 * Renders input that displays RGB values
 */
const RGBInput = ({name, onChange, value}: RGBInputProps) => {
	const inputRef = useRef(null);
	const [inputValue, setInputValue] = useState(value);

	useEffect(() => {
		if (document.activeElement !== inputRef.current) {
			setInputValue(value);
		}
	}, [value]);

	return (
		<ClayForm.Group>
			<ClayInput.Group>
				<ClayInput.GroupItem className="input-group-item-focusable">
					<ClayInput
						data-testid={`${name}Input`}
						insetBefore
						max={LimitValue.maxRGB}
						min={LimitValue.min}
						onChange={(event: any) => {
							const value = event.target.value;

							if (value === '') {
								return;
							}

							let newVal = Number(value);

							if (newVal < LimitValue.min) {
								newVal = LimitValue.min;
							} else if (newVal > LimitValue.maxRGB) {
								newVal = LimitValue.maxRGB;
							}

							setInputValue(newVal);

							onChange({[name]: newVal});
						}}
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

type Props = {
	color: Instance;
	colors: Array<string>;
	hex: string;
	hue: number;
	internalToHex: (value: Instance) => string;
	onChange: (color: Instance, active: boolean) => void;
	onColorChange: (color: Instance) => void;
	onHueChange: (value: number) => void;
	onHexChange: (value: string) => void;
};

export function Editor({
	color,
	colors,
	hex,
	hue,
	internalToHex,
	onChange,
	onColorChange,
	onHexChange,
	onHueChange,
}: Props) {
	const {b, g, r} = color.toRgb();
	const {s, v} = color.toHsv();

	const rgbArr: Array<[number, string]> = [
		[r, 'r'],
		[g, 'g'],
		[b, 'b'],
	];

	return (
		<>
			<Hue
				onChange={(hue) => {
					if (hue < LimitValue.min) {
						hue = LimitValue.min;
					} else if (hue > LimitValue.maxHue) {
						hue = LimitValue.maxHue;
					}
					onHueChange(hue);
					onColorChange(
						tinycolor({h: hue, s, v}).setAlpha(color.getAlpha())
					);
				}}
				value={hue}
			/>
			<div className="clay-color-map-group">
				<GradientSelector
					color={color}
					hue={hue}
					onChange={(saturation, visibility) => {
						onColorChange(
							tinycolor({
								h: hue,
								s: saturation,
								v: visibility,
							}).setAlpha(color.getAlpha())
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

								onHueChange(newColor.toHsv().h);
								onColorChange(newColor);
							}}
							value={val}
						/>
					))}
				</div>
			</div>

			<Alpha
				color={`#${color.toHex()}`}
				onChange={(value: number) => {
					const newColor = color.clone();
					onColorChange(newColor.setAlpha(value));
				}}
				value={color.getAlpha()}
			/>

			<div className="clay-color-footer">
				<ClayForm.Group>
					<ClayInput.Group>
						<ClayInput.GroupItem className="input-group-item-focusable">
							<ClayInput
								data-testid="customHexInput"
								insetBefore
								onBlur={(event) => {
									const newColor = tinycolor(
										event.target.value
									);

									if (newColor.isValid()) {
										onHexChange(internalToHex(newColor));
									} else {
										onHexChange(internalToHex(color));
									}
								}}
								onChange={(event) => {
									const newHexValue = event.target.value;

									onHexChange(newHexValue);

									const newColor = tinycolor(newHexValue);

									if (newColor.isValid()) {
										onHueChange(newColor.toHsv().h);

										const hasColor = findColorIndex(
											colors,
											newColor
										);

										onChange(newColor, hasColor === -1);
									}
								}}
								type="text"
								value={hex
									.toUpperCase()
									.substring(0, color.getAlpha() < 1 ? 8 : 6)}
							/>

							<ClayInput.GroupInsetItem before tag="label">
								#
							</ClayInput.GroupInsetItem>
						</ClayInput.GroupItem>
					</ClayInput.Group>
				</ClayForm.Group>
			</div>
		</>
	);
}
