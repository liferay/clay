/**
 * SPDX-FileCopyrightText: © 2019 Liferay, Inc. <https://liferay.com>
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
	| 'warning'
	| 'outline-0'
	| 'outline-1'
	| 'outline-2'
	| 'outline-3'
	| 'outline-4'
	| 'outline-5'
	| 'outline-6'
	| 'outline-7'
	| 'outline-8'
	| 'outline-9';

type Shape = 'circle' | 'user-icon';

type Position = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';

type Size = 'lg' | 'sm' | 'xl';

export interface IClayStickerProps
	extends React.HTMLAttributes<HTMLSpanElement> {
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

const Overlay = ({
	children,
	className,
	inline,
	...otherProps
}: React.HTMLAttributes<HTMLSpanElement> & {
	/**
	 * Flag to indicate if `inline-item` class should be applied
	 */
	inline?: boolean;
}) => (
	<span
		className={classNames(className, 'sticker-overlay', {
			'inline-item': inline,
		})}
		{...otherProps}
	>
		{children}
	</span>
);

const Image = ({
	className,
	...otherProps
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
	<img className={classNames(className, 'sticker-img')} {...otherProps} />
);

function ClaySticker(props: IClayStickerProps): JSX.Element & {
	Image: typeof Image;
	Overlay: typeof Overlay;
};

function ClaySticker({
	children,
	className,
	displayType,
	inline,
	outside = false,
	position,
	shape,
	size,
	...otherProps
}: IClayStickerProps) {
	return (
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
}

ClaySticker.Image = Image;
ClaySticker.Overlay = Overlay;

export default ClaySticker;
