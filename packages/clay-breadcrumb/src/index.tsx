/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {getEllipsisItems} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';
import warning from 'warning';

import Ellipsis from './Ellipsis';
import Item from './Item';

type TItem = React.ComponentProps<typeof Item>;
type TItems = Array<TItem>;

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
	items: TItems;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;
}

const findActiveItems = (items: TItems) => {
	return items.filter((item) => {
		return item.active;
	});
};

const ClayBreadcrumb = ({
	className,
	ellipsisBuffer = 1,
	ellipsisProps = {},
	items,
	spritemap,
	...otherProps
}: IProps) => {
	warning(
		findActiveItems(items).length === 1,
		'ClayBreadcrumb expects at least one `active` item on `items`.'
	);

	const activeItems = findActiveItems(items);

	const breadCrumbItems = ellipsisBuffer
		? getEllipsisItems(
				{
					EllipsisComponent: Ellipsis,
					ellipsisProps,
					items,
					spritemap,
				},
				ellipsisBuffer,
				items.indexOf(activeItems[0])
		  )
		: items;

	return (
		<ol {...otherProps} className={classNames('breadcrumb', className)}>
			{breadCrumbItems.map((item: TItem | React.ReactNode, i: number) =>
				React.isValidElement(item) ? (
					React.cloneElement(item, {key: `ellipsis${i}`})
				) : (
					<Item
						active={(item as TItem).active}
						href={(item as TItem).href}
						key={`breadcrumbItem${i}`}
						label={(item as TItem).label}
						onClick={(item as TItem).onClick}
					/>
				)
			)}
		</ol>
	);
};

export default ClayBreadcrumb;
