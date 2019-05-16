/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import ClayIcon from '@clayui/icon';

interface Props
	extends React.HTMLAttributes<HTMLSpanElement | HTMLAnchorElement> {
	/**
	 * Flag that indicates if item is selected.
	 */
	active?: boolean;

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

const DropDownItem: React.FunctionComponent<Props> = ({
	active,
	children,
	className,
	href,
	spritemap,
	symbolLeft,
	symbolRight,
	...otherProps
}) => {
	const ItemElement = href ? 'a' : 'span';

	return (
		<li>
			<ItemElement
				{...otherProps}
				className={classNames('dropdown-item', className, {active})}
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
