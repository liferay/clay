/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

export type ChildrenFunction<T> = (item: T) => React.ReactElement;

export interface ICollectionProps<T> {
	children: React.ReactNode | ChildrenFunction<T>;

	/**
	 * Property to render content with dynamic data.
	 */
	items?: Array<T>;
}

export function getKey(index: number, key?: React.Key | null) {
	if (
		key != null &&
		(!String(key).startsWith('.') || String(key).startsWith('.$'))
	) {
		return key;
	}

	return `$.${index}`;
}

export function Collection<T extends Record<any, any>>({
	children,
	items,
}: ICollectionProps<T>) {
	return (
		<>
			{typeof children === 'function' && items
				? items.map((item, index) => {
						const child: React.ReactElement<{
							keyValue?: React.Key;
						}> = children(item);

						const key = getKey(index, item.id ?? child.key);

						return React.cloneElement(child, {
							keyValue: key,
						});
				  })
				: React.Children.map(children, (child, index) => {
						if (!React.isValidElement(child)) {
							return null;
						}

						const key = getKey(index, child.key);

						return React.cloneElement(
							child as React.ReactElement<{keyValue?: React.Key}>,
							{
								keyValue: key,
							}
						);
				  })}
		</>
	);
}
