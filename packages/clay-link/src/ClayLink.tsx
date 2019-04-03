/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';

type DisplayType = 'secondary';

type ButtonDisplayType = 'link' | 'primary' | 'secondary';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	buttonDisplayType?: ButtonDisplayType;
	displayType?: DisplayType;
}

const ClayLink: React.FunctionComponent<Props> = ({
	buttonDisplayType,
	children,
	className,
	displayType,
	...otherProps
}) => (
	<a
		className={classNames(className, {
			[`btn btn-${buttonDisplayType}`]: buttonDisplayType,
			[`link-${displayType}`]: !buttonDisplayType && displayType,
		})}
		{...otherProps}
	>
		{children}
	</a>
);

export default ClayLink;
