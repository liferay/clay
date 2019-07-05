/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';
import warning from 'warning';
import {BreadcrumbEllipsis} from './BreadcrumbEllipsis';
import {BreadcrumbItem, IBreadcrumbItem} from './BreadcrumbItem';

interface IProps extends React.HTMLAttributes<HTMLOListElement> {
	/**
	 * The number of Breadcrumb Items to show on each side of the active Breadcrumb Item before
	 * using an ellipsis dropdown.
	 */
	ellipsisBuffer?: number;

	/**
	 * Use this property for defining `otherProps` that will be passed to ellipsis dropdown trigger.
	 */
	ellipsisProps?: Object;

	/**
	 * Property to define Breadcrumb's items.
	 */
	items: Array<IBreadcrumbItem>;

	spritemap: string;
}

const findActiveItems = (items: Array<IBreadcrumbItem>) => {
	return items.filter(item => {
		return item.active;
	});
};

const getBufferList = (
	items: Array<IBreadcrumbItem>,
	start: number,
	end: number,
	ellipsisProps: Object,
	spritemap: string
): (IBreadcrumbItem | React.ReactElement)[] => {
	const removedItems = items.slice(start, Math.max(end, start));

	return removedItems.length > 1
		? [
				<BreadcrumbEllipsis
					items={removedItems}
					key="breadcrumbEllipsis"
					spritemap={spritemap}
					{...ellipsisProps}
				/>,
		  ]
		: removedItems;
};

const getBreadcrumbItems = (
	ellipsisBuffer: number,
	items: Array<IBreadcrumbItem>,
	ellipsisProps: Object,
	spritemap: string
) => {
	const activeItems = findActiveItems(items);

	const activeIndex = items.indexOf(activeItems[0]);

	const lastIndex = items.length - 1;

	const leftBufferEnd = activeIndex - ellipsisBuffer;

	const rightBufferStart = activeIndex + ellipsisBuffer + 1;

	const leftBuffer = getBufferList(
		items,
		1,
		leftBufferEnd,
		ellipsisProps,
		spritemap
	);
	const rightBuffer = getBufferList(
		items,
		rightBufferStart,
		lastIndex,
		ellipsisProps,
		spritemap
	);

	return [
		items[0],
		...leftBuffer,
		...items.slice(
			Math.max(activeIndex - ellipsisBuffer, 1),
			Math.min(activeIndex + ellipsisBuffer + 1, lastIndex)
		),
		...rightBuffer,
		items[lastIndex],
	];
};

export const Breadcrumb: React.FunctionComponent<IProps> = ({
	className,
	ellipsisBuffer = 1,
	ellipsisProps = {},
	items,
	spritemap,
	...otherProps
}: IProps) => {
	warning(
		findActiveItems(items).length === 1,
		'ClayNavigation.Breadcrumb expects one unique `active` item on `items`.'
	);

	const breadCrumbItems = ellipsisBuffer
		? getBreadcrumbItems(ellipsisBuffer, items, ellipsisProps, spritemap)
		: items;

	return (
		<ol {...otherProps} className={classNames('breadcrumb', className)}>
			{breadCrumbItems.map(
				(item: IBreadcrumbItem | React.ReactElement, i: number) =>
					React.isValidElement(item) ? (
						React.cloneElement(item, {key: `ellipsis${i}`})
					) : (
						<BreadcrumbItem
							active={item.active}
							href={item.href}
							key={`breadcrumbItem${i}`}
							label={item.label}
							onItemClick={item.onItemClick}
						/>
					)
			)}
		</ol>
	);
};
