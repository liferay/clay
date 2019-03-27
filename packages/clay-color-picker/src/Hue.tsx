/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React, {useEffect, useRef} from 'react';

import {hueToX, xToHue} from './util';
import {useMousePosition} from './hooks';

interface HueProps {
	onChange: (hue: number) => void;
	value: number;
}

/**
 * Renders Hue component
 */
const Hue: React.FunctionComponent<HueProps> = ({
	value = 0,
	onChange = () => {},
}) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const {onMouseMove, setXY, x, y} = useMousePosition(containerRef);

	const removeListeners = () => {
		window.removeEventListener('mousemove', onMouseMove);
		window.removeEventListener('mouseup', removeListeners);
	};

	useEffect(() => {
		if (containerRef.current) {
			onChange(xToHue(x, containerRef.current));
		}
	}, [x]);

	useEffect(() => {
		if (containerRef.current) {
			setXY({x: hueToX(value, containerRef.current), y});
		}
	}, [value]);

	useEffect(() => removeListeners, []);

	return (
		<div
			className="hue-selector"
			onMouseDown={event => {
				onMouseMove(event);

				window.addEventListener('mousemove', onMouseMove);
				window.addEventListener('mouseup', removeListeners);
			}}
			ref={containerRef}
		>
			<span
				className="pointer"
				style={{
					left: x - 7,
					background: `hsl(${value}, 100%, 50%)`,
				}}
			/>
		</div>
	);
};

export default Hue;
