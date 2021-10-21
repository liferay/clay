/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React from 'react';

import {useResource} from '../Hooks';

const Tracking = ({query}) => {
	const issues = useResource(
		`https://api.github.com/search/issues?q=${query}`,
		{method: 'GET'}
	);

	return (
		<div className="table-responsive">
			<table className="table table-autofit">
				<thead>
					<tr>
						<th>ID</th>
						<th className="table-cell-expand table-cell-minw-300">
							Title
						</th>
						<th className="table-cell-expand-small table-cell-ws-nowrap">
							Date
						</th>
						<th className="table-cell-expand-smaller">Date</th>
					</tr>
				</thead>
				<tbody>
					{issues.items &&
						issues.items.map((issue) => {
							const {
								comments,
								created_at,
								html_url,
								number,
								title,
							} = issue;

							return (
								<TableItem
									comments={comments}
									date={created_at}
									id={number}
									key={number}
									title={title}
									url={html_url}
								/>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

const TableItem = ({comments, date, id, title, url}) => {
	return (
		<tr>
			<td>{id}</td>
			<td className="table-cell-expand table-cell-minw-300">
				<div className="table-title">
					<a
						className="text-truncate-inline"
						href={url}
						rel="noopener noreferrer"
						target="_blank"
					>
						<span
							className="text-truncate"
							data-title={title}
							title={title}
						>
							{title}
						</span>
					</a>
				</div>
			</td>
			<td className="table-cell-expand-small table-cell-ws-nowrap">
				{date}
			</td>
			<td className="table-cell-expand-smaller">{comments}</td>
		</tr>
	);
};

export default Tracking;
