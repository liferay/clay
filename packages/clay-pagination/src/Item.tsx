/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

export interface IPaginationItemProps
	extends React.HTMLAttributes<HTMLAnchorElement | HTMLDivElement> {
	active?: boolean;
	as?: 'div' | typeof ClayLink;
	disabled?: boolean;
	href?: string;
}

export function Item({
	as: As = ClayLink,
	active = false,
	children,
	disabled = false,
	href,
	...otherProps
}: IPaginationItemProps) {
	return (
		<li className={classNames('page-item', {active, disabled})}>
			{As === 'div' ? (
				<As {...otherProps} className="page-link">
					{children}
				</As>
			) : (
				<As
					{...otherProps}
					aria-current={active && href ? 'page' : undefined}
					className="page-link"
					href={disabled || active ? undefined : href}
					onClick={(event) => {
						if (!href) {
							event.preventDefault();
						}
						if (otherProps.onClick) {
							otherProps.onClick(event as any);
						}
					}}
					tabIndex={active || (!href && !disabled) ? 0 : undefined}
				>
					{children}
				</As>
			)}
		</li>
	);
}
