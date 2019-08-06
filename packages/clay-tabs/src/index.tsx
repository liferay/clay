/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import Content from './Content';
import Item from './Item';
import React from 'react';
import TabPane from './TabPane';

interface IProps extends React.HTMLAttributes<HTMLUListElement> {
	/**
	 * Justify the nav items according the tab content.
	 */
	justified?: boolean;

	/**
	 * Applies a modern style to the tab.
	 */
	modern?: boolean;
}

export const ClayTabs: React.FunctionComponent<IProps> & {
	Content: typeof Content;
	TabPane: typeof TabPane;
	Item: typeof Item;
} = ({
	children,
	className,
	justified,
	modern = false,
	...otherProps
}: IProps) => {
	return (
		<ul
			className={classNames(
				`nav`,
				{
					'nav-justified': justified,
					'nav-tabs': !modern,
					'nav-underline': modern,
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

ClayTabs.Item = Item;

export default ClayTabs;
