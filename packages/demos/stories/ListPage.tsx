/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox, ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import {ClayListWithItems} from '@clayui/list';
import ClayManagementToolbar from '@clayui/management-toolbar';
import {ClayPaginationBarWithBasicItems} from '@clayui/pagination-bar';
import {sub} from '@clayui/shared';
import React from 'react';

export default () => {
	const [selectedMap, setSelectedMap] = React.useState({});
	const [searchMobile, setSearchMobile] = React.useState<boolean>(false);
	const [checked, setChecked] = React.useState<boolean>(false);
	const [sortAsc, setSortAsc] = React.useState<boolean>(true);
	const [value, setValue] = React.useState<string>('');
	const [activePage, setActivePage] = React.useState<number>(1);
	const [delta, setDelta] = React.useState<number>(10);

	const filterItems = [
		{label: 'Filter Action 1', onClick: () => alert('Filter clicked')},
		{label: 'Filter Action 2', onClick: () => alert('Filter clicked')},
	];

	const viewTypes = [
		{
			label: 'List',
			onClick: () => alert('Show view list'),
			symbolLeft: 'list',
		},
		{
			active: true,
			label: 'Table',
			onClick: () => alert('Show view talbe'),
			symbolLeft: 'table',
		},
		{
			label: 'Card',
			onClick: () => alert('Show view card'),
			symbolLeft: 'cards2',
		},
	];

	const dropdownActions = [
		{
			label: 'clickable',
			onClick: () => {
				alert('you clicked!');
			},
		},
		{
			type: 'divider' as const,
		},
		{
			href: '#',
			label: 'linkable',
		},
	];

	const totalItems = 100;

	const startingIndex = (activePage - 1) * delta;

	const items = Array(delta)
		.fill(0)
		.map((item, i) => {
			const index = sortAsc
				? i + startingIndex
				: totalItems - startingIndex - i;

			return {
				classPK: `${index}`,
				description: `classPK is ${index}`,
				dropdownActions,
				href: '#',
				title: `${index}`,
			};
		});

	const numOfSelected = Object.values(selectedMap).filter(Boolean).length;

	const allSelected = numOfSelected === totalItems;

	const isActive = !!numOfSelected;

	return (
		<div>
			<ClayManagementToolbar active={isActive}>
				<ClayManagementToolbar.ItemList expand={isActive}>
					<ClayManagementToolbar.Item>
						<ClayCheckbox
							checked={allSelected}
							onChange={() => {
								const newMap: any = {};

								for (let i = 0; i < totalItems; i++) {
									newMap[`${startingIndex + i}`] = true;
								}

								setSelectedMap(!checked ? newMap : {});

								setChecked(!checked);
							}}
						/>
					</ClayManagementToolbar.Item>

					{isActive && (
						<>
							<ClayManagementToolbar.Item>
								<span className="navbar-text">
									{numOfSelected === totalItems ? (
										'All Selected'
									) : (
										<>
											{sub('{0} of {1}', [
												numOfSelected,
												totalItems,
											])}{' '}
											<span className="navbar-breakpoint-down-d-none">
												{'Selected'}
											</span>
										</>
									)}
								</span>
							</ClayManagementToolbar.Item>
							<ClayManagementToolbar.Item className="nav-item-shrink">
								<ClayButton
									className="nav-link"
									displayType="unstyled"
									onClick={() => {
										setSelectedMap({});
										setChecked(false);
									}}
									type="button"
								>
									<span className="text-truncate-inline">
										<span className="text-truncate">
											{'Clear'}
										</span>
									</span>
								</ClayButton>
							</ClayManagementToolbar.Item>
						</>
					)}

					{!isActive && (
						<>
							<ClayDropDownWithItems
								items={filterItems}
								spritemap={spritemap}
								trigger={
									<ClayButton
										className="nav-link"
										displayType="unstyled"
									>
										<span className="navbar-breakpoint-down-d-none">
											<span className="navbar-text-truncate">
												{'Filter and Order'}
											</span>

											<ClayIcon
												className="inline-item inline-item-after"
												spritemap={spritemap}
												symbol="caret-bottom"
											/>
										</span>
										<span className="navbar-breakpoint-d-none">
											<ClayIcon
												spritemap={spritemap}
												symbol="filter"
											/>
										</span>
									</ClayButton>
								}
							/>

							<ClayManagementToolbar.Item>
								<ClayButton
									className="nav-link nav-link-monospaced"
									displayType="unstyled"
									onClick={() => setSortAsc(!sortAsc)}
								>
									<ClayIcon
										spritemap={spritemap}
										symbol={
											sortAsc
												? 'order-list-up'
												: 'order-list-down'
										}
									/>
								</ClayButton>
							</ClayManagementToolbar.Item>
						</>
					)}
				</ClayManagementToolbar.ItemList>

				{!isActive && (
					<>
						<ClayManagementToolbar.Search showMobile={searchMobile}>
							<ClayInput.Group>
								<ClayInput.GroupItem>
									<ClayInput
										aria-label="Search"
										className="form-control input-group-inset input-group-inset-after"
										defaultValue="Red"
										onChange={(event) =>
											setValue(event.target.value)
										}
										type="text"
										value={value}
									/>
									<ClayInput.GroupInsetItem after tag="span">
										<ClayButtonWithIcon
											className="navbar-breakpoint-d-none"
											displayType="unstyled"
											onClick={() =>
												setSearchMobile(false)
											}
											spritemap={spritemap}
											symbol="times"
										/>
										<ClayButtonWithIcon
											displayType="unstyled"
											spritemap={spritemap}
											symbol="search"
											type="submit"
										/>
									</ClayInput.GroupInsetItem>
								</ClayInput.GroupItem>
							</ClayInput.Group>
						</ClayManagementToolbar.Search>

						<ClayManagementToolbar.ItemList>
							<ClayManagementToolbar.Item className="navbar-breakpoint-d-none">
								<ClayButton
									className="nav-link nav-link-monospaced"
									displayType="unstyled"
									onClick={() => setSearchMobile(true)}
								>
									<ClayIcon
										spritemap={spritemap}
										symbol="search"
									/>
								</ClayButton>
							</ClayManagementToolbar.Item>

							<ClayManagementToolbar.Item>
								<ClayButton
									className="nav-link nav-link-monospaced"
									displayType="unstyled"
									onClick={() => {}}
								>
									<ClayIcon
										spritemap={spritemap}
										symbol="info-circle-open"
									/>
								</ClayButton>
							</ClayManagementToolbar.Item>

							<ClayManagementToolbar.Item>
								<ClayDropDownWithItems
									items={viewTypes}
									spritemap={spritemap}
									trigger={
										<ClayButton
											className="nav-link nav-link-monospaced"
											displayType="unstyled"
										>
											<ClayIcon
												spritemap={spritemap}
												symbol="list"
											/>
										</ClayButton>
									}
								/>
							</ClayManagementToolbar.Item>

							<ClayManagementToolbar.Item>
								<ClayButtonWithIcon
									className="nav-btn nav-btn-monospaced"
									spritemap={spritemap}
									symbol="plus"
								/>
							</ClayManagementToolbar.Item>
						</ClayManagementToolbar.ItemList>
					</>
				)}
			</ClayManagementToolbar>

			<div className="container" style={{paddingTop: 8}}>
				<ClayListWithItems
					itemIdentifier="classPK"
					items={[
						{
							header: 'List of Items',
							items,
						},
					]}
					onSelectedItemsChange={setSelectedMap}
					selectedItemsMap={selectedMap}
					spritemap={spritemap}
				/>

				<ClayPaginationBarWithBasicItems
					activeDelta={delta}
					activePage={activePage}
					onDeltaChange={setDelta}
					onPageChange={setActivePage}
					spritemap={spritemap}
					totalItems={totalItems}
				/>
			</div>
		</div>
	);
};
