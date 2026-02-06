/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import React, {CSSProperties} from 'react';
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

function getItemStyles(currentOffset: XYCoord | null): CSSProperties {
	if (!currentOffset) {
		return {
			display: 'none',
		};
	}

	const transform = `translate(${currentOffset.x}px, ${currentOffset.y}px)`;

	return {
		WebkitTransform: transform,
		transform,
	};
}

function DragLayer({itemNameKey}: {itemNameKey: string}) {
	const {currentOffset, isDragging, item} = useDragLayer(
		(monitor: DragLayerMonitor) => ({
			currentOffset: monitor.getClientOffset(),
			isDragging: monitor.isDragging(),
			item: monitor.getItem(),
		})
	);
	if (!isDragging || item.type !== 'treeViewItem') {
		return null;
	}
	const name = item.item[itemNameKey];

	return (
		<div style={layerStyles}>
			<div
				className="treeview-dragging"
				style={getItemStyles(currentOffset)}
			>
				{name}
			</div>
		</div>
	);
}

export default DragLayer;
