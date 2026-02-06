/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayLabel from '@clayui/label';
import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.ComponentProps<typeof ClayLabel> {}
export function Label({children, className, ...otherProps}: IProps) {
	return (
		<ClayLabel
			className={classNames(className, 'component-label tbar-label')}
			{...otherProps}
		>
			{children}
		</ClayLabel>
	);
}

Label.displayName = 'ClayToolbarLabel';
