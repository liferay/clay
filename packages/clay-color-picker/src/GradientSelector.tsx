/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import tinycolor from 'tinycolor2';

import {useMousePosition} from './hooks';
import {colorToXY, xToSaturation, yToVisibility} from './util';

interface IProps {
	/**
	 * Color value that is currently selected.
	 */
	color: tinycolor.Instance;

	/**
	 * The numerical hue value of the color
	 */
	hue?: number;

	/**
	 * Callback function for when saturation or visibility values change
	 */
	onChange?: (saturation: number, visibility: number) => void;
}

/**
 * Renders GradientSelector component
 */
const ClayColorPickerGradientSelector: React.FunctionComponent<IProps> = ({
	color,
	onChange = () => {},
	hue = 0,
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const selectorActive = React.useRef<boolean>(false);

	const {onMouseMove, setXY, x, y} = useMousePosition(containerRef);

	const removeListeners = () => {
		selectorActive.current = false;

		window.removeEventListener('mousemove', onMouseMove);
		window.removeEventListener('mouseup', removeListeners);
	};

	React.useEffect(() => {
		const {current} = containerRef;

		if (current && selectorActive.current) {
			onChange(xToSaturation(x, current), yToVisibility(y, current));
		}
	}, [x, y]);

	React.useEffect(() => {
		if (containerRef.current && !selectorActive.current) {
			setXY(colorToXY(color, containerRef.current));
		}
	}, [color]);

	React.useEffect(() => removeListeners, []);

	return (
		<div
			className="clay-color-map clay-color-map-hsb"
			onMouseDown={event => {
				selectorActive.current = true;
				onMouseMove(event);

				window.addEventListener('mousemove', onMouseMove);
				window.addEventListener('mouseup', removeListeners);
			}}
			ref={containerRef}
			style={{
				backgroundColor: `hsl(${hue}, 100%, 50%)`,
				backgroundImage: `linear-gradient(to top, #000, rgba(0, 0, 0, 0)), linear-gradient(to right, #FFF, rgba(255, 255, 255, 0))`,
			}}
		>
			<span
				className="clay-color-map-pointer clay-color-pointer"
				style={{
					background: color.toHexString(),
					left: x - 7,
					top: y - 7,
				}}
			/>
		</div>
	);
};

export default ClayColorPickerGradientSelector;
