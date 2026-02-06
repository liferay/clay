/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

const ItemTitle = React.forwardRef<
	HTMLDivElement,
	React.BaseHTMLAttributes<HTMLAnchorElement>
>(({children, className, href, id, ...otherProps}, ref) => {
	const TagName = href ? 'div' : 'p';

	const content = href ? (
		<ClayLink href={href} {...otherProps}>
			{children}
		</ClayLink>
	) : (
		children
	);

	return (
		<TagName
			className={classNames('list-group-title', className)}
			id={id}
			ref={ref}
		>
			{content}
		</TagName>
	);
});

ItemTitle.displayName = 'ClayListItemTitle';

export default ItemTitle;
