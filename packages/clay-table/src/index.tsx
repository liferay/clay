/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Body from './Body';
import Cell from './Cell';
import classNames from 'classnames';
import Head from './Head';
import React from 'react';
import Row from './Row';

type ResposiveSizeType = 'lg' | 'md' | 'sm' | 'xl';

type VerticalAlignmentType = 'bottom' | 'middle' | 'top';

interface IProps extends React.HTMLAttributes<HTMLTableElement> {
	/**
	 * This property vertically align the contents
	 * inside the table body according a given position.
	 */
	bodyVerticalAlignment?: VerticalAlignmentType;

	/**
	 * Applies a Bordered style on Table's columns.
	 */
	borderedColumns?: boolean;

	/**
	 * Removes the default border and rounded corners from table.
	 */
	borderless?: boolean;

	/**
	 * This property keeps all the headings on one line.
	 */
	headingNoWrap?: boolean;

	/**
	 * This property vertically align the contents
	 * inside the table header according a given position.
	 */
	headVerticalAlignment?: VerticalAlignmentType;

	/**
	 * Applies a Hover style on Table.
	 */
	hover?: boolean;

	/**
	 * This property enables keeping everything on one line.
	 */
	noWrap?: boolean;

	/**
	 * Turns the table responsive.
	 */
	responsive?: boolean;

	/**
	 * Defines the responsive sizing.
	 */
	responsiveSize?: ResposiveSizeType;

	/**
	 * Applies a Striped style on Table.
	 */
	striped?: boolean;

	/**
	 * This property vertically align the contents
	 * inside the table according a given position.
	 */
	tableVerticalAlignment?: VerticalAlignmentType;
}

const ClayTable: React.FunctionComponent<IProps> & {
	Body: typeof Body;
	Cell: typeof Cell;
	Head: typeof Head;
	Row: typeof Row;
} = ({
	bodyVerticalAlignment,
	borderedColumns,
	borderless,
	children,
	className,
	headVerticalAlignment,
	headingNoWrap,
	hover = true,
	noWrap,
	responsive = true,
	responsiveSize,
	striped,
	tableVerticalAlignment,
	...otherProps
}: IProps) => {
	return (
		<div
			className={classNames({
				'table-responsive': responsive,
				[`table-responsive-${responsiveSize}`]: responsiveSize,
			})}
		>
			<table
				className={classNames(
					'table table-autofit',
					{
						'show-quick-actions-on-hover': hover,
						'table-bordered': borderedColumns,
						'table-heading-nowrap': headingNoWrap,
						'table-hover': hover,
						'table-list': !borderless,
						'table-nowrap': noWrap,
						'table-striped': striped,
						[`tbody-valign-${bodyVerticalAlignment}`]: bodyVerticalAlignment,
						[`thead-valign-${headVerticalAlignment}`]: headVerticalAlignment,
						[`table-valign-${tableVerticalAlignment}`]: tableVerticalAlignment,
					},
					className
				)}
				{...otherProps}
			>
				{children}
			</table>
		</div>
	);
};

ClayTable.Body = Body;
ClayTable.Cell = Cell;
ClayTable.Head = Head;
ClayTable.Row = Row;

export default ClayTable;
