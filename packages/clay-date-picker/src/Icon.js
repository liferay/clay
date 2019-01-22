/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Icon
 * @return {React.createElement}
 */
function Icon({spritemap, symbol}) {
	const classNames = classnames('lexicon-icon', {
		[`lexicon-icon-${symbol}`]: symbol,
	});

	return (
		<svg className={classNames} role="presentation">
			<use xlinkHref={`${spritemap}#${symbol}`} />
		</svg>
	);
}

Icon.propTypes = {
	spritemap: PropTypes.string.isRequired,
	symbol: PropTypes.string,
};

export {Icon};
export default Icon;
