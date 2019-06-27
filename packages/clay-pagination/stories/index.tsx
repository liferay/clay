/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayPagination from '../src';
import React, {useState} from 'react';
import {number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

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

storiesOf('ClayPagination', module)
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
	.add('w/ disabled pages', () => {
		const totalPages = number('Number of pages', 5);

		return (
			<PaginationWithState
				disabledPages={[4, 5]}
				totalPages={totalPages}
			/>
		);
	})
	.add('w/ bar', () => {
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
						onPageChange={(page) => page && setActivePage(page)}
						spritemap={spritemap}
						totalPages={Math.ceil(numberOfItems / perPage)}
					/>
				</div>
			);
		};

		return <PaginationBar numberOfItems={500} />;
	});
