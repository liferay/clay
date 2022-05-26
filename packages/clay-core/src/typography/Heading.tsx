/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

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
	 * Number to set the heading level.
	 */
	level?: HeadingLevel;

	/**
	 * Determines the weight of the font.
	 */
	weight?: WeightFont;
};

export const Heading = ({children, level = 1, weight = 'bold'}: Props) => {
	const HeadingTag = `h${level}` as React.ElementType;

	return (
		<HeadingTag
			className={classNames([`text-${11 - level}`], {
				[`font-weight-${weight}`]: weight,
			})}
		>
			{children}
		</HeadingTag>
	);
};

Heading.displayName = 'Heading';
