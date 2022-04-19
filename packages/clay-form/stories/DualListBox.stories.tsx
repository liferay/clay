/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useState} from 'react';

import {ClayDualListBox} from '../src';

export default {
	argTypes: {
		displayType: {
			control: {type: 'select'},
			options: ['danger', 'info', 'success', 'warning'],
		},
		variant: {
			control: {type: 'select'},
			options: ['feedback', 'stripe', undefined],
		},
	},
	component: ClayDualListBox,
	title: 'Design System/Components/DualListBox',
};

const moveBoxesOptions = [
	[
		{
			label: 'Reddit',
			value: 'reddit',
		},
		{
			label: 'Slack',
			value: 'slack',
		},
		{
			label: 'Twitter',
			value: 'twitter',
		},
	],
	[
		{
			label: 'Discord',
			value: 'discord',
		},
		{
			label: 'Evernote',
			value: 'evernote',
		},
		{
			label: 'Facebook',
			value: 'facebook',
		},
		{
			label: 'LinkedIn',
			value: 'linkedin',
		},
	],
];

export const Default = (args: any) => {
	const [items, setItems] = useState(moveBoxesOptions);
	const [leftSelected, setLeftSelected] = useState<Array<string>>([]);
	const [rightSelected, setRightSelected] = useState<Array<string>>([]);

	const [firstSelectBoxItems, secondSelectBoxItems] = items;

	return (
		<ClayDualListBox
			disableLTR={
				args.disableLTR ||
				secondSelectBoxItems.length >= args.rightMaxItems
			}
			disableRTL={
				args.disableRTL ||
				firstSelectBoxItems.length >= args.leftMaxItems
			}
			items={items}
			left={{
				id: 'leftSelectBox',
				label: 'Available',
				onSelectChange: setLeftSelected,
				selected: leftSelected,
			}}
			onItemsChange={setItems}
			right={{
				id: 'rightSelectBox',
				label: 'In Use',
				onSelectChange: setRightSelected,
				selected: rightSelected,
			}}
			size={8}
		/>
	);
};

Default.args = {
	disableLTR: false,
	disableRTL: false,
	leftMaxItems: 5,
	rightMaxItems: 3,
};
