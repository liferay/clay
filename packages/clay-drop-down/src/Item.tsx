/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayIcon from '@clayui/icon';
import React from 'react';

interface IProps
	extends React.HTMLAttributes<HTMLSpanElement | HTMLAnchorElement> {
	/**
	 * Flag that indicates if item is selected.
	 */
	active?: boolean;

	/**
	 * Flag that indicates if item is disabled or not.
	 */
	disabled?: boolean;

	/**
	 * Path for item to link to.
	 */
	href?: string;

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

const DropDownItem: React.FunctionComponent<IProps> = ({
	active,
	children,
	className,
	disabled,
	href,
	spritemap,
	symbolLeft,
	symbolRight,
	...otherProps
}: IProps) => {
	const ItemElement = href ? 'a' : 'span';

	return (
		<li>
			<ItemElement
				{...otherProps}
				className={classNames('dropdown-item', className, {
					active,
					disabled,
				})}
				href={href}
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

export default DropDownItem;
