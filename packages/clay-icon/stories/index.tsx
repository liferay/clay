/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import '@clayui/css/lib/css/atlas.css';
import ClayIcon, {ClayIconSpriteContext} from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';

const spritemap = require('@clayui/css/lib/images/icons/icons.svg');

storiesOf('Components|ClayIcon', module)
	.add('default', () => (
		<ClayIcon spritemap={spritemap} symbol={text('Symbol', 'add-cell')} />
	))
	.add('using context', () => (
		<ClayIconSpriteContext.Provider value={spritemap}>
			<ClayIcon symbol={text('Symbol', 'add-cell')} />
		</ClayIconSpriteContext.Provider>
	));
