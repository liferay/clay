/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useVirtualizer} from '@tanstack/react-virtual';
import React, {useCallback, useEffect, useRef} from 'react';

export type ChildrenFunction<T, P> = P extends Array<unknown>
	? (item: T, ...args: P) => React.ReactElement
	: (item: T) => React.ReactElement;

export interface ICollectionProps<T, P> {
	/**
	 * Children content to render a dynamic or static content.
	 */
	children: React.ReactNode | ChildrenFunction<T, P>;

	/**
	 * Property to render content with dynamic data.
	 */
	items?: Array<T>;

	/**
	 * Flag to indicate whether the list should be virtualized.
	 */
	virtualize?: boolean;
}

interface IProps<P, K>
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
	/**
	 * Component to render.
	 */
	as?: 'div' | React.ComponentType | React.ForwardRefExoticComponent<any>;

	/**
	 * Flag to estimate the default height of a list item in pixels.
	 */
	estimateSize?: number;

	/**
	 * Properties that should be omitted from item data when passed to
	 * children function.
	 */
	exclude?: Set<K>;

	/**
	 * Flag to enable infinite scroll.
	 */
	infiniteScroll?: boolean;

	/**
	 * Flag if a request is in progress.
	 */
	isLoading?: boolean;

	/**
	 * Test method for filtering elements in children (static only).
	 */
	filter?: (value: string) => boolean;

	/**
	 * Defines the name of the property key that is used in the filter (static only).
	 */
	filterKey?: string;

	/**
	 * Add the reference of the parent element that will be used to define the
	 * scroll and get the height of the element for virtualization of the
	 * collection.
	 */
	parentRef: React.RefObject<HTMLElement>;

	/**
	 * Flag to pass the key value to the element.
	 */
	passthroughKey?: boolean;

	/**
	 * Callback called when the last element of the list is rendered in
	 * virtualization and infiniteScroll is enabled.
	 */
	onBottom?: () => void;

	/**
	 * Set for the parent's key to create the unique key of the list items, if
	 * the collection is rendered nested.
	 */
	parentKey?: React.Key;

	/**
	 * Defines the public APIs that are passed in the children function when
	 * it is a dynamic collection.
	 */
	publicApi?: P;

	/**
	 * Defines a component that will be used as a wrapper for items in the
	 * collection if defined.
	 */
	itemContainer?: (props: any) => JSX.Element | null;
}

type ChildElement = React.ReactElement<any> & {
	ref?: (node: HTMLElement | null) => void;
};

/**
 * Helper function to create a unique key for list or tree when defined by
 * developer data or obtained by component in React.
 */
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

/**
 * Helper function for omitting properties of an object, similar to
 * TypeScript's Omit<T, K>.
 */
export function excludeProps<T extends Record<string, any>, K extends keyof T>(
	props: T,
	items: Set<K>
) {
	return (Object.keys(props) as Array<K>).reduce<T>((previous, key) => {
		if (!items.has(key)) {
			previous[key] = props[key];
		}

		return previous;
	}, {} as T);
}

type VirtualProps<T, P, K> = Omit<IProps<P, K>, 'filter'> & {
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

				const child: ChildElement = Array.isArray(publicApi)
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

						if (typeof child.ref === 'function') {
							child.ref(node);
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
					...(passthroughKey ? {keyValue: key} : {}),
					...props,
				});
			})}
		</Container>
	);
}

export function Collection<
	T extends Record<any, any>,
	P = unknown,
	K = unknown
>({
	as,
	children,
	estimateSize,
	exclude,
	filter,
	filterKey,
	infiniteScroll,
	isLoading,
	itemContainer: ItemContainer,
	items,
	onBottom,
	parentKey,
	parentRef,
	passthroughKey = true,
	publicApi,
	virtualize = false,
	...otherProps
}: ICollectionProps<T, P> & Partial<IProps<P, K>>) {
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

	if (virtualize && children instanceof Function && items && parentRef) {
		return (
			<VirtualDynamicCollection
				{...otherProps}
				as={as}
				estimateSize={estimateSize}
				infiniteScroll={infiniteScroll}
				isLoading={isLoading}
				itemContainer={ItemContainer}
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

	return (
		<Container {...otherProps}>
			{children instanceof Function && items
				? items.map((item, index) => {
						const publicItem = exclude
							? excludeProps(item, exclude)
							: item;
						const child: ChildElement = Array.isArray(publicApi)
							? children(publicItem, ...publicApi)
							: children(publicItem);

						const key = getKey(
							index,
							item.id ?? child.key,
							parentKey
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
							...(passthroughKey ? {keyValue: key} : {}),
						});
				  })
				: React.Children.map(children, (child, index) => {
						if (!React.isValidElement(child)) {
							return null;
						}

						if (performFilter(child)) {
							return;
						}

						const key = getKey(index, child.key, parentKey);

						if (ItemContainer) {
							return (
								<ItemContainer
									index={index}
									key={key}
									keyValue={key}
								>
									{child}
								</ItemContainer>
							);
						}

						return React.cloneElement(
							child as React.ReactElement<{keyValue?: React.Key}>,
							{
								key,
								...(passthroughKey ? {keyValue: key} : {}),
							}
						);
				  })}
		</Container>
	);
}
