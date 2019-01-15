import React from 'react';
import PropTypes from 'prop-types';

/**
 * ClayTimepicker
 * @return {React.createElement}
 */
function ClayTimepicker({
	defaultValue,
	id,
	max,
	min,
	name,
	onChange,
	onInput,
	value,
}) {
	return (
		<input
			className="form-control"
			defaultValue={defaultValue}
			id={id}
			max={max}
			min={min}
			name={name}
			onChange={onChange}
			onInput={onInput}
			type="time"
			value={value}
		/>
	);
}

ClayTimepicker.propTypes = {
	defaultValue: PropTypes.string,
	id: PropTypes.string,
	max: PropTypes.string,
	min: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	onInput: PropTypes.func,
	value: PropTypes.string,
};

export {ClayTimepicker};
export default ClayTimepicker;
