import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} param
 * @return {React.createElement}
 */
function Weekday({weekday}) {
	return (
		<div className="datepicker-weekday">
			<abbr>{weekday}</abbr>
		</div>
	);
}

Weekday.propTypes = {
	weekday: PropTypes.string,
};

export {Weekday};
export default Weekday;
