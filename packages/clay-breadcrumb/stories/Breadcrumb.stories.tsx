/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import React, {useState} from 'react';

import ClayBreadcrumb from '../src';

export default {
	component: ClayBreadcrumb,
	title: 'Design System/Components/Breadcrumb',
};

export const Default = (args: any) => (
	<ClayBreadcrumb
		ellipsisBuffer={args.ellipsisBuffer}
		ellipsisProps={{'aria-label': 'More', title: 'More'}}
		items={[
			{
				href: '#1',
				label: 'Home',
			},
			{
				href: '#2',
				label: 'About',
			},
			{
				href: '#3',
				label: 'Contact',
			},
			{
				href: '#4',
				label: 'Projects',
			},
			{
				href: '#5',
				label: 'Five',
			},
			{
				href: '#6',
				label: 'Six',
			},
			{
				href: '#7',
				label: 'Seven',
			},
			{
				href: '#8',
				label: 'Eight',
			},
			{
				href: '#9',
				label: 'Nine',
			},
			{
				href: '#10',
				label: 'Ten',
			},
			{
				active: true,
				href: '#11',
				label: 'Eleven',
			},
		]}
	/>
);

Default.args = {
	ellipsisBuffer: 3,
};

export const Buttons = (args: any) => {
	const onItemClick = (event: any) => alert(event.target.parentElement.title);

	return (
		<ClayBreadcrumb
			ellipsisBuffer={args.ellipsisBuffer}
			ellipsisProps={{'aria-label': 'More', title: 'More'}}
			items={[
				{
					label: 'Home',
					onClick: onItemClick,
				},
				{
					label: 'About',
					onClick: onItemClick,
				},
				{
					label: 'Contact',
					onClick: onItemClick,
				},
				{
					label: 'Projects',
					onClick: onItemClick,
				},
				{
					label: 'Five',
					onClick: onItemClick,
				},
				{
					label: 'Six',
					onClick: onItemClick,
				},
				{
					label: 'Seven',
					onClick: onItemClick,
				},
				{
					label: 'Eight',
					onClick: onItemClick,
				},
				{
					label: 'Nine',
					onClick: onItemClick,
				},
				{
					label: 'Ten',
					onClick: onItemClick,
				},
				{
					active: true,
					label: 'Eleven',
					onClick: onItemClick,
				},
			]}
		/>
	);
};

Buttons.args = {
	ellipsisBuffer: 3,
};

export const ActiveState = () => {
	const [active, setActive] = useState<number>(4);

	const items = [
		{
			active: active === 0,
			label: 'Home',
			onClick: () => setActive(0),
		},
		{
			active: active === 1,
			label: 'Blog',
			onClick: () => setActive(1),
		},
		{
			active: active === 2,
			label: 'About',
			onClick: () => setActive(2),
		},
		{
			active: active === 3,
			label: 'Partners',
			onClick: () => setActive(3),
		},
		{
			active: active === 4,
			label: 'Contact Us',
			onClick: () => setActive(4),
		},
	];

	return (
		<ClayBreadcrumb
			ellipsisBuffer={1}
			ellipsisProps={{'aria-label': 'More', title: 'More'}}
			items={items}
		/>
	);
};
