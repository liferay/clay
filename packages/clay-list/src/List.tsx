/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLayout from '@clayui/layout';
import classNames from 'classnames';
import React from 'react';
import warning from 'warning';

import Header from './Header';
import Item from './Item';
import ItemText from './ItemText';
import ItemTitle from './ItemTitle';
import QuickActionMenu from './QuickActionMenu';

type TLIAttributes = React.ReactElement<React.HTMLAttributes<HTMLLIElement>>;

export interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	children?: TLIAttributes | Array<TLIAttributes>;

	/*
	 * Flag to indicate if action items should be shown on hover.
	 * Defaults to `true`
	 */
	showQuickActionsOnHover?: boolean;
}

const CLAY_REGEX = /Clay(?!ListItem|ListHeader).+/;

function ClayList(props: IProps): JSX.Element & {
	Header: typeof Header;
	Item: typeof Item;
	ItemField: typeof ClayLayout.ContentCol;
	ItemText: typeof ItemText;
	ItemTitle: typeof ItemTitle;
	QuickActionMenu: typeof QuickActionMenu;
};

function ClayList({
	children,
	className,
	showQuickActionsOnHover = true,
	...otherProps
}: IProps) {
	return (
		<ul
			{...otherProps}
			className={classNames('list-group', className, {
				'show-quick-actions-on-hover': showQuickActionsOnHover,
			})}
		>
			{process.env['NODE_ENV'] !== 'development' && children}

			{process.env['NODE_ENV'] === 'development' &&
				children &&
				React.Children.map(children, (child) => {
					warning(
						!(
							child &&
							// @ts-ignore
							child.type.displayName &&
							// @ts-ignore
							child.type.displayName.match(CLAY_REGEX)
						),
						// @ts-ignore
						`Direct descendant of ClayList must be either ClayList.Item or ClayList.Header. You used ${child.type.displayName}.`
					);

					return child;
				})}
		</ul>
	);
}

ClayList.displayName = 'ClayList';

ClayList.Header = Header;
ClayList.Item = Item;
ClayList.ItemField = ClayLayout.ContentCol;
ClayList.ItemText = ItemText;
ClayList.ItemTitle = ItemTitle;
ClayList.QuickActionMenu = QuickActionMenu;

export default ClayList;
