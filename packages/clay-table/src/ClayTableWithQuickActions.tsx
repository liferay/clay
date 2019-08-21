/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import ClayTable, {IProps} from './index';
import React from 'react';
import {ClayDropDownWithItems} from '@clayui/drop-down';

interface IQuickActions {
	href: string;

	/**
	 * Name of icon symbol
	 */
	symbol: string;
}

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

	quickActions: Array<IQuickActions>;

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
								{row.quickActions && (
									<div className="quick-action-menu">
										{row.quickActions.map(
											({href, symbol}, index) => (
												<a
													className="component-action quick-action-item"
													href={href}
													key={index}
													role="button"
												>
													<ClayIcon
														spritemap={spritemap}
														symbol={symbol}
													/>
												</a>
											)
										)}
									</div>
								)}
								{row.dropdownActions && (
									<ClayDropDownWithItems
										items={row.dropdownActions}
										spritemap={spritemap}
										trigger={
											<button className="component-action">
												<ClayIcon
													spritemap={spritemap}
													symbol="ellipsis-v"
												/>
											</button>
										}
									/>
								)}
							</ClayTable.Cell>
						</ClayTable.Row>
					);
				})}
			</ClayTable.Body>
		</ClayTable>
	);
};
