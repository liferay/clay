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

export interface ITreeViewContext<T> extends ITreeState<T> {
	childrenRoot: React.MutableRefObject<ChildrenFunction<Object> | null>;
	dragAndDrop?: boolean;
	expandDoubleClick?: boolean;
	expandOnCheck?: boolean;
	expanderClassName?: string;
	expanderIcons?: Icons;
	nestedKey?: string;
	onItemMove?: (item: T, parentItem: T) => void;
	onLoadMore?: (item: any) => Promise<unknown>;
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

export function useAPI() {
	const {expandedKeys, selection, toggle} = useTreeViewContext();

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
	] as const;
}
