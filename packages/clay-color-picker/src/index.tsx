/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Basic from './Basic';
import Custom from './Custom';
import React, {useEffect, useRef, useState} from 'react';
import Splotch from './Splotch';
import tinycolor from 'tinycolor2';
import {sub} from './util';
import {useDropdownCloseInteractions, useHexInput} from './hooks';

const DEFAULT_COLORS = [
	`000000`,
	`5F5F5F`,
	`9A9A9A`,
	`CBCBCB`,
	`E1E1E1`,
	`FFFFFF`,
	`FF0D0D`,
	`FF8A1C`,
	`2BA676`,
	`006EF8`,
	`7F26FF`,
	`FF21A0`,
	`FF5F5F`,
	`FFB46E`,
	`50D2A0`,
	`4B9BFF`,
	`AF78FF`,
	`FF73C3`,
	`FFB1B1`,
	`FFDEC0`,
	`91E3C3`,
	`9DC8FF`,
	`DFCAFF`,
	`FFC5E6`,
	`FFD9D9`,
	`FFF3E8`,
	`B1EBD5`,
	`C5DFFF`,
	`F8F2FF`,
	`FFEDF7`,
];

const BLANK_COLORS = Array(12).fill(`FFFFFF`);

const DEFAULT_ARIA_LABELS = {
	selectColor: `Select a color`,
	selectionIs: `Color selection is {0}`,
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
	 * Path to spritemap for Icon
	 */
	spritemap: string;

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

const ColorPicker: React.FunctionComponent<Props> = ({
	ariaLabels = DEFAULT_ARIA_LABELS,
	colors,
	label,
	name,
	onColorsChange,
	onValueChange = () => {},
	showHex = true,
	spritemap,
	title,
	useNative = false,
	value = `FFFFFF`,
}) => {
	const dropdownContainerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const valueInputRef = useRef<HTMLInputElement>(null);

	const [active, setActive] = useState(false);
	const [hexInputValue, setHexInputValue] = useHexInput(value);

	useDropdownCloseInteractions(dropdownContainerRef, setActive);

	useEffect(() => {
		if (document.activeElement !== inputRef.current) {
			setHexInputValue(value);
		}
	}, [value]);

	return (
		<div className="clay-color-picker">
			{name && (
				<input
					name={name}
					onChange={e =>
						useNative ? onValueChange(e.target.value) : null
					}
					ref={valueInputRef}
					style={{display: `none`}}
					type={useNative ? `color` : `text`}
					value={value}
				/>
			)}

			{title && <label>{title}</label>}

			<div className="clay-color input-group">
				<div
					className={`input-group-item input-group-item-shrink${
						showHex ? ` input-group-prepend` : ``
					}`}
				>
					<div
						className="input-group-text"
						ref={dropdownContainerRef}
					>
						<Splotch
							aria-label={ariaLabels.selectColor}
							className="dropdown-toggle"
							onClick={() =>
								useNative && valueInputRef.current
									? valueInputRef.current.click()
									: setActive((val: boolean) => !val)
							}
							size={28}
							value={value}
						/>

						{active && (
							<div className="clay-color-dropdown-menu dropdown-menu show">
								{!onColorsChange && (
									<Basic
										colors={colors || DEFAULT_COLORS}
										label={label}
										onChange={onValueChange}
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
										onChange={onValueChange}
										onColorsChange={onColorsChange}
										spritemap={spritemap}
									/>
								)}
							</div>
						)}
					</div>
				</div>

				{showHex && (
					<div className="input-group-append input-group-item">
						<input
							aria-label={sub(ariaLabels.selectionIs, [value])}
							className="form-control input-group-inset input-group-inset-before"
							onBlur={event => {
								const newColor = tinycolor(event.target.value);

								const hexString = newColor.isValid()
									? newColor.toHex()
									: value;

								onValueChange(hexString);
								setHexInputValue(hexString);
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
							value={hexInputValue.toUpperCase().substring(0, 6)}
						/>

						<label className="input-group-inset-item input-group-inset-item-before">
							{`#`}
						</label>
					</div>
				)}
			</div>
		</div>
	);
};

export default ColorPicker;
