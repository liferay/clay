/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React, {useEffect, useRef} from 'react';
import tinycolor from 'tinycolor2';
import {colorToXY, xToSaturation, yToVisibility} from './util';
import {useMousePosition} from './hooks';

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
const GradientSelector: React.FunctionComponent<IProps> = ({
	color,
	onChange = () => {},
	hue = 0,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const selectorActive = useRef<boolean>(false);

	const {onMouseMove, setXY, x, y} = useMousePosition(containerRef);

	const removeListeners = () => {
		selectorActive.current = false;

		window.removeEventListener('mousemove', onMouseMove);
		window.removeEventListener('mouseup', removeListeners);
	};

	useEffect(() => {
		const {current} = containerRef;

		if (current && selectorActive.current) {
			onChange(xToSaturation(x, current), yToVisibility(y, current));
		}
	}, [x, y]);

	useEffect(() => {
		if (containerRef.current && !selectorActive.current) {
			setXY(colorToXY(color, containerRef.current));
		}
	}, [color]);

	useEffect(() => removeListeners, []);

	return (
		<div
			className="clay-color-map-hsb clay-color-map"
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
				className="clay-color-pointer clay-color-map-pointer"
				style={{
					background: color.toHexString(),
					left: x - 7,
					top: y - 7,
				}}
			/>
		</div>
	);
};

export default GradientSelector;
