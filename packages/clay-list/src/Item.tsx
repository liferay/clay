/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLLIElement> {
	/**
	 * Flag to indicate if the `list-group-item-action` class should be applied.
	 */
	action?: boolean;

	/**
	 * Flag to indicate if item is active or selected.
	 */
	active?: boolean;

	/**
	 * Flag to indicate if item should be displayed with a disabled style.
	 */
	disabled?: boolean;

	/**
	 * Flag to indicate if item should be `display: flex`.
	 */
	flex?: boolean;

	/**
	 * Flag to indicate if item is used as a header.
	 */
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
