/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import './ClayColorPicker.scss';
import Basic from './Basic';
import Custom from './Custom';
import React, {useEffect, useRef, useState} from 'react';
import Splotch from './Splotch';
import tinycolor from 'tinycolor2';
import {sub} from './util';
import {useHexInput} from './hooks';

const ESC_KEY_CODE = 27;

const DEFAULT_COLORS = [
	'#000000',
	'#5F5F5F',
	'#9A9A9A',
	'#CBCBCB',
	'#E1E1E1',
	'#FFFFFF',
	'#FF0D0D',
	'#FF8A1C',
	'#2BA676',
	'#006EF8',
	'#7F26FF',
	'#FF21A0',
	'#FF5F5F',
	'#FFB46E',
	'#50D2A0',
	'#4B9BFF',
	'#AF78FF',
	'#FF73C3',
	'#FFB1B1',
	'#FFDEC0',
	'#91E3C3',
	'#9DC8FF',
	'#DFCAFF',
	'#FFC5E6',
	'#FFD9D9',
	'#FFF3E8',
	'#B1EBD5',
	'#C5DFFF',
	'#F8F2FF',
	'#FFEDF7',
];

const DEFAULT_ARIA_LABELS = {
	selectColor: 'Select a color',
	selectionIs: 'Color selection is {0}',
};

interface Props {
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
	colors?: string[];

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
	onColorsChange?: (val: string[]) => void;

	/**
	 * Callback for when the selected color changes
	 */
	onValueChange?: (val: string) => void;

	/**
	 * Determines if the hex input should render
	 */
	showHex?: boolean;

	/**
	 * Determines if the native color picker should be used
	 */
	useNative?: boolean;

	/**
	 * Value of the selected color hex
	 */
	value?: string;
}

const ColorPicker: React.FunctionComponent<Props> = ({
	ariaLabels = DEFAULT_ARIA_LABELS,
	colors = [],
	label,
	name,
	onColorsChange = () => {},
	onValueChange = () => {},
	showHex = false,
	useNative = false,
	value = '#FFFFFF',
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const valueInputRef = useRef<HTMLInputElement>(null);

	const [active, setActive] = useState(false);
	const [hexInputValue, setHexInput] = useHexInput(value.substring(1, 7));

	useEffect(() => {
		document.activeElement !== inputRef.current
			? setHexInput(value.substring(1, 7))
			: undefined;
	}, [value]);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (
				event.target instanceof Element &&
				containerRef.current &&
				!containerRef.current.contains(event.target)
			) {
				setActive(false);
			}
		};

		const handleEsc = (event: KeyboardEvent) =>
			event.keyCode === ESC_KEY_CODE ? setActive(false) : undefined;

		window.addEventListener('mousedown', handleClick);
		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleEsc);
		};
	}, []);

	return (
		<div className="clay-color-picker" ref={containerRef}>
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

			<div className="input-group">
				<div
					className={`input-group-item input-group-item-shrink${
						showHex ? ' input-group-prepend' : ''
					}`}
				>
					<span className="input-group-text input-group-text-secondary">
						<div className="open-control open-checkbox">
							<Splotch
								aria-label={ariaLabels.selectColor}
								className="btn btn-secondary"
								onClick={() =>
									useNative && valueInputRef.current
										? valueInputRef.current.click()
										: setActive(!active)
								}
								size={28}
								value={value}
							/>
						</div>
					</span>
				</div>

				{showHex && (
					<React.Fragment>
						<div className="input-group-append input-group-item">
							<input
								aria-label={sub(ariaLabels.selectionIs, [
									value,
								])}
								className="form-control"
								onBlur={event => {
									const newColor = tinycolor(
										event.target.value
									);

									const hexString = newColor.isValid()
										? newColor.toHexString()
										: value;

									onValueChange(hexString);
									setHexInput(hexString);
								}}
								onChange={event => {
									const newHexValue = event.target.value;

									const newColor = tinycolor(newHexValue);

									setHexInput(newHexValue);

									if (newColor.isValid()) {
										onValueChange(newColor.toHexString());
									}
								}}
								ref={inputRef}
								type="text"
								value={`#${hexInputValue
									.toUpperCase()
									.substring(0, 6)}`}
							/>
						</div>
					</React.Fragment>
				)}
			</div>

			{active && (
				<div className="picker-overlay">
					{!onColorsChange && (
						<Basic
							colors={colors || DEFAULT_COLORS}
							label={label}
							onChange={onValueChange}
						/>
					)}

					{onColorsChange && (
						<Custom
							colors={colors.concat(
								Array(12 - colors.length).fill('#FFFFFF')
							)}
							label={label}
							onChange={onValueChange}
							onColorsChange={onColorsChange}
							value={value}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default ColorPicker;
