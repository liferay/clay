/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import ClayIcon from '@clayui/icon';
import React from 'react';

import ClayButton from './Button';

interface ICommonProps
	extends Omit<
		React.ComponentProps<typeof ClayButton>,
		'aria-label' | 'aria-labelledby'
	> {
	'aria-label'?: string;

	'aria-labelledby'?: string;

	/**
	 * Path to the location of the spritemap resource.
	 */
	'spritemap'?: string;

	/**
	 * The id of the icon in the spritemap.
	 */
	'symbol': string;
}

export type Props = ICommonProps;

const ClayButtonWithIcon = React.forwardRef<HTMLButtonElement, Props>(
	({monospaced = true, spritemap, symbol, ...otherProps}: Props, ref) => (
		<ClayButton {...otherProps} monospaced={monospaced} ref={ref}>
			<ClayIcon spritemap={spritemap} symbol={symbol} />
		</ClayButton>
	)
);

ClayButtonWithIcon.displayName = 'ClayButtonWithIcon';

export default ClayButtonWithIcon;
