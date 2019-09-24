/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayManagementToolbar from '../src';
import React, {useState} from 'react';
import {boolean, number, select, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

storiesOf('Components|ClayManagementToolbar', module).add('default', () => {
	const [checked, setChecked] = useState<boolean>(false);
	const [value, setValue] = useState<string>('Red');
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
	const selectSortingOrder = select('Sorting order', ['asc', 'desc'], 'asc');

	return (
		<ClayManagementToolbar
			actionItems={
				boolean('Show actions', true) ? actionItems : undefined
			}
			active={boolean('Active', false)}
			checkboxChecked={checked}
			creationMenu={
				boolean('Show creation menu', true) ? creationMenu : undefined
			}
			disabled={boolean('Disabled', false)}
			filterItems={
				boolean('Show filter and order', true) ? filterItems : undefined
			}
			filterLabels={
				boolean('Show filter labels', true) ? filterLabels : undefined
			}
			onCheckboxChange={
				boolean('Selectable', true)
					? () => setChecked(!checked)
					: undefined
			}
			onClearSelectionClick={
				boolean('Supports bulk actions', true) ? () => {} : undefined
			}
			onInfoButtonClick={
				boolean('Show info button', true) ? () => {} : undefined
			}
			onSearchValueChange={
				boolean('Show search', true) ? setValue : undefined
			}
			onSelectAllClick={
				boolean('Show select all button', true) ? () => {} : undefined
			}
			onSortingButtonClick={() => alert('Sorting button clicked')}
			onValueSubmit={(value, event) => {
				event.preventDefault();
				alert(`Submit ${value}`);
			}}
			searchValue={value}
			selectedItems={number('Selected items', 0)}
			showResultsBar={boolean('Show ResultsBar', true)}
			sortingOrder={
				boolean('Show sorting order', true)
					? selectSortingOrder
					: undefined
			}
			sortingURL={text('Sorting URL', null)}
			spritemap={spritemap}
			totalItems={number('Total items', 2)}
			viewTypes={boolean('Show View Types', true) ? viewTypes : undefined}
		/>
	);
});
