/**
 * SPDX-FileCopyrightText: © 2020 Liferay, Inc. <https://liferay.com>
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

type Shape = 'circle' | 'user-icon';

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

const Overlay: React.FunctionComponent<
	React.HTMLAttributes<HTMLSpanElement> & {
		/**
		 * Flag to indicate if `inline-item` class should be applied
		 */
		inline?: boolean;
	}
> = ({children, className, inline, ...otherProps}) => (
	<span
		className={classNames(className, 'sticker-overlay', {
			'inline-item': inline,
		})}
		{...otherProps}
	>
		{children}
	</span>
);

const Image: React.FunctionComponent<React.ImgHTMLAttributes<
	HTMLImageElement
>> = ({className, ...otherProps}) => (
	<img className={classNames(className, 'sticker-img')} {...otherProps} />
);

const ClaySticker: React.FunctionComponent<IProps> = ({
	children,
	className,
	displayType,
	inline,
	outside = false,
	position,
	shape,
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
		<Overlay inline={inline}>{children}</Overlay>
	</span>
);

export default Object.assign(ClaySticker, {Image, Overlay});
