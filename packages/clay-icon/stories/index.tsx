/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react';
import React from 'react';

import ClayIcon, {ClayIconSpriteContext} from '../src';

storiesOf('Components|ClayIcon', module)
	.add('default', () => (
		<ClayIcon spritemap={spritemap} symbol={text('Symbol', 'add-cell')} />
	))
	.add('using context', () => (
		<ClayIconSpriteContext.Provider value={spritemap}>
			<ClayIcon symbol={text('Symbol', 'add-cell')} />
		</ClayIconSpriteContext.Provider>
	));
