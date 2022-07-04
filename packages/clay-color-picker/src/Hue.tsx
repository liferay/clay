/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {usePointerPosition} from './hooks';
import {hueToX, xToHue} from './util';

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

const useIsomorphicLayoutEffect =
	typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;

/**
 * Renders Hue component
 */
const ClayColorPickerHue = ({value = 0, onChange = () => {}}: Props) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const selectorActive = React.useRef<boolean>(false);

	const {onPointerMove, setXY, x, y} = usePointerPosition(containerRef);

	const removeListeners = () => {
		selectorActive.current = false;

		window.removeEventListener('pointermove', onPointerMove);
		window.removeEventListener('pointerup', removeListeners);
	};

	useIsomorphicLayoutEffect(() => {
		if (containerRef.current && selectorActive.current) {
			onChange(xToHue(x, containerRef.current));
		}
	}, [x]);

	React.useEffect(() => {
		if (containerRef.current) {
			setXY({x: hueToX(value, containerRef.current), y});
		}
	}, [value]);

	React.useEffect(() => removeListeners, []);

	return (
		<div
			className="clay-color-range clay-color-range-hue"
			onPointerDown={(event) => {
				event.preventDefault();

				selectorActive.current = true;
				onPointerMove(event);

				(containerRef.current!.querySelector(
					'.clay-color-range-pointer'
				) as HTMLElement)!.focus();

				window.addEventListener('pointermove', onPointerMove);
				window.addEventListener('pointerup', removeListeners);
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
