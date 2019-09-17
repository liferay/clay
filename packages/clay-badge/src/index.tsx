/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
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
	| 'warning';

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

type Badge = React.ForwardRefExoticComponent<
	IProps & React.RefAttributes<HTMLSpanElement>
>;

const ClayBadge = React.forwardRef(
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
) as Badge;

export default ClayBadge;
