/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

export const ItemAfter = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({children, className, ...otherProps}, ref) => (
	<span
		{...otherProps}
		className={classNames(className, 'badge-item badge-item-after')}
		ref={ref}
	>
		{children}
	</span>
));

ItemAfter.displayName = 'ClayBadgeItemAfter';

export const ItemBefore = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({children, className, ...otherProps}, ref) => (
	<span
		{...otherProps}
		className={classNames(className, 'badge-item badge-item-before')}
		ref={ref}
	>
		{children}
	</span>
));

ItemBefore.displayName = 'ClayBadgeItemBefore';

export const ItemExpand = React.forwardRef<
	HTMLSpanElement,
	React.HTMLAttributes<HTMLSpanElement>
>(({children, className, ...otherProps}, ref) => (
	<span
		{...otherProps}
		className={classNames(className, 'badge-item badge-item-expand')}
		ref={ref}
	>
		{children}
	</span>
));

ItemExpand.displayName = 'ClayBadgeItemExpand';

type DisplayType =
	| 'primary'
	| 'secondary'
	| 'info'
	| 'danger'
	| 'success'
	| 'warning'
	| 'beta'
	| 'beta-dark';

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {

	/**
	 * Flag to indicate if the badge should use the clay-dark variant.
	 */
	dark?: boolean;

	/**
	 * Determines the color of the badge.
	 * The values `beta` and `beta-dark` are deprecated since v3.100.0 - use
	 * `translucent` and `dark` instead.
	 */
	displayType?: DisplayType;

	/**
	 * Info that is shown inside of the badge itself.
	 */
	label?: string | number;

	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * The id of the icon in the spritemap.
	 */
	symbol?: string;

	/**
	 * Flag to indicate if the badge should use the translucent variant.
	 */
	translucent?: boolean;
}

const BadgeComponent = React.forwardRef<HTMLSpanElement, IProps>(
	(
		{
			className,
			dark,
			displayType = 'primary',
			label,
			spritemap,
			symbol,
			translucent,
			...otherProps
		}: IProps,
		ref
	) => {
		if (displayType === 'beta') {
			displayType = 'info';
			translucent = true;
		}
		else if (displayType === 'beta-dark') {
			dark = true;
			displayType = 'info';
			translucent = true;
		}

		return (
			<span
				{...otherProps}
				className={classNames(
					'badge',
					`badge-${displayType}`,
					className,
					{
						'badge-translucent': translucent,
						'clay-dark': dark,
					}
				)}
				ref={ref}
			>
				<ItemExpand>{label}</ItemExpand>

				{symbol && (
					<ItemAfter>
						<ClayIcon spritemap={spritemap} symbol={symbol} />
					</ItemAfter>
				)}
			</span>
		);
	}
);

BadgeComponent.displayName = 'ClayBadge';

const Badge = Object.assign(BadgeComponent, {
	ItemAfter,
	ItemBefore,
	ItemExpand,
});

export default Badge;
