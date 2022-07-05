/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
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
}

function ClayManagementToolbar(props: IProps): JSX.Element & {
	Item: typeof Item;
	ItemList: typeof ItemList;
	Search: typeof Search;
};

function ClayManagementToolbar({
	active = false,
	children,
	className,
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
			<ClayLayout.ContainerFluid>{children}</ClayLayout.ContainerFluid>
		</nav>
	);
}

ClayManagementToolbar.Item = Item;
ClayManagementToolbar.ItemList = ItemList;
ClayManagementToolbar.Search = Search;

export default ClayManagementToolbar;
