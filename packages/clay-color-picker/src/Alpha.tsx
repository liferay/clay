/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import ClaySlider from '@clayui/slider';
import React from 'react';

type Props = {
	/**
	 * Sets the color on ClaySlider form-control-range
	 */
	color: string;

	/**
	 * Callback function for when the hue value changes
	 */
	onChange: (value: number) => void;

	/**
	 * The value of the alpha transparency
	 */
	value: number;
};

/**
 * Renders Alpha component
 */
const ClayColorPickerAlpha = ({color, onChange, value = 0}: Props) => {
	return (
		<div className="clay-color-form-group">
			<ClaySlider
				className="clay-color-slider clay-color-slider-alpha"
				max={1}
				min={0}
				onChange={onChange}
				showTooltip={false}
				step={0.01}
				style={{
					color,
				}}
				value={value}
			/>
			<ClayInput.Group>
				<ClayInput.GroupItem>
					<ClayInput
						data-testid="aInput"
						insetBefore
						max="1"
						min="0"
						onChange={(event) =>
							onChange(Number(event.target.value))
						}
						step="0.01"
						type="number"
						value={
							value !== 0 && value !== 1
								? value.toFixed(2)
								: value
						}
					/>
					<ClayInput.GroupInsetItem before tag="label">
						A
					</ClayInput.GroupInsetItem>
				</ClayInput.GroupItem>
			</ClayInput.Group>
		</div>
	);
};

export default ClayColorPickerAlpha;
