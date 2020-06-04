/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLabel from '@clayui/label';
import classNames from 'classnames';
import React from 'react';

const Label: React.FunctionComponent<React.ComponentProps<
	typeof ClayLabel
>> = ({children, className, ...otherProps}) => (
	<ClayLabel className={classNames(className, 'tbar-label')} {...otherProps}>
		{children}
	</ClayLabel>
);

Label.displayName = 'ClayToolbarLabel';

export default Label;
