/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {Key, useCallback, useContext} from 'react';

import type {ChildrenFunction} from './Collection';
import type {ITreeState} from './useTree';

export type Icons = {
	open: React.ReactElement;
	close: React.ReactElement;
};

type LoadMoreCursor = {
	cursor: unknown;
	items: Array<unknown>;
};

export type OnLoadMore<T> = (
	item: T,
	cursor?: any
) => Promise<Array<any> | undefined> | Promise<LoadMoreCursor | undefined>;

export type MoveItemIndex = {
	next: number;
	previous: number;
};

export interface ITreeViewContext<T> extends ITreeState<T> {
	childrenRoot: React.MutableRefObject<ChildrenFunction<Object> | null>;
	dragAndDrop?: boolean;
	expandDoubleClick?: boolean;
	expandOnCheck?: boolean;
	expanderClassName?: string;
	expanderIcons?: Icons;
	nestedKey?: string;
	onItemMove?: (item: T, parentItem: T, index: MoveItemIndex) => boolean;
	onItemHover?: (item: T, parentItem: T, index: MoveItemIndex) => void;
	onLoadMore?: OnLoadMore<T>;
	onSelect?: (item: T) => void;
	onRenameItem?: (item: T) => Promise<any>;
	rootRef: React.RefObject<HTMLUListElement>;
	selectionMode?: 'single' | 'multiple' | 'multiple-recursive' | null;
	showExpanderOnHover?: boolean;
}

export const TreeViewContext = React.createContext<ITreeViewContext<any>>(
	{} as ITreeViewContext<any>
);

export function useTreeViewContext(): ITreeViewContext<unknown> {
	return useContext(TreeViewContext);
}

type SelectionToggleOptions = {
	selectionMode?: 'single' | 'multiple' | 'multiple-recursive' | null;
	parentSelection?: boolean;
};

export type Selection = {
	toggle: (key: Key, options?: SelectionToggleOptions) => void;
	has: (key: Key) => boolean;
};

export type Expand = {
	toggle: (key: Key) => void;
	has: (key: Key) => boolean;
};

export type LoadMore = {
	get: (key: Key) => any;
	loadMore: <T>(
		id: React.Key,
		item: T,
		willToggle?: boolean
	) => Promise<void> | undefined;
};

export function useAPI(): [Selection, Expand, LoadMore] {
	const {
		cursors,
		expandedKeys,
		insert,
		layout,
		onLoadMore,
		selection,
		toggle,
	} = useTreeViewContext();

	const loadMore = useCallback(
		<T>(id: Key, item: T, willToggle: boolean = false) => {
			if (!onLoadMore) {
				return;
			}

			const layoutItem = layout.layoutKeys.current.get(id);

			if (!layoutItem) {
				return;
			}

			const cursor = cursors.current.get(id);

			return onLoadMore(item, cursor)
				.then((items) => {
					if (!items) {
						return;
					}

					if (Array.isArray(items)) {
						insert([...layoutItem.loc, 0], items);

						if (willToggle) {
							toggle(id);
						}
					} else if (items.items) {
						cursors.current.set(id, items.cursor);
						insert([...layoutItem.loc, 0], items.items);

						if (willToggle && !expandedKeys.has(id)) {
							toggle(id);
						}
					}
				})
				.catch((error) => {
					console.error(error);
				});
		},
		[toggle, insert]
	);

	const hasKey = useCallback(
		(key: Key) => selection.selectedKeys.has(key),
		[selection.selectedKeys]
	);

	const hasExpandedKey = useCallback(
		(key: Key) => expandedKeys.has(key),
		[expandedKeys]
	);

	const getCursor = useCallback(
		(key: Key) => cursors.current.get(key),
		[cursors]
	);

	return [
		{
			has: hasKey,
			toggle: selection.toggleSelection,
		},
		{has: hasExpandedKey, toggle},
		{get: getCursor, loadMore},
	];
}
