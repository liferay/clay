import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} param
 * @return {React.createElement}
 */
function Week({weekday}) {
	return (
		<div className="datepicker-week">
			<abbr>{weekday}</abbr>
		</div>
	);
}

Week.propTypes = {
	weekday: PropTypes.string,
};

export {Week};
export default Week;
