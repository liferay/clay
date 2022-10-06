/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useMousePosition} from '@clayui/shared';
import React, {CSSProperties, useRef} from 'react';
import {DragLayerMonitor, XYCoord, useDragLayer} from 'react-dnd';

const layerStyles: CSSProperties = {
	cursor: 'grabbing',
	height: '100%',
	left: 0,
	pointerEvents: 'none',
	position: 'fixed',
	top: 0,
	width: '100%',
	zIndex: 150,
};

function getItemStyles(
	currentOffset: XYCoord | null,
	mousePosition: [number, number],
	ref: React.MutableRefObject<HTMLDivElement | null>
): CSSProperties {
	if (!currentOffset || !ref.current) {
		return {
			display: 'none',
		};
	}

	const rect = ref.current.getBoundingClientRect();

	const transform = `translate(${
		mousePosition[0] + currentOffset.x - rect.width * 0.5
	}px, ${currentOffset.y}px)`;

	return {
		WebkitTransform: transform,
		transform,
	};
}

const DragLayer = ({itemNameKey}: {itemNameKey: string}) => {
	const elementRef = useRef<HTMLDivElement | null>(null);

	const {currentOffset, isDragging, item} = useDragLayer(
		(monitor: DragLayerMonitor) => ({
			currentOffset: monitor.getSourceClientOffset(),
			isDragging: monitor.isDragging(),
			item: monitor.getItem(),
		})
	);

	const mousePosition = useMousePosition();

	if (!isDragging || item.type !== 'treeViewItem') {
		return null;
	}

	const name = item.item[itemNameKey];

	return (
		<div style={layerStyles}>
			<div
				className="treeview-dragging"
				ref={elementRef}
				style={getItemStyles(currentOffset, mousePosition, elementRef)}
			>
				{name}
			</div>
		</div>
	);
};

export default DragLayer;
