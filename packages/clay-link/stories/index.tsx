/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import 'clay-css/lib/css/atlas.css';
import ClayLink from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';

storiesOf('ClayLink', module).add('default', () => (
	<div>
		<ClayLink href="#link-styles">{'Default'}</ClayLink>

		<ClayLink displayType="secondary" href="#link-styles">
			{'Secondary'}
		</ClayLink>

		<ClayLink aria-label="My Link" href="#link-styles">
			{'With Aria Label'}
		</ClayLink>
	</div>
));
