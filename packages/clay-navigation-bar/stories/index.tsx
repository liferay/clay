/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayNavigationBar from '../src/index';
import React from 'react';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

storiesOf('ClayNavigationBar', module)
	.add('default', () => (
		<ClayNavigationBar
			inverted={boolean('Inverted', false)}	
			items={[
				{
					active: true,
					href: '#',
					label: 'Test 1',
				},
				{
					active: false,
					href: '#',
					label: 'Test 2',
				},
			]}
			spritemap={spritemap}
		/>
	))
	.add('Navigation Bar with list items as anchors', () => (
		<ClayNavigationBar
			inverted={boolean('Inverted', false)}
			items={[
				{
					active: true,
					href: '#',
					label: 'Test 1',
				},
				{
					active: false,
					href: '#',
					label: 'Test 2',
				},
				{
					active: false,
					href: '#',
					label: 'Test 3',
				},
				{
					active: false,
					href: '#',
					label: 'Test 4',
				},
			]}
			spritemap={spritemap}
		/>
	))
	.add('Navigation Bar with list items as buttons', () => (
		<ClayNavigationBar
			inverted={boolean('Inverted', false)}	
			items={[
				{
					active: true,
					label: 'Test 1',
				},
				{
					active: false,
					label: 'Test 2',
				},
				{
					active: false,
					label: 'Test 3',
				},
				{
					active: false,
					label: 'Test 4',
				},
			]}
			spritemap={spritemap}
		/>
	));