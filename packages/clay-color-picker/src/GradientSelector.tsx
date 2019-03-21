/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React, {useEffect, useRef} from 'react';
import tinycolor from 'tinycolor2';

import {colorToXY, xToSaturation, yToVisibility} from './util';
import {useMousePosition} from './hooks';

interface GradientSelectorProps {
	color: tinycolor.Instance;
	hue?: number;
	onChange?: (saturation: number, visibility: number) => void;
}

/**
 * Renders GradientSelector component
 */
const GradientSelector: React.SFC<GradientSelectorProps> = ({
	color,
	onChange = () => {},
	hue = 0,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const {onMouseMove, setXY, x, y} = useMousePosition(containerRef);

	const removeListeners = () => {
		window.removeEventListener('mousemove', onMouseMove);
		window.removeEventListener('mouseup', removeListeners);
	};

	useEffect(() => {
		const {current} = containerRef;

		if (current) {
			onChange(xToSaturation(x, current), yToVisibility(y, current));
		}
	}, [x, y]);

	useEffect(() => {
		if (containerRef.current) {
			setXY(colorToXY(color, containerRef.current));
		}
	}, [color]);

	useEffect(() => removeListeners, []);

	return (
		<div
			className="gradient-selector"
			onMouseDown={event => {
				onMouseMove(event);

				window.addEventListener('mousemove', onMouseMove);
				window.addEventListener('mouseup', removeListeners);
			}}
			ref={containerRef}
			style={{
				background: `hsl(${hue}, 100%, 50%)`,
			}}
		>
			<div className="light-gradient" />
			<div className="dark-gradient" />

			<span
				className="pointer"
				style={{
					top: y - 7,
					left: x - 7,
					background: color.toHexString(),
				}}
			/>
		</div>
	);
};

export default GradientSelector;
