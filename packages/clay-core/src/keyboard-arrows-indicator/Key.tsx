/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayIcon from '@clayui/icon';
import classNames from 'classnames';
import React from 'react';

type Position = 'down' | 'left' | 'right' | 'up';

type Props = {
	active: boolean;
	position: Position;
	spritemap?: string;
};

export function Key({active, position, spritemap}: Props) {
	return (
		<span
			aria-hidden
			className={classNames(
				'clay-keyboard-arrows-indicator-key',
				`clay-keyboard-arrows-indicator-key-${position}`,
				{'clay-keyboard-arrows-indicator-key-inactive': !active}
			)}
		>
			<ClayIcon spritemap={spritemap} symbol={`arrow-key-${position}`} />
		</span>
	);
}
