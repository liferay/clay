/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox, ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import {ClayListWithItems} from '@clayui/list';
import ClayManagementToolbar from '@clayui/management-toolbar';
import {ClayPaginationBarWithBasicItems} from '@clayui/pagination-bar';
import {sub, useId} from '@clayui/shared';
import {ClayTooltipProvider} from '@clayui/tooltip';
import React, {useState} from 'react';

export default function ListPage() {
	const [selectedMap, setSelectedMap] = useState({});
	const [searchMobile, setSearchMobile] = useState<boolean>(false);
	const [checked, setChecked] = useState<boolean>(false);
	const [sortAsc, setSortAsc] = useState<boolean>(true);
	const [value, setValue] = useState<string>('');
	const [activePage, setActivePage] = useState<number>(1);
	const [delta, setDelta] = useState<number>(10);

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

	const checkboxDescribedby = useId();

	return (
		<ClayTooltipProvider>
			<div>
				<ClayManagementToolbar active={isActive}>
					<ClayManagementToolbar.ItemList expand={isActive}>
						<ClayManagementToolbar.Item>
							<ClayCheckbox
								aria-describedby={checkboxDescribedby}
								aria-label={
									numOfSelected === totalItems
										? 'Unselect all'
										: 'Select all'
								}
								checked={allSelected}
								data-tooltip-align="top"
								onChange={() => {
									const newMap: any = {};

									for (let i = 0; i < totalItems; i++) {
										newMap[`${startingIndex + i}`] = true;
									}

									setSelectedMap(!checked ? newMap : {});

									setChecked(!checked);
								}}
								title="Select all"
							/>
						</ClayManagementToolbar.Item>

						{isActive && (
							<>
								<ClayManagementToolbar.Item>
									<span
										className="navbar-text"
										id={checkboxDescribedby}
									>
										{numOfSelected === totalItems ? (
											'All Selected'
										) : (
											<>
												{sub('{0} of {1}', [
													numOfSelected,
													totalItems,
												])}{' '}
												<span className="navbar-breakpoint-down-d-none">
													Selected
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
												Clear
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
									trigger={
										<ClayButton
											className="nav-link"
											displayType="unstyled"
										>
											<span className="navbar-breakpoint-down-d-none">
												<span className="navbar-text-truncate">
													Filter and Order
												</span>

												<ClayIcon
													className="inline-item inline-item-after"
													symbol="caret-bottom"
												/>
											</span>
											<span className="navbar-breakpoint-d-none">
												<ClayIcon symbol="filter" />
											</span>
										</ClayButton>
									}
								/>

								<ClayManagementToolbar.Item>
									<ClayButton
										aria-label={
											sortAsc
												? 'Order list up'
												: 'Order list down'
										}
										className="nav-link nav-link-monospaced"
										displayType="unstyled"
										onClick={() => setSortAsc(!sortAsc)}
									>
										<ClayIcon
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
							<ClayManagementToolbar.Search
								showMobile={searchMobile}
							>
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
										<ClayInput.GroupInsetItem
											after
											tag="span"
										>
											<ClayButtonWithIcon
												aria-label="Close"
												className="navbar-breakpoint-d-none"
												displayType="unstyled"
												onClick={() =>
													setSearchMobile(false)
												}
												symbol="times"
											/>
											<ClayButtonWithIcon
												aria-label="Search for..."
												displayType="unstyled"
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
										aria-label="Search"
										className="nav-link nav-link-monospaced"
										displayType="unstyled"
										onClick={() => setSearchMobile(true)}
									>
										<ClayIcon symbol="search" />
									</ClayButton>
								</ClayManagementToolbar.Item>

								<ClayManagementToolbar.Item>
									<ClayButton
										aria-label="Info"
										className="nav-link nav-link-monospaced"
										displayType="unstyled"
										onClick={() => {}}
									>
										<ClayIcon symbol="info-circle-open" />
									</ClayButton>
								</ClayManagementToolbar.Item>

								<ClayManagementToolbar.Item>
									<ClayDropDownWithItems
										items={viewTypes}
										trigger={
											<ClayButton
												aria-label="Display view"
												className="nav-link nav-link-monospaced"
												displayType="unstyled"
											>
												<ClayIcon symbol="list" />
											</ClayButton>
										}
									/>
								</ClayManagementToolbar.Item>

								<ClayManagementToolbar.Item>
									<ClayButtonWithIcon
										aria-label="Add New Item"
										className="nav-btn nav-btn-monospaced"
										data-tooltip-align="bottom"
										symbol="plus"
										title="Add New Item"
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
					/>

					<ClayPaginationBarWithBasicItems
						activeDelta={delta}
						activePage={activePage}
						onDeltaChange={setDelta}
						onPageChange={setActivePage}
						totalItems={totalItems}
					/>
				</div>
			</div>
		</ClayTooltipProvider>
	);
}
