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

	return (
		<ClayDualListBox
			disableLTR={args.disableLTR}
			disableRTL={args.disableRTL}
			disabled={args.disabled}
			items={items}
			left={{
				id: 'leftSelectBox',
				label: 'Available',
				onSelectChange: setLeftSelected,
				selected: leftSelected,
			}}
			leftMaxItems={args.leftMaxItems}
			onItemsChange={(event) => {
				setItems(event);
				setLeftSelected([]);
				setRightSelected([]);
			}}
			right={{
				id: 'rightSelectBox',
				label: 'In Use',
				onSelectChange: setRightSelected,
				selected: rightSelected,
			}}
			rightMaxItems={args.rightMaxItems}
			size={8}
		/>
	);
};

Default.args = {
	disableLTR: false,
	disableRTL: false,
	disabled: false,
	leftMaxItems: 5,
	rightMaxItems: 5,
};
