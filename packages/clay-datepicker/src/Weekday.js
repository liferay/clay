import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {Object} param
 * @return {React.createElement}
 */
function Weekday({children, weeks}) {
	return (
		<React.Fragment>
			{weeks.map((week, index) => (
				<div className="datepicker-weekday" key={index}>
					{week.map((day, index) => {
						return React.Children.only(
							children({day, key: index})
						);
					})}
				</div>
			))}
		</React.Fragment>
	);
}

Weekday.propTypes = {
	children: PropTypes.func.isRequired,
	weeks: PropTypes.array,
};

export {Weekday};
export default Weekday;
