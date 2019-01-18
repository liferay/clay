import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import {useMousePosition} from './hooks';
import {hueToX, xToHue} from './util';

/**
 * Renders Hue component
 * @return {React.Component}
 */
function Hue({onChange, value}) {
	const containerRef = useRef(null);

	const {onMouseMove, setXY, x} = useMousePosition(containerRef);

	const removeListeners = () => {
		window.removeEventListener('mousemove', onMouseMove);
		window.removeEventListener('mouseup', removeListeners);
	};

	useEffect(
		() => {
			onChange(xToHue(x, containerRef.current));
		},
		[x]
	);

	useEffect(
		() => {
			setXY({x: hueToX(value, containerRef.current)});
		},
		[value]
	);

	useEffect(() => removeListeners, []);

	return (
		<div
			className="hue-selector"
			onMouseDown={event => {
				onMouseMove(event);

				window.addEventListener('mousemove', onMouseMove);
				window.addEventListener('mouseup', removeListeners);
			}}
			onTouchMove={onMouseMove}
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
}

Hue.propTypes = {
	value: PropTypes.number,
	onChange: PropTypes.func,
};

Hue.defaultProps = {
	value: 0,
	onChange: () => {},
};

export default Hue;
