/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {useTreeViewContext} from './context';
import {ItemContextProvider, useItem} from './useItem';

export type ChildrenFunction<T> = (item: T) => React.ReactElement;

export interface ICollectionProps<T> {
	children: React.ReactNode | ChildrenFunction<T>;
	items?: Array<T> | Record<string, T>;
	rootItem?: string;
}

function getKey(index: number, key?: React.Key | null, parentKey?: React.Key) {
	if (
		key != null &&
		(!String(key).startsWith('.') || String(key).startsWith('.$'))
	) {
		return key;
	}

	return parentKey ? `${parentKey}.${index}` : `$.${index}`;
}

export function Collection<T extends Record<any, any>>({
	children,
	items: compoundItems,
	rootItem,
}: ICollectionProps<T>) {
	const {key: parentKey} = useItem();
	const {items: rootItems} = useTreeViewContext();

	const items =
		typeof compoundItems === 'object' &&
		!Array.isArray(compoundItems) &&
		rootItem
			? [compoundItems[rootItem]]
			: (compoundItems as Array<T>);

	return (
		<>
			{typeof children === 'function' && items
				? items.map((item, index) => {
						if (typeof item === 'string') {
							item = (rootItems as Record<string, T>)[item];
						}

						const child = children(item);

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
				: React.Children.toArray(children).map((child, index) => {
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
