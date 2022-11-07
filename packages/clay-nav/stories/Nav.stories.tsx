/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import React from 'react';

import ClayNav, {ClayVerticalNav} from '../src';

export default {
	title: 'Design System/Components/Nav',
};

const items = [
	{
		items: [
			{
				href: '#',
				label: 'Nested1',
			},
		],
		label: 'Home',
	},
	{
		href: '#',
		label: 'About',
	},
	{
		href: '#',
		label: 'Contact',
	},
	{
		initialExpanded: true,
		items: [
			{
				active: true,
				href: '#',
				label: 'Five',
			},
			{
				href: '#',
				label: 'Six',
			},
		],
		label: 'Projects',
	},
	{
		href: '#',
		label: 'Seven',
	},
];

export const Default = () => (
	<ClayNav>
		<ClayNav.Item>
			<ClayNav.Link active href="#">
				Active
			</ClayNav.Link>
		</ClayNav.Item>
		<ClayNav.Item>
			<ClayNav.Link href="#">Normal</ClayNav.Link>
		</ClayNav.Item>
		<ClayNav.Item>
			<ClayNav.Link disabled href="#">
				Disabled
			</ClayNav.Link>
		</ClayNav.Item>
	</ClayNav>
);

export const VerticalNav = (args: any) => (
	<ClayVerticalNav items={items} large={args.large} />
);

VerticalNav.args = {
	large: false,
};

export const CustomTrigger = () => (
	<ClayVerticalNav
		items={items}
		trigger={(props) => (
			<ClayVerticalNav.Trigger {...props}>
				<ClayIcon
					focusable="false"
					role="presentation"
					symbol="ellipsis-v"
				/>
			</ClayVerticalNav.Trigger>
		)}
	/>
);

export const WithDecorator = () => <ClayVerticalNav decorated items={items} />;
