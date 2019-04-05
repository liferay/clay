/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	/**
	 * Determines how the link is displayed.
	 */
	displayType?: 'secondary';
}

const ClayLink: React.FunctionComponent<Props> = ({
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
