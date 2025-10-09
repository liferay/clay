/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayTable from '@clayui/table';
import classNames from 'classnames';
import React from 'react';
import {
	DropTargetMonitor,
	XYCoord,
	useDrag,
	useDragLayer,
	useDrop,
} from 'react-dnd';
import {getEmptyImage} from 'react-dnd-html5-backend';

const TABLE_COLUMN_DND_TYPE = 'tableColumn';

const initialTableColumns = [
	{
		data: ['Red, white & blue', 'Tricolore', 'Stars & stripes'],
		id: 'flag',
		title: 'Flag',
	},
	{
		data: ['Europe', 'Europe', 'North America'],
		id: 'region',
		title: 'Region',
	},
	{
		data: ['Croatia', 'Italy', 'USA'],
		id: 'country',
		title: 'Country',
	},
	{
		data: [
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
		],
		id: 'description',
		title: 'Description',
	},
];

export type TColumn = {
	data: Array<string>;
	id: string;
	title: string;
};

export interface ICustomDragLayerProps {
	/**
	 * List of columns in which the Drag Layer will find the one currently being dragged
	 */
	columns: Array<TColumn>;

	/**
	 * Width of the Drag Layer as specified by the width of the heading cell
	 */
	width: number;
}

const CustomDragLayer = ({columns, width}: ICustomDragLayerProps) => {
	const {currentOffset, initialOffset, isDragging, item} = useDragLayer(
		(monitor) => ({
			currentOffset: monitor.getSourceClientOffset(),
			initialOffset: monitor.getInitialSourceClientOffset(),
			isDragging: monitor.isDragging(),
			item: monitor.getItem(),
		})
	);

	if (!isDragging) {
		return null;
	}

	const columnBeingDragged = columns.find(
		(column: TColumn) => column.id === item.id
	);

	return (
		<ColumnDragPreview
			column={columnBeingDragged!}
			currentOffset={currentOffset}
			initialOffset={initialOffset}
			width={width}
		/>
	);
};

export interface IColumnDragPreviewProps {
	/**
	 * Column to be used as a Drag Preview
	 */
	column: TColumn;

	/**
	 * Current offset of the Drag Preview from the initial position of the heading cell
	 */
	currentOffset: XYCoord | null;

	/**
	 * Initial offset of the Drag Preview
	 */
	initialOffset: XYCoord | null;

	/**
	 * Width of the Drag Layer as specified by the width of the heading cell
	 */
	width: number;
}

const ColumnDragPreview = ({
	column,
	currentOffset,
	initialOffset,
	width,
}: IColumnDragPreviewProps) => {
	const dragLayerStyles: React.CSSProperties = {
		height: '100%',
		left: 0,
		pointerEvents: 'none',
		position: 'fixed',
		top: 0,
		width,
		zIndex: 1060,
	};

	const dragItemStyles: React.CSSProperties = {
		display: !initialOffset || !currentOffset ? 'none' : '',
		transform:
			initialOffset && currentOffset
				? `translate(${currentOffset.x}px, ${currentOffset.y}px)`
				: '',
	};

	return (
		<div style={dragLayerStyles}>
			<div style={dragItemStyles}>
				<ClayTable className="table-clone">
					<ClayTable.Head>
						<ClayTable.Row>
							<ClayTable.Cell headingCell headingTitle>
								{column.title}
							</ClayTable.Cell>
						</ClayTable.Row>
					</ClayTable.Head>

					<ClayTable.Body>
						{column.data.map((cell: string, index: number) => (
							<ClayTable.Row
								key={`${column.id}_${cell}_${index}`}
							>
								<ClayTable.Cell>{cell}</ClayTable.Cell>
							</ClayTable.Row>
						))}
					</ClayTable.Body>
				</ClayTable>
			</div>
		</div>
	);
};

interface IDraggableTableHeadingProps {
	/**
	 * Unique identifier of the table heading
	 */
	id: string;

	/**
	 * Index of the table heading item in order to keep track of it's positioning within the array
	 */
	index: number;

	/**
	 * Function that handles the moving of List Items
	 */
	onMove: (dragIndex: number, hoverIndex: number) => void;

	/**
	 * Title of the column, text to be displayed within the heading
	 */
	title: string;
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

const DraggableTableHeaderCell = ({
	id,
	index,
	onMove,
	title,
}: IDraggableTableHeadingProps) => {
	const ref = React.useRef<HTMLTableHeaderCellElement>(null);

	const [{canDrop}, drop] = useDrop({
		accept: TABLE_COLUMN_DND_TYPE,
		collect: (monitor: DropTargetMonitor) => ({
			canDrop: monitor.canDrop(),
		}),
		hover(dragItem: IDragItem) {
			const dragIndex = dragItem.index;

			const hoverIndex = index;

			if (!ref.current || dragIndex === hoverIndex) {
				return;
			}

			onMove(dragIndex, hoverIndex);

			dragItem.index = hoverIndex;
		},
	});

	const [{itemBeingDragged}, drag, preview] = useDrag({
		collect: (monitor: any) => ({
			itemBeingDragged: monitor.getItem() || {id: 0},
		}),
		item: {id, index, type: TABLE_COLUMN_DND_TYPE},
	});

	React.useEffect(() => {
		preview(getEmptyImage(), {captureDraggingState: true});
	}, [preview]);

	drag(drop(ref));

	return (
		<ClayTable.Cell
			className={classNames('c-drag', {
				'c-dragging': itemBeingDragged.id === id,
				'c-droppable': canDrop,
			})}
			headingCell
			headingTitle
			ref={ref}
		>
			{title}
		</ClayTable.Cell>
	);
};

const ClayTableWithDraggableColumns: React.FunctionComponent = () => {
	const [tableColumns, setTableColumns] = React.useState(initialTableColumns);
	const [dragPreviewWidth, setDragPreviewWidth] = React.useState(0);

	const onMove = React.useCallback(
		(dragIndex: number, hoverIndex: number) => {
			const columns = [...tableColumns];

			columns.splice(dragIndex, 1);

			columns.splice(hoverIndex, 0, tableColumns[dragIndex]);

			setTableColumns(columns);
		},
		[tableColumns]
	);

	const tableRows = new Array(tableColumns[0].data.length)
		.fill(null)
		.map((_item, index: number) =>
			tableColumns.map((column: TColumn) => ({
				data: column.data[index],
				id: column.id,
			}))
		);

	const [{itemBeingDragged}] = useDrag({
		collect: (monitor: any) => ({
			itemBeingDragged: monitor.getItem(),
		}),
		item: {type: TABLE_COLUMN_DND_TYPE},
	});

	const [{canDrop}] = useDrop({
		accept: TABLE_COLUMN_DND_TYPE,
		collect: (monitor: DropTargetMonitor) => ({
			canDrop: monitor.canDrop(),
		}),
	});

	const isDragging = itemBeingDragged ? true : false;

	return (
		<>
			<ClayTable
				className={classNames('table-drag', {
					'table-dragging': isDragging,
				})}
			>
				<ClayTable.Head>
					<ClayTable.Row>
						{tableColumns.map((column: TColumn, index: number) => (
							<DraggableTableHeaderCell
								id={column.id}
								index={index}
								key={column.id}
								onMove={onMove}
								title={column.title}
							/>
						))}
					</ClayTable.Row>
				</ClayTable.Head>

				<ClayTable.Body>
					{tableRows.map((row, index: number) => (
						<ClayTable.Row
							key={`${row[index].id}_${row[index].data}`}
						>
							{row.map((cell) => (
								<ClayTable.Cell
									className={classNames({
										'c-dragging':
											itemBeingDragged &&
											itemBeingDragged.id === cell.id,
										'c-droppable': canDrop,
									})}
									key={`${cell.id}_${cell.data}`}
									ref={(node) =>
										node &&
										setDragPreviewWidth(node.offsetWidth)
									}
									truncate
								>
									{cell.data}
								</ClayTable.Cell>
							))}
						</ClayTable.Row>
					))}
				</ClayTable.Body>
			</ClayTable>

			<CustomDragLayer columns={tableColumns} width={dragPreviewWidth} />
		</>
	);
};

export default ClayTableWithDraggableColumns;
