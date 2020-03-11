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

const ClayPaginationItem: React.FunctionComponent<IPaginationItemProps> = ({
	active = false,
	children,
	disabled = false,
	href,
	...otherProps
}) => {
	const classes = classNames('page-item', {active, disabled});

	const ElementTag = href ? ClayLink : 'button';

	return (
		<li className={classes}>
			<ElementTag
				type={!href ? 'button' : undefined}
				{...otherProps}
				className="page-link"
				disabled={disabled}
				href={href}
			>
				{children}
			</ElementTag>
		</li>
	);
};

export default ClayPaginationItem;
