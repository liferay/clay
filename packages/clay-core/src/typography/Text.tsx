/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export type TextSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type DisplayType = 'paragraph' | 'span';

export type WeightFont =
	| 'lighter'
	| 'light'
	| 'normal'
	| 'semi-bold'
	| 'bold'
	| 'bolder';

export type ColorType =
	| null
	| 'primary'
	| 'secondary'
	| 'muted'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info';

interface IBaseProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * Determine the way in which a text is displayed.
	 */

	as?: DisplayType;
	/**
	 * Determine the color text.
	 */

	displayType?: ColorType;

	/**
	 * Set the text in italic style.
	 */
	italic?: boolean;

	/**
	 * Number to set the text size.
	 */
	size?: TextSize;

	/**
	 * Set the text in truncate style.
	 */
	truncate?: boolean;

	/**
	 * Determines the weight of the font.
	 */
	weight?: WeightFont;
}

export const Text = React.forwardRef<HTMLElement, IBaseProps>(
	(
		{
			// as,
			children,
			className,
			displayType,
			italic,
			size = 4,
			truncate,
			weight,
			...otherProps
		},
		ref
	) => (
		<span
			className={classNames(className, [`text-${size}`], {
				[`text-${displayType}`]: displayType,
				['font-italic']: italic,
				['text-truncate']: truncate,
				[`font-weight-${weight}`]: weight,
			})}
			ref={ref}
			{...otherProps}
		>
			{children}
		</span>
	)
);

Text.displayName = 'Text';
