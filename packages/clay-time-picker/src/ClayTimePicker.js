/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import PropTypes from 'prop-types';

const timePickerContent = ({
	defaultValue,
	id,
	max,
	min,
	name,
	onChange,
	onInput,
	timezone,
	value,
}) => (
	<React.Fragment>
		<div className="input-group-item">
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
		</div>
		{timezone && (
			<div className="input-group-item input-group-item-shrink">
				<span className="input-group-text">({timezone})</span>
			</div>
		)}
	</React.Fragment>
);

/**
 * ClayTimePicker
 * @param {!Object} props
 * @return {React.createElement}
 */
const ClayTimePicker = (props) => {
	if (props.wrapTime) {
		return (
			<div className="input-group">
				{timePickerContent(props)}
			</div>
		);
	}

	return timePickerContent(props);
};

ClayTimePicker.propTypes = {
	defaultValue: PropTypes.string,
	id: PropTypes.string,
	max: PropTypes.string,
	min: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func,
	onInput: PropTypes.func,
	timezone: PropTypes.string,
	value: PropTypes.string,
	wrapTime: PropTypes.bool,
};

ClayTimePicker.defaultProps = {
	wrapTime: true,
};

export default ClayTimePicker;
