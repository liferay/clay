/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import classNames from 'classnames';
import ClayIcon from '@clayui/icon';

type DisplayType =
	| 'danger'
	| 'dark'
	| 'info'
	| 'light'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'unstyled'
	| 'warning';

type Shape = 'circle' | 'rounded';

type Position = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

type Size = 'lg' | 'sm' | 'xl';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
	/**
	 * Determines the color of the sticker.
	 */
	displayType?: DisplayType;

	/**
	 * Render ClayIcon in the ClaySticker element.
	 */
	icon?: string;

	/**
	 * Flag to indicate if the sticker should be positioned on the outside
	 * corners when position is defined.
	 */
	outside?: boolean;

	/**
	 * Position of the sticker in relation to the contents.
	 */
	position?: Position;

	/**
	 * Shape of the sticker.
	 */
	shape?: Shape;

	/**
	 * Sticker size.
	 */
	size?: Size;

	/**
	 * The path to the SVG spritemap file containing the icons.
	 */
	spritemap?: string;
}

const ClaySticker: React.FunctionComponent<Props> = ({
	children,
	className,
	displayType = 'primary',
	icon,
	outside = false,
	position,
	shape = 'rounded',
	size,
	spritemap,
	...otherProps
}) => (
	<span
		{...otherProps}
		className={classNames('sticker', className, {
			[`sticker-${shape}`]: shape,
			[`sticker-${displayType}`]: displayType,
			[`sticker-${position}`]: position,
			[`sticker-outside`]: position && outside,
			[`sticker-${size}`]: size,
		})}
	>
		<span
			className={classNames({
				'inline-item': icon,
				'sticker-overlay': !icon,
			})}
		>
			{icon ? <ClayIcon spritemap={spritemap} symbol={icon} /> : children}
		</span>
	</span>
);

export default ClaySticker;
