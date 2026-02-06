/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {ClayInput} from '@clayui/form';
import ClaySlider from '@clayui/slider';
import React from 'react';

import {LimitValue} from './Editor';
type Props = {

	/**
	 * Callback function for when the hue value changes
	 */
	onChange: (hue: number) => void;

	/**
	 * The value of the Hue of the color
	 */
	value: number;
};

/**
 * Renders Hue component
 */
function ClayColorPickerHue({value = 0, onChange = () => {}}: Props) {
	return (
		<div className="clay-color-form-group">
			<ClaySlider
				className="clay-color-slider clay-color-slider-hue"
				data-testid="hueSlider"
				max={LimitValue.maxHue}
				min={LimitValue.min}
				onChange={onChange}
				showTooltip={false}
				step={1}
				style={{
					color: `hsl(${value}, 100%, 50%)`,
				}}
				value={value}
			/>

			<ClayInput.Group>
				<ClayInput.GroupItem>
					<ClayInput
						data-testid="hInput"
						insetBefore
						max="360"
						min="0"
						onChange={(event) => {
							const value = event.target.value;
							let newVal = Number(value);
							if (newVal < 0) {
								newVal = 0;
							}
							else if (newVal > 360) {
								newVal = 360;
							}
							onChange(newVal);
						}}
						type="number"
						value={value}
					/>

					<ClayInput.GroupInsetItem before tag="label">
						H
					</ClayInput.GroupInsetItem>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</div>
	);
}

export default ClayColorPickerHue;
