/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

type Props = {

	/**
	 * Flag to indicate the spacing between the buttons.
	 */
	spaced?: boolean;

	/**
	 * Flag to indicate if buttons are stacked vertically.
	 */
	vertical?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Group({
	children,
	className,
	role = 'group',
	spaced,
	vertical,
	...otherProps
}: Props) {
	return (
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
}

Group.displayName = 'ClayButtonGroup';

export default Group;
