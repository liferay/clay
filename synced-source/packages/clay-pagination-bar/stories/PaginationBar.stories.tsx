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
			ellipsisProps={{'aria-label': 'More', title: 'More'}}
			onPageChange={() => {}}
			totalPages={10}
		/>
	</ClayPaginationBar>
);

export const WithItems = (args: any) => {
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
		{
			label: 5,
		},
	];

	return (
		<ClayPaginationBarWithBasicItems
			activeDelta={delta}
			deltas={deltas}
			ellipsisBuffer={args.ellipsisBuffer}
			ellipsisProps={{'aria-label': 'More', title: 'More'}}
			onDeltaChange={setDelta}
			totalItems={args.totalItems}
		/>
	);
};

WithItems.args = {
	ellipsisBuffer: 3,
	totalItems: 21,
};

export const WithoutDropdown = () => {
	const [delta, setDelta] = useState<number>(5);

	return (
		<ClayPaginationBarWithBasicItems
			activeDelta={delta}
			defaultActive={3}
			ellipsisBuffer={3}
			ellipsisProps={{'aria-label': 'More', title: 'More'}}
			onDeltaChange={setDelta}
			showDeltasDropDown={false}
			totalItems={21}
		/>
	);
};
