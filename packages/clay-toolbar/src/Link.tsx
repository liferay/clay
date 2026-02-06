/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.ComponentProps<typeof ClayLink> {

	/**
	 * Flag that determines if the Link will have a `disabled` class, disabling interactions.
	 */
	disabled?: boolean;
}

export function Link({children, className, disabled, ...otherProps}: IProps) {
	return (
		<ClayLink
			className={classNames(className, 'component-link tbar-link', {
				disabled,
			})}
			{...otherProps}
		>
			{children}
		</ClayLink>
	);
}

Link.displayName = 'ClayToolbarLink';
