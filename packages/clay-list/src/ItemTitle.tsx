/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

const ItemTitle: React.FunctionComponent<
	React.HTMLAttributes<HTMLHeadingElement>
> = ({children, className, ...otherProps}) => {
	return (
		<h4
			{...otherProps}
			className={classNames('list-group-title', className)}
		>
			{children}
		</h4>
	);
};

export default ItemTitle;
