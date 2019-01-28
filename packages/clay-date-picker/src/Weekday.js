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
function Weekday({weekday}) {
	return (
		<div className="date-picker-weekday">
			<abbr>{weekday}</abbr>
		</div>
	);
}

Weekday.propTypes = {
	weekday: PropTypes.string,
};

export {Weekday};
export default Weekday;
