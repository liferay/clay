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
import {getEllipsisItems} from '@clayui/shared';

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

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;
}

const findActiveItems = (items: Array<IBreadcrumbItem>) => {
	return items.filter(item => {
		return item.active;
	});
};

export const ClayBreadcrumbNav: React.FunctionComponent<IProps> = ({
	className,
	ellipsisBuffer = 1,
	ellipsisProps = {},
	items,
	spritemap,
	...otherProps
}: IProps) => {
	warning(
		findActiveItems(items).length === 1,
		'ClayBreadcrumbNav expects at least one `active` item on `items`.'
	);

	const activeItems = findActiveItems(items);

	const breadCrumbItems = ellipsisBuffer
		? getEllipsisItems(
				{
					EllipsisComponent: BreadcrumbEllipsis,
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
			{breadCrumbItems.map(
				(item: IBreadcrumbItem | React.ReactNode, i: number) =>
					React.isValidElement(item) ? (
						React.cloneElement(item, {key: `ellipsis${i}`})
					) : (
						<BreadcrumbItem
							active={(item as IBreadcrumbItem).active}
							href={(item as IBreadcrumbItem).href}
							key={`breadcrumbItem${i}`}
							label={(item as IBreadcrumbItem).label}
							onClick={(item as IBreadcrumbItem).onClick}
						/>
					)
			)}
		</ol>
	);
};
