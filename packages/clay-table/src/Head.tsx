/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const ClayTableHead = React.forwardRef<
	HTMLTableSectionElement,
	React.TableHTMLAttributes<HTMLTableSectionElement>
>(({children, ...otherProps}, ref) => {
	return (
		<thead {...otherProps} ref={ref}>
			{children}
		</thead>
	);
});

export default ClayTableHead;
