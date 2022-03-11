/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {FocusScope} from '@clayui/shared';
import classNames from 'classnames';
import React, {useRef} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

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
	/**
	 * Flag to determine which style the TreeView will display.
	 */
	displayType?: 'light' | 'dark';

	/**
	 * Flag to enable Drag and Drop of Nodes over the Tree.
	 */
	dragAndDrop?: boolean;

	/**
	 * Optional drag and drop context: this is to avoid
	 * errors when using various drag and drop contexts
	 * on the same page.
	 */
	dragAndDropContext?: Window & typeof globalThis;

	/**
	 * Flag to expand child nodes when a parent node is checked.
	 */
	expandOnCheck?: boolean;

	/**
	 * Extra classes passed to the expander button.
	 */
	expanderClassName?: string;

	/*
	 * Flag to modify Node expansion state icons.
	 */
	expanderIcons?: Icons;

	/**
	 * When a tree is very large, loading items (nodes) asynchronously is preferred to
	 * decrease the initial payload and memory space. The callback is called every time
	 * the item is a leaf node of the tree.
	 */
	onLoadMore?: (item: T) => Promise<unknown>;

	/**
	 * Calback is called when the user presses the R or F2 hotkey.
	 */
	onRenameItem?: (item: T) => Promise<T>;

	/**
	 * Flag changes the Node selection behavior when a checkbox is rendered on the Node.
	 * - single: select only node.
	 * - multiple: select multiple nodes.
	 * - multiple-recursive: selects multiple nodes and recursively.
	 */
	selectionMode?: 'single' | 'multiple' | 'multiple-recursive' | null;

	/**
	 * Flag to indicate if the TreeView will show the expander in the hover in the Node.
	 */
	showExpanderOnHover?: boolean;
}

export function TreeView<T>(props: ITreeViewProps<T>): JSX.Element & {
	Item: typeof TreeViewItem;
	Group: typeof TreeViewGroup;
	ItemStack: typeof TreeViewItemStack;
};

export function TreeView<T>({
	children,
	className,
	defaultExpandedKeys,
	defaultItems,
	defaultSelectedKeys,
	displayType = 'light',
	dragAndDrop = false,
	dragAndDropContext = window,
	expandedKeys,
	expanderClassName,
	expanderIcons,
	expandOnCheck = false,
	items,
	nestedKey = 'children',
	onExpandedChange,
	onItemsChange,
	onLoadMore,
	onRenameItem,
	onSelectionChange,
	selectedKeys,
	selectionHydrationMode = 'hydrate-first',
	selectionMode = 'single',
	showExpanderOnHover = true,
	...otherProps
}: ITreeViewProps<T>) {
	const rootRef = React.useRef(null);

	const state = useTree<T>({
		defaultExpandedKeys,
		defaultItems,
		defaultSelectedKeys,
		expandedKeys,
		items,
		nestedKey,
		onExpandedChange,
		onItemsChange,
		onSelectionChange,
		selectedKeys,
		selectionHydrationMode,
		selectionMode,
	});

	const childrenRootRef = useRef(
		typeof children === 'function'
			? (children as ChildrenFunction<Object>)
			: null
	);

	const context = {
		childrenRoot: childrenRootRef,
		dragAndDrop,
		expandOnCheck,
		expanderClassName,
		expanderIcons,
		nestedKey,
		onLoadMore,
		onRenameItem,
		rootRef,
		selectionMode,
		showExpanderOnHover,
		...state,
	};

	return (
		<FocusScope>
			<ul
				{...otherProps}
				className={classNames('treeview', className, {
					[`treeview-${displayType}`]: displayType,
					'show-component-expander-on-hover': showExpanderOnHover,
				})}
				ref={rootRef}
				role="tree"
			>
				<DndProvider
					backend={HTML5Backend}
					context={dragAndDropContext}
				>
					<TreeViewContext.Provider value={context}>
						<Collection<T> items={state.items}>
							{children}
						</Collection>
						<DragLayer />
					</TreeViewContext.Provider>
				</DndProvider>
			</ul>
		</FocusScope>
	);
}

TreeView.Group = TreeViewGroup;
TreeView.Item = TreeViewItem;
TreeView.ItemStack = TreeViewItemStack;
