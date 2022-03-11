/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {Key, useCallback} from 'react';

import {useTreeViewContext} from './context';
import {ItemContextProvider, useItem} from './useItem';

export type Selection = {
	toggle: (key: Key) => void;
	has: (key: Key) => boolean;
};

export type ChildrenFunction<T> = (
	item: Omit<T, 'indexes' | 'itemRef' | 'key' | 'parentItemRef'>,
	selection: Selection
) => React.ReactElement;

export interface ICollectionProps<T> {
	children: React.ReactNode | ChildrenFunction<T>;

	/**
	 * Property to set the initial value of `items`.
	 */
	defaultItems?: Array<T>;

	/**
	 * Property to inform the dynamic data of the tree.
	 */
	items?: Array<T>;
}

export function getKey(
	index: number,
	key?: React.Key | null,
	parentKey?: React.Key
) {
	if (
		key != null &&
		(!String(key).startsWith('.') || String(key).startsWith('.$'))
	) {
		return key;
	}

	return parentKey ? `${parentKey}.${index}` : `$.${index}`;
}

export function removeItemInternalProps<T extends Record<any, any>>(props: T) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const {indexes, itemRef, key, parentItemRef, ...item} = props;

	return item;
}

export function Collection<T extends Record<any, any>>({
	children,
	items,
}: ICollectionProps<T>) {
	const {selection} = useTreeViewContext();
	const {key: parentKey} = useItem();

	const hasKey = useCallback(
		(key: Key) => {
			return selection.selectedKeys.has(key);
		},
		[selection.selectedKeys]
	);

	return (
		<>
			{typeof children === 'function' && items
				? items.map((item, index) => {
						const child = children(removeItemInternalProps(item), {
							has: hasKey,
							toggle: selection.toggleSelection,
						});

						const key = getKey(
							index,
							item.id ?? child.key,
							parentKey
						);

						return (
							<ItemContextProvider
								key={key}
								value={{...item, index, key}}
							>
								{child}
							</ItemContextProvider>
						);
				  })
				: React.Children.map(children, (child, index) => {
						if (!React.isValidElement(child)) {
							return null;
						}

						const key = getKey(index, child.key, parentKey);

						return (
							<ItemContextProvider key={key} value={{index, key}}>
								{child}
							</ItemContextProvider>
						);
				  })}
		</>
	);
}
