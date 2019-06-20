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
	| 'error'
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

const ClayBadge: React.FunctionComponent<IProps> = ({
	className,
	displayType = 'primary',
	label,
	...otherProps
}: IProps) => (
	<span
		{...otherProps}
		className={classNames('badge', `badge-${displayType}`, className)}
	>
		<span className="badge-item badge-item-expand">{label}</span>
	</span>
);

export default ClayBadge;
