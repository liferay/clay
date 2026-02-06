/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import Link from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

type Props = {

	/**
	 * @ignore
	 */
	'data-index'?: number;

	/**
	 * Flag that indicates if item is disabled.
	 */
	'disabled'?: boolean;

	/**
	 * Path for item to link to.
	 */
	'href'?: string;

	/**
	 * @ignore
	 */
	'keyValue'?: React.Key;

	/**
	 * Item value for accessibility.
	 */
	'textValue'?: string;
} & React.HTMLAttributes<
	HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement
>;

export const Item = React.forwardRef<HTMLLIElement, Props>(function ItemInner(
	{
		children,
		className,
		'data-index': dataIndex,
		disabled,
		href,
		keyValue,
		onClick,
		style,
		'textValue': _,
		...otherProps
	}: Props,
	ref
) {
	const As = href ? Link : onClick ? 'button' : 'span';

	return (
		<li data-index={dataIndex} ref={ref} role="presentation" style={style}>
			<As
				{...otherProps}
				className={classNames('dropdown-item', className, {
					disabled,
				})}
				data-focus={keyValue}
				disabled={disabled}
				href={href}
				onClick={onClick}
				tabIndex={-1}
			>
				{children}
			</As>
		</li>
	);
});

Item.displayName = 'Item';

// @ts-ignore

Item.passthroughKey = true;
