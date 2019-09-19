/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayProgressBar from '../src';
import React from 'react';
import {boolean, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

storiesOf('Components|ClayProgressBar', module).add('default', () => (
	<div>
		<ClayProgressBar
			feedback={boolean('Feedback', false)}
			spritemap={spritemap}
			value={number('Value', 50)}
			warn={boolean('Warn', false)}
		/>
		<ClayProgressBar spritemap={spritemap} value={100} />
		<ClayProgressBar spritemap={spritemap} value={55}>
			{`55 of 100`}
			<span className="sr-only">{'items loaded'}</span>
		</ClayProgressBar>
	</div>
));
