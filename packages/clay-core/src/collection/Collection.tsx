/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useVirtualizer} from '@tanstack/react-virtual';
import React from 'react';

export type ChildrenFunction<T> = (item: T) => React.ReactElement;

interface IInternalProps {
	/**
	 * Component to render.
	 */
	as?: 'div' | React.ComponentType | React.ForwardRefExoticComponent<any>;

	estimateSize?: number;

	parentRef: React.RefObject<HTMLElement>;
}

export interface ICollectionProps<T> {
	/**
	 * Children content to render a dynamic or static content.
	 */
	children: React.ReactNode | ChildrenFunction<T>;

	/**
	 * Property to render content with dynamic data.
	 */
	items?: Array<T>;

	/**
	 * Flag to indicate whether the list should be virtualized.
	 */
	virtualize?: boolean;
}

type ChildElement = React.ReactElement<any> & {
	ref?: (node: HTMLElement | null) => void;
};

export function getKey(index: number, key?: React.Key | null) {
	if (
		key != null &&
		(!String(key).startsWith('.') || String(key).startsWith('.$'))
	) {
		return key;
	}

	return `$.${index}`;
}

type VirtualProps<T> = IInternalProps & {
	children: ChildrenFunction<T>;
	items: Array<T>;
};

function VirtualDynamicCollection<T extends Record<any, any>>({
	as: Container = 'div',
	children,
	estimateSize = 37,
	items,
	parentRef,
}: VirtualProps<T>) {
	const virtualizer = useVirtualizer({
		count: items.length,
		estimateSize: () => estimateSize,
		getScrollElement: () => parentRef.current,
	});

	return (
		<Container
			style={{
				height: virtualizer.getTotalSize(),
				position: 'relative',
				width: '100%',
			}}
		>
			{virtualizer.getVirtualItems().map((virtual) => {
				const item = items[virtual.index];

				const child: ChildElement = children(item);

				const key = getKey(virtual.index, item.id ?? child.key);

				return React.cloneElement(child, {
					key,
					keyValue: key,
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
				});
			})}
		</Container>
	);
}

export function Collection<T extends Record<any, any>>({
	as,
	children,
	estimateSize,
	items,
	parentRef,
	virtualize = false,
}: ICollectionProps<T> & Partial<IInternalProps>) {
	if (virtualize && children instanceof Function && items && parentRef) {
		return (
			<VirtualDynamicCollection
				as={as}
				estimateSize={estimateSize}
				items={items}
				parentRef={parentRef}
			>
				{children}
			</VirtualDynamicCollection>
		);
	}

	const Container = as ?? React.Fragment;

	return (
		<Container>
			{typeof children === 'function' && items
				? items.map((item, index) => {
						const child: ChildElement = children(item);

						const key = getKey(index, item.id ?? child.key);

						return React.cloneElement(child, {
							key,
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
		</Container>
	);
}
