/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import ClayTable, {IProps} from './index';
import React from 'react';
import {ClayDropDownWithBasicItems} from '@clayui/drop-down';

interface IDropdownItem {
	label: string;

	onClick?: (event: React.SyntheticEvent) => void;
}

interface IQuickActions {
	href: string;

	symbol: string;
}

interface IColumnItem {
	cellProps?: Object;

	dataIndex: string;

	render?: Function;

	title: string;
}

interface IRowItem {
	cellProps?: Object;

	dropdownActions: Array<IDropdownItem>;

	quickActions: Array<IQuickActions>;

	render?: Function;

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
									<ClayDropDownWithBasicItems
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
