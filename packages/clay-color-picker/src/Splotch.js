import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';

Splotch.propTypes = {
	active: PropTypes.bool,
	size: PropTypes.number,
	value: PropTypes.string,
};

/**
 * Renders component that displays a color
 * @return {React.Component}
 */
function Splotch({active, className, size = 24, value, ...otherProps}) {
	const requireBorder = tinycolor.readability('#FFF', value) < 1.1;

	return (
		<button
			{...otherProps}
			className={`splotch${' ' + className}`}
			style={{
				...(active ? {outline: 'auto 3px #55ADFF'} : {}),
				...(requireBorder
					? {border: '1px solid #E7E7ED'}
					: {borderWidth: 0}),
				background: value,
				height: size,
				width: size,
			}}
			title={value}
		/>
	);
}

export default Splotch;
