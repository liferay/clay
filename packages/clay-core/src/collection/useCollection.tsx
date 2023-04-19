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

type ItemLoc = {
	prevKey?: React.Key;
	nextKey?: React.Key;
};

type CollectionContextProps = {
	layout: React.MutableRefObject<Map<React.Key, any>>;
	keys: React.MutableRefObject<Map<React.Key, ItemLoc>>;
};

const CollectionContext = React.createContext({} as CollectionContextProps);

const SECTION_NAMES = ['Group', 'Section'];

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
	notFound,
	parentKey,
	passthroughKey = true,
	publicApi,
	suppressTextValueWarning = true,
	virtualizer,
}: ICollectionProps<T, P> & Props<P, K>): CollectionState {
	const {layout: parentLayout} = useContext(CollectionContext);

	const layoutRef = useRef<Map<React.Key, any>>(new Map());
	const layoutKeysRef = useRef<Map<React.Key, ItemLoc>>(new Map());
	const keysRef = useRef<Array<React.Key>>([]);

	const layout = parentLayout ?? layoutRef;

	const performFilter = useCallback(
		(child: ChildElement) => {
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

	const performItemRender = useCallback(
		(
			child: ChildElement,
			key: React.Key,
			index: number,
			item?: T,
			props?: Record<string, any>
		) => {
			if (child.type.displayName === 'Item') {
				layout.current.set(
					key,
					getTextValue(key, child, suppressTextValueWarning)
				);
			}

			if (performFilter(child)) {
				return;
			}

			const prevKey = keysRef.current[keysRef.current.length - 1];
			keysRef.current.push(key);

			layoutKeysRef.current.set(key, {prevKey});

			if (layoutKeysRef.current.has(prevKey)) {
				layoutKeysRef.current.set(prevKey, {
					...layoutKeysRef.current.get(prevKey),
					nextKey: key,
				});
			}

			if (ItemContainer) {
				return (
					<ItemContainer
						index={index}
						item={item}
						key={key}
						keyValue={key}
					>
						{props
							? React.cloneElement(
									child as React.ReactElement,
									props
							  )
							: child}
					</ItemContainer>
				);
			}

			const hasChildNeedPassthroughKey = child.type.passthroughKey;

			return React.cloneElement(child as React.ReactElement<any>, {
				key,
				...(passthroughKey || hasChildNeedPassthroughKey
					? {index, keyValue: key}
					: {}),
				...(props ? props : {}),
			});
		},
		[performFilter]
	);

	const performCollection = useCallback(
		({children, items}: ICollectionProps<T, P>) => {
			keysRef.current = [];
			layoutKeysRef.current.clear();
			layout.current.clear();

			// Pre-initialization of nested collections to mount the layout
			// structure.
			// TODO: Mount a structure with the children's information and cache it
			// to use when rendering the component.
			const callNestedChild = (child: ChildElement) => {
				if (
					child.type.displayName &&
					SECTION_NAMES.includes(child.type.displayName)
				) {
					const {children, items} = child.props;

					performCollection({children, items});
				}
			};

			if (children instanceof Function && items) {
				if (virtualizer) {
					return virtualizer.getVirtualItems().map((virtual) => {
						const item = items[virtual.index];

						const publicItem = exclude
							? excludeProps(item, exclude)
							: item;
						const child = Array.isArray(publicApi)
							? (children(
									publicItem,
									...publicApi
							  ) as ChildElement)
							: (children(publicItem) as ChildElement);

						const props = {
							'data-index': virtual.index,
							ref: (node: HTMLElement) => {
								virtualizer.measureElement(node);

								const ref = (child as ChildElement).ref;

								if (typeof ref === 'function') {
									ref(node);
								}
							},
							style: {
								left: 0,
								position: 'absolute',
								top: 0,
								transform: `translateY(${virtual.start}px)`,
								width: '100%',
							},
						};

						return performItemRender(
							child,
							getKey(
								virtual.index,
								item.id ?? child.key,
								parentKey
							),
							virtual.index,
							item,
							props
						);
					});
				}

				return items.map((item, index) => {
					const publicItem = exclude
						? excludeProps(item, exclude)
						: item;
					const child = Array.isArray(publicApi)
						? (children(publicItem, ...publicApi) as ChildElement)
						: (children(publicItem) as ChildElement);

					callNestedChild(child);

					return performItemRender(
						child,
						getKey(index, item.id ?? child.key, parentKey),
						index,
						item
					);
				});
			}

			return React.Children.map(children, (child, index) => {
				if (!React.isValidElement(child)) {
					return null;
				}

				callNestedChild(child as ChildElement);

				return performItemRender(
					child as ChildElement,
					getKey(index, child.key, parentKey),
					index
				);
			});
		},
		[performItemRender, publicApi, virtualizer?.getVirtualItems().length]
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

	const getLastItem = useCallback(() => {
		const key = Array.from(layout.current.values()).pop();

		return {
			key,
			value: layout.current.get(key),
		};
	}, []);

	const collection = useMemo(() => {
		const list = performCollection({children, items});

		if (list.length === 0 && filter) {
			return notFound;
		}

		return list;
	}, [children, performCollection, items]);

	return {
		collection: (
			<CollectionContext.Provider value={{keys: layoutKeysRef, layout}}>
				{collection}
			</CollectionContext.Provider>
		),
		getFirstItem,
		getItem,
		getLastItem,
		size: virtualizer ? virtualizer.getTotalSize() : undefined,
		virtualize: !!virtualizer,
	};
}

export function useCollectionKeys() {
	const {keys} = useContext(CollectionContext);

	return keys;
}

function getTextValue(
	key: React.Key,
	child: ChildElement,
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
