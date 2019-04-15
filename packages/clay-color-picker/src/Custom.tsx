/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import GradientSelector from './GradientSelector';
import Hue from './Hue';
import Icon from '@clayui/icon';
import React, {useState} from 'react';
import Splotch from './Splotch';
import tinycolor from 'tinycolor2';
import {useHexInput} from './hooks';

interface RGBInputProps {
	onChange: (val: {r?: number; g?: number; b?: number}) => void;
	name: string;
	value: number;
}

/**
 * Renders input that displays RGB values
 */
const RGBInput: React.FunctionComponent<RGBInputProps> = ({
	name,
	onChange,
	value,
}) => (
	<div className="form-group">
		<div className="input-group">
			<div className="input-group-item">
				<input
					className="form-control input-group-inset input-group-inset-before"
					onChange={event => {
						const newVal = Number(event.target.value);

						onChange({[name]: newVal});
					}}
					type="text"
					value={value}
				/>
				<label className="input-group-inset-item input-group-inset-item-before">
					{name.toUpperCase()}
				</label>
			</div>
		</div>
	</div>
);

interface CustomProps {
	colors: string[];
	label?: string;
	onChange: (val: string) => void;
	onColorsChange: (val: string[]) => void;
	spritemap: string;
	value: string;
}

/**
 * Renders the custom color picker
 */
const Custom: React.FunctionComponent<CustomProps> = ({
	colors,
	label,
	onChange,
	onColorsChange,
	spritemap,
	value,
}) => {
	const color = tinycolor(value);

	const [activeSplotchIndex, setActiveSplotchIndex] = useState(0);
	const [hue, setHue] = useState(0);
	const [editorActive, setEditorActive] = useState(false);
	const [hexInputVal, setHexInput] = useHexInput(color.toHex());

	const {b, g, r} = color.toRgb();
	const {s, v} = color.toHsv();

	const rgbArr: [number, string][] = [[r, 'r'], [g, 'g'], [b, 'b']];

	const setNewColor = (colorValue: tinycolor.Instance, setInput = true) => {
		const hexString = colorValue.toHex();

		const newColors = [...colors];

		newColors[activeSplotchIndex] = hexString;

		onColorsChange(newColors);

		onChange(hexString);

		if (setInput) {
			setHexInput(colorValue.toHex());
		}
	};

	return (
		<React.Fragment>
			{label && (
				<div className="clay-color-header">
					<span className="component-title">{label}</span>

					<button
						className={`${
							editorActive ? 'close' : ''
						} component-action`}
						onClick={() => setEditorActive(!editorActive)}
						type="button"
					>
						<Icon
							spritemap={spritemap}
							symbol={editorActive ? 'times' : 'drop'}
						/>
					</button>
				</div>
			)}

			<div className="clay-color-swatch">
				{colors.map((hex, i) => (
					<div className="clay-color-swatch-item" key={i}>
						<Splotch
							active={i === activeSplotchIndex}
							onClick={() => {
								if (hex === 'FFFFFF') {
									setEditorActive(true);
								}

								setActiveSplotchIndex(i);

								setHue(tinycolor(hex).toHsv().h);

								onChange(hex);
							}}
							value={hex}
						/>
					</div>
				))}
			</div>

			{editorActive && (
				<React.Fragment>
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
									onChange={newVal => {
										const color = tinycolor({
											b,
											g,
											r,
											...newVal,
										});

										setHue(color.toHsv().h);
										setNewColor(color);
									}}
									value={val}
								/>
							))}
						</div>
					</div>

					<Hue
						onChange={hue => {
							setHue(hue);

							setNewColor(tinycolor({h: hue, s, v}));
						}}
						value={hue}
					/>

					<div className="clay-color-footer">
						<div className="form-group">
							<div className="input-group">
								<div className="input-group-item">
									<input
										className="form-control input-group-inset input-group-inset-before"
										onBlur={event => {
											const newColor = tinycolor(
												event.target.value
											);

											if (newColor.isValid()) {
												setHexInput(newColor.toHex());
											} else {
												setHexInput(color.toHex());
											}
										}}
										onChange={event => {
											const newHexValue =
												event.target.value;

											setHexInput(newHexValue);

											const newColor = tinycolor(
												newHexValue
											);

											if (newColor.isValid()) {
												setHue(newColor.toHsv().h);
												setNewColor(newColor, false);
											}
										}}
										type="text"
										value={hexInputVal
											.toUpperCase()
											.substring(0, 6)}
									/>

									<label className="input-group-inset-item input-group-inset-item-before">
										{'#'}
									</label>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Custom;
