/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as React from 'react';
import classNames from 'classnames';

interface PaginationItemProps
	extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
	active?: boolean;
	disabled?: boolean;
	href?: string;
}

const PaginationItem: React.FunctionComponent<PaginationItemProps> = ({
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

export default PaginationItem;
