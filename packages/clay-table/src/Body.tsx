/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

const Body: React.FunctionComponent<
	React.TableHTMLAttributes<HTMLTableSectionElement>
> = ({children, className, ...otherProps}) => {
	return (
		<tbody {...otherProps} className={className}>
			{children}
		</tbody>
	);
};

export default Body;
