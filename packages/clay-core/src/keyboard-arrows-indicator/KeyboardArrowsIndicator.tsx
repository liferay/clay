/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

export type Direction = 'all' | 'horizontal' | 'vertical';

export type Props = {

	/**
	 * Optional `class` for the root element.
	 */
	className?: string;

	/**
	 * Which arrow keys are active for navigation. Selects the matching
	 * state class (`clay-keyboard-arrows-all`,
	 * `clay-keyboard-arrows-horizontal`, or `clay-keyboard-arrows-vertical`)
	 * on the wrapper, which CSS uses to mute the inactive keycap paths
	 * inside the single `arrows-all` icon.
	 */
	direction: Direction;

	/**
	 * Localized label announced by assistive technology. Defaults to an
	 * English phrase derived from `direction`; pass an explicit string to
	 * localize (e.g. via Liferay's `Liferay.Language.get`).
	 */
	label?: string;

	/**
	 * Path to the Clay icon spritemap. Optional when `ClayIconSpriteContext`
	 * is provided by an ancestor `Provider`.
	 */
	spritemap?: string;
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
	spritemap,
	...otherProps
}: Props) {
	return (
		<div
			{...otherProps}
			aria-label={label ?? DEFAULT_LABELS[direction]}
			className={classNames(
				'clay-keyboard-arrows-indicator',
				`clay-keyboard-arrows-${direction}`,
				className
			)}
			role="img"
		>
			<ClayIcon spritemap={spritemap} symbol="arrows-all" />
		</div>
	);
}
