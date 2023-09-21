/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {ChildrenFunction, Collection} from '../collection';

type Props<T> = {
	/**
	 * Children content to render a dynamic or static content.
	 */
	children: React.ReactNode | ChildrenFunction<T, unknown>;

	/**
	 * This property can be added to the "new" first
	 * or last ClayTable.Row to maintain table styles on the top and bottom sides.
	 */
	delimiter?: 'start' | 'end';

	/**
	 * Applies a divider style inside the row.
	 */
	divider?: boolean;

	/**
	 * Property to render content with dynamic data.
	 */
	items?: Array<T>;
} & React.HTMLAttributes<HTMLTableRowElement>;

function RowInner<T extends Record<string, any>>(
	{children, className, delimiter, divider, items, ...otherProps}: Props<T>,
	ref: React.Ref<HTMLTableRowElement>
) {
	return (
		<tr
			{...otherProps}
			className={classNames(className, {
				'table-divider': divider,
				[`table-row-${delimiter}`]: delimiter,
			})}
			ref={ref}
		>
			<Collection items={items} passthroughKey={false}>
				{children}
			</Collection>
		</tr>
	);
}

type ForwardRef = {
	displayName: string;
	<T>(props: Props<T> & {ref?: React.Ref<HTMLTableRowElement>}): JSX.Element;
};

export const Row = React.forwardRef(RowInner) as ForwardRef;

Row.displayName = 'TableRow';
