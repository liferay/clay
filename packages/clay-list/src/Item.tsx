/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLLIElement> {
	accentColor?: string;
	action?: boolean;
	active?: boolean;
	disabled?: boolean;
	flex?: boolean;
	header?: boolean;
}

const ClayItem: React.FunctionComponent<Props> = ({
	action = false,
	active = false,
	children,
	className,
	disabled = false,
	flex = false,
	header = false,
	...otherProps
}) => {
	return (
		<li
			{...otherProps}
			className={classNames(className, {
				active,
				'list-group-header': header,
				'list-group-item': !header,
				'list-group-item-action': action && !disabled,
				'list-group-item-disabled': disabled,
				'list-group-item-flex': flex,
			})}
		>
			{children}
		</li>
	);
};
export default ClayItem;
