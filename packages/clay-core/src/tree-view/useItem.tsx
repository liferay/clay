/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext, useEffect, useMemo, useRef, useState} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {getEmptyImage} from 'react-dnd-html5-backend';

import {removeItemInternalProps} from './Collection';
import {useTreeViewContext} from './context';
import {createImmutableTree} from './useTree';

type Value = {
	[propName: string]: any;
	indexes: Array<number>;
	itemRef: React.RefObject<HTMLDivElement>;
	key: React.Key;
	parentItemRef: React.RefObject<HTMLDivElement>;
};

type Props = {
	children: React.ReactNode;
	value: Omit<Value, 'indexes'> & {index: number};
};

const ItemContext = React.createContext<Value>({} as Value);

const TARGET_POSITION = {
	BOTTOM: 'bottom',
	MIDDLE: 'middle',
	TOP: 'top',
} as const;

type ValueOf<T> = T[keyof T];

type Position = ValueOf<typeof TARGET_POSITION>;

const DISTANCE = 0.2;

function getKey(key: React.Key) {
	return typeof key === 'string' ? `${key}`.replace('.$', '') : key;
}

function isMovingIntoItself(from: Array<number>, path: Array<number>) {
	const fromClosestPathTree = from.slice(0, path.length);

	return (
		!fromClosestPathTree.some((loc, index) => loc !== path[index]) &&
		path.length > from.length
	);
}

function getNewItemPath(path: Array<number>, overPosition: Position) {
	let indexes = [...path];

	const lastPathIndex = indexes.pop() as number;

	switch (overPosition) {
		case TARGET_POSITION.BOTTOM:
			indexes = [...indexes, lastPathIndex + 1];
			break;
		case TARGET_POSITION.MIDDLE:
			indexes = [...indexes, lastPathIndex, 0];
			break;
		case TARGET_POSITION.TOP:
			indexes = [...indexes, lastPathIndex];
			break;
		default:
			break;
	}

	return indexes;
}

export function ItemContextProvider({children, value}: Props) {
	const {
		dragAndDrop,
		expandedKeys,
		items,
		layout,
		nestedKey,
		onItemHover,
		onItemMove,
		open,
		reorder,
	} = useTreeViewContext();
	const {
		indexes: parentIndexes,
		itemRef: parentItemRef,
		key: parentKey,
	} = useItem();

	const keyRef = useRef(getKey(value.key));

	const childRef = useRef<HTMLDivElement>(null);

	const hoverTimeoutIdRef = useRef<number | null>();

	// Holds a reference to the index value and only updates when its positions
	// change. This causes a ripple effect that we only want to update
	// when necessary.
	const indexes = useMemo(
		() => [...(parentIndexes ?? []), value.index],
		[parentIndexes, value.index]
	);

	const item: Value = {
		...value,
		indexes,
		itemRef: childRef,
		key: keyRef.current,
		parentItemRef,
	};

	const hasLazyChildren = Boolean(nestedKey && item[nestedKey]?.length);

	useEffect(
		() =>
			layout.createPartialLayoutItem(
				keyRef.current,
				hasLazyChildren,
				indexes,
				parentKey
			),
		[layout.createPartialLayoutItem, hasLazyChildren, keyRef, parentKey]
	);

	useEffect(
		() => layout.patchItem(keyRef.current, indexes),
		[layout.patchItem, indexes]
	);

	const [overPosition, setOverPosition] = useState<Position | null>(null);

	const [{isDragging}, drag, preview] = useDrag({
		canDrag() {
			return dragAndDrop ?? false;
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
		item: {
			item,
			type: 'treeViewItem',
		},
	});

	useEffect(() => {
		preview(getEmptyImage(), {captureDraggingState: true});
	}, [preview]);

	const [{overTarget}, drop] = useDrop({
		accept: 'treeViewItem',
		canDrop(dragItem: unknown) {
			return !isMovingIntoItself(
				(dragItem as Value).item.indexes,
				item.indexes
			);
		},
		collect: (monitor) => ({
			canDrop: monitor.canDrop(),
			overTarget: monitor.isOver({shallow: true}),
		}),
		drop(dragItem: unknown, monitor) {
			if (
				monitor.didDrop() ||
				!monitor.canDrop() ||
				(dragItem as Value).item.key === item.key
			) {
				return;
			}

			if (!childRef || childRef.current === null) {
				return;
			}

			const indexes = getNewItemPath(item.indexes, overPosition!);

			if (onItemMove) {
				const tree = createImmutableTree(items as any, nestedKey!);

				const isMoved = onItemMove(
					removeItemInternalProps((dragItem as Value).item),
					tree.nodeByPath(indexes).parent,
					{
						next: indexes[indexes.length - 1],
						previous: (dragItem as Value).item.index,
					}
				);

				if (!isMoved) {
					return;
				}
			}

			reorder((dragItem as Value).item.indexes, indexes);
		},
		hover(dragItem, monitor) {
			if (!monitor.canDrop() || isDragging) {
				return;
			}

			if (!monitor.isOver({shallow: true})) {
				return;
			}

			const child = item[nestedKey!];

			const dropItemRect = (
				childRef.current! as HTMLElement
			).getBoundingClientRect();
			const clientOffsetY = monitor.getClientOffset()!.y;

			let currentPosition: Position = TARGET_POSITION.MIDDLE;

			if (
				clientOffsetY <
				dropItemRect.height * DISTANCE + dropItemRect.top
			) {
				currentPosition = TARGET_POSITION.TOP;
			} else if (
				clientOffsetY >
					dropItemRect.bottom - dropItemRect.height * DISTANCE &&
				!expandedKeys.has(item.key)
			) {
				currentPosition = TARGET_POSITION.BOTTOM;
			}

			if (
				currentPosition === TARGET_POSITION.MIDDLE &&
				typeof hoverTimeoutIdRef.current !== 'number' &&
				!expandedKeys.has(item.key) &&
				child &&
				Array.isArray(child) &&
				child.length > 0
			) {
				hoverTimeoutIdRef.current = setTimeout(() => {
					hoverTimeoutIdRef.current = null;

					if (monitor.isOver({shallow: true})) {
						open(item.key);
					}
				}, 500) as unknown as number;
			}

			if (onItemHover) {
				const tree = createImmutableTree(items as any, nestedKey!);
				const indexes = getNewItemPath(item.indexes, currentPosition);

				onItemHover(
					removeItemInternalProps(
						(dragItem as unknown as Value).item
					),
					tree.nodeByPath(indexes).parent,
					{
						next: indexes[indexes.length - 1],
						previous: (dragItem as unknown as Value).item.index,
					}
				);
			}

			setOverPosition(currentPosition);
		},
	});

	if (items && items.length && dragAndDrop) {
		drag(drop(childRef));
	}

	return (
		<ItemContext.Provider value={item}>
			{React.cloneElement(children as JSX.Element, {
				isDragging,
				overPosition,
				overTarget,
				ref: childRef,
			})}
		</ItemContext.Provider>
	);
}

export function useItem() {
	return useContext(ItemContext);
}
