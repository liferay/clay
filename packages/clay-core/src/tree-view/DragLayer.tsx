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

function getItemStyles(
	initialOffset: XYCoord | null,
	currentOffset: XYCoord | null
): CSSProperties {
	if (!initialOffset || !currentOffset) {
		return {
			display: 'none',
		};
	}

	const {x, y} = currentOffset;
	const transform: string = `translate(${x}px, ${y}px)`;

	return {
		WebkitTransform: transform,
		transform,
	};
}

const DragLayer = () => {
	const {currentOffset, initialOffset, isDragging, item} = useDragLayer(
		(monitor: DragLayerMonitor) => ({
			currentOffset: monitor.getSourceClientOffset(),
			initialOffset: monitor.getInitialSourceClientOffset(),
			isDragging: monitor.isDragging(),
			item: monitor.getItem(),
		})
	);

	if (!isDragging) {
		return null;
	}

	return (
		<div style={layerStyles}>
			<div style={getItemStyles(initialOffset, currentOffset)}>
				{item.name}
			</div>
		</div>
	);
};

export default DragLayer;
