/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.ComponentProps<typeof ClayLink> {
	/**
	 * FLag that determines if the Link will have a `component-link` class, allowing CSS overrides.
	 */
	componentLink?: boolean;

	/**
	 * Flag that determines if the Link will have a `disabled` class, disabling interactions.
	 */
	disabled?: boolean;
}

const Link: React.FunctionComponent<IProps> = ({
	children,
	className,
	componentLink,
	disabled,
	...otherProps
}: IProps) => (
	<ClayLink
		className={classNames(className, 'tbar-link', {
			'component-link': componentLink,
			disabled,
		})}
		{...otherProps}
	>
		{children}
	</ClayLink>
);

Link.displayName = 'ClayToolbarLink';

export default Link;
