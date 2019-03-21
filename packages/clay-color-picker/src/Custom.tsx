/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import GradientSelector from './GradientSelector';
import Hue from './Hue';
import React, {useState} from 'react';
import Splotch from './Splotch';
import tinycolor from 'tinycolor2';
import {useHexInput} from './hooks';

/**
 * Renders custom color icon
 * @return {React.Component}
 */
const CustomColorIcon: React.SFC = () => {
	return (
		<svg
			fill="none"
			height="17"
			viewBox="0 0 12 17"
			width="12"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M11 11C11 13.7614 8.76142 16 6 16C3.23858 16 1 13.7614 1 11C1 9.79197 1.58669 8.71677 2.65995 7.20346C2.85539 6.92789 3.06515 6.64012 3.28534 6.33805C4.11185 5.20415 5.08532 3.86863 6 2.22004C6.91468 3.86863 7.88816 5.20415 8.71467 6.33805C8.93485 6.64013 9.14461 6.92789 9.34005 7.20346C10.4133 8.71677 11 9.79197 11 11Z"
				stroke="#6B6C7E"
				strokeWidth="2"
			/>
			<path
				d="M12 11.0001C12 14.3138 9.31371 17.0001 6 17.0001C2.68629 17.0001 0 14.3138 0 11.0001C2 10 3.5 12.5001 6 11.0001C8.5 9.5 10 10 12 11.0001Z"
				fill="#6B6C7E"
			/>
		</svg>
	);
};

interface RGBInputProps {
	onChange: ({}) => void;
	name: string;
	value: number;
}

/**
 * Renders input that displays RGB values
 * @return {React.Component}
 */
const RGBInput: React.SFC<RGBInputProps> = ({name, onChange, value}) => {
	return (
		<div className="form-group rgb-info">
			<div className="input-group">
				<div className="input-group-item input-group-item-shrink input-group-prepend">
					<span className="input-group-text">
						{name.toUpperCase()}
					</span>
				</div>
				<div className="input-group-append input-group-item">
					<input
						className="form-control"
						onChange={event => {
							const newVal = Number(event.target.value);

							onChange({[name]: newVal});
						}}
						type="text"
						value={value}
					/>
				</div>
			</div>
		</div>
	);
};

interface CustomProps {
	colors: string[];
	label?: string;
	onChange: (val: string) => void;
	onColorsChange: (val: string[]) => void;
	value: string;
}

/**
 * Renders the custom color picker
 * @return {React.Component}
 */
const Custom: React.SFC<CustomProps> = ({
	colors,
	label,
	onChange,
	onColorsChange,
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
		const hexString = colorValue.toHexString();

		const newColors = [...colors];

		newColors[activeSplotchIndex] = hexString;

		onColorsChange(newColors);

		onChange(hexString);

		if (setInput) {
			setHexInput(colorValue.toHex());
		}
	};

	return (
		<div>
			{label && (
				<div className="label-container">
					<label>{label}</label>
					<button
						className={`${
							editorActive ? 'active ' : ''
						}btn btn-monospaced btn-sm`}
						onClick={() => setEditorActive(!editorActive)}
						type="button"
					>
						<CustomColorIcon />
					</button>
				</div>
			)}

			<div className="splotch-grid">
				{colors.map((hex, i) => (
					<Splotch
						active={i === activeSplotchIndex}
						key={i}
						onClick={() => {
							if (hex === '#FFFFFF') {
								setEditorActive(true);
							}

							setActiveSplotchIndex(i);

							setHue(tinycolor(hex).toHsv().h);

							onChange(hex);
						}}
						value={hex}
					/>
				))}
			</div>

			{editorActive && (
				<React.Fragment>
					<div className="gradient-info">
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

						<div>
							{rgbArr.map(([val, key]) => (
								<RGBInput
									key={key}
									name={key}
									onChange={newVal => {
										const color = tinycolor({
											r,
											g,
											b,
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

					<div className="input-group hex-info">
						<div className="input-group-append input-group-item">
							<input
								className="form-control"
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
									const newHexValue = event.target.value;

									setHexInput(newHexValue);

									const newColor = tinycolor(newHexValue);

									if (newColor.isValid()) {
										setHue(newColor.toHsv().h);
										setNewColor(newColor, false);
									}
								}}
								type="text"
								value={`#${hexInputVal
									.toUpperCase()
									.substring(0, 6)}`}
							/>
						</div>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default Custom;
