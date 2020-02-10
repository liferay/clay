/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';

import '../src/Sidebar.scss';

import {storiesOf} from '@storybook/react';
import React from 'react';

import ClaySidebar from '../src';

const items = [
	{
		icon: 'dxp',
		items: [
			{
				icon: 'square',
				id: 'widgets',
				label: 'Widgets',
				renderIcon: (
					children: React.ReactChildren,
					openCallback: (e: React.MouseEvent) => void
				) => (
					<div className="bg-success" onClick={openCallback}>
						{' '}
						{children}{' '}
					</div>
				),
			},
			{
				icon: 'app',
				id: 'apps',
				label: 'Applications',
				renderIcon: (
					children: React.ReactChildren,
					openCallback: (e: React.MouseEvent) => void
				) => (
					<div className="bg-success" onClick={openCallback}>
						{' '}
						{children}{' '}
					</div>
				),
			},
		],
		label: 'dxp',
	},
	{
		href: 'https://gatsby.com/',
		icon: 'gatsby',
		label: 'gatsby',
	},
	{
		children: [
			{
				icon: 'square',
				id: 'widgets',
				renderIcon: (
					children: React.ReactChildren,
					openCallback: (e: React.MouseEvent) => void
				) => (
					<div className="bg-success" onClick={openCallback}>
						{' '}
						{children}{' '}
					</div>
				),
			},
			{
				icon: 'app',
				id: 'apps',
				label: 'Applications',
				renderIcon: (
					children: React.ReactChildren,
					openCallback: (e: React.MouseEvent) => void
				) => (
					<div className="bg-success" onClick={openCallback}>
						{' '}
						{children}{' '}
					</div>
				),
			},
		],
		icon: 'music',
		label: 'musicxmatch',
	},
];

storiesOf('Components|ClaySidebar', module).add('default', () => (
	<ClaySidebar displayType="dark" items={items} position="left" />
));
