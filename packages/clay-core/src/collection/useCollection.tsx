/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useId} from '@clayui/shared';
import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useReducer,
	useRef,
} from 'react';

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

type LayoutValue = {
	index: number;
	value: string;
	instanceId: string;
};

type CollectionContextProps = {
	layout: React.MutableRefObject<Map<React.Key, LayoutValue>>;
	keys: React.MutableRefObject<Map<React.Key, ItemLoc>>;
	forceUpdate?: React.Dispatch<unknown>;
};

const CollectionContext = React.createContext({} as CollectionContextProps);

const SECTION_NAMES = ['Group', 'Section'];

function getItemId(value: Record<string, any> | string | number, key: string) {
	return typeof value === 'object' ? value[key] : value;
}

export function useCollection<
	T extends Record<string, any> | string | number,
	P = unknown,
	K = unknown
>({
	children,
	connectNested = true,
	exclude,
	filter,
	filterKey,
	forceDeepRootUpdate,
	itemContainer: ItemContainer,
	itemIdKey = 'id',
	items,
	load,
	notFound,
	parentKey,
	passthroughKey = true,
	publicApi,
	suppressTextValueWarning = true,
	virtualizer,
	visibleKeys,
}: ICollectionProps<T, P> & Props<P, K>): CollectionState {
	const {forceUpdate, layout: parentLayout} = useContext(CollectionContext);

	const layoutRef = useRef<Map<React.Key, LayoutValue>>(new Map());
	const layoutKeysRef = useRef<Map<React.Key, ItemLoc>>(new Map());
	const keysRef = useRef<Array<React.Key>>([]);
	const [, setForceUpdate] = useReducer((renders) => renders + 1, 0);

	const collectionId = useId();

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
		[filter, filterKey]
	);

	const performItemRender = useCallback(
		(
			child: ChildElement,
			key: React.Key,
			index: number,
			item?: T,
			props?: Record<string, any>
		) => {
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
					? {
							index,
							keyValue: key,

							// We only pass the textValue to the component when the collection
							// indicates that it will be used for accessibility issues.
							...(!suppressTextValueWarning
								? {
										textValue: getTextValue(
											key,
											child,
											true
										),
								  }
								: {}),
					  }
					: {}),
				...(props ? props : {}),
			});
		},
		[ItemContainer, performFilter, passthroughKey, suppressTextValueWarning]
	);

	const createItemsLayout = useCallback(
		({children, items}: ICollectionProps<T, P>) => {
			keysRef.current = [];
			layoutKeysRef.current.clear();

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

					createItemsLayout({children, items});
				}
			};

			function registerItem(
				key: React.Key,
				child: ChildElement,
				index: number
			) {
				if (performFilter(child)) {
					return;
				}

				if (child.type.displayName === 'Item') {
					layout.current.set(key, {
						index,
						instanceId: collectionId,
						value: getTextValue(
							key,
							child,
							suppressTextValueWarning
						),
					});
				}

				const prevKey = keysRef.current[keysRef.current.length - 1];
				keysRef.current.push(key);

				layoutKeysRef.current.set(key, {prevKey});

				if (prevKey && layoutKeysRef.current.has(prevKey)) {
					layoutKeysRef.current.set(prevKey, {
						...layoutKeysRef.current.get(prevKey),
						nextKey: key,
					});
				}
			}

			if (items && children instanceof Function) {
				for (let index = 0; index < items.length; index++) {
					const item = items[index] as T;
					const publicItem =
						exclude && typeof item === 'object'
							? excludeProps(item as Record<any, any>, exclude)
							: (item as T);
					const child = Array.isArray(publicApi)
						? (children(publicItem, ...publicApi) as ChildElement)
						: (children(publicItem, index) as ChildElement);

					callNestedChild(child);

					const key = getKey(
						index,
						child.key ?? getItemId(item, itemIdKey),
						parentKey
					);

					// TODO: We need support for items with just number and string types.
					if (typeof item === 'object') {
						item['_key'] = key;
					}

					registerItem(key, child, index);
				}
			} else {
				React.Children.forEach(children, (child, index) => {
					if (!React.isValidElement(child)) {
						return;
					}

					callNestedChild(child as ChildElement);

					registerItem(
						getKey(index, child.key!, parentKey),
						child as ChildElement,
						index
					);
				});
			}
		},
		[
			performFilter,
			publicApi,
			itemIdKey,
			exclude,
			parentKey,
			suppressTextValueWarning,
			collectionId,
			layout,
		]
	);

	const performCollectionRender = useCallback(
		({children, items}: ICollectionProps<T, P>) => {
			if (children instanceof Function && items) {
				if (virtualizer) {
					return virtualizer.getVirtualItems().map((virtual) => {
						const isLoader = virtual.index > items.length - 1;

						if (isLoader) {
							return React.cloneElement(
								load as React.ReactElement,
								{
									'data-index': virtual.index,
									key: `${virtual.index}-loader`,
									ref: (node: HTMLElement) => {
										virtualizer.measureElement(node);
									},
									style: {
										left: 0,
										position: 'absolute',
										top: 0,
										transform: `translateY(${virtual.start}px)`,
										width: '100%',
									},
								}
							);
						}

						const item = items[virtual.index] as T;

						const publicItem =
							exclude && typeof item === 'object'
								? excludeProps(
										item as Record<any, any>,
										exclude
								  )
								: item;
						const child = Array.isArray(publicApi)
							? (children(
									publicItem,
									...publicApi
							  ) as ChildElement)
							: (children(
									publicItem,
									virtual.index
							  ) as ChildElement);

						const props = {
							className:
								virtual.index === items.length - 1 && !!load
									? 'mb-2'
									: undefined,
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
								child.key ?? getItemId(item, itemIdKey),
								parentKey
							),
							virtual.index,
							item,
							props
						);
					});
				}

				return items.map((item, index) => {
					const publicItem =
						exclude && typeof item === 'object'
							? excludeProps(item as Record<any, any>, exclude)
							: item;
					const child = Array.isArray(publicApi)
						? (children(publicItem, ...publicApi) as ChildElement)
						: (children(publicItem, index) as ChildElement);

					const key = getKey(
						index,
						child.key ?? getItemId(item, itemIdKey),
						parentKey
					);

					if (
						visibleKeys &&
						((Array.isArray(visibleKeys) &&
							visibleKeys.length > 0 &&
							!visibleKeys.includes(index)) ||
							(visibleKeys instanceof Set &&
								visibleKeys.size > 0 &&
								!visibleKeys.has(key)))
					) {
						return null;
					}

					return performItemRender(child, key, index, item);
				});
			}

			return React.Children.map(children, (child, index) => {
				if (!React.isValidElement(child)) {
					return null;
				}

				const key = getKey(index, child.key, parentKey);

				if (
					visibleKeys &&
					((Array.isArray(visibleKeys) &&
						visibleKeys.length > 0 &&
						!visibleKeys.includes(index)) ||
						(visibleKeys instanceof Set &&
							visibleKeys.size > 0 &&
							!visibleKeys.has(key)))
				) {
					return null;
				}

				return performItemRender(child as ChildElement, key, index);
			});
		},
		[
			load,
			performItemRender,
			publicApi,
			exclude,
			parentKey,
			visibleKeys,
			itemIdKey,
			virtualizer,
		]
	);

	const getItem = useCallback(
		(key: React.Key) => {
			return layout.current.get(key)!;
		},
		[layout]
	);

	const hasItem = useCallback(
		(key: React.Key) => {
			return layout.current.has(key)!;
		},
		[layout]
	);

	const getFirstItem = useCallback(() => {
		const key = layout.current.keys().next().value;

		return {
			key,
			...layout.current.get(key)!,
		};
	}, [layout]);

	const getLastItem = useCallback(() => {
		const key = Array.from(layout.current.keys()).pop()!;

		return {
			key,
			...layout.current.get(key)!,
		};
	}, [layout]);

	const getItems = useCallback(() => {
		return Array.from(layout.current.keys());
	}, [layout]);

	const getSize = useCallback(() => layout.current.size, [layout]);

	const cleanUp = useCallback(() => {
		layout.current.forEach((value, key) => {
			if (value.instanceId === collectionId) {
				layout.current.delete(key);
			}
		});
	}, []);

	// We build the list data structure into the collection first so we can
	// consume the data later and only recompute when the data changes or
	// the children this avoids recalculating again on any rendering,
	// for example on a virtualized list.
	useMemo(() => {
		if (!parentLayout) {
			cleanUp();
		}

		// Walks through the elements to compute the layout of the collection
		// before rendering the element. The data can be consumed later even
		// if the element is not rendered.
		createItemsLayout({children, items});
	}, [children, createItemsLayout, items, cleanUp, parentLayout]);

	// It builds the dynamic or static collection, done in two steps: Data and
	// Rendering, both go through the elements to get the data of each item.
	//
	// - Data: We get the data of the item to consume later
	// - Rendering: We render each element in memory
	const rendered = useMemo(() => {
		const list = performCollectionRender({children, items});

		if (list.length === 0 && notFound) {
			return notFound;
		}

		return list;
	}, [children, performCollectionRender, items, notFound]);

	// Effect only called when the component is unmounted removing the layout
	// items that are rendered by the collection instance, effect only when
	// there are nested collections.
	useEffect(
		() => () => {
			if (forceUpdate) {
				cleanUp();

				forceUpdate(null);
			}
		},
		[]
	);

	// Effect forces the rerender of the root collection if it exists after
	// adding the items of the collection instance to the layout root.
	// NOTE: This update avoids the side effect of set the state in a `useMemo`
	// at render time then only being called when the collection is ready.
	useEffect(() => {
		if (forceUpdate) {
			forceUpdate(null);
		}
	}, [forceUpdate, children, items]);

	const contextValue = useMemo(
		() => ({
			forceUpdate: forceDeepRootUpdate ? setForceUpdate : undefined,
			keys: layoutKeysRef,
			layout,
		}),
		[forceDeepRootUpdate, setForceUpdate, layoutKeysRef, layout]
	);

	const collectionOutput = useMemo(
		() =>
			connectNested ? (
				<CollectionContext.Provider value={contextValue}>
					{rendered}
				</CollectionContext.Provider>
			) : (
				<>{rendered}</>
			),
		[connectNested, contextValue, rendered]
	);

	const collectionAPI = useMemo(
		() => ({
			getFirstItem,
			getItem,
			getItems,
			getLastItem,
			getSize,
			hasItem,
		}),
		[getFirstItem, getItem, getItems, getLastItem, getSize, hasItem]
	);

	return {
		UNSAFE_virtualizer: virtualizer,
		collection: collectionOutput,
		...collectionAPI,
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
