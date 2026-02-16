/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import Icon from '@clayui/icon';
import {sub} from '@clayui/shared';
import React, {CSSProperties, useEffect, useRef, useState} from 'react';
import {DragLayerMonitor, useDragLayer} from 'react-dnd';

import {Position, useDnD} from './DragAndDrop';
import {useTreeViewContext} from './context';

const INDICATOR_WIDTH = 3;

const LAYER_STYLES: CSSProperties = {
	cursor: 'grabbing',
	height: '100%',
	left: 0,
	pointerEvents: 'none',
	position: 'fixed',
	top: 0,
	width: '100%',
	zIndex: 150,
};

const getItemStyles = ({
	currentOffset,
	dragLayerRef,
	position,
	rtl,
	source,
	target,
}: {
	currentOffset: {x: number; y: number} | null;
	dragLayerRef: React.RefObject<HTMLDivElement>;
	position?: Position | null;
	rtl: boolean;
	source: 'keyboard' | 'mouse' | null;
	target: HTMLElement | null;
}) => {

	// Do not display if data is not ready

	if ((!currentOffset && !position) || !dragLayerRef.current) {
		return {
			display: 'none',
		};
	}

	let x;
	let y;

	const dragLayerRect = dragLayerRef.current.getBoundingClientRect();

	// Align to keyboard target

	if (source === 'keyboard' && target) {
		const offset = dragLayerRect.height / 2;

		const targetRect = target.getBoundingClientRect();

		x = targetRect.right - dragLayerRect.width + offset;

		if (position === 'bottom') {
			y =
				targetRect.y +
				targetRect.height -
				dragLayerRect.height / 2 +
				INDICATOR_WIDTH;
		}
		else if (position === 'top') {
			y = targetRect.y - dragLayerRect.height / 2 - INDICATOR_WIDTH;
		}
		else {
			y =
				targetRect.y +
				targetRect.height / 2 -
				dragLayerRect.height / 2 -
				offset;
		}
	}

	// Align to mouse

	else if (currentOffset) {
		x = rtl
			? currentOffset.x + dragLayerRect.width / 2 - window.innerWidth
			: currentOffset.x - dragLayerRect.width / 2;

		y = currentOffset.y - dragLayerRect.height / 2;
	}

	const transform = `translate(${x}px, ${y}px)`;

	return {
		WebkitTransform: transform,
		transform,
	};
};

function findElement(
	rootRef: React.RefObject<HTMLUListElement>,
	key: React.Key | null
): HTMLElement | null {
	if (!rootRef.current || !key) {
		return null;
	}

	const dataId = typeof key === 'number' ? `number,${key}` : `string,${key}`;

	return rootRef.current.querySelector<HTMLElement>(`[data-id="${dataId}"]`);
}

function DragLayer({spritemap}: {spritemap?: string}) {
	const {currentOffset} = useDragLayer((monitor: DragLayerMonitor) => ({
		currentOffset: monitor.getClientOffset(),
	}));

	const {
		currentDrag,
		currentDragKeys,
		currentTarget,
		messages,
		position,
		source,
	} = useDnD();

	const {layout, rootRef} = useTreeViewContext();

	const dragLayerRef = useRef<HTMLDivElement>(null);

	const [style, setStyle] = useState<React.CSSProperties>();

	useEffect(() => {
		setStyle(
			getItemStyles({
				currentOffset,
				dragLayerRef,
				position,
				rtl: document.dir === 'rtl',
				source,
				target: findElement(rootRef, currentTarget),
			})
		);
	}, [currentOffset, currentTarget, position]);

	if (!currentDrag || !layout) {
		return null;
	}

	const item = layout.layoutKeys.current.get(currentDrag);

	if (!item) {
		return null;
	}

	const name =
		currentDragKeys.size > 1
			? sub(messages.dragLayerPluralLabel, [currentDragKeys.size])
			: item.name;

	return (
		<div style={LAYER_STYLES}>
			<div className="treeview-dragging" ref={dragLayerRef} style={style}>
				{item.icon && currentDragKeys.size === 1 ? (
					<Icon
						className="mr-2"
						spritemap={spritemap}
						symbol={item.icon}
					/>
				) : null}

				{name}
			</div>
		</div>
	);
}

export default DragLayer;
