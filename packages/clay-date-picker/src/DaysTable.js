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
function DaysTable({children, weeks}) {
	return (
		<React.Fragment>
			{weeks.map((days, index) => (
				<div className="date-picker-days-row" key={index}>
					{days.map((day, index) => {
						return React.Children.only(
							children({day, key: index})
						);
					})}
				</div>
			))}
		</React.Fragment>
	);
}

DaysTable.propTypes = {
	children: PropTypes.func.isRequired,
	weeks: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				date: PropTypes.instanceOf(Date).isRequired,
				outside: PropTypes.bool,
			})
		)
	),
};

export {DaysTable};
export default DaysTable;
