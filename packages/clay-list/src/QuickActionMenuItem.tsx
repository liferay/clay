/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

interface IItemProps
	extends React.HTMLAttributes<HTMLAnchorElement | HTMLSpanElement> {
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

const ClayListQuickActionMenuItem: React.FunctionComponent<IItemProps> = ({
	className,
	href,
	spritemap,
	symbol,
	...otherProps
}: IItemProps) => {
	const ElementTag = href ? ClayLink : 'button';

	return (
		<ElementTag
			{...otherProps}
			className={classNames(
				'component-action quick-action-item',
				className
			)}
			href={href}
			role="button"
		>
			<ClayIcon spritemap={spritemap} symbol={symbol} />
		</ElementTag>
	);
};

export default ClayListQuickActionMenuItem;
