/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayButton from '@clayui/button';
import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.ComponentProps<typeof ClayButton> {}

function Trigger({children, className, ...otherProps}: IProps) {
	return (
		<ClayButton
			className={classNames(className, 'menubar-toggler')}
			displayType="unstyled"
			{...otherProps}
		>
			{children}
		</ClayButton>
	);
}

export default Trigger;
