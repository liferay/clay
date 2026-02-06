/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';
import tinycolor from 'tinycolor2';

import {usePointerPosition} from './hooks';
import {colorToXY, xToSaturation, yToVisibility} from './util';

type Props = {

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
};

const useIsomorphicLayoutEffect =
	typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

/**
 * Renders GradientSelector component
 */
function ClayColorPickerGradientSelector({
	color,
	onChange = () => {},
	hue = 0,
}: Props) {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const selectorActiveRef = React.useRef<boolean>(false);
	const {onPointerMove, setXY, x, y} = usePointerPosition(containerRef);
	const removeListeners = () => {
		selectorActiveRef.current = false;
		window.removeEventListener('pointermove', onPointerMove);
		window.removeEventListener('pointerup', removeListeners);
	};
	useIsomorphicLayoutEffect(() => {
		const {current} = containerRef;
		if (current && selectorActiveRef.current) {
			onChange(xToSaturation(x, current), yToVisibility(y, current));
		}
	}, [x, y]);
	React.useEffect(() => {
		if (containerRef.current && !selectorActiveRef.current) {
			setXY(colorToXY(color, containerRef.current));
		}
	}, [color]);
	React.useEffect(() => removeListeners, []);

	return (
		<div
			className="clay-color-map clay-color-map-hsb"
			onPointerDown={(event) => {
				event.preventDefault();
				selectorActiveRef.current = true;
				onPointerMove(event);
				(containerRef.current!.querySelector(
					'.clay-color-map-pointer'
				) as HTMLElement)!.focus();
				window.addEventListener('pointermove', onPointerMove);
				window.addEventListener('pointerup', removeListeners);
			}}
			ref={containerRef}
			style={{
				backgroundColor: `hsl(${hue}, 100%, 50%)`,
				backgroundImage: `linear-gradient(to top, #000, rgba(0, 0, 0, 0)), linear-gradient(to right, #FFF, rgba(255, 255, 255, 0))`,
			}}
		>
			<button
				className="clay-color-map-pointer clay-color-pointer"
				style={{
					background: color.toHexString(),
					left: x - 7,
					top: y - 7,
				}}
				type="button"
			/>
		</div>
	);
}

export default ClayColorPickerGradientSelector;
