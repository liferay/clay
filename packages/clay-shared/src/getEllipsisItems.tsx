/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

interface IBufferList {
	/**
	 * Component to be used as a Ellipsis.
	 */
	EllipsisComponent: React.ComponentType<any>;

	/**
	 * Use this property for defining `otherProps` that will be passed to ellipsis dropdown trigger.
	 */
	ellipsisProps?: Object;

	/**
	 * Property to define BreadcrumbEllipsis's items.
	 */
	items: Array<Object>;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;
}

const getBufferList = (
	start: number,
	end: number,
	config: IBufferList
): Array<Object | number | React.ReactElement> => {
	const {EllipsisComponent, ellipsisProps, items, spritemap} = config;

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
	config: IBufferList,
	ellipsisBuffer: number,
	activeIndex: number = 0
) => {
	const {items} = config;

	const lastIndex = items.length - 1;

	const leftBufferEnd = activeIndex - ellipsisBuffer;

	const rightBufferStart = activeIndex + ellipsisBuffer + 1;

	const leftBuffer = getBufferList(1, leftBufferEnd, config);
	const rightBuffer = getBufferList(rightBufferStart, lastIndex, config);

	const newArray = [
		items[0],
		...leftBuffer,
		...items.slice(
			Math.max(activeIndex - ellipsisBuffer, 1),
			// Add 1 to account for active index
			Math.min(activeIndex + ellipsisBuffer + 1, lastIndex)
		),
		...rightBuffer,
	];

	if (items.length > 1) {
		newArray.push(items[lastIndex]);
	}

	return newArray;
};
