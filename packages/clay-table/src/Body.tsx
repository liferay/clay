/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

interface BodyProps
	extends React.TableHTMLAttributes<HTMLTableSectionElement> {}

export type TableBodyType = React.FunctionComponent<BodyProps>;

const Body: React.FunctionComponent<BodyProps> = ({
	children,
	className,
	...otherProps
}) => {
	return (
		<tbody {...otherProps} className={className}>
			{children}
		</tbody>
	);
};

export default Body;
