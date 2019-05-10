/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Header from './Header';
import Item from './Item';
import ItemField from './ItemField';
import ItemText from './ItemText';
import ItemTitle from './ItemTitle';
import QuickActionMenu from './QuickActionMenu';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * Flag to indicate if action items should be shown on hover.
	 * Defaults to `true`
	 */
	showQuickActionsOnHover?: boolean;
}

const ClayList: React.FunctionComponent<Props> & {
	Header: typeof Header;
	Item: typeof Item;
	ItemField: typeof ItemField;
	ItemText: typeof ItemText;
	ItemTitle: typeof ItemTitle;
	QuickActionMenu: typeof QuickActionMenu;
} = ({children, className, showQuickActionsOnHover = true, ...otherProps}) => {
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
ClayList.ItemField = ItemField;
ClayList.ItemText = ItemText;
ClayList.ItemTitle = ItemTitle;
ClayList.QuickActionMenu = QuickActionMenu;

export default ClayList;
