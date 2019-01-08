import React from 'react';
import PropTypes from 'prop-types';
import Splotch from './Splotch';

Basic.propTypes = {
	colors: PropTypes.arrayOf(PropTypes.string),
	label: PropTypes.string,
	onChange: PropTypes.func,
};

/**
 * Renders basic color picker
 * @return {React.Component}
 */
function Basic({colors, label, onChange}) {
	return (
		<div className="basic-color-picker">
			{label && (
				<div className="label-container">
					<label>{label}</label>
				</div>
			)}

			<div className="splotch-grid">
				{colors.map(hex => (
					<Splotch
						onClick={() => onChange(hex)}
						key={hex}
						value={hex}
					/>
				))}
			</div>
		</div>
	);
}

export default Basic;
