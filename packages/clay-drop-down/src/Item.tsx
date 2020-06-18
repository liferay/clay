/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {ClayButtonWithIcon} from '@clayui/button/src';
import ClayIcon from '@clayui/icon';
import ClayLink from '@clayui/link';
import classNames from 'classnames';
import React from 'react';

interface IProps
	extends React.HTMLAttributes<
		HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement
	> {
	/**
	 * Flag that indicates if item is selected.
	 */
	active?: boolean;

	childItems?: Array<object>;
	onRightSymbolClick?: any;

	/**
	 * Flag that indicates if item is disabled or not.
	 */
	disabled?: boolean;

	/**
	 * Path for item to link to.
	 */
	href?: string;

	innerRef?: React.Ref<any>;

	/**
	 * Path to icon spritemap from clay-css.
	 */
	spritemap?: string;

	/**
	 * Flag that indicates if there is an icon symbol on the left side.
	 */
	symbolLeft?: string;

	/**
	 * Flag that indicates if there is an icon symbol on the right side.
	 */
	symbolRight?: string;
}

const ClayDropDownItem = React.forwardRef<HTMLLIElement, IProps>(
	(
		{
			active,
			childItems,
			children,
			className,
			disabled,
			href,
			innerRef,
			onClick,
			onRightSymbolClick,
			spritemap,
			symbolLeft,
			symbolRight,
			tabIndex,
			...otherProps
		}: IProps,
		ref
	) => {
		const clickableElement = onClick ? 'button' : 'span';
		const ItemElement = href ? ClayLink : clickableElement;

		return (
			<li
				aria-selected={active}
				className={childItems ? 'd-flex' : ''}
				ref={ref}
			>
				<ItemElement
					{...otherProps}
					className={classNames('dropdown-item', className, {
						active,
						disabled,
					})}
					disabled={disabled}
					href={href}
					onClick={onClick}
					ref={innerRef}
					tabIndex={disabled ? -1 : tabIndex}
				>
					{symbolLeft && (
						<span className="dropdown-item-indicator-start">
							<ClayIcon
								spritemap={spritemap}
								symbol={symbolLeft}
							/>
						</span>
					)}

					{children}

					{symbolRight && (
						<span className="dropdown-item-indicator-end">
							<ClayIcon
								spritemap={spritemap}
								symbol={symbolRight}
							/>
						</span>
					)}
				</ItemElement>

				{childItems && (
					<ClayButtonWithIcon
						displayType="unstyled"
						onClick={onRightSymbolClick}
						spritemap={spritemap}
						symbol="angle-right"
					/>
				)}
			</li>
		);
	}
);

export default ClayDropDownItem;
