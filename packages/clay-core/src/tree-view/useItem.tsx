/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useContext, useEffect, useRef} from 'react';
import {useDrag, useDrop} from 'react-dnd';
import {getEmptyImage} from 'react-dnd-html5-backend';

import {useTreeViewContext} from './context';

type Value = {
	[propName: string]: any;
	indexes: Array<number>;
	key: React.Key;
};

type Props = {
	children: React.ReactNode;
	value: Omit<Value, 'indexes'> & {index: number};
};

const ItemContext = React.createContext<Value>({} as Value);

function getKey(key: React.Key) {
	return `${key}`.replace('.$', '');
}

export function ItemContextProvider({children, value}: Props) {
	const {items, open, reorder, selection} = useTreeViewContext();
	const {indexes: parentIndexes = [], key: parentKey} = useItem();

	const keyRef = useRef(getKey(value.key));

	const childRef = useRef(null);

	useEffect(
		() => selection.createPartialLayoutItem(keyRef.current, parentKey),
		[selection.createPartialLayoutItem, keyRef, parentKey]
	);

	const item: Value = {
		...value,
		indexes: [...parentIndexes, value.index],
		key: keyRef.current,
	};

	const [{isDragging}, drag, preview] = useDrag({
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
		item: {
			...item,
			type: 'treeViewItem',
		},
	});

	useEffect(() => {
		preview(getEmptyImage(), {captureDraggingState: true});
	}, [preview]);

	const [{overTarget}, drop] = useDrop({
		accept: 'treeViewItem',
		collect: (monitor) => ({
			canDrop: monitor.canDrop(),
			overTarget: monitor.isOver({shallow: true}),
		}),
		drop(dragItem: unknown, monitor) {
			if (monitor.didDrop()) {
				return;
			}

			if (!childRef || childRef.current === null) {
				return;
			}

			const dropItemBoundingRect = (childRef.current! as HTMLElement).getBoundingClientRect();
			const dragItemOffset = monitor.getClientOffset();
			const hoverItemY = dragItemOffset!.y - dropItemBoundingRect!.top;

			const [...indexes] = item.indexes;

			if (hoverItemY < dropItemBoundingRect.height / 2) {
				indexes.pop();
			}

			reorder((dragItem as Value).indexes, indexes);
		},
		hover() {
			if (isDragging) {
				return;
			}

			open(item.key);
		},
	});

	if (items && items.length) {
		drag(drop(childRef));
	}

	return (
		<ItemContext.Provider value={item}>
			{React.cloneElement(children as JSX.Element, {
				isDragging,
				overTarget,
				ref: childRef,
			})}
		</ItemContext.Provider>
	);
}

export function useItem() {
	return useContext(ItemContext);
}
