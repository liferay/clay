/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayButton from '@clayui/button';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import ClayLink from '@clayui/link';
import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayNavigationBar from '../src/index';

storiesOf('Components|ClayNavigationBar', module)
	.add('default', () => {
		const [triggerName, setTriggerName] = React.useState<string>('Item 1');

		return (
			<ClayNavigationBar
				inverted={boolean('Inverted: ', false)}
				spritemap={spritemap}
				triggerLabel={text('triggerLabel: ', triggerName)}
			>
				<ClayNavigationBar.Item active={boolean('Active 1: ', true)}>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#"
					>
						Item 1
					</ClayLink>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item active={boolean('Active 2: ', false)}>
					<ClayButton
						block
						className="nav-link"
						displayType="unstyled"
						onClick={() => setTriggerName('Item 2')}
						small
					>
						Item 2
					</ClayButton>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item active={boolean('Active 3: ', false)}>
					<ClayLink
						displayType="secondary"
						href="#"
					>
						Item 3
					</ClayLink>
				</ClayNavigationBar.Item>

				<ClayNavigationBar.Item active={boolean('Active 4: ', false)}>
					<ClayButton
						block
						displayType="unstyled"
						onClick={() => setTriggerName('Item 4')}
						small
					>
						Item 4
					</ClayButton>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);
	})
	.add('w/one item', () => {
		const [triggerName] = React.useState<string>('Item 1');

		return (
			<ClayNavigationBar
				inverted={boolean('Inverted: ', false)}
				spritemap={spritemap}
				triggerLabel={text('triggerLabel: ', triggerName)}
			>
				<ClayNavigationBar.Item active={boolean('Active 1: ', true)}>
					<ClayLink
						className="nav-link"
						displayType="secondary"
						href="#"
					>
						Item 1
					</ClayLink>
				</ClayNavigationBar.Item>
			</ClayNavigationBar>
		);
	});
