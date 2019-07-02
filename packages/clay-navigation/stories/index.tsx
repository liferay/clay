/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayNavigation from '../src';
import React from 'react';
import {number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

storiesOf('ClayNavigation', module)
	.add('default', () => (
		<ClayNavigation.Breadcrumb
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
	.add('should throw a warning', () => (
		<ClayNavigation.Breadcrumb
			ellipsisBuffer={number('Ellipsis Buffer', 3)}
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
			]}
			spritemap={spritemap}
		/>
	));
