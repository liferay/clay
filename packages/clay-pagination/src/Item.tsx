/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

export interface IPaginationItemProps
	extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
	active?: boolean;
	disabled?: boolean;
	href?: string;
}

const ClayPaginationItem = ({
	active = false,
	children,
	disabled = false,
	href,
	...otherProps
}: IPaginationItemProps) => {
	return (
		<li className={classNames('page-item', {active, disabled})}>
			<ClayLink
				{...otherProps}
				aria-current={active && href ? 'page' : undefined}
				className="page-link"
				href={disabled || active ? undefined : href}
				onClick={(event) => {
					if (!href) {
						event.preventDefault();
					}

					if (otherProps.onClick) {
						otherProps.onClick(event);
					}
				}}
				tabIndex={active || (!href && !disabled) ? 0 : undefined}
			>
				{children}
			</ClayLink>
		</li>
	);
};

export default ClayPaginationItem;
