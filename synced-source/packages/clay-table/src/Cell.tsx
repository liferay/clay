/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

import {TDelimiter} from './types';

type ColumnTextAlignmentType = 'center' | 'end' | 'start';

type TableCellBaseProps = React.ThHTMLAttributes<HTMLTableHeaderCellElement> &
	React.TdHTMLAttributes<HTMLTableDataCellElement>;

type TextCellAlignmentType = 'center' | 'left' | 'right';

export interface ICellProps extends TableCellBaseProps {
	/**
	 * Aligns the text inside the Cell.
	 */
	align?: TextCellAlignmentType;

	/**
	 * Sometimes we are unable to remove specific table columns from the DOM
	 * and need to hide it using CSS. This property can be added to the "new"
	 * first or last cell to maintain table styles on the left and right side.
	 */
	cellDelimiter?: TDelimiter;

	/**
	 * Aligns horizontally contents inside the Cell.
	 */
	columnTextAlignment?: ColumnTextAlignmentType;

	/**
	 * Fills out the remaining space inside a Cell.
	 */
	expanded?: boolean;

	/**
	 * Defines the type of the Cell element, if true,
	 * cell element will be a `<th>`, otherwise `<td>`.
	 */
	headingCell?: boolean;

	/**
	 * Applies a style of heading inside a child of table
	 * header cell element.
	 */
	headingTitle?: boolean;

	/*
	 * Keep cells on one line.
	 */
	noWrap?: boolean;

	/**
	 * Truncates the text inside a Cell. Requires `expanded`
	 * property value set to true.
	 */
	truncate?: boolean;
}

const ClayTableCell = React.forwardRef<
	HTMLTableHeaderCellElement | HTMLTableDataCellElement,
	ICellProps
>(
	(
		{
			align,
			cellDelimiter,
			children,
			className,
			columnTextAlignment,
			expanded,
			headingCell = false,
			headingTitle = false,
			noWrap = false,
			truncate = false,
			...otherProps
		}: ICellProps,
		ref
	) => {
		const TagName = headingCell ? 'th' : 'td';

		return (
			<TagName
				{...otherProps}
				className={classNames(className, {
					'table-cell-expand': expanded || truncate,
					[`table-cell-${cellDelimiter}`]: cellDelimiter,
					[`table-column-text-${columnTextAlignment}`]:
						columnTextAlignment,
					[`text-${align}`]: align,
					'table-cell-ws-nowrap': noWrap,
				})}
				ref={ref}
			>
				{headingTitle ? (
					React.Children.map(children, (child, i) => (
						<p className="table-list-title" key={i}>
							{child}
						</p>
					))
				) : truncate && typeof children === 'string' ? (
					<span className="text-truncate-inline">
						<span className="text-truncate">{children}</span>
					</span>
				) : (
					children
				)}
			</TagName>
		);
	}
);

ClayTableCell.displayName = 'ClayTableCell';

export default ClayTableCell;
