/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayLayout from '@clayui/layout';
import classNames from 'classnames';
import React from 'react';

import Item from './Item';
import ItemList from './ItemList';
import Search from './Search';

interface IProps extends React.HTMLAttributes<HTMLElement> {

	/**
	 * Flag that identifies when to show the active state of the component.
	 */
	active?: boolean;

	/**
	 * Set a maximum width on container-fluid.
	 */
	fluidSize?: React.ComponentProps<typeof ClayLayout.Container>['fluidSize'];
}

function ManagementToolbar({
	active = false,
	children,
	className,
	fluidSize,
	...otherProps
}: IProps) {
	return (
		<nav
			{...otherProps}
			className={classNames(
				'management-bar navbar navbar-expand-md',
				className,
				{
					'management-bar-light': !active,
					'management-bar-primary navbar-nowrap': active,
				}
			)}
		>
			<ClayLayout.ContainerFluid size={fluidSize}>
				{children}
			</ClayLayout.ContainerFluid>
		</nav>
	);
}

ManagementToolbar.Item = Item;
ManagementToolbar.ItemList = ItemList;
ManagementToolbar.Search = Search;

export default ManagementToolbar;
