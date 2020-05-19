/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LinkOrButton} from '@clayui/shared';
import classNames from 'classnames';
import React from 'react';

interface IProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> {
	/**
	 * Flag to indicate if the component is active or not.
	 */
	active?: boolean;

	/**
	 * Flag to indicate if the TabPane is disabled.
	 */
	disabled?: boolean;

	/**
	 * This value is used to be the target of the link.
	 */
	href?: string;

	/**
	 * Props to be added to the item element that can be an anchor or a button.
	 */
	innerProps?: React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>;

	/**
	 * Callback to be used when clicking to a Tab Item.
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Item = React.forwardRef<any, IProps>(
	(
		{
			active = false,
			children,
			className,
			disabled = false,
			href,
			innerProps = {},
			onClick,
			...otherProps
		}: IProps,
		ref
	) => (
		<li {...otherProps} className={classNames('nav-item', className)}>
			<LinkOrButton
				{...innerProps}
				aria-disabled={!active}
				aria-selected={active}
				buttonDisplayType="unstyled"
				buttonType="button"
				className={classNames('nav-link', {
					active,
					disabled,
				})}
				data-testid="tabItem"
				disabled={disabled}
				href={href}
				onClick={onClick}
				ref={ref}
				role="tab"
				tabIndex={disabled ? -1 : undefined}
			>
				{children}
			</LinkOrButton>
		</li>
	)
);

export default Item;
