/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
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

storiesOf('Components|ClayNavigationBar', module).add('default', () => {
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
					href="#1"
				>
					<span className="navbar-text-truncate">{`Item 1`}</span>
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
					<span className="navbar-text-truncate">{`Item 2`}</span>
				</ClayButton>
			</ClayNavigationBar.Item>

			<ClayNavigationBar.Item active={boolean('Active 3: ', false)}>
				<a className="link-secondary nav-link" href="#1">
					<span className="navbar-text-truncate">{`Item 3`}</span>
				</a>
			</ClayNavigationBar.Item>
			<ClayNavigationBar.Item active={boolean('Active 4: ', false)}>
				<button
					className="btn btn-block btn-sm btn-unstyled nav-link"
					onClick={() => setTriggerName('Item 4')}
					type="button"
				>
					<span className="navbar-text-truncate">{`Item 4`}</span>
				</button>
			</ClayNavigationBar.Item>
		</ClayNavigationBar>
	);
});
