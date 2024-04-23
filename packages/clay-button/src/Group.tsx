/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export interface IButtonGroupProps
	extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Flag to indicate the spacing between the buttons.
	 */
	spaced?: boolean;

	/**
	 * Flag to indicate if buttons are stacked vertically.
	 */
	vertical?: boolean;
}

const ClayButtonGroup = ({
	children,
	className,
	role = 'group',
	spaced,
	vertical,
	...otherProps
}: IButtonGroupProps) => (
	<div
		{...otherProps}
		className={classNames(className, {
			'btn-group': !spaced && !vertical,
			'btn-group-spaced': spaced,
			'btn-group-vertical': vertical,
		})}
		role={role}
	>
		{children}
	</div>
);

export default ClayButtonGroup;
