/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext, useEffect, useRef, useState} from 'react';
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

export function ItemContextProvider({children, value}: Props) {
	const {
		dragAndDrop,
		expandedKeys,
		items,
		nestedKey,
		onItemMove,
		open,
		reorder,
		selection,
	} = useTreeViewContext();
	const {
		indexes: parentIndexes = [],
		key: parentKey,
		itemRef: parentItemRef,
	} = useItem();

	const keyRef = useRef(getKey(value.key));

	const childRef = useRef<HTMLDivElement>(null);

	const hoverTimeoutIdRef = useRef<number | null>();

	const indexesRef = useRef([...parentIndexes, value.index]);

	const item: Value = {
		...value,
		indexes: indexesRef.current,
		itemRef: childRef,
		key: keyRef.current,
		parentItemRef,
	};

	const hasLazyChildren = Boolean(nestedKey && item[nestedKey]?.length);

	useEffect(
		() =>
			selection.createPartialLayoutItem(
				keyRef.current,
				hasLazyChildren,
				indexesRef.current,
				parentKey
			),
		[
			selection.createPartialLayoutItem,
			hasLazyChildren,
			indexesRef,
			keyRef,
			parentKey,
		]
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

			let indexes = [...item.indexes];
			const lastIndex = indexes.pop();

			switch (overPosition) {
				case TARGET_POSITION.BOTTOM:
					indexes = [...indexes, lastIndex! + 1];
					break;
				case TARGET_POSITION.MIDDLE:
					indexes = [...indexes, lastIndex!, 0];
					break;
				case TARGET_POSITION.TOP:
					indexes = [...indexes, lastIndex!];
					break;
				default:
					break;
			}

			if (onItemMove) {
				const tree = createImmutableTree(items as any, nestedKey!);

				onItemMove(
					removeItemInternalProps((dragItem as Value).item),
					tree.nodeByPath(indexes).parent
				);
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

			if (
				typeof hoverTimeoutIdRef.current !== 'number' &&
				!expandedKeys.has(item.key)
			) {
				hoverTimeoutIdRef.current = setTimeout(() => {
					hoverTimeoutIdRef.current = null;

					if (monitor.isOver({shallow: true})) {
						open(item.key);
					}
				}, 500) as unknown as number;
			}

			const dropItemRect = (
				childRef.current! as HTMLElement
			).getBoundingClientRect();
			const clientOffsetY = monitor.getClientOffset()!.y;

			if (
				clientOffsetY <
				dropItemRect.height * DISTANCE + dropItemRect.top
			) {
				setOverPosition(TARGET_POSITION.TOP);
			} else if (
				clientOffsetY >
				dropItemRect.bottom - dropItemRect.height * DISTANCE
			) {
				setOverPosition(TARGET_POSITION.BOTTOM);
			} else {
				setOverPosition(TARGET_POSITION.MIDDLE);
			}
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
