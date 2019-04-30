/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import ClayLink from '@clayui/link';
import ClayNavigationBar from '../src/index';
import React from 'react';
import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

const spritemap = require('clay-css/lib/images/icons/icons.svg');

storiesOf('ClayNavigationBar', module).add('default', () => (
	<ClayNavigationBar
		inverted={boolean('Inverted: ', false)}
		spritemap={spritemap}
		triggerLabel={text('triggerLabel: ', 'Item 1')}
	>
		<ClayNavigationBar.ListItem active={boolean('Active 1: ', true)}>
			<ClayLink className="nav-link" displayType="secondary" href="#1">
				<span className="navbar-text-truncate">{`Item 1`}</span>
			</ClayLink>
		</ClayNavigationBar.ListItem>

		<ClayNavigationBar.ListItem active={boolean('Active 2: ', false)}>
			<ClayButton block className="nav-link" displayType="unstyled" small>
				<span className="navbar-text-truncate">{`Item 2`}</span>
			</ClayButton>
		</ClayNavigationBar.ListItem>

		<ClayNavigationBar.ListItem active={boolean('Active 3: ', false)}>
			<ClayLink className="nav-link" displayType="secondary" href="#3">
				<span className="navbar-text-truncate">{`Item 3`}</span>
			</ClayLink>
		</ClayNavigationBar.ListItem>
	</ClayNavigationBar>
));
