/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import React from 'react';

const getBufferList = (
	items: Array<Object>,
	start: number,
	end: number,
	EllipsisComponent: React.ComponentType<any>,
	ellipsisProps?: Object,
	spritemap?: string
): Array<Object | number | React.ReactElement> => {
	const removedItems = items.slice(start, Math.max(end, start));

	if (removedItems.length > 1) {
		return [
			<EllipsisComponent
				items={removedItems}
				key="ellipsisComponent"
				spritemap={spritemap}
				{...ellipsisProps}
			/>,
		];
	}

	return removedItems;
};

export const getEllipsisItems = (
	ellipsisBuffer: number,
	items: Array<Object> = [],
	EllipsisComponent: React.ComponentType<any>,
	ellipsisProps?: Object,
	activeIndex?: number,
	activeItems?: Array<Object>,
	spritemap?: string
) => {
	if (activeItems) {
		activeIndex = items.indexOf(activeItems[0]);
	} else {
		activeIndex = 0;
	}

	const lastIndex = items.length - 1;

	const leftBufferEnd = activeIndex - ellipsisBuffer;

	const rightBufferStart = activeIndex + ellipsisBuffer + 1;

	const leftBuffer = getBufferList(
		items,
		1,
		leftBufferEnd,
		EllipsisComponent,
		ellipsisProps,
		spritemap
	);
	const rightBuffer = getBufferList(
		items,
		rightBufferStart,
		lastIndex,
		EllipsisComponent,
		ellipsisProps,
		spritemap
	);

	return [
		items[0],
		...leftBuffer,
		...items.slice(
			Math.max(activeIndex - ellipsisBuffer, 1),
			// Add 1 to account for active index
			Math.min(activeIndex + ellipsisBuffer + 1, lastIndex)
		),
		...rightBuffer,
		items[lastIndex],
	];
};
