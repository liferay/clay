/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

const Head: React.FunctionComponent<
	React.TableHTMLAttributes<HTMLTableSectionElement>
> = ({children, className, ...otherProps}) => {
	return (
		<thead {...otherProps} className={className}>
			{children}
		</thead>
	);
};

export default Head;
