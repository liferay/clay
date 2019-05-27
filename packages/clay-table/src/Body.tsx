/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';

const Body: React.FunctionComponent<
	React.TableHTMLAttributes<HTMLTableSectionElement>
> = ({children, ...otherProps}) => {
	return <tbody {...otherProps}>{children}</tbody>;
};

export default Body;
