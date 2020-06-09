/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLayout from '@clayui/layout';
import {XYCoord} from 'dnd-core';
import React, {useCallback, useRef, useState} from 'react';
import {DropTargetMonitor, useDrag, useDrop} from 'react-dnd';

interface IProps {
	/**
	 * Content Row unique identifier
	 */
	id: any;

	/**
	 * Index of the Content Row in order to keep track of it's positioning within the array
	 */
	index: number;

	/**
	 * Function that handles the moving of Content Rows
	 */
	onMove: (dragIndex: number, hoverIndex: number) => void;
}

interface IDragItem {
	/**
	 * Content Row unique identifier
	 */
	id: string;

	/**
	 * Index of the Content Row in order to keep track of it's positioning within the array
	 */
	index: number;

	/**
	 * Type of data that is allowed to be dragged
	 */
	type: string;
}

const DraggableLayoutRow: React.FunctionComponent<IProps> = ({
	id,
	index,
	onMove,
}) => {
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
		backgroundColor: isItemBeingDragged ? '#EFEFEF' : '#FFFFFF',
		border: isItemBeingDragged ? '2px solid #555555' : '',
		cursor: 'grab',
		opacity: isDragging ? 0 : 1,
	};

	return (
		<ClayLayout.ContentRow
			className="border mb-1 p-2 rounded shadow-sm"
			id={`listItem${id}`}
			ref={ref}
			style={style}
		>
			{`Item ${id}`}
		</ClayLayout.ContentRow>
	);
};

const DraggableColumn: React.FunctionComponent = () => {
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
			text:
				'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
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
		<ClayLayout.ContainerFluid className="mt-3" size="sm">
			<ClayLayout.ContentCol gutters>
				{listItems.map((listItem, index) => (
					<DraggableLayoutRow
						id={listItem.id}
						index={index}
						key={listItem.id}
						onMove={onMove}
					/>
				))}
			</ClayLayout.ContentCol>
		</ClayLayout.ContainerFluid>
	);
};

export default DraggableColumn;
