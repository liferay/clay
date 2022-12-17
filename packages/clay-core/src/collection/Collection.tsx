/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useVirtualizer} from '@tanstack/react-virtual';
import React, {useEffect, useRef} from 'react';

import {useCollection} from './useCollection';
import {excludeProps, getKey} from './utils';

import type {
	ChildElement,
	ChildrenFunction,
	CollectionState,
	ICollectionProps,
	Props,
} from './types';

interface IProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
	/**
	 * Component to render.
	 */
	as?: 'div' | React.ComponentType | React.ForwardRefExoticComponent<any>;

	/**
	 * Suspense collection that was initialized before the component rendered.
	 */
	collection?: CollectionState;

	/**
	 * Flag to estimate the default height of a list item in pixels.
	 */
	estimateSize?: number;

	/**
	 * Flag to enable infinite scroll.
	 */
	infiniteScroll?: boolean;

	/**
	 * Flag if a request is in progress.
	 */
	isLoading?: boolean;

	/**
	 * Add the reference of the parent element that will be used to define the
	 * scroll and get the height of the element for virtualization of the
	 * collection.
	 */
	parentRef: React.RefObject<HTMLElement>;

	/**
	 * Callback called when the last element of the list is rendered in
	 * virtualization and infiniteScroll is enabled.
	 */
	onBottom?: () => void;
}

type VirtualProps<T, P, K> = Omit<IProps, 'filter' | 'collection'> &
	Props<P, K> & {
		children: ChildrenFunction<T, P>;
		items: Array<T>;
	};

function VirtualDynamicCollection<T extends Record<any, any>, P, K>({
	as: Container = 'div',
	children,
	estimateSize = 37,
	exclude,
	infiniteScroll,
	isLoading,
	itemContainer: ItemContainer,
	items,
	onBottom,
	parentKey,
	parentRef,
	passthroughKey,
	publicApi,
	...otherProps
}: VirtualProps<T, P, K>) {
	const previousLengthRef = useRef(items.length);

	const virtualizer = useVirtualizer({
		count: items.length,
		estimateSize: () => estimateSize,
		getScrollElement: () => parentRef.current,
	});

	const callbackCaptureRef = useRef<boolean>(false);

	useEffect(() => {
		if (items.length < previousLengthRef.current) {
			virtualizer.scrollToIndex(0, {smoothScroll: false});
		}

		previousLengthRef.current = items.length;
	}, [items.length]);

	useEffect(() => {
		if (!isLoading) {
			callbackCaptureRef.current = false;
		}
	}, [isLoading]);

	return (
		<Container
			{...otherProps}
			style={{
				height: virtualizer.getTotalSize(),
				position: 'relative',
				width: '100%',
			}}
		>
			{virtualizer.getVirtualItems().map((virtual) => {
				const item = items[virtual.index];

				// Virtual item to loading
				if (
					infiniteScroll &&
					items.length !== 0 &&
					virtual.index === items.length - 1 &&
					onBottom &&
					!callbackCaptureRef.current
				) {
					callbackCaptureRef.current = true;

					onBottom();
				}

				const publicItem = exclude ? excludeProps(item, exclude) : item;

				const child = Array.isArray(publicApi)
					? children(publicItem, ...publicApi)
					: children(publicItem);

				const key = getKey(
					virtual.index,
					item.id ?? child.key,
					parentKey
				);

				const props = {
					ref: (node: HTMLElement) => {
						virtual.measureElement(node);

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

				if (ItemContainer) {
					return (
						<ItemContainer
							index={virtual.index}
							item={item}
							key={key}
							keyValue={key}
						>
							{React.cloneElement(child, props)}
						</ItemContainer>
					);
				}

				return React.cloneElement(child, {
					key,
					...(passthroughKey
						? {index: virtual.index, keyValue: key}
						: {}),
					...props,
				});
			})}
		</Container>
	);
}

function DynamicCollection<
	T extends Record<any, any>,
	P = unknown,
	K = unknown
>({
	children,
	exclude,
	filter,
	filterKey,
	itemContainer,
	items,
	parentKey,
	passthroughKey,
	publicApi,
}: ICollectionProps<T, P> & Props<P, K>) {
	const state = useCollection({
		children,
		exclude,
		filter,
		filterKey,
		itemContainer,
		items,
		parentKey,
		passthroughKey,
		publicApi,
	});

	return <>{state.collection}</>;
}

export function Collection<
	T extends Record<any, any>,
	P = unknown,
	K = unknown
>({
	as,
	children,
	collection,
	estimateSize,
	exclude,
	filter,
	filterKey,
	infiniteScroll,
	isLoading,
	itemContainer,
	items,
	onBottom,
	parentKey,
	parentRef,
	passthroughKey = true,
	publicApi,
	virtualize = false,
	...otherProps
}: Partial<ICollectionProps<T, P>> & Props<P, K> & Partial<IProps>) {
	if (virtualize && children instanceof Function && items && parentRef) {
		return (
			<VirtualDynamicCollection
				{...otherProps}
				as={as}
				estimateSize={estimateSize}
				infiniteScroll={infiniteScroll}
				isLoading={isLoading}
				itemContainer={itemContainer}
				items={items}
				onBottom={onBottom}
				parentKey={parentKey}
				parentRef={parentRef}
				passthroughKey={passthroughKey}
				publicApi={publicApi}
			>
				{children}
			</VirtualDynamicCollection>
		);
	}

	const Container = as ?? React.Fragment;

	let content;

	if (collection) {
		content = <>{collection.collection}</>;
	} else {
		content = (
			<DynamicCollection
				exclude={exclude}
				filter={filter}
				filterKey={filterKey}
				itemContainer={itemContainer}
				items={items}
				parentKey={parentKey}
				passthroughKey={passthroughKey}
				publicApi={publicApi}
			>
				{children}
			</DynamicCollection>
		);
	}

	return <Container {...otherProps}>{content}</Container>;
}
