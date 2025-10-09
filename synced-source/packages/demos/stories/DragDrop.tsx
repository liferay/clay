/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayList from '@clayui/list';
import {XYCoord} from 'dnd-core';
import React, {useCallback, useRef, useState} from 'react';
import {DropTargetMonitor, useDrag, useDrop} from 'react-dnd';

interface IDraggableListItemProps {
	/**
	 * List Item unique identifier
	 */
	id: any;

	/**
	 * The text displayed in the List Item
	 */
	text: string;

	/**
	 * Index of the List Item in order to keep track of it's positioning within the array
	 */
	index: number;

	/**
	 * Function that handles the moving of List Items
	 */
	onMove: (dragIndex: number, hoverIndex: number) => void;
}

interface IDragItem {
	/**
	 * List Item unique identifier
	 */
	id: string;

	/**
	 * Index of the List Item in order to keep track of it's positioning within the array
	 */
	index: number;

	/**
	 * Type of data that is allowed to be dragged
	 */
	type: string;
}

const DraggableListItem = ({
	id,
	index,
	onMove,
	text,
}: IDraggableListItemProps) => {
	const ref = useRef<HTMLLIElement>(null);

	const [, drop] = useDrop({
		accept: 'listItem',
		hover(item: IDragItem, monitor: DropTargetMonitor) {
			const dragIndex = item.index;

			const hoverIndex = index;

			if (!ref.current || dragIndex === hoverIndex) {
				return;
			}

			const hoverBoundingRect = ref.current!.getBoundingClientRect();

			const verticalMiddle =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

			const mousePosition = monitor.getClientOffset();

			const pixelsToTop =
				(mousePosition as XYCoord).y - hoverBoundingRect.top;

			const draggingUpwards =
				dragIndex > hoverIndex && pixelsToTop > verticalMiddle * 1.5;

			const draggingDownwards =
				dragIndex < hoverIndex && pixelsToTop < verticalMiddle / 2;

			if (draggingDownwards || draggingUpwards) {
				return;
			}

			onMove(dragIndex, hoverIndex);

			item.index = hoverIndex;
		},
	});

	const [{isDragging, itemBeingDragged}, drag] = useDrag({
		collect: (monitor: any) => ({
			isDragging: monitor.isDragging(),
			itemBeingDragged: monitor.getItem() || {id: 0},
		}),
		item: {id, index, type: 'listItem'},
	});

	const isItemBeingDragged = itemBeingDragged.id === id;

	drag(drop(ref));

	const style = {
		backgroundColor: isItemBeingDragged ? '#EFEFEF' : '',
		border: isItemBeingDragged ? '2px solid #555555' : '',
		cursor: 'grab',
		opacity: isDragging ? 0 : 1,
	};

	return (
		<ClayList.Item flex id={`listItem${id}`} ref={ref} style={style}>
			<ClayList.ItemField>{`Item ${id}`}</ClayList.ItemField>

			<ClayList.ItemField expand>
				<ClayList.ItemTitle>{`Item ${id} Title`}</ClayList.ItemTitle>
				<ClayList.ItemText>{text}</ClayList.ItemText>
			</ClayList.ItemField>
		</ClayList.Item>
	);
};

const DraggableList: React.FunctionComponent = () => {
	const [listItems, setListItems] = useState([
		{
			id: 1,
			text: 'Write a cool JS library',
		},
		{
			id: 2,
			text: 'Make it generic enough',
		},
		{
			id: 3,
			text: 'Write README',
		},
		{
			id: 4,
			text: 'Create some examples',
		},
		{
			id: 5,
			text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
		},
		{
			id: 6,
			text: '???',
		},
		{
			id: 7,
			text: 'PROFIT',
		},
	]);

	const onMove = useCallback(
		(dragIndex: number, hoverIndex: number) => {
			const tempList = [...listItems];

			tempList.splice(dragIndex, 1);

			tempList.splice(hoverIndex, 0, listItems[dragIndex]);

			setListItems(tempList);
		},
		[listItems]
	);

	return (
		<ClayList className="col-4">
			{listItems.map((listItem, index) => (
				<DraggableListItem
					id={listItem.id}
					index={index}
					key={listItem.id}
					onMove={onMove}
					text={listItem.text}
				/>
			))}
		</ClayList>
	);
};

export default DraggableList;
