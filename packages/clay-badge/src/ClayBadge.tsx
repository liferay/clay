/**
 * © 2018 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as React from 'react';
import classNames from 'classnames';

interface props {
	label?: string | number;
	className?: string;
	type?: string;
	[propName: string]: any;
}

const ClayBadge: React.FunctionComponent<props> = ({
	className,
	label,
	type,
	...otherProps
}) => (
	<span
		{...otherProps}
		className={classNames('badge', `badge-${type}`, className)}
	>
		<span className="badge-item badge-item-expand">{label}</span>
	</span>
);

ClayBadge.defaultProps = {
	type: 'primary',
};

export default ClayBadge;