/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';
import {DndProvider} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import {ChildrenFunction, Collection, ICollectionProps} from './Collection';
import DragLayer from './DragLayer';
import {TreeViewGroup} from './TreeViewGroup';
import {TreeViewItem, TreeViewItemStack} from './TreeViewItem';
import {Icons, TreeViewContext} from './context';
import {ITreeProps, useTree} from './useTree';

interface ITreeViewProps<T>
	extends Omit<React.HTMLAttributes<HTMLUListElement>, 'children'>,
		ITreeProps<T>,
		ICollectionProps<T> {
	displayType?: 'light' | 'dark';
	expanderIcons?: Icons;
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
	expanderIcons,
	items,
	nestedKey,
	onExpandedChange,
	onItemsChange,
	onSelectionChange,
	selectedKeys,
	showExpanderOnHover = true,
	...otherProps
}: ITreeViewProps<T>) {
	const state = useTree<T>({
		expandedKeys,
		items,
		onExpandedChange,
		onItemsChange,
		onSelectionChange,
		selectedKeys,
	});

	const context = {
		childrenRoot:
			typeof children === 'function'
				? (children as ChildrenFunction<Object>)
				: undefined,
		expanderIcons,
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
			<DndProvider backend={HTML5Backend}>
				<TreeViewContext.Provider value={context}>
					<Collection<T> items={items}>{children}</Collection>
					<DragLayer />
				</TreeViewContext.Provider>
			</DndProvider>
		</ul>
	);
}

TreeView.Group = TreeViewGroup;
TreeView.Item = TreeViewItem;
TreeView.ItemStack = TreeViewItemStack;
