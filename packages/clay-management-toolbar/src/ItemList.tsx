/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLUListElement> {

	/**
	 * Flag to indicate the Management Toolbar Item List should fit the width of the parent container.
	 */
	expand?: boolean;
}

function ItemList({children, expand}: IProps) {
	return (
		<ul
			className={classNames('navbar-nav', {
				'navbar-nav-expand': expand,
			})}
		>
			{children}
		</ul>
	);
}

export default ItemList;
