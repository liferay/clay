/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {ChildrenFunction, Collection, ICollectionProps} from './Collection';
import {TreeViewGroup} from './TreeViewGroup';
import {TreeViewItem, TreeViewItemStack} from './TreeViewItem';
import {TreeViewContext} from './context';
import {IExpandable, IMultipleSelection, useTree} from './useTree';

interface ITreeViewProps<T>
	extends Omit<React.HTMLAttributes<HTMLUListElement>, 'children'>,
		IMultipleSelection,
		IExpandable,
		ICollectionProps<T> {
	displayType?: 'light' | 'dark';
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

export function TreeView<T>({
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
				<Collection<T> items={items}>{children}</Collection>
			</TreeViewContext.Provider>
		</ul>
	);
}

TreeView.Group = TreeViewGroup;
TreeView.Item = TreeViewItem;
TreeView.ItemStack = TreeViewItemStack;
