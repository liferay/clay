/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import ClayDropDown from '../src';
import React from 'react';
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';
const spritemap = require('clay-css/lib/images/icons/icons.svg');

storiesOf('ClayDropDown', module)
	.add('default', () => (
		<ClayDropDown
			items={[
				{href: '#one', label: 'one'},
				{href: '#two', label: 'two'},
				{href: '#three', label: 'three'},
			]}
			searchable={boolean('Searchable', false)}
			spritemap={spritemap}
		>
			{'Click Me'}
		</ClayDropDown>
	))
	.add('groups', () => (
		<ClayDropDown
			items={[
				{
					items: [
						{href: '#one', label: 'one'},
						{href: '#two', label: 'two'},
					],
					label: 'Strings',
					type: 'group',
				},
				{
					type: 'divider',
				},
				{
					label: 'hello',
				},
				{
					type: 'divider',
				},
				{
					items: [
						{href: '#one', label: '1'},
						{href: '#two', label: '2'},
					],
					label: 'Numbers',
					type: 'group',
				},
			]}
			searchable={boolean('Searchable', false)}
			spritemap={spritemap}
		>
			{'Click Me'}
		</ClayDropDown>
	))
	.add('checkbox', () => (
		<ClayDropDown
			items={[
				{
					label: 'Toggle?',
					onChange: () => alert('clicked checkbox!'),
					type: 'checkbox',
				},
			]}
			searchable={boolean('Searchable', false)}
			spritemap={spritemap}
		>
			{'Click Me'}
		</ClayDropDown>
	))
	.add('radio', () => (
		<ClayDropDown
			items={[
				{
					items: [
						{label: 'First', value: 'first'},
						{label: 'Last', value: 'last'},
					],
					label: 'Order By',
					name: 'orderBy',
					onChange: val => alert(`Selected ${val}`),
					type: 'radio',
					value: 'first',
				},
			]}
			spritemap={spritemap}
		>
			{'Click Me'}
		</ClayDropDown>
	))
	.add('footer options', () => (
		<ClayDropDown
			actionButtonProps={{
				children: 'See More',
				onClick: () => alert('Clicked See More!'),
			}}
			captionText="4 of 6"
			items={[
				{
					label: 'Toggle',
				},
			]}
			searchable={boolean('Searchable', false)}
			spritemap={spritemap}
		>
			{'Click Me'}
		</ClayDropDown>
	))
	.add('items with icons', () => (
		<ClayDropDown
			items={[
				{
					label: 'Left Icon',
					leftSymbol: 'pencil',
				},
				{
					label: 'Right Icon',
					rightSymbol: 'check',
				},
				{
					label: 'Both Icons',
					leftSymbol: 'trash',
					rightSymbol: 'check',
				},
			]}
			searchable={boolean('Searchable', false)}
			spritemap={spritemap}
		>
			{'Click Me'}
		</ClayDropDown>
	));
