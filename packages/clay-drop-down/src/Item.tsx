/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import ClayIcon from '@clayui/icon';

interface Props
	extends React.HTMLAttributes<HTMLSpanElement | HTMLAnchorElement> {
	href?: string;
	spritemap?: string;
	symbolLeft?: string;
	symbolRight?: string;
}

const DropDownGroup: React.FunctionComponent<Props> = ({
	children,
	href,
	spritemap,
	symbolLeft,
	symbolRight,
	...otherProps
}) => {
	const ItemElement = href ? 'a' : 'span';

	return (
		<li>
			<ItemElement {...otherProps} className="dropdown-item" href={href}>
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

export default DropDownGroup;
