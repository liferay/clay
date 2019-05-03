/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import ClayIcon from '@clayui/icon';
import React from 'react';

interface ItemProps
	extends React.HTMLAttributes<HTMLAnchorElement | HTMLSpanElement> {
	href?: string;
	spritemap?: string;
	symbol: string;
}

const QuickActionMenuItem: React.FunctionComponent<ItemProps> = ({
	children,
	className,
	href,
	spritemap,
	symbol,
	...otherProps
}) => {
	const ElementTag = href ? 'a' : 'button';

	return (
		<ElementTag
			{...otherProps}
			className={classNames(
				'component-action quick-action-item',
				className
			)}
			href={href}
			role="button"
		>
			<ClayIcon spritemap={spritemap} symbol={symbol} />
		</ElementTag>
	);
};

const QuickActionMenu: React.FunctionComponent<
	React.HTMLAttributes<HTMLDivElement>
> & {
	Item: typeof QuickActionMenuItem;
} = ({children, className, ...otherProps}) => {
	return (
		<div {...otherProps} className="quick-action-menu">
			{children}
		</div>
	);
};

QuickActionMenu.Item = QuickActionMenuItem;

export default QuickActionMenu;
