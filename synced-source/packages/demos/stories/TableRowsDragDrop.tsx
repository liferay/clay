/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTable from '@clayui/table';
import {XYCoord} from 'dnd-core';
import React from 'react';
import {DropTargetMonitor, useDrag, useDrop} from 'react-dnd';

const TABLE_ROW_DND_TYPE = 'tableRow';

const initialTableRows = [
	{
		country: 'Croatia',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis corrupti exercitationem esse unde a eveniet commodi voluptatem minus ipsum laborum enim quis atque sed nemo quia porro, aut quasi. Maiores.',
		id: 'hr',
		region: 'Europe',
		title: 'Red, white & blue',
	},
	{
		country: 'Italy',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis corrupti exercitationem esse unde a eveniet commodi voluptatem minus ipsum laborum enim quis atque sed nemo quia porro, aut quasi. Maiores.',
		id: 'it',
		region: 'Europe',
		title: 'Tricolore',
	},
	{
		country: 'USA',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis corrupti exercitationem esse unde a eveniet commodi voluptatem minus ipsum laborum enim quis atque sed nemo quia porro, aut quasi. Maiores.',
		id: 'usa',
		region: 'North America',
		title: 'Stars & stripes',
	},
];

export type TRow = {
	country: string;
	description: string;
	id: string;
	region: string;
	title: string;
};

interface IDraggableTableRowProps {
	/**
	 * Content of the row
	 */
	content: TRow;

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

const DraggableTableRow = ({
	content,
	index,
	onMove,
}: IDraggableTableRowProps) => {
	const ref = React.useRef<HTMLTableRowElement>(null);

	const [, drop] = useDrop({
		accept: TABLE_ROW_DND_TYPE,
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
		item: {id: content.id, index, type: TABLE_ROW_DND_TYPE},
	});

	const isItemBeingDragged = itemBeingDragged.id === content.id;

	drag(drop(ref));

	const style = {
		cursor: isItemBeingDragged ? 'grabbing' : 'grab',
		opacity: isDragging ? 0 : 1,
	};

	return (
		<ClayTable.Row ref={ref} style={style}>
			<ClayTable.Cell headingTitle>{content.title}</ClayTable.Cell>
			<ClayTable.Cell>{content.region}</ClayTable.Cell>
			<ClayTable.Cell>{content.country}</ClayTable.Cell>
			<ClayTable.Cell truncate>{content.description}</ClayTable.Cell>
		</ClayTable.Row>
	);
};

const ClayTableWithDraggableRows: React.FunctionComponent = () => {
	const [tableRows, setTableRows] = React.useState(initialTableRows);

	const onMove = React.useCallback(
		(dragIndex: number, hoverIndex: number) => {
			const rows = [...tableRows];

			rows.splice(dragIndex, 1);

			rows.splice(hoverIndex, 0, tableRows[dragIndex]);

			setTableRows(rows);
		},
		[tableRows]
	);

	return (
		<ClayTable>
			<ClayTable.Head>
				<ClayTable.Row>
					<ClayTable.Cell expanded headingCell headingTitle>
						Teams
					</ClayTable.Cell>
					<ClayTable.Cell headingCell headingTitle>
						Region
					</ClayTable.Cell>
					<ClayTable.Cell headingCell headingTitle>
						Country
					</ClayTable.Cell>
					<ClayTable.Cell headingCell headingTitle>
						Description
					</ClayTable.Cell>
				</ClayTable.Row>
			</ClayTable.Head>
			<ClayTable.Body>
				{tableRows.map((tableRow: TRow, index: number) => (
					<DraggableTableRow
						content={tableRow}
						index={index}
						key={tableRow.id}
						onMove={onMove}
					/>
				))}
			</ClayTable.Body>
		</ClayTable>
	);
};

export default ClayTableWithDraggableRows;
