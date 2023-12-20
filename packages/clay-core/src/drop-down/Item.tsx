/**
 * SPDX-FileCopyrightText: © 2023 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Link from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

type Props = {
	/**
	 * Flag that indicates if item is disabled.
	 */
	disabled?: boolean;

	/**
	 * Path for item to link to.
	 */
	href?: string;

	/**
	 * Item value for accessibility.
	 */
	textValue?: string;

	/**
	 * @ignore
	 */
	'data-index'?: number;

	/**
	 * @ignore
	 */
	keyValue?: React.Key;
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
		textValue: _,
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
