/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback, useContext, useMemo, useRef} from 'react';

import {excludeProps, getKey} from './utils';

import type {
	ChildElement,
	CollectionState,
	ICollectionProps,
	Props,
} from './types';

type CollectionContextProps = {
	layout: React.MutableRefObject<Map<React.Key, any>>;
};

const CollectionContext = React.createContext({} as CollectionContextProps);

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
	const {layout: parentLayout} = useContext(CollectionContext);

	const layoutRef = useRef<Map<React.Key, any>>(new Map());

	const layout = parentLayout ?? layoutRef;

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
		return layout.current.get(key);
	}, []);

	const getFirstItem = useCallback(() => {
		const key = layout.current.keys().next().value;

		return {
			key,
			value: layout.current.get(key),
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

				// @ts-ignore
				if (child.type.displayName === 'Item') {
					layout.current.set(
						key,
						getTextValue(key, child, suppressTextValueWarning)
					);
				}

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

			// @ts-ignore
			if (child.type.displayName === 'Item') {
				layout.current.set(
					key,
					getTextValue(key, child, suppressTextValueWarning)
				);
			}

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

	return {
		collection: (
			<CollectionContext.Provider value={{layout: layoutRef}}>
				{collection}
			</CollectionContext.Provider>
		),
		getFirstItem,
		getItem,
	};
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
