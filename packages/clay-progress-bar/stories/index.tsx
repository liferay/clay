/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayProgressBar from '../src';
import React from 'react';
import {boolean, number} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';

import 'clay-css/lib/css/atlas.css';

const spritemap = require(`clay-css/lib/images/icons/icons.svg`);

storiesOf(`ClayProgressBar`, module).add(`default`, () => (
	<div>
		<ClayProgressBar
			feedback={boolean(`Feedback`, false)}
			spritemap={spritemap}
			value={number(`Value`, 50)}
			warn={boolean(`Warn`, false)}
		/>

		<ClayProgressBar spritemap={spritemap} value={100} />
		<ClayProgressBar
			spritemap={spritemap}
			value={50}
		>{`50/100`}</ClayProgressBar>
	</div>
));
