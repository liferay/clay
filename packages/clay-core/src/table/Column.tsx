/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Icon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

import {Scope, useScope} from './ScopeContext';
import {useTable} from './context';

type Props = {
	/**
	 * Aligns the text inside the Cell.
	 */
	align?: 'center' | 'left' | 'right';

	/**
	 * Children content to render content.
	 */
	children: React.ReactNode;

	/**
	 * Sometimes we are unable to remove specific table columns from the DOM
	 * and need to hide it using CSS. This property can be added to the "new"
	 * first or last cell to maintain table styles on the left and right side.
	 */
	delimiter?: 'start' | 'end';

	/**
	 * Fills out the remaining space inside a Cell.
	 */
	expanded?: boolean;

	/**
	 * Internal property.
	 * @ignore
	 */
	keyValue?: React.Key;

	/**
	 * Whether the column allows sortable. Only available in the header column.
	 */
	sortable?: boolean;

	/**
	 * Aligns horizontally contents inside the Cell.
	 */
	textAlign?: 'center' | 'end' | 'start';

	/**
	 * Truncates the text inside a Cell.
	 */
	truncate?: boolean;

	/*
	 * Break the text into lines when necessary.
	 */
	wrap?: boolean;

	/**
	 * Sets a text value if the component's content is not plain text.
	 */
	textValue?: string;
} & React.ThHTMLAttributes<HTMLTableCellElement> &
	React.TdHTMLAttributes<HTMLTableCellElement>;

export const Column = React.forwardRef<HTMLTableCellElement, Props>(
	function ColumnInner(
		{
			align,
			children,
			className,
			delimiter,
			expanded,
			keyValue,
			sortable,
			textAlign,
			textValue,
			truncate,
			wrap = true,
			...otherProps
		},
		ref
	) {
		const {onSortChange, sort, sortDescriptionId} = useTable();
		const scope = useScope();
		const isHead = scope === Scope.Head;
		const As = isHead ? 'th' : 'td';

		return (
			<As
				{...otherProps}
				aria-describedby={
					isHead && sortable ? sortDescriptionId : undefined
				}
				aria-sort={
					isHead && sortable
						? sort && keyValue === sort.column
							? sort.direction
							: 'none'
						: undefined
				}
				className={classNames(className, {
					'table-cell-expand': truncate || expanded,
					[`table-cell-${delimiter}`]: delimiter,
					[`table-column-text-${textAlign}`]: textAlign,
					[`text-${align}`]: align,
					'table-cell-ws-nowrap': !wrap,
					'table-head-title': isHead,
				})}
				ref={ref}
			>
				{isHead && sortable ? (
					<a
						aria-describedby={
							isHead && sortable ? sortDescriptionId : undefined
						}
						className="inline-item text-truncate-inline"
						href="#"
						onClick={(event) => {
							event.preventDefault();
							onSortChange(
								{
									column: keyValue!,
									direction:
										sort && keyValue === sort.column
											? sort.direction === 'ascending'
												? 'descending'
												: 'ascending'
											: 'ascending',
								},
								textValue!
							);
						}}
						role="button"
					>
						<span className="text-truncate">{children}</span>

						{sort && keyValue === sort.column && (
							<span className="inline-item inline-item-after">
								<Icon
									symbol={
										sort.direction === 'ascending'
											? 'order-arrow-up'
											: 'order-arrow-down'
									}
								/>
							</span>
						)}
					</a>
				) : truncate ? (
					<span className="text-truncate-inline">
						<span className="text-truncate">{children}</span>
					</span>
				) : (
					children
				)}
			</As>
		);
	}
);

Column.displayName = 'Item';
