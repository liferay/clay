/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {boolean} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayNav, {ClayVerticalNav} from '../src';

storiesOf('Components|ClayNav', module)
	.add('default', () => {
		return (
			<ClayNav>
				<ClayNav.Item>
					<ClayNav.Link href="#">{'One'}</ClayNav.Link>
				</ClayNav.Item>
				<ClayNav.Item>
					<ClayNav.Link href="#">{'Two'}</ClayNav.Link>
				</ClayNav.Item>
				<ClayNav.Item>
					<ClayNav.Link href="#">{'Three'}</ClayNav.Link>
				</ClayNav.Item>
			</ClayNav>
		);
	})
	.add('ClayVerticalNav', () => {
		return (
			<ClayVerticalNav
				activeLabel="Five"
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
	});
