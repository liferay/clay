/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

const ClayTableBody = React.forwardRef<
	HTMLTableSectionElement,
	React.TableHTMLAttributes<HTMLTableSectionElement>
>(({children, ...otherProps}, ref) => {
	return (
		<tbody {...otherProps} ref={ref}>
			{children}
		</tbody>
	);
});

ClayTableBody.displayName = 'ClayTableBody';

export default ClayTableBody;
