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
	forwardRef?: React.Ref<any>;
	href?: string;

	/**
	 * Props to be added to the item element that can be an anchor or a button.
	 */
	itemElementProps?: React.HTMLAttributes<
		HTMLAnchorElement | HTMLButtonElement
	>;

	/**
	 * Callback to be used when clicking to a Tab Item.
	 */
	onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
}

const Item: React.FunctionComponent<IProps> = React.forwardRef(
	(
		{
			active = false,
			children,
			className,
			component = 'button',
			disabled = false,
			forwardRef,
			itemElementProps = {},
			href,
			onClick = () => {},
			...otherProps
		}: IProps,
		IProps
	) => {
		const ElementTag = component;

		return (
			<li
				className={classNames(
					'nav-item',
					className
				)}
				{...otherProps}
			>
				<ElementTag
					aria-disabled={!active}
					aria-selected={active}
					className={classNames('nav-link', {
						active,
						'btn btn-unstyled': component === 'button',
						disabled,
					})}
					data-testid={`${tabName.trim().toLowerCase()}TabItem`}
					href={href}
					ref={forwardRef}
					onClick={onClick}
					role="tab"
					tabIndex={disabled ? -1 : undefined}
					type={component === 'button' ? 'button' : undefined}
					{...itemElementProps}
				>
					{children}
				</ElementTag>
			</li>
		);
	}
);

export default React.forwardRef((props: IProps, ref?) => (
	<Item {...props} forwardRef={ref} />
));
