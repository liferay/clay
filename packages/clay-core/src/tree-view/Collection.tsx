/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React from 'react';

import {
	ChildrenFunction as ChildrenFunctionBase,
	Collection as CollectionBase,
	excludeProps,
} from '../collection';
import {Expand, LoadMore, Selection, useAPI} from './context';
import {ItemContextProvider, useItem} from './useItem';

export type ChildrenFunction<T extends Record<string, any>> =
	ChildrenFunctionBase<T, [Selection, Expand, LoadMore]>;

export interface ICollectionProps<T extends Record<string, any>> {
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

const exclude = new Set([
	'index',
	'indexes',
	'itemRef',
	'key',
	'parentItemRef',
	'prevKey',
	'nextKey',
]);

function ItemContainer({
	item = {},
	index,
	keyValue,
	children,
}: Record<string, any>) {
	return (
		<ItemContextProvider value={{...item, index, key: keyValue}}>
			{children}
		</ItemContextProvider>
	);
}

type Props = {
	as?: 'div' | React.ComponentType | React.ForwardRefExoticComponent<any>;
};

export function Collection<T extends Record<string, any>>({
	as,
	children,
	items,
	...otherProps
}: Props & ICollectionProps<T>) {
	const api = useAPI();
	const {key: parentKey} = useItem();

	return (
		<CollectionBase
			{...otherProps}
			as={as}
			exclude={exclude}
			itemContainer={ItemContainer}
			items={items}
			parentKey={parentKey}
			publicApi={api}
		>
			{children}
		</CollectionBase>
	);
}

export function removeItemInternalProps<T extends Record<any, any>>(props: T) {
	return excludeProps(props, exclude);
}
