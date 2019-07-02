/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

const ClayListItemTitle: React.FunctionComponent<
	React.HTMLAttributes<HTMLHeadingElement>
> = ({children, className, ...otherProps}) => {
	return (
		<p
			{...otherProps}
			className={classNames('list-group-title', className)}
		>
			{children}
		</p>
	);
};

export default ClayListItemTitle;
