import React from 'react';
import PropTypes from 'prop-types';

/**
 * ClayTimePicker
 * @return {React.createElement}
 */
function ClayTimePicker({
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

ClayTimePicker.propTypes = {
	defaultValue: PropTypes.string,
	id: PropTypes.string,
	max: PropTypes.string,
	min: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	onInput: PropTypes.func,
	value: PropTypes.string,
};

export {ClayTimePicker};
export default ClayTimePicker;
