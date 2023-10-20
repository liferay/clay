/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Keys} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';

import {useFocusWithin} from '../aria';
import {ChildrenFunction, Collection} from '../collection';
import {useForwardRef} from '../hooks';
import {RowContext, useTable} from './context';

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
	 * @ignore
	 */
	_expandable?: boolean;

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
		_expandable,
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
	outRef: React.Ref<HTMLTableRowElement>
) {
	const {expandedKeys, onExpandedChange, treegrid} = useTable();
	const focusWithinProps = useFocusWithin({
		disabled: !treegrid,
		id: keyValue!,
	});

	const ref = useForwardRef(outRef);

	return (
		<tr
			{...otherProps}
			{...focusWithinProps}
			aria-expanded={
				_expandable ? expandedKeys.has(keyValue!) : undefined
			}
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
			onKeyDown={(event) => {
				if (
					document.activeElement !== ref.current ||
					event.defaultPrevented
				) {
					return;
				}

				switch (event.key) {
					case Keys.Left: {
						if (expandedKeys.has(keyValue!)) {
							const newExpandedKeys = new Set(expandedKeys);
							newExpandedKeys.delete(keyValue!);
							onExpandedChange(newExpandedKeys);
						}
						break;
					}
					case Keys.Right: {
						if (!expandedKeys.has(keyValue!)) {
							const newExpandedKeys = new Set(expandedKeys);
							newExpandedKeys.add(keyValue!);
							onExpandedChange(newExpandedKeys);
						}
						break;
					}
					default:
						break;
				}
			}}
			ref={ref}
			role={treegrid ? 'row' : undefined}
		>
			<RowContext.Provider
				value={{
					expandable: _expandable,
					key: keyValue!,
					level: _level!,
				}}
			>
				<Collection items={items}>{children}</Collection>
			</RowContext.Provider>
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
