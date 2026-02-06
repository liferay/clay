/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import Button, {ButtonProps} from '@clayui/button';
import classNames from 'classnames';
import React from 'react';
export function Trigger({children, className, ...otherProps}: ButtonProps) {
	return (
		<Button
			className={classNames(className, 'menubar-toggler')}
			displayType="unstyled"
			{...otherProps}
		>
			{children}
		</Button>
	);
}
