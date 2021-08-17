/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {TreeViewGroup} from './TreeViewGroup';
import {TreeViewItem, TreeViewItemStack} from './TreeViewItem';
import {TreeViewContext} from './context';
import {ItemContextProvider} from './useItem';
import {IExpandable, IMultipleSelection, useTree} from './useTree';

type ChildrenFunction<T> = (item: T) => React.ReactElement;

interface ITreeViewProps<T>
	extends React.HTMLAttributes<HTMLUListElement>,
		IMultipleSelection,
		IExpandable {
	children: React.ReactNode | ChildrenFunction<T>;
	displayType?: 'light' | 'dark';
	items?: Array<T>;
	nestedKey?: string;
	showExpanderOnHover?: boolean;
}

export function TreeView<T>(
	props: ITreeViewProps<T>
): JSX.Element & {
	Item: typeof TreeViewItem;
	Group: typeof TreeViewGroup;
	ItemStack: typeof TreeViewItemStack;
};

export function TreeView<T extends Record<any, any>>({
	children,
	className,
	displayType = 'light',
	expandedKeys,
	items,
	nestedKey,
	onExpandedChange,
	showExpanderOnHover = true,
	...otherProps
}: ITreeViewProps<T>) {
	const state = useTree({
		expandedKeys,
		onExpandedChange,
	});

	const context = {
		childrenRoot:
			typeof children === 'function'
				? (children as ChildrenFunction<Object>)
				: undefined,
		nestedKey,
		showExpanderOnHover,
		...state,
	};

	return (
		<ul
			{...otherProps}
			className={classNames('treeview', className, {
				[`treeview-${displayType}`]: displayType,
				'show-component-expander-on-hover': showExpanderOnHover,
			})}
			role="tree"
		>
			<TreeViewContext.Provider value={context}>
				{typeof children === 'function' && items
					? items.map((item, index) => (
							<ItemContextProvider
								key={item.id ?? index}
								value={item}
							>
								{children(item)}
							</ItemContextProvider>
					  ))
					: children}
			</TreeViewContext.Provider>
		</ul>
	);
}

TreeView.Item = TreeViewItem;
TreeView.Group = TreeViewGroup;
TreeView.ItemStack = TreeViewItemStack;
