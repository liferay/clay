/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayManagementToolbar from '..';
import React from 'react';
import {cleanup, render} from '@testing-library/react';

const spritemap = 'icons.svg';
const filterLabels = [
	{closeButtonProps: {}, value: 'Filter 1'},
	{closeButtonProps: {}, value: 'Gamer'},
];
const filterItems = [
	{label: 'Filter Action 1', onClick: () => alert('Filter clicked')},
	{label: 'Filter Action 2', onClick: () => alert('Filter clicked')},
];
const creationMenu = [
	{label: 'Folder', onClick: () => alert('Folder clicked')},
	{label: 'Shortcut', onClick: () => alert('Shortcut clicked')},
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

describe('BasicRendering', () => {
	afterEach(cleanup);

	it('renders', () => {
		const {container} = render(
			<ClayManagementToolbar spritemap={spritemap} />
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar with only search', () => {
		const {container} = render(
			<ClayManagementToolbar
				onSearchValueChange={() => {}}
				searchValue=""
				spritemap={spritemap}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar with selectable', () => {
		const {container} = render(
			<ClayManagementToolbar
				checkboxChecked
				onCheckboxChange={() => {}}
				spritemap={spritemap}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar with sorting order', () => {
		const {container} = render(
			<ClayManagementToolbar
				onSortingButtonClick={() => {}}
				sortingOrder="asc"
				spritemap={spritemap}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar with info button', () => {
		const {container} = render(
			<ClayManagementToolbar
				onInfoButtonClick={() => {}}
				spritemap={spritemap}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar with filter and order', () => {
		const {container} = render(
			<ClayManagementToolbar
				filterItems={filterItems}
				spritemap={spritemap}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar with creation menu button', () => {
		const {container} = render(
			<ClayManagementToolbar
				creationMenu
				onCreationMenuClick={() => {}}
				spritemap={spritemap}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar with creation menu link', () => {
		const {container} = render(
			<ClayManagementToolbar
				creationMenu="https://clay.dev"
				spritemap={spritemap}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar with creation menu DropDown', () => {
		const {container} = render(
			<ClayManagementToolbar
				creationMenu={creationMenu}
				spritemap={spritemap}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar with view types', () => {
		const {container} = render(
			<ClayManagementToolbar
				spritemap={spritemap}
				viewTypes={viewTypes}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	it('renders a ManagementToolbar with disabled all', () => {
		const {container} = render(
			<ClayManagementToolbar
				checkboxChecked
				creationMenu={creationMenu}
				disabled
				filterItems={filterItems}
				onCheckboxChange={() => {}}
				onSearchValueChange={() => {}}
				onSortingButtonClick={() => {}}
				searchValue=""
				sortingOrder="asc"
				spritemap={spritemap}
				viewTypes={viewTypes}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	describe('active state', () => {
		it('renders a ManagementToolbar', () => {
			const {container} = render(
				<ClayManagementToolbar
					active
					checkboxChecked
					onCheckboxChange={() => {}}
					spritemap={spritemap}
				/>
			);

			expect(container).toMatchSnapshot();
		});

		it('renders a ManagementToolbar with actions', () => {
			const {container} = render(
				<ClayManagementToolbar
					actionItems={actionItems}
					active
					checkboxChecked
					onCheckboxChange={() => {}}
					spritemap={spritemap}
				/>
			);

			expect(container).toMatchSnapshot();
		});

		it('renders a ManagementToolbar with info button', () => {
			const {container} = render(
				<ClayManagementToolbar
					actionItems={actionItems}
					active
					checkboxChecked
					onCheckboxChange={() => {}}
					onInfoButtonClick={() => {}}
					spritemap={spritemap}
				/>
			);

			expect(container).toMatchSnapshot();
		});

		it('renders a ManagementToolbar with all selected', () => {
			const {container} = render(
				<ClayManagementToolbar
					actionItems={actionItems}
					active
					checkboxChecked
					onCheckboxChange={() => {}}
					onInfoButtonClick={() => {}}
					selectedItems={10}
					spritemap={spritemap}
					totalItems={10}
				/>
			);

			expect(container).toMatchSnapshot();
		});

		it('renders a ManagementToolbar with selected', () => {
			const {container} = render(
				<ClayManagementToolbar
					actionItems={actionItems}
					active
					checkboxChecked
					onCheckboxChange={() => {}}
					onInfoButtonClick={() => {}}
					selectedItems={5}
					spritemap={spritemap}
					totalItems={10}
				/>
			);

			expect(container).toMatchSnapshot();
		});

		it('renders a ManagementToolbar with selected', () => {
			const {container} = render(
				<ClayManagementToolbar
					actionItems={actionItems}
					active
					checkboxChecked
					onCheckboxChange={() => {}}
					onInfoButtonClick={() => {}}
					selectedItems={5}
					spritemap={spritemap}
					totalItems={10}
				/>
			);

			expect(container).toMatchSnapshot();
		});

		it('renders a ManagementToolbar with bulk actions', () => {
			const {container} = render(
				<ClayManagementToolbar
					actionItems={actionItems}
					active
					checkboxChecked
					onCheckboxChange={() => {}}
					onClearSelectionClick={() => {}}
					onInfoButtonClick={() => {}}
					selectedItems={5}
					spritemap={spritemap}
					totalItems={10}
				/>
			);

			expect(container).toMatchSnapshot();
		});

		it('renders a ManagementToolbar with select all button', () => {
			const {container} = render(
				<ClayManagementToolbar
					actionItems={actionItems}
					active
					checkboxChecked
					onCheckboxChange={() => {}}
					onClearSelectionClick={() => {}}
					onInfoButtonClick={() => {}}
					onSelectAllClick={() => {}}
					selectedItems={5}
					spritemap={spritemap}
					totalItems={10}
				/>
			);

			expect(container).toMatchSnapshot();
		});

		it('renders a ManagementToolbar with active state disabled', () => {
			const {container} = render(
				<ClayManagementToolbar
					actionItems={actionItems}
					active
					checkboxChecked
					disabled
					onCheckboxChange={() => {}}
					onClearSelectionClick={() => {}}
					onInfoButtonClick={() => {}}
					onSelectAllClick={() => {}}
					selectedItems={5}
					spritemap={spritemap}
					totalItems={10}
				/>
			);

			expect(container).toMatchSnapshot();
		});
	});

	describe('ManagementToolbar with results bar', () => {
		it('renders a ManagementToolbar with filterLabels', () => {
			const {container} = render(
				<ClayManagementToolbar
					actionItems={actionItems}
					active
					checkboxChecked
					filterLabels={filterLabels}
					onCheckboxChange={() => {}}
					showResultsBar
					spritemap={spritemap}
					totalItems={10}
				/>
			);

			expect(container).toMatchSnapshot();
		});

		it('renders a ManagementToolbar with results for `foo`', () => {
			const {container} = render(
				<ClayManagementToolbar
					actionItems={actionItems}
					active
					checkboxChecked
					filterLabels={filterLabels}
					onCheckboxChange={() => {}}
					searchValue="foo"
					showResultsBar
					spritemap={spritemap}
					totalItems={10}
				/>
			);

			expect(container).toMatchSnapshot();
		});
	});
});
