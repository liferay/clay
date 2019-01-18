import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import {useMousePosition} from './hooks';
import {colorToXY, xToSaturation, yToVisibility} from './util';

/**
 * Renders GradientSelector component
 *
 * @return {object}
 */
function GradientSelector({color, hue, onChange}) {
	const containerRef = useRef(null);

	const {onMouseMove, setXY, x, y} = useMousePosition(containerRef);

	const removeListeners = () => {
		window.removeEventListener('mousemove', onMouseMove);
		window.removeEventListener('mouseup', removeListeners);
	};

	useEffect(
		() => {
			const {current} = containerRef;

			onChange(xToSaturation(x, current), yToVisibility(y, current));
		},
		[x, y]
	);

	useEffect(
		() => {
			setXY(colorToXY(color, containerRef.current));
		},
		[color]
	);

	useEffect(() => removeListeners, []);

	return (
		<div
			className="gradient-selector"
			onMouseDown={event => {
				onMouseMove(event);

				window.addEventListener('mousemove', onMouseMove);
				window.addEventListener('mouseup', removeListeners);
			}}
			onTouchMove={onMouseMove}
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
}

GradientSelector.propTypes = {
	onChange: PropTypes.func,
	hue: PropTypes.number,
};

GradientSelector.defaultProps = {
	onChange: () => {},
	hue: 0,
};

export default GradientSelector;
