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
		<ClayNavigationBar.Item active={boolean('Active 1: ', true)}>
			<ClayLink className="nav-link" displayType="secondary" href="#1">
				<span className="navbar-text-truncate">{`Item 1`}</span>
			</ClayLink>
		</ClayNavigationBar.Item>

		<ClayNavigationBar.Item active={boolean('Active 2: ', false)}>
			<ClayButton block className="nav-link" displayType="unstyled" small>
				<span className="navbar-text-truncate">{`Item 2`}</span>
			</ClayButton>
		</ClayNavigationBar.Item>

		<ClayNavigationBar.Item active={boolean('Active 3: ', false)}>
			<a className="nav-link link-secondary" href="#1">
				<span className="navbar-text-truncate">{`Item 3`}</span>
			</a>
		</ClayNavigationBar.Item>
		<ClayNavigationBar.Item active={boolean('Active 4: ', false)}>
			<button
				className="nav-link btn btn-unstyled btn-block btn-sm"
				type="button"
			>
				<span className="navbar-text-truncate">{`Item 4`}</span>
			</button>
		</ClayNavigationBar.Item>
	</ClayNavigationBar>
));
