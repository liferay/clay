/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {ElementType} from 'react';

export type TextSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

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

type Props = {
	/**
	 * State indicates whether the component will be exposed to an
	 * accessibility API.
	 */
	'aria-hidden'?: boolean;

	/**
	 * Determine the way in which a text is displayed.
	 */
	as?: 'p' | 'span';

	/**
	 * Text content.
	 */
	children?: React.ReactNode;

	/**
	 * Determine the color text.
	 */
	color?: ColorType;

	/**
	 * The id global attribute defines an identifier (ID) which must be unique
	 * in the whole document.
	 */
	id?: string;

	/**
	 * Set the text in italic style.
	 */
	italic?: boolean;

	/**
	 * Set the text in monospace style.
	 */
	monospace?: boolean;

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
};

export const Text = ({
	'aria-hidden': ariaHidden,
	as = 'span',
	children,
	color,
	id,
	italic,
	monospace,
	size = 4,
	truncate,
	weight,
}: Props) => {
	const TextTag = as as ElementType;

	return (
		<TextTag
			aria-hidden={ariaHidden}
			className={classNames([`text-${size}`], {
				[`text-${color}`]: color,
				['font-italic']: italic,
				['text-monospace']: monospace,
				['text-truncate']: truncate,
				[`font-weight-${weight}`]: weight,
			})}
			id={id}
		>
			{children}
		</TextTag>
	);
};

Text.displayName = 'Text';
