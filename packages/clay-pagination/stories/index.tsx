/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import {number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React, {useState} from 'react';

import ClayPagination, {ClayPaginationWithBar} from '../src';

const PaginationWithState = (props: any) => {
	const [active, setActive] = useState(8);

	return (
		<ClayPagination
			{...props}
			activePage={active}
			ellipsisBuffer={number('Ellipsis Buffer', 2)}
			onPageChange={setActive}
			spritemap={spritemap}
		/>
	);
};

storiesOf('Components|ClayPagination', module)
	.add('links', () => {
		const totalPages = number('Number of pages', 25);

		return (
			<ClayPagination
				activePage={number('Active Page', 8)}
				ellipsisBuffer={number('Ellipsis Buffer', 2)}
				hrefConstructor={page => `/#${page}`}
				spritemap={spritemap}
				totalPages={totalPages}
			/>
		);
	})
	.add('buttons', () => {
		const totalPages = number('Number of pages', 25);

		return <PaginationWithState totalPages={totalPages} />;
	})
	.add('sizes', () => {
		const totalPages = number('Number of pages', 25);

		return (
			<>
				<ClayPagination
					activePage={number('Active Page', 8)}
					ellipsisBuffer={number('Ellipsis Buffer', 2)}
					hrefConstructor={page => `/#${page}`}
					size="sm"
					spritemap={spritemap}
					totalPages={totalPages}
				/>
				<ClayPagination
					activePage={number('Active Page', 8)}
					ellipsisBuffer={number('Ellipsis Buffer', 2)}
					hrefConstructor={page => `/#${page}`}
					spritemap={spritemap}
					totalPages={totalPages}
				/>
				<ClayPagination
					activePage={number('Active Page', 8)}
					ellipsisBuffer={number('Ellipsis Buffer', 2)}
					hrefConstructor={page => `/#${page}`}
					size="lg"
					spritemap={spritemap}
					totalPages={totalPages}
				/>
			</>
		);
	})
	.add('w/ disabled pages', () => {
		const totalPages = number('Number of pages', 5);

		return (
			<PaginationWithState
				disabledPages={[4, 5]}
				totalPages={totalPages}
			/>
		);
	})
	.add('w/ bar low-levels', () => {
		const PaginationBar = ({numberOfItems}: any) => {
			const [active, setActive] = React.useState(false);
			const [activePage, setActivePage] = React.useState(1);
			const [perPage, setPerPage] = React.useState(10);

			const options = [
				{
					label: '5',
					value: 5,
				},
				{
					label: '10',
					value: 10,
				},
				{
					label: '20',
					value: 20,
				},
				{
					label: '30',
					value: 30,
				},
				{
					label: '50',
					value: 50,
				},
			];

			return (
				<div className="pagination-bar">
					<ClayDropDown
						active={active}
						className="pagination-items-per-page"
						onActiveChange={newVal => setActive(newVal)}
						trigger={
							<ClayButton displayType="unstyled">
								{`${perPage} entries`}
								<ClayIcon
									spritemap={spritemap}
									symbol="caret-double-l"
								/>
							</ClayButton>
						}
					>
						<ClayDropDown.ItemList>
							{options.map((item, i) => (
								<ClayDropDown.Item
									key={i}
									onClick={() => setPerPage(item.value)}
								>
									{`${item.label} items`}
								</ClayDropDown.Item>
							))}
						</ClayDropDown.ItemList>
					</ClayDropDown>

					<div className="pagination-results">
						{`Showing ${activePage} to ${Math.ceil(
							numberOfItems / perPage
						)} of ${numberOfItems}`}
					</div>

					<ClayPagination
						activePage={activePage}
						onPageChange={page => page && setActivePage(page)}
						spritemap={spritemap}
						totalPages={Math.ceil(numberOfItems / perPage)}
					/>
				</div>
			);
		};

		return <PaginationBar numberOfItems={500} />;
	})
	.add('ClayPaginationWithBar', () => {
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
			<ClayPaginationWithBar
				activeDelta={delta}
				activePage={activePage}
				deltas={deltas}
				ellipsisBuffer={number('Ellipsis Buffer: ', 3)}
				onDeltaChange={setDelta}
				onPageChange={setActivePage}
				spritemap={spritemap}
				totalItems={number('Number of items: ', 21)}
			/>
		);
	});
