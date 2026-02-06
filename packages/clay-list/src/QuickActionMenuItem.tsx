/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayIcon from '@clayui/icon';
import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

export interface IItemProps
	extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {

	/**
	 * Value of path the item should link to.
	 */
	href?: string;

	/**
	 * Path to icon spritemap.
	 */
	spritemap?: string;

	/**
	 * Name of icon symbol
	 */
	symbol: string;
}

const QuickActionMenuItem = React.forwardRef<
	HTMLAnchorElement & HTMLButtonElement,
	IItemProps
>(({className, href, spritemap, symbol, ...otherProps}: IItemProps, ref) => {
	const ElementTag = href ? ClayLink : 'button';

	return (
		<ElementTag
			{...otherProps}
			className={classNames(
				'component-action quick-action-item',
				className
			)}
			href={href}
			ref={ref}
			role="button"
		>
			<ClayIcon spritemap={spritemap} symbol={symbol} />
		</ElementTag>
	);
});

QuickActionMenuItem.displayName = 'ClayListQuickActionMenuItem';

export default QuickActionMenuItem;
