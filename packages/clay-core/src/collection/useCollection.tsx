/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback, useMemo, useRef} from 'react';

import {excludeProps, getKey} from './utils';

import type {ChildElement, ICollectionProps, Props} from './types';

export type CollectionState = {
	collection: Array<JSX.Element | null | undefined>;
	getFirstItem: () => {key: string; value: string};
	getItem: (key: React.Key) => string;
};

export function useCollection<
	T extends Record<any, any>,
	P = unknown,
	K = unknown
>({
	children,
	exclude,
	filter,
	filterKey,
	itemContainer: ItemContainer,
	items,
	parentKey,
	passthroughKey = true,
	publicApi,
	suppressTextValueWarning = true,
}: ICollectionProps<T, P> & Props<P, K>): CollectionState {
	const layoutRef = useRef<Map<React.Key, any>>(new Map());

	const performFilter = useCallback(
		(
			child:
				| React.ReactPortal
				| React.ReactElement<
						unknown,
						string | React.JSXElementConstructor<any>
				  >
		) => {
			if (!filter) {
				return false;
			}

			if (typeof child.props.children === 'string') {
				return !filter(child.props.children);
			}

			if (filterKey && child.props[filterKey]) {
				return !filter(child.props[filterKey]);
			}

			return false;
		},
		[filter]
	);

	const getItem = useCallback((key: React.Key) => {
		return layoutRef.current.get(key);
	}, []);

	const getFirstItem = useCallback(() => {
		const key = layoutRef.current.keys().next().value;

		return {
			key,
			value: layoutRef.current.get(key),
		};
	}, []);

	const collection = useMemo(() => {
		if (children instanceof Function && items) {
			return items.map((item, index) => {
				const publicItem = exclude ? excludeProps(item, exclude) : item;
				const child: ChildElement = Array.isArray(publicApi)
					? children(publicItem, ...publicApi)
					: children(publicItem);

				const key = getKey(index, item.id ?? child.key, parentKey);

				layoutRef.current.set(
					key,
					getTextValue(key, child, suppressTextValueWarning)
				);

				if (performFilter(child)) {
					return;
				}

				if (ItemContainer) {
					return (
						<ItemContainer
							index={index}
							item={item}
							key={key}
							keyValue={key}
						>
							{child}
						</ItemContainer>
					);
				}

				return React.cloneElement(child, {
					key,
					...(passthroughKey ? {index, keyValue: key} : {}),
				});
			});
		}

		return React.Children.map(children, (child, index) => {
			if (!React.isValidElement(child)) {
				return null;
			}

			const key = getKey(index, child.key, parentKey);

			layoutRef.current.set(
				key,
				getTextValue(key, child, suppressTextValueWarning)
			);

			if (performFilter(child)) {
				return;
			}

			if (ItemContainer) {
				return (
					<ItemContainer index={index} key={key} keyValue={key}>
						{child}
					</ItemContainer>
				);
			}

			return React.cloneElement(
				child as React.ReactElement<{keyValue?: React.Key}>,
				{
					key,
					...(passthroughKey ? {index, keyValue: key} : {}),
				}
			);
		});
	}, [children, performFilter, items, publicApi]);

	return {collection, getFirstItem, getItem};
}

function getTextValue(
	key: React.Key,
	child:
		| React.ReactPortal
		| React.ReactElement<
				unknown,
				string | React.JSXElementConstructor<any>
		  >,
	suppressTextValueWarning: boolean
) {
	if (typeof child.props.children === 'string') {
		return child.props.children;
	}

	if (child.props.textValue) {
		return child.props.textValue;
	}

	if (!suppressTextValueWarning) {
		console.warn(
			`Clay: <Item key="${key}" /> with non-plain text content is not compatible with the type being selected. Please add a \`textValue\` prop.`
		);
	}

	return '';
}
