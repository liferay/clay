/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayInput} from '@clayui/form';
import ClaySlider from '@clayui/slider';
import React, {useState} from 'react';

type Props = {
	/**
	 * Callback function for when the hue value changes
	 */
	onChange: (event: any) => void;

	/**
	 * The inline styles to add on ClaySlider
	 */
	style: {
		color: string;
	};

	/**
	 * The value of the alpha transparency
	 */
	value: number;
};

/**
 * Renders Alpha component
 */
const ClayColorPickerAlpha = ({
	style,
	value = 0,
	onChange = () => {},
}: Props) => {
	const [alpha, setAlpha] = useState(value);

	const handleOnChangeEnd = (event: any) => {
		setAlpha(event.target.value);

		onChange(event);

		event.target.blur();

		event.target.focus();
	};

	React.useEffect(() => {
		setAlpha(value);
	}, [value]);

	return (
		<div className="clay-color-form-group">
			<ClaySlider
				className="clay-color-slider clay-color-slider-alpha"
				max={1}
				min={0}
				onChange={setAlpha}
				onKeyUp={(event) => {
					const arrowKeys = [
						'ArrowDown',
						'ArrowLeft',
						'ArrowRight',
						'ArrowUp',
					];

					if (arrowKeys.indexOf(event.key) > -1) {
						handleOnChangeEnd(event);
					}
				}}
				onPointerUp={handleOnChangeEnd}
				showTooltip={false}
				step={0.01}
				style={style}
				value={alpha}
			/>
			<ClayInput.Group>
				<ClayInput.GroupItem>
					<ClayInput
						data-testid="aInput"
						insetBefore
						max="1"
						min="0"
						onChange={(event) => {
							const val = event.target.value;

							let newVal = Number(val);

							if (newVal < 0) {
								newVal = 0;
							} else if (newVal > 1) {
								newVal = 1;
							}

							setAlpha(newVal);
						}}
						step="0.01"
						type="number"
						value={alpha}
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
