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

interface Props extends React.HTMLAttributes<HTMLTableElement> {
	/**
	 * This property vertically align the contents
	 * inside the table body according a given position.
	 */
	bodyVerticalAlignment?: VerticalAlignmentType;

	/**
	 * Applies a Bordered style on Table.
	 */
	bordered?: boolean;

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

const ClayTable: React.FunctionComponent<Props> & {
	Body: typeof Body;
	Cell: typeof Cell;
	Head: typeof Head;
	Row: typeof Row;
} = ({
	bodyVerticalAlignment,
	bordered,
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
}) => {
	return (
		<table
			className={classNames('table table-autofit table-list', {
				'show-quick-actions-on-hover': hover,
				'table-bordered': bordered,
				'table-heading-nowrap': headingNoWrap,
				'table-hover': hover,
				'table-nowrap': noWrap,
				'table-responsive': responsive,
				[`table-responsive-${responsiveSize}`]: responsiveSize,
				'table-striped': striped,
				[`tbody-valign-${bodyVerticalAlignment}`]: bodyVerticalAlignment,
				[`thead-valign-${headVerticalAlignment}`]: headVerticalAlignment,
				[`table-valign-${tableVerticalAlignment}`]: tableVerticalAlignment,
			})}
			{...otherProps}
		>
			{children}
		</table>
	);
};

ClayTable.Body = Body;
ClayTable.Cell = Cell;
ClayTable.Head = Head;
ClayTable.Row = Row;

export default ClayTable;
