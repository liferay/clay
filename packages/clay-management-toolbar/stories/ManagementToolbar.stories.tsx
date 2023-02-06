/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import {ClayDropDownWithItems} from '@clayui/drop-down';
import {ClayCheckbox, ClayInput} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import React, {useState} from 'react';

import ClayManagementToolbar, {ClayResultsBar} from '../src';

export default {
	component: ClayManagementToolbar,
	title: 'Design System/Components/ManagementToolbar',
};

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

export const Default = () => {
	const [searchMobile, setSearchMobile] = useState<boolean>(false);
	const [checked, setChecked] = useState<boolean>(false);
	const viewTypeActive = viewTypes.find((type) => type.active);

	return (
		<>
			<ClayManagementToolbar aria-label="Management toolbar">
				<ClayManagementToolbar.ItemList>
					<ClayManagementToolbar.Item>
						<ClayCheckbox
							aria-label={checked ? 'Unselect all' : 'Select all'}
							checked={checked}
							onChange={(event) =>
								setChecked(event.target.checked)
							}
						/>
					</ClayManagementToolbar.Item>

					<ClayManagementToolbar.Item>
						<ClayDropDownWithItems
							items={filterItems}
							trigger={
								<ClayButton
									aria-label="Filter items"
									className="nav-link"
									displayType="link"
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
					</ClayManagementToolbar.Item>

					<ClayManagementToolbar.Item>
						<ClayButton
							aria-label="Order items"
							className="nav-link nav-link-monospaced"
							displayType="link"
							onClick={() => {}}
						>
							<ClayIcon symbol="order-list-up" />
						</ClayButton>
					</ClayManagementToolbar.Item>
				</ClayManagementToolbar.ItemList>

				<ClayManagementToolbar.Search showMobile={searchMobile}>
					<ClayInput.Group>
						<ClayInput.GroupItem>
							<ClayInput
								aria-label="Search"
								className="form-control input-group-inset input-group-inset-after"
								defaultValue="Red"
								type="text"
							/>
							<ClayInput.GroupInsetItem after tag="span">
								<ClayButtonWithIcon
									aria-label="Clear search button"
									className="navbar-breakpoint-d-none"
									displayType="unstyled"
									onClick={() => setSearchMobile(false)}
									symbol="times"
								/>
								<ClayButtonWithIcon
									aria-label="Search button"
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
							aria-label="Search button mobile"
							className="nav-link nav-link-monospaced"
							displayType="unstyled"
							onClick={() => setSearchMobile(true)}
						>
							<ClayIcon symbol="search" />
						</ClayButton>
					</ClayManagementToolbar.Item>

					<ClayManagementToolbar.Item>
						<ClayButton
							aria-label="Information"
							className="nav-link nav-link-monospaced"
							displayType="link"
							onClick={() => {}}
						>
							<ClayIcon symbol="info-circle-open" />
						</ClayButton>
					</ClayManagementToolbar.Item>

					<ClayDropDownWithItems
						containerElement={ClayManagementToolbar.Item}
						items={viewTypes}
						trigger={
							<ClayButton
								aria-label="Display type"
								className="nav-link nav-link-monospaced"
								displayType="link"
							>
								<ClayIcon
									symbol={
										viewTypeActive
											? (viewTypeActive.symbolLeft as string)
											: ''
									}
								/>
							</ClayButton>
						}
					/>

					<ClayManagementToolbar.Item>
						<ClayButtonWithIcon
							aria-label="Add new"
							className="nav-btn nav-btn-monospaced"
							symbol="plus"
						/>
					</ClayManagementToolbar.Item>
				</ClayManagementToolbar.ItemList>
			</ClayManagementToolbar>

			<ClayResultsBar>
				<ClayResultsBar.Item>
					<span className="component-text text-truncate-inline">
						<span className="text-truncate">
							2 results for "<strong>Red</strong>"
						</span>
					</span>
				</ClayResultsBar.Item>
				<ClayResultsBar.Item expand>
					<ClayLabel
						className="component-label tbar-label"
						displayType="unstyled"
					>
						Filter
					</ClayLabel>
				</ClayResultsBar.Item>
				<ClayResultsBar.Item>
					<ClayButton
						className="component-link tbar-link"
						displayType="link"
					>
						Clear
					</ClayButton>
				</ClayResultsBar.Item>
			</ClayResultsBar>
		</>
	);
};
