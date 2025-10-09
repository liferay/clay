/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export type Level = 1 | 2 | 3 | 4 | 5 | 6;

export type WeightFont =
	| 'lighter'
	| 'light'
	| 'normal'
	| 'semi-bold'
	| 'bold'
	| 'bolder';

type Props = {
	/**
	 * Heading content.
	 */
	children?: React.ReactNode;

	/**
	 * Determines the font size of the heading regardless of the tag.
	 */
	fontSize?: Level;

	/**
	 * Number to set the heading level.
	 */
	level?: Level;

	/**
	 * Determines the weight of the font.
	 */
	weight?: WeightFont;
};

export const Heading = ({
	children,
	fontSize,
	level = 1,
	weight = 'bold',
}: Props) => {
	const HeadingTag = `h${level}` as React.ElementType;

	const size = fontSize ?? level;

	return (
		<HeadingTag
			className={classNames([`text-${11 - size}`], {
				[`font-weight-${weight}`]: weight,
			})}
		>
			{children}
		</HeadingTag>
	);
};

Heading.displayName = 'Heading';
