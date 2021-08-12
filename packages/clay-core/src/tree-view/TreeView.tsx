/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {TreeViewGroup} from './TreeViewGroup';
import {TreeViewItem, TreeViewItemStack} from './TreeViewItem';
import {TreeViewContext} from './context';
import type {IExpandable, IMultipleSelection} from './useTree';

type ChildrenFunction<T> = (item: T) => React.ReactElement;

interface ITreeViewProps<T>
	extends React.HTMLAttributes<HTMLUListElement>,
		IMultipleSelection,
		IExpandable {
	children: React.ReactNode | ChildrenFunction<T>;
	displayType?: 'light' | 'dark';
	items?: Array<T>;
	showExpanderOnHover?: boolean;
}

export function TreeView<T>(
	props: ITreeViewProps<T>
): JSX.Element & {
	Item: typeof TreeViewItem;
	Group: typeof TreeViewGroup;
	ItemStack: typeof TreeViewItemStack;
};

export function TreeView<T>({
	children,
	className,
	displayType = 'light',
	items,
	showExpanderOnHover = true,
	...otherProps
}: ITreeViewProps<T>) {
	return (
		<ul
			{...otherProps}
			className={classNames('treeview', className, {
				[`treeview-${displayType}`]: displayType,
				'show-component-expander-on-hover': showExpanderOnHover,
			})}
			role="tree"
		>
			<TreeViewContext.Provider value={{showExpanderOnHover}}>
				{items
					? items.map((item, index) => {
							if (typeof children === 'function') {
								return React.cloneElement(
									children(item) as React.ReactElement,
									{key: index}
								);
							}

							return null;
					  })
					: children}
			</TreeViewContext.Provider>
		</ul>
	);
}

TreeView.Item = TreeViewItem;
TreeView.Group = TreeViewGroup;
TreeView.ItemStack = TreeViewItemStack;
