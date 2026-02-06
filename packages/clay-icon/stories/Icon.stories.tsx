/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {Provider} from '@clayui/core';
const spritemap = require('@clayui/css/src/images/icons/icons.svg');
import ClayIcon from '@clayui/icon';
import React from 'react';

export default {
	component: ClayIcon,
	title: 'Design System/Components/Icon',
};
export function Default(args: any) {
	return <ClayIcon spritemap={spritemap} symbol={args.symbol} />;
}

Default.args = {
	symbol: 'add-cell',
};
export function ContextSpritemap(args: any) {
	return (
		<Provider spritemap={spritemap}>
			<ClayIcon symbol={args.symbol} />
		</Provider>
	);
}

ContextSpritemap.args = {
	symbol: 'add-cell',
};
