/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayIcon from '@clayui/icon';
import React from 'react';

interface IProps
	extends React.HTMLAttributes<
		HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement
	> {
	/**
	 * Flag that indicates if item is selected.
	 */
	active?: boolean;

	/**
	 * Flag that indicates if item is disabled or not.
	 */
	disabled?: boolean;

	forwardRef?: React.Ref<HTMLLIElement>;

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

const ClayDropDownItem: React.FunctionComponent<IProps> = ({
	active,
	children,
	className,
	disabled,
	forwardRef,
	href,
	innerRef,
	onClick,
	spritemap,
	symbolLeft,
	symbolRight,
	tabIndex,
	...otherProps
}: IProps) => {
	const clickableElement = onClick ? 'button' : 'span';
	const ItemElement = href ? 'a' : clickableElement;

	return (
		<li aria-selected={active} ref={forwardRef}>
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
						<ClayIcon spritemap={spritemap} symbol={symbolLeft} />
					</span>
				)}

				{children}

				{symbolRight && (
					<span className="dropdown-item-indicator-end">
						<ClayIcon spritemap={spritemap} symbol={symbolRight} />
					</span>
				)}
			</ItemElement>
		</li>
	);
};

export default React.forwardRef(
	(props: Omit<IProps, 'forwardRef'>, ref?: React.Ref<HTMLLIElement>) => (
		<ClayDropDownItem {...props} forwardRef={ref} />
	)
);
