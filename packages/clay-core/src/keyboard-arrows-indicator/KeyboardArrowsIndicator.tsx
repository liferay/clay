/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import classNames from 'classnames';
import React from 'react';

import {Key} from './Key';

export type Direction = 'all' | 'horizontal' | 'vertical';

export type Placement = 'floating' | 'inline';

export type Size = 'md' | 'sm';

export type Visibility = 'always' | 'on-focus';

export type Props = {

	/**
	 * Optional `class` for the root element.
	 */
	className?: string;

	/**
	 * Which arrow keys are active for navigation. Inactive keys are rendered
	 * muted but remain visible so the inverted-T layout stays recognizable.
	 */
	direction: Direction;

	/**
	 * Localized label announced by assistive technology. Defaults to an
	 * English phrase derived from `direction`; pass an explicit string to
	 * localize (e.g. via Liferay's `Liferay.Language.get`).
	 */
	label?: string;

	/**
	 * How the indicator is positioned within its parent. `inline` (default)
	 * leaves the indicator in normal flow. `floating` pins it to the
	 * bottom-right corner of the closest positioned ancestor — useful for
	 * popup chrome (DropDown, Picker, Autocomplete) where the indicator
	 * should overlay the panel without shifting content.
	 */
	placement?: Placement;

	/**
	 * Pixel scale of the indicator. `md` (default) ≈ 64×40 px to match the
	 * source mockup; `sm` ≈ 48×30 px for tighter chrome.
	 */
	size?: Size;

	/**
	 * Path to the Clay icon spritemap. Required when the consumer cannot
	 * resolve `ClayIcon`'s default spritemap from context.
	 */
	spritemap?: string;

	/**
	 * When the indicator becomes visible. `always` (default) keeps it on
	 * screen as long as the indicator is rendered. `on-focus` hides it
	 * until the indicator's direct parent receives `:focus-within`, which
	 * keeps inline consumers (Tables, navs, pickers in their resting state)
	 * from showing the hint when the user isn't actually navigating with
	 * the keyboard.
	 */
	visibility?: Visibility;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'aria-label' | 'role'>;

const DEFAULT_LABELS: Record<Direction, string> = {
	all: 'Use arrow keys to navigate',
	horizontal: 'Use left and right arrow keys to navigate',
	vertical: 'Use up and down arrow keys to navigate',
};

export function KeyboardArrowsIndicator({
	className,
	direction,
	label,
	placement = 'inline',
	size = 'md',
	spritemap,
	visibility = 'always',
	...otherProps
}: Props) {
	const verticalActive = direction === 'all' || direction === 'vertical';
	const horizontalActive = direction === 'all' || direction === 'horizontal';

	return (
		<div
			{...otherProps}
			aria-label={label ?? DEFAULT_LABELS[direction]}
			className={classNames(
				'clay-keyboard-arrows-indicator',
				`clay-keyboard-arrows-indicator-${size}`,
				{
					'clay-keyboard-arrows-indicator-floating':
						placement === 'floating',
					'clay-keyboard-arrows-indicator-on-focus':
						visibility === 'on-focus',
				},
				className
			)}
			role="img"
		>
			<Key active={verticalActive} position="up" spritemap={spritemap} />

			<Key
				active={horizontalActive}
				position="left"
				spritemap={spritemap}
			/>

			<Key
				active={verticalActive}
				position="down"
				spritemap={spritemap}
			/>

			<Key
				active={horizontalActive}
				position="right"
				spritemap={spritemap}
			/>
		</div>
	);
}
