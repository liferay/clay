/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLayout from '@clayui/layout';
import classNames from 'classnames';
import React from 'react';

import Header from './Header';
import Item from './Item';
import ItemText from './ItemText';
import ItemTitle from './ItemTitle';
import QuickActionMenu from './QuickActionMenu';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * Flag to indicate if action items should be shown on hover.
	 * Defaults to `true`
	 */
	showQuickActionsOnHover?: boolean;
}

const ClayList: React.FunctionComponent<IProps> & {
	Header: typeof Header;
	Item: typeof Item;
	ItemField: typeof ClayLayout.ContentCol;
	ItemText: typeof ItemText;
	ItemTitle: typeof ItemTitle;
	QuickActionMenu: typeof QuickActionMenu;
} = ({
	children,
	className,
	showQuickActionsOnHover = true,
	...otherProps
}: IProps) => {
	return (
		<ul
			{...otherProps}
			className={classNames('list-group', className, {
				'show-quick-actions-on-hover': showQuickActionsOnHover,
			})}
		>
			{children}
		</ul>
	);
};

ClayList.Header = Header;
ClayList.Item = Item;
ClayList.ItemField = ClayLayout.ContentCol;
ClayList.ItemText = ItemText;
ClayList.ItemTitle = ItemTitle;
ClayList.QuickActionMenu = QuickActionMenu;

export default ClayList;
