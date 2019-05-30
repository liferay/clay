/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	/**
	 * Determines how the link is displayed.
	 */
	displayType?: 'secondary';
}

const ClayLink: React.FunctionComponent<IProps> = ({
	children,
	className,
	displayType,
	...otherProps
}) => (
	<a
		className={classNames(className, {
			[`link-${displayType}`]: displayType,
		})}
		{...otherProps}
	>
		{children}
	</a>
);

export default ClayLink;
