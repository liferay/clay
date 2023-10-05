/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {useFocusWithin} from '../aria';
import {ChildrenFunction, Collection} from '../collection';
import {RowLevelContext, useTable} from './context';

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

	/**
	 * Internal prop.
	 * @ignore
	 */
	keyValue?: React.Key;

	/**
	 * Internal prop.
	 * posinset
	 * @ignore
	 */
	_index?: number;

	/**
	 * Internal prop.
	 * level
	 * @ignore
	 */
	_level?: number;

	/**
	 * Internal prop.
	 * setsize
	 * @ignore
	 */
	_size?: number;
} & React.HTMLAttributes<HTMLTableRowElement>;

function RowInner<T extends Record<string, any>>(
	{
		_index,
		_level,
		_size,
		children,
		className,
		delimiter,
		divider,
		items,
		keyValue,
		...otherProps
	}: Props<T>,
	ref: React.Ref<HTMLTableRowElement>
) {
	const {treegrid} = useTable();
	const focusWithinProps = useFocusWithin({
		disabled: !treegrid,
		id: keyValue!,
	});

	return (
		<tr
			{...otherProps}
			{...focusWithinProps}
			aria-level={treegrid ? _level : undefined}
			aria-posinset={treegrid ? _index! + 1 : undefined}
			aria-setsize={treegrid ? _size : undefined}
			className={classNames(className, {
				'table-divider': divider,
				[`table-row-${delimiter}`]: delimiter,
			})}
			data-id={
				typeof keyValue === 'number'
					? `number,${keyValue}`
					: `string,${keyValue}`
			}
			ref={ref}
			role={treegrid ? 'row' : undefined}
		>
			<RowLevelContext.Provider value={_level!}>
				<Collection items={items}>{children}</Collection>
			</RowLevelContext.Provider>
		</tr>
	);
}

type ForwardRef = {
	displayName: string;
	<T>(props: Props<T> & {ref?: React.Ref<HTMLTableRowElement>}): JSX.Element;
};

export const Row = React.forwardRef(RowInner) as ForwardRef;

Row.displayName = 'TableRow';

// @ts-ignore
Row.passthroughKey = true;
