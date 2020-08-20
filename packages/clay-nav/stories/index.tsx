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
				items={[
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
				]}
				large={boolean('large: ', false)}
				spritemap={spritemap}
			/>
		);
	})
	.add('ClayVerticalNav w/ custom trigger', () => {
		return (
			<ClayVerticalNav
				items={[
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
				]}
				large={boolean('large: ', false)}
				spritemap={spritemap}
				triggerContent={
					<ClayIcon spritemap={spritemap} symbol="ellipsis-h" />
				}
			/>
		);
	});
