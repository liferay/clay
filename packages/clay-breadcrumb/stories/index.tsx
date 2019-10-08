/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayBreadcrumb from '../src';

const BreadcrumbWithState = () => {
	const [active, setActive] = React.useState<number>(0);

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
			items={items}
			spritemap={spritemap}
		/>
	);
};

storiesOf('Components|ClayBreadcrumb', module)
	.add('default', () => (
		<ClayBreadcrumb
			ellipsisBuffer={number('Ellipsis Buffer', 3)}
			items={[
				{
					active: true,
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
					href: '#11',
					label: 'Eleven',
				},
			]}
			spritemap={spritemap}
		/>
	))
	.add('w/ buttons', () => {
		const onItemClick = (event: any) =>
			alert(event.target.parentElement.title);

		return (
			<ClayBreadcrumb
				ellipsisBuffer={number('Ellipsis Buffer', 3)}
				items={[
					{
						active: true,
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
						label: 'Eleven',
						onClick: onItemClick,
					},
				]}
				spritemap={spritemap}
			/>
		);
	})
	.add('w/ state', () => <BreadcrumbWithState />);
