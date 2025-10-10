/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Button, {ButtonProps} from '@clayui/button';
import classNames from 'classnames';
import React from 'react';

export const Trigger = ({children, className, ...otherProps}: ButtonProps) => (
	<Button
		className={classNames(className, 'menubar-toggler')}
		displayType="unstyled"
		{...otherProps}
	>
		{children}
	</Button>
);
