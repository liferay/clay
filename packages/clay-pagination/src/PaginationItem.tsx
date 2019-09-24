/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import classNames from 'classnames';
import React from 'react';

interface IPaginationItemProps
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

	const ElementTag = href ? 'a' : 'button';

	return (
		<li className={classes}>
			<ElementTag
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
