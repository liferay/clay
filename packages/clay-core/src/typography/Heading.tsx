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
	 * Sets the element that will receive the highlight.
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

export const Heading = ({children, level = 1, weight = 'bold'}: Props) => (
	<h1
		className={classNames([`text-${11 - level}`], {
			[`font-weight-${weight}`]: weight,
		})}
	>
		{children}
	</h1>
);

Heading.displayName = 'Heading';
