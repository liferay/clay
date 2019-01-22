/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} param
 * @return {React.createElement}
 */
function Select({name, onChange, options, readOnly, value}) {
	return (
		<select
			className="form-control form-control-sm"
			name={name}
			onChange={onChange}
			readOnly={readOnly}
			value={value}
		>
			{options.map((option, index) => (
				<option
					key={index}
					selected={option.selected ? 'selected' : undefined}
					value={option.value}
				>
					{option.label}
				</option>
			))}
		</select>
	);
}

Select.propTypes = {
	name: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
			selected: PropTypes.bool,
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
				.isRequired,
		})
	),
	readOnly: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export {Select};
export default Select;
