/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ActionsMenu from '../src/ActionsMenu';
import ClayTable, {IProps} from './index';
import React from 'react';
import {ClayDropDownWithItems} from '@clayui/drop-down';

interface IColumnItem {
	/**
	 * Props to be added on each Cell for Heading Cells.
	 */
	cellProps?: Object;

	/**
	 * Unique key for a column. Used to describe a column specification.
	 */
	dataIndex: string;

	/**
	 * Renderer of the table cell. The return value should be a ReactNode.
	 */
	render?: (title: string) => React.ReactNode;

	/**
	 * Title of the column.
	 */
	title: string;
}

interface IRowItem {
	/**
	 * Props to be added on each Cell for Row Cells.
	 */
	cellProps?: Object;

	dropdownActions: React.ComponentProps<
		typeof ClayDropDownWithItems
	>['items'];

	quickActions: React.ComponentProps<typeof ActionsMenu>['actionItems'];

	/**
	 * Renderer of the table cell. The return value should be a ReactNode.
	 */
	render?: Function;

	/**
	 * Title of the column.
	 */
	title: string;

	[key: string]: any;
}

interface ITableProps extends IProps {
	columns: Array<IColumnItem>;

	rows: Array<IRowItem>;

	spritemap?: string;
}

export const ClayTableWithQuickActions: React.FunctionComponent<
	ITableProps
> = ({columns, rows, spritemap, ...otherProps}: ITableProps) => {
	const hasQuickActions =
		rows.findIndex(row => row.dropdownActions || row.dropdownActions) > -1;

	return (
		<ClayTable hover {...otherProps}>
			<ClayTable.Head>
				<ClayTable.Row>
					{columns.map(({cellProps, render, title}, index) => {
						return (
							<ClayTable.Cell
								headingCell
								headingTitle
								key={index}
								{...cellProps}
							>
								{render ? render(title) : title}
							</ClayTable.Cell>
						);
					})}
					{hasQuickActions && <ClayTable.Cell headingCell />}
				</ClayTable.Row>
			</ClayTable.Head>
			<ClayTable.Body>
				{rows.map((row, index) => {
					const values = columns.map(({dataIndex}) => row[dataIndex]);

					return (
						<ClayTable.Row key={index}>
							{row.render
								? row.render(values)
								: values.map((value, index) => (
										<ClayTable.Cell
											{...row.cellProps}
											key={index}
										>
											{value}
										</ClayTable.Cell>
								  ))}
							<ClayTable.Cell {...row.cellProps} key={index}>
								<ActionsMenu
									actionItems={row.quickActions}
									dropdownActions={row.dropdownActions}
									spritemap={spritemap}
								/>
							</ClayTable.Cell>
						</ClayTable.Row>
					);
				})}
			</ClayTable.Body>
		</ClayTable>
	);
};
