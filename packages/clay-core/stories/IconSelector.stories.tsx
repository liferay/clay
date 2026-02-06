/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

const spritemap = require('@clayui/css/src/images/icons/icons.svg');
import React from 'react';

import {IconSelector} from '../src/icon-selector';

export default {
	title: 'Design System/Components/IconSelector',
};
export function Default() {
	return (
		<div>
			<IconSelector spritemap={spritemap} />
		</div>
	);
}
