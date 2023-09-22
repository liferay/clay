/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useCallback, useEffect, useRef} from 'react';

import {useCollection} from './useCollection';
import {useVirtual} from './useVirtual';

import type {CollectionState, ICollectionProps, Props} from './types';

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
	 * Flag if a request is in progress.
	 */
	isLoading?: boolean;

	/**
	 * Defines the method for enable infinite scroll and loading more data into
	 * the list.
	 */
	onLoadMore?: () => Promise<any> | null;

	/**
	 * Add the reference of the parent element that will be used to define the
	 * scroll and get the height of the element for virtualization of the
	 * collection.
	 */
	parentRef: React.RefObject<HTMLElement>;
}

function VirtualDynamicCollection<
	T extends Record<string, any> | string | number,
	P = unknown,
	K = unknown
>({
	as,
	children,
	estimateSize = 37,
	exclude,
	filter,
	filterKey,
	itemContainer,
	items,
	parentKey,
	parentRef,
	passthroughKey,
	publicApi,
	...otherProps
}: Required<Omit<ICollectionProps<T, P>, 'virtualize'>> &
	Props<P, K> &
	IProps) {
	const virtualizer = useVirtual({
		estimateSize,
		items,
		parentRef,
	});

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
		virtualizer,
	});

	const As = as ?? React.Fragment;

	return (
		<As
			{...otherProps}
			style={{
				height: `${state.size}px`,
				position: 'relative',
				width: '100%',
			}}
		>
			{state.collection}
		</As>
	);
}

function DynamicCollection<
	T extends Record<string, any> | string | number,
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
	suppressTextValueWarning,
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
		suppressTextValueWarning,
	});

	return <>{state.collection}</>;
}

export function Collection<
	T extends Record<string, any> | string | number,
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
	isLoading,
	itemContainer,
	items,
	onLoadMore,
	parentKey,
	parentRef,
	passthroughKey = true,
	publicApi,
	suppressTextValueWarning,
	virtualize = false,
	...otherProps
}: Partial<ICollectionProps<T, P>> & Props<P, K> & Partial<IProps>) {
	const containerRef = useRef<HTMLDivElement>(null);
	const isVirtual = collection?.virtualize;
	const Container = as ? as : isVirtual ? 'div' : React.Fragment;

	const onScroll = useCallback(
		(event: Event) => {
			const target = event.target as HTMLElement;

			if (
				target.scrollTop + target.clientHeight >=
					target.scrollHeight - 40 &&
				!isLoading
			) {
				onLoadMore!();
			}
		},
		[onLoadMore, isLoading]
	);

	useEffect(() => {
		if (onLoadMore && containerRef.current) {
			const element = containerRef.current.parentElement!;
			element.addEventListener('scroll', onScroll, true);

			return () => {
				element.removeEventListener('scroll', onScroll, true);
			};
		}
	}, [onScroll]);

	let content;

	if (collection) {
		content = <>{collection.collection}</>;
	} else if (
		virtualize &&
		children instanceof Function &&
		items &&
		parentRef
	) {
		return (
			<VirtualDynamicCollection
				{...otherProps}
				as={as}
				estimateSize={estimateSize}
				itemContainer={itemContainer}
				items={items}
				parentKey={parentKey}
				parentRef={parentRef}
				passthroughKey={passthroughKey}
				publicApi={publicApi}
				suppressTextValueWarning={suppressTextValueWarning}
			>
				{children}
			</VirtualDynamicCollection>
		);
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
				suppressTextValueWarning={suppressTextValueWarning}
			>
				{children}
			</DynamicCollection>
		);
	}

	const virtualProps = isVirtual
		? {
				style: {
					height: `${collection.size}px`,
					position: 'relative',
					width: '100%',
				} as React.CSSProperties,
		  }
		: {};

	const props = as || isVirtual ? {ref: containerRef} : {};

	return (
		<Container {...otherProps} {...virtualProps} {...props}>
			{content}
		</Container>
	);
}
