/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {ClayDropDownWithItems} from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayUpperToolbar from '../src';

storiesOf('Deprecated|ClayUpperToolbar', module).add('default', () => (
	<ClayUpperToolbar>
		<ClayUpperToolbar.Item className="text-left" expand>
			<label className="component-title">{'Foo Bar'}</label>

			<ClayIcon spritemap={spritemap} symbol="lock" />
		</ClayUpperToolbar.Item>

		<ClayUpperToolbar.Input aria-label="Search" placeholder="Search..." />

		<ClayUpperToolbar.Item>
			<ClayButton.Group>
				<ClayButtonWithIcon
					aria-label="Left"
					displayType="secondary"
					onClick={() => {}}
					small
					spritemap={spritemap}
					symbol="angle-left"
				/>

				<ClayButtonWithIcon
					aria-label="Right"
					displayType="secondary"
					onClick={() => {}}
					small
					spritemap={spritemap}
					symbol="angle-right"
				/>
			</ClayButton.Group>
		</ClayUpperToolbar.Item>

		<ClayUpperToolbar.Item>
			<ClayButton displayType="secondary" onClick={() => {}}>
				{'Delete'}
			</ClayButton>

			<ClayButton className="inline-item-after" onClick={() => {}}>
				{'Edit'}
			</ClayButton>
		</ClayUpperToolbar.Item>

		<ClayUpperToolbar.Item>
			<ClayDropDownWithItems
				items={[
					{href: '#one', label: 'one'},
					{href: '#two', label: 'two'},
					{disabled: true, href: '#three', label: 'three'},
					{href: '#four', label: 'four'},
				]}
				spritemap={spritemap}
				trigger={
					<ClayButtonWithIcon
						aria-label="Open dropdown"
						displayType="unstyled"
						small
						spritemap={spritemap}
						symbol="ellipsis-v"
					/>
				}
			/>
		</ClayUpperToolbar.Item>
	</ClayUpperToolbar>
));
