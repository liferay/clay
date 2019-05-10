/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as React from 'react';
import classNames from 'classnames';

type DisplayType =
	| `primary`
	| `secondary`
	| `info`
	| `error`
	| `success`
	| `warning`;

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
	/**
	 * Determines the color of the badge.
	 */
	displayType?: DisplayType;

	/**
	 * Info that is shown inside of the badge itself.
	 */
	label?: string | number;
}

const ClayBadge: React.FunctionComponent<Props> = ({
	className,
	displayType = `primary`,
	label,
	...otherProps
}) => (
	<span
		{...otherProps}
		className={classNames(`badge`, `badge-${displayType}`, className)}
	>
		<span className="badge-item badge-item-expand">{label}</span>
	</span>
);

export default ClayBadge;
