/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon, {ClayIconSpriteContext} from '../src';
import React from 'react';
import {storiesOf} from '@storybook/react';
import {text} from '@storybook/addon-knobs';

import 'clay-css/lib/css/atlas.css';

const spritemap = require(`clay-css/lib/images/icons/icons.svg`);

storiesOf(`ClayIcon`, module)
	.add(`default`, () => (
		<ClayIcon spritemap={spritemap} symbol={text(`Symbol`, `add-cell`)} />
	))
	.add(`using context`, () => (
		<ClayIconSpriteContext.Provider value={spritemap}>
			<ClayIcon symbol={text(`Symbol`, `add-cell`)} />
		</ClayIconSpriteContext.Provider>
	));
