/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LinkOrButton} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';

interface IItem extends React.HTMLAttributes<HTMLLIElement> {
	/**
	 * Flag to indicate if the Breadcrumb item is active or not.
	 */
	active?: boolean;

	/**
	 * This value is used to be the target of the link.
	 */
	href?: string;

	/**
	 * Label of the Breadcrumb item
	 */
	label: string;

	/**
	 * Callback for when a Breadcrumb item is clicked.
	 */
	onClick?: (event: React.SyntheticEvent) => void;
}

const Item = ({active, href, label, onClick, ...otherProps}: IItem) => (
	<li
		className={classNames('breadcrumb-item', {
			active,
		})}
		{...otherProps}
	>
		<LinkOrButton
			aria-current={active ? 'page' : undefined}
			buttonDisplayType="unstyled"
			buttonType="button"
			className="breadcrumb-link"
			data-testid={`testId${label}`}
			href={active ? '#' : href}
			onClick={(event: React.SyntheticEvent) => {
				if (onClick) {
					event.preventDefault();
					onClick(event);
				}
			}}
		>
			{label}
		</LinkOrButton>
	</li>
);

export default Item;
