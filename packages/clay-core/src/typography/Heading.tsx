/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
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

export function Heading({
	children,
	fontSize,
	level = 1,
	weight = 'bold',
}: Props) {
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
}

Heading.displayName = 'Heading';
