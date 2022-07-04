/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayButton from '@clayui/button';
import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.ComponentProps<typeof ClayButton> {}

const Trigger = ({children, className, ...otherProps}: IProps) => (
	<ClayButton
		className={classNames(className, 'menubar-toggler')}
		displayType="unstyled"
		{...otherProps}
	>
		{children}
	</ClayButton>
);

export default Trigger;
