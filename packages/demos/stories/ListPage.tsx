/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {ClayListWithItems} from '@clayui/list';
import ClayManagementToolbar from '@clayui/management-toolbar';
import {ClayPaginationWithBar} from '@clayui/pagination';
import React, {useState} from 'react';

export default () => {
	const [selectedMap, setSelectedMap] = useState({});
	const [checked, setChecked] = useState<boolean>(false);
	const [sortAsc, setSortAsc] = useState<boolean>(true);
	const [value, setValue] = useState<string>('');
	const [activePage, setActivePage] = useState<number>(1);
	const [delta, setDelta] = useState<number>(10);

	const filterLabels = [
		{closeButtonProps: {}, value: 'Filter 1'},
		{closeButtonProps: {}, value: 'Gamer'},
	];

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

	const creationMenu = [
		{label: 'Folder', onClick: () => alert('Folder clicked')},
		{label: 'Shortcut', onClick: () => alert('Shortcut clicked')},
	];

	const actionItems = [
		{
			href: '#pageTitle',
			label: 'Remove',
			quickAction: true,
			symbolLeft: 'trash',
		},
		{
			disabled: true,
			href: '#pageTitle',
			label: 'Download',
			quickAction: true,
			symbolLeft: 'download',
		},
		{
			disabled: true,
			label: 'Change',
			quickAction: true,
			symbolLeft: 'change',
		},
		{
			href: '#pageTitle',
			label: 'Edit',
			symbolLeft: 'edit',
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

	return (
		<div>
			<ClayManagementToolbar
				actionItems={actionItems}
				active={!!numOfSelected}
				checkboxChecked={allSelected}
				creationMenu={creationMenu}
				filterItems={filterItems}
				filterLabels={filterLabels}
				onCheckboxChange={() => {
					const newMap: any = {};

					for (let i = 0; i < totalItems; i++) {
						newMap[`${startingIndex + i}`] = true;
					}

					setSelectedMap(!checked ? newMap : {});

					setChecked(!checked);
				}}
				onClearSelectionClick={() => {
					setSelectedMap({});
					setChecked(false);
				}}
				onInfoButtonClick={() => alert(`Clicked Info`)}
				onSearchValueChange={setValue}
				onSortingButtonClick={() => setSortAsc(!sortAsc)}
				onValueSubmit={(value: string) => alert(`Submit ${value}`)}
				searchPlaceholder="Search..."
				searchValue={value}
				selectedItems={numOfSelected}
				sortingOrder={sortAsc ? 'asc' : 'desc'}
				spritemap={spritemap}
				totalItems={totalItems}
				viewTypes={viewTypes}
			/>

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

				<ClayPaginationWithBar
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
