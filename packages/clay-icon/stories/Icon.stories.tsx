/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {Provider} from '@clayui/core';
const spritemap = require('@clayui/css/lib/images/icons/icons.svg');
import React from 'react';

import ClayIcon from '../src';

export default {
	component: ClayIcon,
	title: 'Design System/Components/Icon',
};

export const Default = (args: any) => <ClayIcon symbol={args.symbol} />;

Default.args = {
	symbol: 'add-cell',
};

export const ContextSpritemap = (args: any) => (
	<Provider spritemap={spritemap}>
		<ClayIcon symbol={args.symbol} />
	</Provider>
);

Default.args = {
	symbol: 'add-cell',
};
