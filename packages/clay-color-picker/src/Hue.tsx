/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClaySlider from '@clayui/slider';
import React, {useState} from 'react';

import {usePointerPosition} from './hooks';

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
const ClayColorPickerHue = ({value = 0, onChange = () => {}}: Props) => {
	const containerRef = React.useRef<HTMLDivElement>(null);

	const {setXY, y} = usePointerPosition(containerRef);

	const [internalValue, setInternalValue] = useState<number>(value);

	const handleOnChangeEnd = (event: any) => {
		onChange(internalValue);

		setXY({x: internalValue, y});

		event.target.blur();

		event.target.focus();
	};

	React.useEffect(() => {
		setInternalValue(value);
	}, [value]);

	return (
		<ClaySlider
			className="clay-color-slider clay-color-slider-hue"
			max={360}
			min={0}
			onChange={setInternalValue}
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
			step={1}
			style={{
				color: `hsl(${internalValue}, 100%, 50%)`,
			}}
			value={internalValue}
		/>
	);
};

export default ClayColorPickerHue;
