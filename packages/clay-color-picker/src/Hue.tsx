/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback, useEffect, useRef} from 'react';

import {useMousePosition} from './hooks';
import {hueToX, xToHue} from './util';

interface IProps {
	/**
	 * Callback function for when the hue value changes
	 */
	onChange: (hue: number) => void;

	/**
	 * The value of the Hue of the color
	 */
	value: number;
}

/**
 * Renders Hue component
 */
const ClayColorPickerHue: React.FunctionComponent<IProps> = ({
	value = 0,
	onChange = () => {},
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const selectorActive = useRef<boolean>(false);

	const {onMouseMove, setXY, x, y} = useMousePosition(containerRef);

	const removeListeners = useCallback(() => {
		selectorActive.current = false;

		window.removeEventListener('mousemove', onMouseMove);
		window.removeEventListener('mouseup', removeListeners);
	});

	useEffect(() => {
		if (containerRef.current && selectorActive.current) {
			onChange(xToHue(x, containerRef.current));
		}
	}, [onChange, x]);

	useEffect(() => {
		if (containerRef.current) {
			setXY({x: hueToX(value, containerRef.current), y});
		}
	}, [setXY, value, y]);

	useEffect(() => removeListeners, [removeListeners]);

	return (
		<div
			className="clay-color-range clay-color-range-hue"
			onMouseDown={event => {
				selectorActive.current = true;
				onMouseMove(event);

				window.addEventListener('mousemove', onMouseMove);
				window.addEventListener('mouseup', removeListeners);
			}}
			ref={containerRef}
		>
			<button
				className="clay-color-pointer clay-color-range-pointer"
				style={{
					background: `hsl(${value}, 100%, 50%)`,
					left: x - 7,
				}}
				type="button"
			/>
		</div>
	);
};

export default ClayColorPickerHue;
