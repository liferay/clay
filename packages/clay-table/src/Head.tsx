/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

interface HeadProps
	extends React.TableHTMLAttributes<HTMLTableSectionElement> {}

export type TableHeadType = React.FunctionComponent<HeadProps>;

const Head: React.FunctionComponent<HeadProps> = ({
	children,
	className,
	...otherProps
}) => {
	return (
		<thead {...otherProps} className={className}>
			{children}
		</thead>
	);
};

export default Head;
