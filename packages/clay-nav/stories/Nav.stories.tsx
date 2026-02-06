/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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
export function Default() {
	return (
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
}
export function VerticalNav(args: any) {
	return (
		<ClayVerticalNav
			aria-label="vertical navbar"
			items={items}
			large={args.large}
		/>
	);
}

VerticalNav.args = {
	large: false,
};
export function CustomTrigger() {
	return (
		<ClayVerticalNav
			aria-label="vertical navbar"
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
}
export function WithDecorator() {
	return (
		<ClayVerticalNav aria-label="vertical navbar" decorated items={items} />
	);
}
