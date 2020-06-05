/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLabel from '@clayui/label';
import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.ComponentProps<typeof ClayLabel> {
	/**
	 * FLag that determines if the Link will have a `component-label` class, allowing CSS overrides.
	 */
	componentLabel?: boolean;
}

const Label: React.FunctionComponent<IProps> = ({
	children,
	className,
	componentLabel,
	...otherProps
}) => (
	<ClayLabel
		className={classNames(className, 'tbar-label', {
			'component-label': componentLabel,
		})}
		{...otherProps}
	>
		{children}
	</ClayLabel>
);

Label.displayName = 'ClayToolbarLabel';

export default Label;
