/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import Content from './Content';
import Item from './Item';
import TabPane from './TabPane';

export type DisplayType = null | 'tabs' | 'underline';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * Determines how to is displayed.
	 */
	displayType?: DisplayType;

	/**
	 * Justify the nav items according the tab content.
	 */
	justified?: boolean;
}

const ClayTabs: React.FunctionComponent<IProps> & {
	Content: typeof Content;
	TabPane: typeof TabPane;
	TabPanel: typeof TabPane;
	Item: typeof Item;
} = ({children, className, displayType, justified, ...otherProps}: IProps) => {
	const defaultValue = displayType === null;

	return (
		<ul
			className={classNames(
				'nav',
				{
					[`nav-${displayType}`]: !defaultValue,
					'nav-justified': justified,
				},
				className
			)}
			role="tablist"
			{...otherProps}
		>
			{children}
		</ul>
	);
};

ClayTabs.Content = Content;
ClayTabs.TabPane = TabPane;
ClayTabs.TabPanel = TabPane;
ClayTabs.Item = Item;

export default ClayTabs;
