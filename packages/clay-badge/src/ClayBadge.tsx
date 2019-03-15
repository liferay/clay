/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as React from 'react';
import classNames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
	displayType?: string;
	label?: string | number;
}

const ClayBadge: React.FunctionComponent<Props> = ({
	className,
	displayType,
	label,
	...otherProps
}) => (
	<span
		{...otherProps}
		className={classNames('badge', `badge-${displayType}`, className)}
	>
		<span className="badge-item badge-item-expand">{label}</span>
	</span>
);

ClayBadge.defaultProps = {
	displayType: 'primary',
};

export default ClayBadge;
