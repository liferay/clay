/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

const spritemap = require('@clayui/css/src/images/icons/icons.svg');
import React from 'react';

import {KeyboardArrowsIndicator} from '../src/keyboard-arrows-indicator';

export default {
	title: 'Design System/Components/KeyboardArrowsIndicator',
};

export function Default() {
	return (
		<div style={{display: 'flex', gap: '2rem'}}>
			<KeyboardArrowsIndicator direction="all" spritemap={spritemap} />

			<KeyboardArrowsIndicator
				direction="horizontal"
				spritemap={spritemap}
			/>

			<KeyboardArrowsIndicator
				direction="vertical"
				spritemap={spritemap}
			/>
		</div>
	);
}

export function CustomLabel() {
	return (
		<KeyboardArrowsIndicator
			direction="all"
			label="Press the arrow keys to move focus"
			spritemap={spritemap}
		/>
	);
}
