/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {Key, useCallback, useContext, useRef} from 'react';

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
	cursor?: unknown
) => Promise<Array<any> | undefined> | Promise<LoadMoreCursor | undefined>;

export interface ITreeViewContext<T> extends ITreeState<T> {
	childrenRoot: React.MutableRefObject<ChildrenFunction<Object> | null>;
	dragAndDrop?: boolean;
	expandDoubleClick?: boolean;
	expandOnCheck?: boolean;
	expanderClassName?: string;
	expanderIcons?: Icons;
	nestedKey?: string;
	onItemMove?: (item: T, parentItem: T) => void;
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

export type Selection = {
	toggle: (key: Key) => void;
	has: (key: Key) => boolean;
};

export type Expand = {
	toggle: (key: Key) => void;
	has: (key: Key) => boolean;
};

export type LoadMore = <T>(
	id: React.Key,
	item: T,
	willToggle?: boolean
) => Promise<void> | undefined;

export function useAPI(): [Selection, Expand, LoadMore] {
	const {expandedKeys, insert, layout, onLoadMore, selection, toggle} =
		useTreeViewContext();

	const cursorRef = useRef<unknown>(null);

	const loadMore = useCallback(
		<T>(id: React.Key, item: T, willToggle: boolean = false) => {
			if (!onLoadMore) {
				return;
			}

			const layoutItem = layout.layoutKeys.current.get(id);

			if (!layoutItem) {
				return;
			}

			return onLoadMore(item, cursorRef.current)
				.then((items) => {
					if (!items) {
						return;
					}

					if (Array.isArray(items)) {
						insert([...layoutItem.loc, 0], items);

						if (willToggle) {
							toggle(id);
						}
					} else if (items.cursor && items.items) {
						insert([...layoutItem.loc, 0], items.items);
						cursorRef.current = items.cursor;
					}
				})
				.catch((error) => {
					console.error(error);
				});
		},
		[insert]
	);

	const hasKey = useCallback(
		(key: Key) => {
			return selection.selectedKeys.has(key);
		},
		[selection.selectedKeys]
	);

	const hasExpandedKey = useCallback(
		(key: Key) => expandedKeys.has(key),
		[expandedKeys]
	);

	return [
		{
			has: hasKey,
			toggle: selection.toggleSelection,
		},
		{has: hasExpandedKey, toggle},
		loadMore,
	];
}
