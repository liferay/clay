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
	const ElementTag = href ? ClayLink : 'button';

	return (
		<li className={classNames('page-item', {active, disabled})}>
			<ElementTag
				type={href ? undefined : 'button'}
				{...otherProps}
				aria-current={active && href ? 'page' : undefined}
				className="page-link"
				disabled={href ? undefined : disabled || active}
				href={disabled || active ? undefined : href}
			>
				{children}
			</ElementTag>
		</li>
	);
};

export default ClayPaginationItem;
