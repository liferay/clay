/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export type ElementType = 'a' | 'button';

interface IProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick'> {
	/**
	 * Flag to indicate if the component is active or not.
	 */
	active?: boolean;

	/**
	 * Tab Item component to render. Can be an 'anchor' or a 'button'.
	 */
	component?: ElementType;

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
	onClick?: (
		event: React.MouseEvent<
			HTMLButtonElement | HTMLAnchorElement,
			MouseEvent
		>
	) => void;
}

const Item = React.forwardRef<any, IProps>(
	(
		{
			active = false,
			children,
			className,
			component = 'button',
			disabled = false,
			href,
			innerProps = {},
			onClick = () => {},
			...otherProps
		}: IProps,
		ref
	) => {
		const ElementTag = component;

		return (
			<li className={classNames('nav-item', className)} {...otherProps}>
				<ElementTag
					{...innerProps}
					aria-disabled={!active}
					aria-selected={active}
					className={classNames('nav-link', {
						active,
						'btn btn-unstyled': component === 'button',
						disabled,
					})}
					data-testid="tabItem"
					href={href}
					onClick={onClick}
					ref={ref}
					role="tab"
					tabIndex={disabled ? -1 : undefined}
					type={component === 'button' ? 'button' : undefined}
				>
					{children}
				</ElementTag>
			</li>
		);
	}
);

export default Item;
