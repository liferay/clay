/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayIcon from '@clayui/icon';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayNav, {ClayVerticalNav} from '../src';

const items = [
	{
		initialExpanded: true,
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

storiesOf('Components|ClayNav', module)
	.add('default', () => {
		return (
			<ClayNav>
				<ClayNav.Item>
					<ClayNav.Link active href="#">
						{'Active'}
					</ClayNav.Link>
				</ClayNav.Item>
				<ClayNav.Item>
					<ClayNav.Link href="#">{'Normal'}</ClayNav.Link>
				</ClayNav.Item>
				<ClayNav.Item>
					<ClayNav.Link disabled href="#">
						{'Disabled'}
					</ClayNav.Link>
				</ClayNav.Item>
			</ClayNav>
		);
	})
	.add('ClayVerticalNav', () => {
		return (
			<ClayVerticalNav
				items={items}
				large={boolean('large: ', false)}
				spritemap={spritemap}
			/>
		);
	})
	.add('ClayVerticalNav w/ custom trigger', () => {
		return (
			<ClayVerticalNav
				items={items}
				large={boolean('large: ', false)}
				spritemap={spritemap}
				trigger={(props) => (
					<ClayVerticalNav.Trigger {...props}>
						<ClayIcon
							focusable="false"
							role="presentation"
							spritemap={spritemap}
							symbol="ellipsis-v"
						/>
					</ClayVerticalNav.Trigger>
				)}
			/>
		);
	})
	.add('ClayVerticalNav w/ Decorator', () => (
		<ClayVerticalNav
			decorated
			items={items}
			large={boolean('large: ', false)}
			spritemap={spritemap}
		/>
	));
