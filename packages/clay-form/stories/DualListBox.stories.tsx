/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classnames from 'classnames';
import React, {useState} from 'react';

import ClayForm, {ClayDualListBox} from '../src';

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

	const isLeftError =
		rightSelected.length + firstSelectBoxItems.length > args.leftMaxItems;
	const isRightError =
		leftSelected.length + secondSelectBoxItems.length > args.rightMaxItems;

	return (
		<ClayDualListBox
			disableLTR={
				args.disableLTR ||
				isRightError ||
				secondSelectBoxItems.length >= args.rightMaxItems
			}
			disableRTL={
				args.disableRTL ||
				isLeftError ||
				firstSelectBoxItems.length >= args.leftMaxItems
			}
			disabled={args.disabled}
			items={items}
			left={{
				id: 'leftSelectBox',
				label: 'Available',
				onSelectChange: setLeftSelected,
				selected: leftSelected,
			}}
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
			size={8}
		>
			<ClayForm.FeedbackGroup
				className={classnames('d-none', 'has-error', {
					'd-block': isLeftError || isRightError,
				})}
			>
				<ClayForm.FeedbackItem>
					The maximum number of items for{' '}
					{isLeftError ? 'Available' : 'In Use'} is{' '}
					{args.leftMaxItems}
				</ClayForm.FeedbackItem>
			</ClayForm.FeedbackGroup>
		</ClayDualListBox>
	);
};

Default.args = {
	disableLTR: false,
	disableRTL: false,
	disabled: false,
	leftMaxItems: 5,
	rightMaxItems: 5,
};
