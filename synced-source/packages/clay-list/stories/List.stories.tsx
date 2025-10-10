/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayCheckbox} from '@clayui/form';
import ClayIcon from '@clayui/icon';
import ClaySticker from '@clayui/sticker';
import React from 'react';

import ClayList, {ClayListWithItems} from '../src';

export default {
	component: ClayList,
	title: 'Design System/Components/List',
};

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

const items = [
	{
		classPK: '0',
		description: 'classPK is 0',
		dropdownActions,
		href: '#',
		title: 'Account Example One',
	},
	{
		header: 'List of Files',
		items: [
			{
				classPK: '1',
				description: 'classPK is 1',
				dropdownActions,
				href: '#',
				title: 'Account Example One',
			},
			{
				classPK: '2',
				description: 'classPK is 2',
				dropdownActions,
				href: '#',
				title: 'Account Example One',
			},
		],
	},
	{
		header: 'Additional Header',
		items: [
			{
				classPK: '3',
				description: 'classPK is 3',
				dropdownActions,
				href: '#',
				labels: [
					{
						displayType: 'success',
						value: 'Awesome',
					},
					{
						displayType: 'danger',
						value: 'Crazy',
					},
				],
				quickActions: [
					{
						onClick: () => alert('Clicked the cog!'),
						symbol: 'trash',
					},
				],
				symbol: '',
				title: 'Account Example Two',
			},
		],
	},
];

export const Simple = () => (
	<ClayList>
		<ClayList.Header>This is a header</ClayList.Header>
		<ClayList.Item flex>
			<ClayList.ItemField>Item 1</ClayList.ItemField>

			<ClayList.ItemField>ItemField</ClayList.ItemField>

			<ClayList.ItemField expand>
				<ClayList.ItemTitle>Item Title and expanded</ClayList.ItemTitle>
				<ClayList.ItemText>Item Text</ClayList.ItemText>
			</ClayList.ItemField>

			<ClayList.ItemField>ItemField</ClayList.ItemField>
		</ClayList.Item>

		<ClayList.Item flex>
			<ClayList.ItemField>Item 2</ClayList.ItemField>
			<ClayList.ItemField expand>
				<ClayList.ItemTitle>Item Title and expanded</ClayList.ItemTitle>
				<ClayList.ItemText>
					Hover this item for action menu
				</ClayList.ItemText>
			</ClayList.ItemField>
			<ClayList.ItemField>
				<ClayList.QuickActionMenu>
					<ClayList.QuickActionMenu.Item
						aria-label="Delete"
						onClick={() => alert('Clicked the trash!')}
						symbol="trash"
						title="Delete"
					/>

					<ClayList.QuickActionMenu.Item
						aria-label="Settings"
						onClick={() => alert('Clicked the cog!')}
						symbol="cog"
						title="Settings"
					/>
				</ClayList.QuickActionMenu>
			</ClayList.ItemField>
		</ClayList.Item>

		<ClayList.Header>This is another header</ClayList.Header>
		<ClayList.Item flex>
			<ClayList.ItemField>Item 3</ClayList.ItemField>

			<ClayList.ItemField>ItemField</ClayList.ItemField>
		</ClayList.Item>
	</ClayList>
);

export const Complex = (args: any) => (
	<ClayList>
		{[1, 2, 3, 4].map((item) => (
			<ClayList.Item active={item === args.activeIndex} flex key={item}>
				<ClayList.ItemField>
					<ClayCheckbox
						aria-label="checkbox"
						checked={item === args.activeIndex}
						onChange={() => {}}
					/>
				</ClayList.ItemField>

				<ClayList.ItemField>
					<ClaySticker displayType="secondary">
						<ClayIcon symbol="folder" />
					</ClaySticker>
				</ClayList.ItemField>

				<ClayList.ItemField expand>
					<ClayList.ItemTitle>
						{`Toggle knob ${item}`}
					</ClayList.ItemTitle>

					<ClayList.ItemText>
						This is subtitle information...
					</ClayList.ItemText>
				</ClayList.ItemField>

				<ClayList.ItemField>
					<ClayList.QuickActionMenu>
						<ClayList.QuickActionMenu.Item
							aria-label="Delete"
							onClick={() => alert('Clicked the trash!')}
							symbol="trash"
							title="Delete"
						/>

						<ClayList.QuickActionMenu.Item
							aria-label="Settings"
							onClick={() => alert('Clicked the cog!')}
							symbol="cog"
							title="Settings"
						/>
					</ClayList.QuickActionMenu>
				</ClayList.ItemField>
			</ClayList.Item>
		))}
	</ClayList>
);

Complex.argTypes = {
	activeIndex: {
		control: {type: 'select'},
		options: [1, 2, 3, 4],
	},
};

Complex.args = {
	activeIndex: 1,
};

export const ListWithItems = () => (
	<ClayListWithItems itemIdentifier="classPK" items={items} />
);

export const ListWithSelectable = () => {
	const [selectedMap, setSelectedMap] = React.useState({});

	return (
		<ClayListWithItems
			itemIdentifier="classPK"
			items={items}
			onSelectedItemsChange={setSelectedMap}
			selectedItemsMap={selectedMap}
		/>
	);
};
