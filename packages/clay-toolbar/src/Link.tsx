/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

const Link: React.FunctionComponent<React.ComponentProps<typeof ClayLink>> = ({
	children,
	className,
	...otherProps
}) => {
	return (
		<ClayLink
			className={classNames(className, 'component-link tbar-link')}
			{...otherProps}
		>
			{children}
		</ClayLink>
	);
};

Link.displayName = 'ClayToolbarLink';

export default Link;
