/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import ClayIcon from '@clayui/icon';
import React from 'react';

import ClayButton from './Button';

interface IProps extends React.ComponentProps<typeof ClayButton> {
	/**
	 * Path to the location of the spritemap resource.
	 */
	spritemap?: string;

	/**
	 * The id of the icon in the spritemap.
	 */
	symbol: string;
}

const ClayButtonWithIcon = React.forwardRef<HTMLButtonElement, IProps>(
	({spritemap, symbol, ...otherProps}: IProps, ref) => (
		<ClayButton {...otherProps} monospaced ref={ref}>
			<ClayIcon spritemap={spritemap} symbol={symbol} />
		</ClayButton>
	)
);

export default ClayButtonWithIcon;
