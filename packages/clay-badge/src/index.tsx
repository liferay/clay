/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

type DisplayType =
	| 'primary'
	| 'secondary'
	| 'info'
	| 'danger'
	| 'success'
	| 'warning'
	| 'beta'
	| 'beta-dark';

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
	/**
	 * Determines the color of the badge.
	 */
	displayType?: DisplayType;

	/**
	 * Info that is shown inside of the badge itself.
	 */
	label?: string | number;
}

const ClayBadge = React.forwardRef<HTMLSpanElement, IProps>(
	(
		{className, displayType = 'primary', label, ...otherProps}: IProps,
		ref
	) => (
		<span
			{...otherProps}
			className={classNames('badge', `badge-${displayType}`, className)}
			ref={ref}
		>
			<span className="badge-item badge-item-expand">{label}</span>
		</span>
	)
);

ClayBadge.displayName = 'ClayBadge';

export default ClayBadge;
