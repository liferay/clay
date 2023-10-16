/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback, useMemo} from 'react';

import {ChildrenFunction, Collection} from '../collection';
import {Scope, ScopeContext} from './ScopeContext';
import {useTable} from './context';

type Props<T> = {
	/**
	 * Children content to render a dynamic or static content.
	 */
	children: React.ReactNode | ChildrenFunction<T, unknown>;

	/**
	 * Property to render content with dynamic data.
	 */
	items?: Array<T>;
} & React.TableHTMLAttributes<HTMLTableSectionElement>;

type ItemProps<T> = {
	children: React.ReactElement;
	item: T;
	keyValue: React.Key;
};

// TODO: Move the implementation to the Collection and use the benefits of
// generator to pause the iteration and return later with a form of
// yield CPU time for the browser.
function* flatten<T extends Record<string, any>>(
	array: Array<T>,
	nestedKey: string,
	level = 1
): IterableIterator<T> {
	for (let i = 0; i < array.length; i++) {
		const item = {
			...array[i],
			_index: i,
			_level: level,
			_size: array.length,
		} as unknown as T;

		if (Array.isArray(array[i]![nestedKey])) {
			delete item[nestedKey];
			// @ts-ignore
			item._expandable = true;
			yield item;
			yield* flatten(array[i]![nestedKey], nestedKey, level + 1);
		} else {
			yield item;
		}
	}
}

function BodyInner<T extends Record<string, any>>(
	{children, items: outItems, ...otherProps}: Props<T>,
	ref: React.Ref<HTMLTableSectionElement>
) {
	const {nestedKey} = useTable();

	const items = useMemo(() => {
		if (!nestedKey || !outItems) {
			return outItems;
		}

		return [...flatten(outItems!, nestedKey)];
	}, [outItems, nestedKey]);

	return (
		<tbody {...otherProps} ref={ref}>
			<ScopeContext.Provider value={Scope.Body}>
				<Collection<T>
					itemContainer={useCallback(
						({children, item, keyValue}: ItemProps<any>) =>
							React.cloneElement(children, {
								_expandable: item._expandable,
								_index: item._index,
								_level: item._level,
								_size: item._size,
								keyValue,
							}),
						[]
					)}
					items={items}
					passthroughKey={false}
				>
					{children}
				</Collection>
			</ScopeContext.Provider>
		</tbody>
	);
}

type ForwardRef = {
	displayName: string;
	<T>(
		props: Props<T> & {ref?: React.Ref<HTMLTableSectionElement>}
	): JSX.Element;
};

export const Body = React.forwardRef(BodyInner) as ForwardRef;

Body.displayName = 'TableBody';
