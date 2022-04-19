/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import {ClayPaginationWithBasicItems} from '@clayui/pagination';
import React, {useState} from 'react';

import ClayPaginationBar, {ClayPaginationBarWithBasicItems} from '../src';

export default {
	component: ClayPaginationBar,
	title: 'Design System/Components/PaginationBar',
};

export const Default = () => (
	<ClayPaginationBar>
		<ClayPaginationBar.DropDown
			items={[
				{
					label: '10',
					onClick: () => {},
				},
			]}
			trigger={
				<ClayButton displayType="unstyled">
					10 items per page
					<ClayIcon symbol="caret-double-l" />
				</ClayButton>
			}
		/>

		<ClayPaginationBar.Results>
			Showing a handful of items...
		</ClayPaginationBar.Results>

		<ClayPaginationWithBasicItems
			activePage={1}
			onPageChange={() => {}}
			totalPages={10}
		/>
	</ClayPaginationBar>
);

export const WithItems = (args: any) => {
	const [activePage, setActivePage] = useState<number>(1);
	const [delta, setDelta] = useState<number>(5);

	const deltas = [
		{
			href: '#1',
			label: 1,
		},
		{
			label: 2,
		},
		{
			href: '#3',
			label: 3,
		},
		{
			label: 4,
		},
	];

	return (
		<ClayPaginationBarWithBasicItems
			activeDelta={delta}
			activePage={activePage}
			deltas={deltas}
			ellipsisBuffer={args.ellipsisBuffer}
			onDeltaChange={setDelta}
			onPageChange={setActivePage}
			totalItems={args.totalItems}
		/>
	);
};

WithItems.args = {
	ellipsisBuffer: 3,
	totalItems: 21,
};

export const WithoutDropdown = () => {
	const [activePage, setActivePage] = useState<number>(3);
	const [delta, setDelta] = useState<number>(5);

	return (
		<ClayPaginationBarWithBasicItems
			activeDelta={delta}
			activePage={activePage}
			ellipsisBuffer={3}
			onDeltaChange={setDelta}
			onPageChange={setActivePage}
			showDeltasDropDown={false}
			totalItems={21}
		/>
	);
};
