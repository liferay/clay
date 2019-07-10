/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export type DisplayType =
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

interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
	/**
	 * Determines the color of the sticker.
	 */
	displayType?: DisplayType;

	/**
	 * Turns the sticker inline
	 */
	inline?: boolean;

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
}

const ClaySticker: React.FunctionComponent<IProps> = ({
	children,
	className,
	displayType = 'primary',
	inline,
	outside = false,
	position,
	shape = 'rounded',
	size,
	...otherProps
}: IProps) => (
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
			className={classNames('sticker-overlay', {
				'inline-item': inline,
			})}
		>
			{children}
		</span>
	</span>
);

export default ClaySticker;
