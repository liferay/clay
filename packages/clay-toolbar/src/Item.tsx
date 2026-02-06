/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLLIElement> {

	/**
	 * Flag to indicate if Item should auto expand to fill the remaining width.
	 */
	expand?: boolean;
}
export function Item({children, className, expand, ...otherProps}: IProps) {
	return (
		<li
			className={classNames(className, 'tbar-item', {
				'tbar-item-expand': expand,
			})}
			{...otherProps}
		>
			{children}
		</li>
	);
}

Item.displayName = 'ClayToolbarItem';
