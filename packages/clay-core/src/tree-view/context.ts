/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, {Key, useCallback, useContext} from 'react';

import type {ChildrenFunction} from './Collection';
import type {ITreeState} from './useTree';

export type Icons = {
	close: React.ReactElement;
	open: React.ReactElement;
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

export interface ITreeViewContext<T extends Record<string, any>>
	extends ITreeState<T> {
	childrenRoot: React.MutableRefObject<ChildrenFunction<Object> | null>;
	dragAndDrop?: boolean;
	expandDoubleClick?: boolean;
	expandOnCheck?: boolean;
	expanderClassName?: string;
	expanderIcons?: Icons;
	nestedKey?: string;
	onItemHover?: (item: T, parentItem: T, index: MoveItemIndex) => boolean;
	onItemMove?: (item: T, parentItem: T, index: MoveItemIndex) => boolean;
	onLoadMore?: OnLoadMore<T>;
	onRenameItem?: (item: T) => Promise<any>;
	onSelect?: (item: T) => void;
	rootRef: React.RefObject<HTMLUListElement>;
	selectionMode?: 'single' | 'multiple' | 'multiple-recursive' | null;
	showExpanderOnHover?: boolean;
}

export const TreeViewContext = React.createContext<ITreeViewContext<any>>(
	{} as ITreeViewContext<any>
);

export function useTreeViewContext(): ITreeViewContext<Record<string, any>> {
	return useContext(TreeViewContext);
}

type SelectionToggleOptions = {
	parentSelection?: boolean;
	selectionMode?: 'single' | 'multiple' | 'multiple-recursive' | null;
};

export type Selection = {
	has: (key: Key) => boolean;
	toggle: (key: Key, options?: SelectionToggleOptions) => void;
};

export type Expand = {
	has: (key: Key) => boolean;
	toggle: (key: Key) => void;
};

export type LoadMore = {
	get: (key: Key) => any;
	loadMore: <T extends Record<string, any>>(
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
		<T extends Record<string, any>>(
			id: Key,
			item: T,
			willToggle: boolean = false
		) => {
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
					}
					else if (items.items) {
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
