/**
 * SPDX-FileCopyrightText: © 2021 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {storiesOf} from '@storybook/react';
import React from 'react';

import {Provider} from '../';
import {Icon} from '../../';

storiesOf('Provider', module).add('spritemap', () => (
	<Provider spritemap={spritemap}>
		<Icon symbol="books" />
		<Icon symbol="times" />
	</Provider>
));
