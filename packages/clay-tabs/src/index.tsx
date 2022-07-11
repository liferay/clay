/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import Content from './Content';
import Item from './Item';
import TabPane from './TabPane';

export type DisplayType = null | 'basic' | 'underline';

export interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * Determines how tab is displayed.
	 */
	displayType?: DisplayType;

	/**
	 * Justify the nav items according the tab content.
	 */
	justified?: boolean;

	/**
	 * Applies a modern style to the tab.
	 */
	modern?: boolean;
}

function ClayTabs(props: IProps): JSX.Element & {
	Content: typeof Content;
	TabPane: typeof TabPane;
	TabPanel: typeof TabPane;
	Item: typeof Item;
};

function ClayTabs({
	children,
	className,
	displayType,
	justified,
	modern = true,
	...otherProps
}: IProps) {
	return (
		<ul
			className={classNames(
				'nav',
				{'nav-justified': justified},
				!displayType
					? {
							'nav-tabs': !modern,
							'nav-underline': modern,
					  }
					: {
							'nav-tabs': displayType === 'basic',
							'nav-underline': displayType === 'underline',
					  },

				className
			)}
			role="tablist"
			{...otherProps}
		>
			{children}
		</ul>
	);
}

ClayTabs.Content = Content;
ClayTabs.TabPane = TabPane;
ClayTabs.TabPanel = TabPane;
ClayTabs.Item = Item;

export default ClayTabs;
