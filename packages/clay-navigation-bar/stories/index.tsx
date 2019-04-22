/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayNavigationBar from '../src/ClayNavigationBar';
import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';

import 'clay-css/lib/css/atlas.css';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

storiesOf('ClayNavigationBar', module)
	.add('default', () => (
		<ClayNavigationBar
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
	.add('Light with list items as anchors', () => (
		<ClayNavigationBar
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
	.add('Light with list items as buttons', () => (
		<ClayNavigationBar
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
	))
	.add('Inverted with list items as anchors', () => (
		<ClayNavigationBar
			inverted
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
	.add('Inverted with list items as buttons', () => (
		<ClayNavigationBar
			inverted
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
