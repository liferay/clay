/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as React from 'react';
import getCN from 'classnames';

interface props {
	label?: string | number;
	className?: string;
	type?: string;
}

const ClayBadge: React.FunctionComponent<props> = ({
	label,
	className,
	children,
	type = 'primary',
	...otherProps
}) => {
	return (
		<span
			{...otherProps}
			className={getCN('badge', `badge-${type}`, className)}
		>
			<span className="badge-item badge-item-expand">{label}</span>
		</span>
	);
};

export default ClayBadge;
