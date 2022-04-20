/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {ElementType} from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type WeightFont =
	| 'lighter'
	| 'light'
	| 'normal'
	| 'semi-bold'
	| 'bold'
	| 'bolder';

interface IBaseProps extends React.BaseHTMLAttributes<HTMLHeadingElement> {
	/**
	 * Number to set the heading level.
	 */
	level?: HeadingLevel;

	/**
	 * Determines the weight of the font.
	 */
	weight?: WeightFont;
}

export const Heading = React.forwardRef<HTMLHeadingElement, IBaseProps>(
	({children, className, level, weight, ...otherProps}, ref) => {
		const HeadingTag = `h${level}` as ElementType;

		return (
			<HeadingTag
				className={classNames(className, {
					[`font-weight-${weight}`]: weight,
				})}
				ref={ref}
				{...otherProps}
			>
				{children}
			</HeadingTag>
		);
	}
);

Heading.displayName = 'Heading';
